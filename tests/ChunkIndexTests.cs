using Ingest;

namespace Tests;

public sealed class ChunkIndexTests
{
    [Fact]
    public void Scores_direction_not_length()
    {
        Assert.Equal(1f, ChunkIndex.CosineSimilarity([1, 2, 3], [2, 4, 6]), 5);
        Assert.Equal(0f, ChunkIndex.CosineSimilarity([1, 0], [0, 5]), 5);
        Assert.Equal(-1f, ChunkIndex.CosineSimilarity([1, 1], [-3, -3]), 5);
        Assert.Equal(0f, ChunkIndex.CosineSimilarity([0, 0], [1, 1]));
    }

    [Fact]
    public void Refuses_vectors_from_different_models()
    {
        var error = Assert.Throws<ArgumentException>(() => ChunkIndex.CosineSimilarity([1, 2], [1, 2, 3]));

        Assert.Contains("different embedding models", error.Message);
    }

    [Fact]
    public void Returns_the_closest_chunks_first()
    {
        var index = new ChunkIndex("test-model",
        [
            Chunk("far", [0, 1]),
            Chunk("close", [1, 0.1f]),
            Chunk("closest", [1, 0]),
            Chunk("not embedded", null),
        ]);

        var results = index.Search([1, 0], topK: 2);

        Assert.Equal(["closest", "close"], results.Select(result => result.Chunk.Id));
    }

    private static Chunk Chunk(string id, float[]? embedding) => new()
    {
        Id = id,
        Index = 0,
        HeadingPath = "",
        Content = id,
        SourceTitle = "",
        SourceUrl = "",
        License = "",
        Embedding = embedding,
    };
}
