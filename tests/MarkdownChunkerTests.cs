using Ingest;

namespace Tests;

public sealed class MarkdownChunkerTests
{
    private const string Section = """
        ---
        title: "1.2: Basic Definitions"
        book: "Beginning Chemistry"
        chapter: "1: What Is Chemistry?"
        source_url: "https://example.org/1.2"
        license: "CC BY-NC-SA 3.0"
        ---

        <!-- transcription note -->
        All [matter](https://example.org/glossary) takes up space (Figure 1.2.1).

        ## Physical Properties

        Color and texture are physical properties.
        """;

    [Fact]
    public void Reads_the_front_matter_and_cleans_the_body()
    {
        var document = MarkdownChunker.ParseDocument(Section.ReplaceLineEndings("\r\n"));

        Assert.Equal("1.2: Basic Definitions", document.Title);
        Assert.Equal("Beginning Chemistry", document.Book);
        Assert.Equal("1: What Is Chemistry?", document.Chapter);
        Assert.Equal("https://example.org/1.2", document.SourceUrl);
        Assert.Equal("CC BY-NC-SA 3.0", document.License);
        Assert.StartsWith("All matter takes up space.", document.Body);
        Assert.DoesNotContain("<!--", document.Body);
        Assert.DoesNotContain("\r", document.Body);
    }

    [Fact]
    public void Gives_each_chunk_its_heading_path_and_a_numbered_id()
    {
        var chunks = MarkdownChunker.Chunk(MarkdownChunker.ParseDocument(Section), "introductory/01-2");

        Assert.Equal(["introductory/01-2#0", "introductory/01-2#1"], chunks.Select(chunk => chunk.Id));
        Assert.Equal("Beginning Chemistry > 1: What Is Chemistry? > 1.2: Basic Definitions", chunks[0].HeadingPath);
        Assert.EndsWith("> Physical Properties", chunks[1].HeadingPath);
        Assert.Equal("Color and texture are physical properties.", chunks[1].Content);
        Assert.StartsWith(chunks[1].HeadingPath, chunks[1].EmbeddedText);
    }

    [Fact]
    public void Splits_a_long_section_and_repeats_an_oversized_tables_header()
    {
        var paragraphs = string.Join("\n\n", Enumerable.Range(1, 12).Select(i => $"Paragraph {i}. " + new string('x', 600)));
        var rows = string.Join("\n", Enumerable.Range(1, 80).Select(i => $"| element {i} | {new string('y', 40)} |"));
        var document = MarkdownChunker.ParseDocument($"{paragraphs}\n\n| Name | Note |\n|---|---|\n{rows}");

        var chunks = MarkdownChunker.Chunk(document, "doc");
        var tables = chunks.Where(chunk => chunk.Content.StartsWith('|')).ToList();

        Assert.True(chunks.Count - tables.Count > 1, "the paragraphs should span several chunks");
        Assert.True(tables.Count > 1, "the table should be split");
        Assert.All(tables, table => Assert.StartsWith("| Name | Note |\n|---|---|\n", table.Content));
        Assert.All(chunks, chunk => Assert.True(chunk.Content.Length / 4 <= 800, $"{chunk.Id} is over the ceiling"));
    }

    [Fact]
    public void Chunks_the_whole_corpus_without_empty_or_duplicate_chunks()
    {
        var sources = Path.Combine(Repo.Root, "sources");
        var files = Directory.EnumerateFiles(sources, "*.md", SearchOption.AllDirectories).ToList();
        var chunks = files.SelectMany(file =>
            MarkdownChunker.Chunk(MarkdownChunker.ParseDocument(File.ReadAllText(file)), Path.GetRelativePath(sources, file))).ToList();

        Assert.NotEmpty(files);
        Assert.All(chunks, chunk => Assert.False(string.IsNullOrWhiteSpace(chunk.Content), chunk.Id));
        Assert.Equal(chunks.Count, chunks.Select(chunk => chunk.Id).Distinct().Count());
    }
}
