using System.Text;
using System.Text.RegularExpressions;

namespace Ingest;

/// <summary>
/// Turns a markdown source file into chunks. Two stages, because splitting on
/// headings alone is not enough: a section like "1.1 Chemistry in Context" has
/// no sub-headings at all, so it would come out as one oversized chunk.
///
///   1. Split on "##" headings.
///   2. Within each section, group paragraphs until the size target is reached.
/// </summary>
public static partial class MarkdownChunker
{
    /// Aim for chunks in this range. Below the floor a chunk carries too little
    /// context to stand alone; above the ceiling it wastes prompt space.
    private const int TargetTokens = 500;
    private const int MaxTokens = 800;

    [GeneratedRegex(@"^---\s*$\r?\n(.*?)^---\s*$\r?\n", RegexOptions.Singleline | RegexOptions.Multiline)]
    private static partial Regex FrontMatterPattern();

    [GeneratedRegex(@"<!--.*?-->", RegexOptions.Singleline)]
    private static partial Regex HtmlCommentPattern();

    /// Glossary auto-links: "[matter](https://...)" -> "matter"
    [GeneratedRegex(@"\[([^\]]+)\]\([^)]*\)")]
    private static partial Regex MarkdownLinkPattern();

    /// "(Figure 1.1.1)" — a pointer to an image that was never ingested.
    [GeneratedRegex(@"\s*\((?:Figure|Table)\s+[\d.]+\)")]
    private static partial Regex FigureReferencePattern();

    /// A sentence end followed by whitespace. Used to break up an oversized
    /// block that has no paragraph breaks of its own to split on — in this
    /// corpus, a figure description written as one unbroken line.
    [GeneratedRegex(@"(?<=[.!?])\s+")]
    private static partial Regex SentenceBreakPattern();

    /// Fallback boundary for a single sentence that is itself over the ceiling —
    /// these descriptions sometimes read out an entire table in one breath.
    [GeneratedRegex(@"(?<=[;:,])\s+")]
    private static partial Regex ClauseBreakPattern();

    public static SourceDocument ParseDocument(string markdown)
    {
        // Normalize first: the corpus is a mix of LF and CRLF files, and the
        // paragraph split below looks for "\n\n", which never matches CRLF.
        markdown = markdown.Replace("\r\n", "\n");

        var frontMatter = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        var body = markdown;

        var match = FrontMatterPattern().Match(markdown);
        if (match.Success)
        {
            foreach (var line in match.Groups[1].Value.Split('\n'))
            {
                var separator = line.IndexOf(':');
                if (separator <= 0) continue;
                var key = line[..separator].Trim();
                var value = line[(separator + 1)..].Trim().Trim('"');
                frontMatter[key] = value;
            }
            body = markdown[match.Length..];
        }

        body = HtmlCommentPattern().Replace(body, string.Empty);
        body = MarkdownLinkPattern().Replace(body, "$1");
        body = FigureReferencePattern().Replace(body, string.Empty);

        return new SourceDocument(
            Title: Get(frontMatter, "title", "Untitled"),
            Book: Get(frontMatter, "book", ""),
            Chapter: Get(frontMatter, "chapter", ""),
            SourceUrl: Get(frontMatter, "source_url", ""),
            Author: Get(frontMatter, "author", ""),
            License: Get(frontMatter, "license", "unknown"),
            Body: body.Trim());
    }

    private static string Get(Dictionary<string, string> map, string key, string fallback) =>
        map.TryGetValue(key, out var value) && value.Length > 0 ? value : fallback;

    public static List<Chunk> Chunk(SourceDocument document, string documentId)
    {
        var basePath = string.Join(" > ",
            new[] { document.Book, document.Chapter, document.Title }
                .Where(part => part.Length > 0));

        var chunks = new List<Chunk>();

        foreach (var (subHeading, sectionBody) in SplitOnHeadings(document.Body))
        {
            var headingPath = subHeading.Length > 0 ? $"{basePath} > {subHeading}" : basePath;

            foreach (var content in GroupBlocks(sectionBody))
            {
                chunks.Add(new Chunk
                {
                    Id = $"{documentId}#{chunks.Count}",
                    Index = chunks.Count,
                    HeadingPath = headingPath,
                    Content = content,
                    SourceTitle = document.Title,
                    SourceUrl = document.SourceUrl,
                    License = document.License,
                });
            }
        }

        return chunks;
    }

    /// <summary>Stage one: "## Heading" starts a new section.</summary>
    private static List<(string Heading, string Body)> SplitOnHeadings(string body)
    {
        var sections = new List<(string, string)>();
        var heading = string.Empty;
        var buffer = new StringBuilder();

        foreach (var line in body.Split('\n'))
        {
            if (line.StartsWith("##"))
            {
                if (buffer.Length > 0) sections.Add((heading, buffer.ToString()));
                heading = line.TrimStart('#').Trim();
                buffer.Clear();
                continue;
            }
            // Not AppendLine: on Windows that writes CRLF, and the paragraph
            // split below looks for "\n\n".
            buffer.Append(line).Append('\n');
        }

        if (buffer.Length > 0) sections.Add((heading, buffer.ToString()));
        return sections;
    }

    /// <summary>
    /// Stage two: group blank-line-separated blocks up to the size target.
    /// Tables stay whole even when that overshoots — half a table with no
    /// header row is unusable as context.
    /// </summary>
    private static List<string> GroupBlocks(string sectionBody)
    {
        var blocks = sectionBody
            .Split("\n\n", StringSplitOptions.RemoveEmptyEntries)
            .Select(block => block.Trim())
            .Where(block => block.Length > 0)
            .ToList();

        var grouped = new List<string>();
        var current = new List<string>();
        var currentTokens = 0;

        void Flush()
        {
            if (current.Count == 0) return;
            grouped.Add(string.Join("\n\n", current));
            current.Clear();
            currentTokens = 0;
        }

        foreach (var block in blocks)
        {
            var tokens = EstimateTokens(block);
            var isTable = block.StartsWith('|');

            // A table, or an already-oversized block, becomes its own chunk —
            // or several, when it is too big to stand as one.
            if (isTable || tokens >= MaxTokens)
            {
                Flush();
                if (tokens >= MaxTokens) grouped.AddRange(SplitOversized(block));
                else grouped.Add(block);
                continue;
            }

            if (currentTokens + tokens > MaxTokens && currentTokens > 0) Flush();

            current.Add(block);
            currentTokens += tokens;

            if (currentTokens >= TargetTokens) Flush();
        }

        Flush();
        return grouped;
    }

    private static int EstimateTokens(string text) => text.Length / 4;

    /// <summary>
    /// Break up a block that is over the ceiling on its own. Tables split on
    /// row boundaries; anything else splits on sentence boundaries. Either way
    /// the block's first line — a table's header, a figure's caption — is
    /// repeated at the top of every piece, so no fragment is left without a
    /// statement of what it is describing.
    /// </summary>
    private static IEnumerable<string> SplitOversized(string block)
    {
        var lines = block.Split('\n');
        var isTable = block.StartsWith('|');

        // Markdown tables carry a "| --- |" separator under the header row.
        var headerCount = isTable && lines.Length > 1 && lines[1].TrimStart().StartsWith("|-") ? 2 : 1;

        // A single unbroken line has no header to repeat; split it as it is.
        if (lines.Length <= headerCount) headerCount = 0;

        var header = string.Join("\n", lines.Take(headerCount));
        var rest = string.Join("\n", lines.Skip(headerCount));

        // Leave room for the repeated header in every piece.
        var budget = Math.Max(TargetTokens - EstimateTokens(header), 100);

        var parts = isTable
            ? rest.Split('\n', StringSplitOptions.RemoveEmptyEntries)
            : Fragment(rest, budget).ToArray();

        var piece = new List<string>();
        var pieceTokens = 0;

        foreach (var part in parts)
        {
            var tokens = EstimateTokens(part);
            if (pieceTokens > 0 && pieceTokens + tokens > budget)
            {
                yield return Rejoin(header, piece, isTable);
                piece.Clear();
                pieceTokens = 0;
            }
            piece.Add(part);
            pieceTokens += tokens;
        }

        if (piece.Count > 0) yield return Rejoin(header, piece, isTable);
    }

    /// <summary>
    /// Cut text into fragments no larger than the budget, preferring the
    /// cleanest boundary available: sentence, then clause, then word.
    /// </summary>
    private static IEnumerable<string> Fragment(string text, int budget)
    {
        foreach (var sentence in SentenceBreakPattern().Split(text))
        {
            if (EstimateTokens(sentence) <= budget) { yield return sentence; continue; }

            foreach (var clause in ClauseBreakPattern().Split(sentence))
            {
                if (EstimateTokens(clause) <= budget) { yield return clause; continue; }

                var buffer = new List<string>();
                var bufferTokens = 0;
                foreach (var word in clause.Split(' ', StringSplitOptions.RemoveEmptyEntries))
                {
                    var tokens = EstimateTokens(word) + 1;
                    if (bufferTokens > 0 && bufferTokens + tokens > budget)
                    {
                        yield return string.Join(' ', buffer);
                        buffer.Clear();
                        bufferTokens = 0;
                    }
                    buffer.Add(word);
                    bufferTokens += tokens;
                }
                if (buffer.Count > 0) yield return string.Join(' ', buffer);
            }
        }
    }

    private static string Rejoin(string header, List<string> parts, bool isTable)
    {
        var body = string.Join(isTable ? "\n" : " ", parts);
        return header.Length > 0 ? $"{header}\n{body}" : body;
    }
}
