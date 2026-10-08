using Core;
using Npgsql;
using NpgsqlTypes;
using Pgvector;
using Pgvector.Npgsql;

namespace Ingest;

/// <summary>
/// The index in Postgres with pgvector: one row per chunk, searched by cosine
/// distance (the &lt;=&gt; operator). 'embed' rebuilds the table inside one
/// transaction, so a search never sees half an index.
///
/// Search is exact, with no vector index: at a few thousand chunks a full scan
/// takes milliseconds and never misses, which keeps retrieval evals honest.
/// An HNSW index (USING hnsw (embedding vector_cosine_ops)) is faster but
/// approximate; add one when the corpus reaches tens of thousands of chunks.
/// </summary>
public sealed class PostgresChunkStore : IChunkStore
{
    private readonly NpgsqlDataSource _dataSource;

    public PostgresChunkStore(string connectionString)
    {
        Description = Database.Describe(connectionString);

        var builder = new NpgsqlDataSourceBuilder(connectionString);
        builder.UseVector();
        _dataSource = builder.Build();
    }

    public string Description { get; }

    public async Task SaveAsync(string embeddingModel, IReadOnlyList<Chunk> chunks)
    {
        var dimensions = chunks[0].Embedding!.Length;

        await using var connection = await _dataSource.OpenConnectionAsync();

        // The extension has to exist before Npgsql can send vector values,
        // so create it first and make the connection learn the new type.
        await using (var command = new NpgsqlCommand("CREATE EXTENSION IF NOT EXISTS vector", connection))
        {
            await command.ExecuteNonQueryAsync();
        }
        await connection.ReloadTypesAsync();

        await using var transaction = await connection.BeginTransactionAsync();

        await using (var command = new NpgsqlCommand($"""
            DROP TABLE IF EXISTS chunks;
            CREATE TABLE chunks (
                id              text PRIMARY KEY,
                chunk_index     integer NOT NULL,
                heading_path    text NOT NULL,
                content         text NOT NULL,
                source_title    text NOT NULL,
                source_url      text NOT NULL,
                license         text NOT NULL,
                embedding_model text NOT NULL,
                embedding       vector({dimensions}) NOT NULL
            );
            """, connection, transaction))
        {
            await command.ExecuteNonQueryAsync();
        }

        await using (var writer = await connection.BeginBinaryImportAsync("""
            COPY chunks (id, chunk_index, heading_path, content, source_title,
                         source_url, license, embedding_model, embedding)
            FROM STDIN (FORMAT BINARY)
            """))
        {
            foreach (var chunk in chunks)
            {
                await writer.StartRowAsync();
                await writer.WriteAsync(chunk.Id, NpgsqlDbType.Text);
                await writer.WriteAsync(chunk.Index, NpgsqlDbType.Integer);
                await writer.WriteAsync(chunk.HeadingPath, NpgsqlDbType.Text);
                await writer.WriteAsync(chunk.Content, NpgsqlDbType.Text);
                await writer.WriteAsync(chunk.SourceTitle, NpgsqlDbType.Text);
                await writer.WriteAsync(chunk.SourceUrl, NpgsqlDbType.Text);
                await writer.WriteAsync(chunk.License, NpgsqlDbType.Text);
                await writer.WriteAsync(embeddingModel, NpgsqlDbType.Text);
                await writer.WriteAsync(new Vector(chunk.Embedding!));
            }
            await writer.CompleteAsync();
        }

        await transaction.CommitAsync();
    }

    public async Task<string?> EmbeddingModelAsync()
    {
        await using var command = _dataSource.CreateCommand("SELECT embedding_model FROM chunks LIMIT 1");
        try
        {
            return (string?)await command.ExecuteScalarAsync();
        }
        catch (PostgresException error) when (error.SqlState == PostgresErrorCodes.UndefinedTable)
        {
            throw new InvalidOperationException(
                $"No chunks table in {Description}. Run the 'embed' command first.");
        }
    }

    public async Task<List<(Chunk Chunk, float Score)>> SearchAsync(float[] queryEmbedding, int topK)
    {
        await using var command = _dataSource.CreateCommand("""
            SELECT id, chunk_index, heading_path, content, source_title, source_url, license,
                   1 - (embedding <=> $1) AS score
            FROM chunks
            ORDER BY embedding <=> $1
            LIMIT $2
            """);
        command.Parameters.Add(new NpgsqlParameter { Value = new Vector(queryEmbedding) });
        command.Parameters.Add(new NpgsqlParameter { Value = topK });

        var results = new List<(Chunk, float)>();
        await using var reader = await command.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            var chunk = new Chunk
            {
                Id = reader.GetString(0),
                Index = reader.GetInt32(1),
                HeadingPath = reader.GetString(2),
                Content = reader.GetString(3),
                SourceTitle = reader.GetString(4),
                SourceUrl = reader.GetString(5),
                License = reader.GetString(6),
            };
            results.Add((chunk, (float)reader.GetDouble(7)));
        }
        return results;
    }

    public ValueTask DisposeAsync() => _dataSource.DisposeAsync();
}
