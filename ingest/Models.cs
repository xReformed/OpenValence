namespace Ingest;

/// <summary>One source file: its front matter plus its body text.</summary>
public sealed record SourceDocument(
    string Title,
    string Book,
    string Chapter,
    string SourceUrl,
    string Author,
    string License,
    string Body);

/// <summary>
/// One retrievable piece of a document. <see cref="EmbeddedText"/> is what
/// actually gets embedded — it carries the heading path so the vector knows
/// what topic the text belongs to. <see cref="Content"/> is what gets shown
/// to the reader as a citation.
/// </summary>
public sealed record Chunk
{
    public required string Id { get; init; }
    public required int Index { get; init; }
    public required string HeadingPath { get; init; }
    public required string Content { get; init; }
    public required string SourceTitle { get; init; }
    public required string SourceUrl { get; init; }
    public required string License { get; init; }

    public string EmbeddedText => $"{HeadingPath}\n\n{Content}";

    /// <summary>Rough token count: ~4 characters per token. Good enough for
    /// sizing chunks; swap in a real tokenizer if you ever need precision.</summary>
    public int ApproxTokens => Content.Length / 4;

    /// <summary>Filled in by the embed step; null after chunking alone.</summary>
    public float[]? Embedding { get; set; }
}
