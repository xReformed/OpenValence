using Npgsql;
using NpgsqlTypes;

namespace Core;

/// <summary>
/// The questions table. The import rebuilds it from questions/ (the files are
/// the source of truth, so a question deleted from its file is deleted here
/// too); the API reads it one section at a time.
/// </summary>
public sealed class QuestionStore(NpgsqlDataSource dataSource)
{
    private const string CreateTable = """
        CREATE TABLE IF NOT EXISTS questions (
            id          text PRIMARY KEY,
            book        text NOT NULL,
            section     text NOT NULL,
            position    integer NOT NULL,
            type        text NOT NULL CHECK (type IN ('multiple-choice', 'numeric')),
            prompt      text NOT NULL,
            explanation text NOT NULL,
            body        jsonb NOT NULL,
            UNIQUE (book, section, position)
        )
        """;

    /// <summary>Replaces every question with these, in one transaction.</summary>
    public async Task ReplaceAllAsync(IReadOnlyList<StoredQuestion> questions)
    {
        await using var connection = await dataSource.OpenConnectionAsync();
        await using var transaction = await connection.BeginTransactionAsync();

        await using (var command = new NpgsqlCommand($"{CreateTable};\nDELETE FROM questions;", connection, transaction))
        {
            await command.ExecuteNonQueryAsync();
        }

        await using (var writer = await connection.BeginBinaryImportAsync("""
            COPY questions (id, book, section, position, type, prompt, explanation, body)
            FROM STDIN (FORMAT BINARY)
            """))
        {
            foreach (var question in questions)
            {
                await writer.StartRowAsync();
                await writer.WriteAsync(question.Id, NpgsqlDbType.Text);
                await writer.WriteAsync(question.Book, NpgsqlDbType.Text);
                await writer.WriteAsync(question.Section, NpgsqlDbType.Text);
                await writer.WriteAsync(question.Position, NpgsqlDbType.Integer);
                await writer.WriteAsync(question.Type, NpgsqlDbType.Text);
                await writer.WriteAsync(question.Prompt, NpgsqlDbType.Text);
                await writer.WriteAsync(question.Explanation, NpgsqlDbType.Text);
                await writer.WriteAsync(question.BodyJson, NpgsqlDbType.Jsonb);
            }
            await writer.CompleteAsync();
        }

        await transaction.CommitAsync();
    }

    /// <summary>
    /// One section's questions in order, as a JSON array in the web app's
    /// Question shape: the common columns merged with the stored body.
    /// </summary>
    public async Task<string> SectionJsonAsync(string book, string section)
    {
        await using var command = dataSource.CreateCommand("""
            SELECT coalesce(jsonb_agg(
                       jsonb_build_object('id', id, 'type', type, 'prompt', prompt, 'explanation', explanation)
                       || body ORDER BY position),
                   '[]'::jsonb)::text
            FROM questions
            WHERE book = $1 AND section = $2
            """);
        command.Parameters.Add(new NpgsqlParameter { Value = book });
        command.Parameters.Add(new NpgsqlParameter { Value = section });

        try
        {
            return (string)(await command.ExecuteScalarAsync())!;
        }
        catch (PostgresException error) when (error.SqlState == PostgresErrorCodes.UndefinedTable)
        {
            throw new InvalidOperationException(
                "No questions table yet. Import them: dotnet run --project ingest -- questions");
        }
    }
}
