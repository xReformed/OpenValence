using Core;

namespace Ingest;

/// <summary>
/// Two implementations: Postgres + pgvector when a database URL is set (Neon,
/// or a local container), otherwise database/index.json, so the project still
/// runs with no database to stand up.
/// </summary>
public interface IChunkStore : IAsyncDisposable
{
    /// <summary>For log lines: where the index is, never a password.</summary>
    string Description { get; }

    /// <summary>Replaces the whole index with these chunks.</summary>
    Task SaveAsync(string embeddingModel, IReadOnlyList<Chunk> chunks);

    /// <summary>The model the index was built with, or null if it is empty.</summary>
    Task<string?> EmbeddingModelAsync();

    /// <summary>The closest chunks by cosine similarity, highest first.</summary>
    Task<List<(Chunk Chunk, float Score)>> SearchAsync(float[] queryEmbedding, int topK);
}

public static class ChunkStore
{
    public const string JsonPath = "database/index.json";

    /// <summary>The direct connection suits a batch tool that rebuilds a table.</summary>
    public static IChunkStore FromEnvironment()
    {
        var connection = Database.FromEnvironment("DATABASE_URL_UNPOOLED", "DATABASE_URL");
        return connection is null ? new JsonChunkStore(JsonPath) : new PostgresChunkStore(connection);
    }
}
