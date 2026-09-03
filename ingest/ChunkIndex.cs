using System.Text.Json;

namespace Ingest;

/// <summary>
/// The whole "vector store", for now: a JSON file plus a brute-force scan.
/// At a few thousand chunks that scan takes milliseconds, so there is nothing
/// to optimise yet — this gets replaced by Postgres + pgvector later, and only
/// this file changes.
/// </summary>
public sealed record ChunkIndex(string EmbeddingModel, List<Chunk> Chunks)
{
    private static readonly JsonSerializerOptions Options = new() { WriteIndented = true };

    public static void Save(string path, ChunkIndex index)
    {
        var directory = Path.GetDirectoryName(path);
        if (!string.IsNullOrEmpty(directory)) Directory.CreateDirectory(directory);
        File.WriteAllText(path, JsonSerializer.Serialize(index, Options));
    }

    public static ChunkIndex Load(string path)
    {
        if (!File.Exists(path))
        {
            throw new FileNotFoundException(
                $"No index at {path}. Run the 'embed' command first.");
        }
        return JsonSerializer.Deserialize<ChunkIndex>(File.ReadAllText(path))
            ?? throw new InvalidOperationException($"Could not read index at {path}.");
    }

    /// <summary>
    /// Cosine similarity: the dot product divided by both magnitudes. Most
    /// providers return unit-length vectors, which makes the division a no-op —
    /// but dividing anyway costs nothing and keeps this correct for any provider.
    /// Result runs -1 to 1; higher is more similar.
    /// </summary>
    public static float CosineSimilarity(float[] a, float[] b)
    {
        if (a.Length != b.Length)
        {
            throw new ArgumentException(
                $"Vector length mismatch ({a.Length} vs {b.Length}). "
                + "This usually means the index and the query used different embedding models.");
        }

        float dot = 0, magnitudeA = 0, magnitudeB = 0;
        for (var i = 0; i < a.Length; i++)
        {
            dot += a[i] * b[i];
            magnitudeA += a[i] * a[i];
            magnitudeB += b[i] * b[i];
        }

        var denominator = MathF.Sqrt(magnitudeA) * MathF.Sqrt(magnitudeB);
        return denominator == 0 ? 0 : dot / denominator;
    }

    public List<(Chunk Chunk, float Score)> Search(float[] queryEmbedding, int topK)
    {
        return Chunks
            .Where(chunk => chunk.Embedding is not null)
            .Select(chunk => (Chunk: chunk, Score: CosineSimilarity(queryEmbedding, chunk.Embedding!)))
            .OrderByDescending(result => result.Score)
            .Take(topK)
            .ToList();
    }
}
