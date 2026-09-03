using Ingest;

// Offline corpus ingestion. Three commands, in the order you use them:
//
//   chunk  <path>       print the chunks — no API key needed
//   embed  <path>       chunk, embed, write index.json
//   search "question"   embed the question, print the top 5
//
// Run 'chunk' until the output looks right, then 'embed', then 'search'.

const string DefaultSources = "sources";
const string DefaultIndex = "database/index.json";

var command = args.Length > 0 ? args[0].ToLowerInvariant() : "help";

try
{
    return command switch
    {
        "chunk" => RunChunk(args.ElementAtOrDefault(1) ?? DefaultSources),
        "embed" => await RunEmbedAsync(args.ElementAtOrDefault(1) ?? DefaultSources),
        "search" => await RunSearchAsync(args.ElementAtOrDefault(1)),
        _ => Help(),
    };
}
catch (Exception error)
{
    Console.Error.WriteLine($"\n{error.Message}");
    return 1;
}

static int Help()
{
    Console.WriteLine("""
        Usage:
          dotnet run --project ingest -- chunk  [sources-path]
          dotnet run --project ingest -- embed  [sources-path]
          dotnet run --project ingest -- search "your question"

        'chunk' needs no API key. 'embed' and 'search' need EMBEDDING_API_KEY.
        """);
    return 0;
}

static List<Chunk> BuildChunks(string sourcesPath)
{
    var files = Directory
        .EnumerateFiles(sourcesPath, "*.md", SearchOption.AllDirectories)
        .Where(path => !path.Contains($"{Path.DirectorySeparatorChar}raw{Path.DirectorySeparatorChar}"))
        .Where(path => !Path.GetFileName(path).Equals("ATTRIBUTION.md", StringComparison.OrdinalIgnoreCase))
        .OrderBy(path => path)
        .ToList();

    if (files.Count == 0)
    {
        throw new InvalidOperationException($"No .md files found under {sourcesPath}.");
    }

    var all = new List<Chunk>();
    foreach (var file in files)
    {
        var document = MarkdownChunker.ParseDocument(File.ReadAllText(file));
        var documentId = Path.GetFileNameWithoutExtension(file);
        var chunks = MarkdownChunker.Chunk(document, documentId);

        Console.WriteLine($"{file}  ->  {chunks.Count} chunk(s)");
        all.AddRange(chunks);
    }

    return all;
}

static int RunChunk(string sourcesPath)
{
    var chunks = BuildChunks(sourcesPath);

    foreach (var chunk in chunks)
    {
        Console.WriteLine();
        Console.WriteLine(new string('-', 72));
        Console.WriteLine($"[{chunk.Index}] {chunk.HeadingPath}");
        Console.WriteLine($"~{chunk.ApproxTokens} tokens");
        Console.WriteLine();
        Console.WriteLine(chunk.Content);
    }

    Console.WriteLine();
    Console.WriteLine(new string('=', 72));
    Console.WriteLine($"{chunks.Count} chunk(s), ~{chunks.Sum(c => c.ApproxTokens)} tokens total.");

    // What matters is distinct topics, not raw chunk count: with only a couple
    // of chunks every question returns everything and search looks perfect.
    // A well-sized section is roughly one chunk, so a full chapter is plenty.
    if (chunks.Count < 8)
    {
        Console.WriteLine();
        Console.WriteLine($"Only {chunks.Count} chunk(s) — too few to judge retrieval, since every");
        Console.WriteLine("question will return nearly everything. Add the rest of the chapter");
        Console.WriteLine("(one file per section) and re-run.");
    }

    return 0;
}

static async Task<int> RunEmbedAsync(string sourcesPath)
{
    var chunks = BuildChunks(sourcesPath);

    using var client = new EmbeddingClient();
    Console.WriteLine($"\nEmbedding {chunks.Count} chunk(s) with {client.Model}...");

    var vectors = await client.EmbedAsync(chunks.Select(c => c.EmbeddedText).ToList());
    for (var i = 0; i < chunks.Count; i++) chunks[i].Embedding = vectors[i];

    ChunkIndex.Save(DefaultIndex, new ChunkIndex(client.Model, chunks));
    Console.WriteLine($"\nWrote {DefaultIndex} ({chunks.Count} chunks, {vectors[0].Length} dimensions).");
    return 0;
}

static async Task<int> RunSearchAsync(string? question)
{
    if (string.IsNullOrWhiteSpace(question))
    {
        Console.Error.WriteLine("Give me a question: search \"is love matter?\"");
        return 1;
    }

    var index = ChunkIndex.Load(DefaultIndex);

    using var client = new EmbeddingClient();
    if (client.Model != index.EmbeddingModel)
    {
        Console.WriteLine(
            $"WARNING: index was built with {index.EmbeddingModel}, you are querying "
            + $"with {client.Model}. Results will be meaningless. Re-run 'embed'.\n");
    }

    var queryEmbedding = await client.EmbedOneAsync(question);
    var results = index.Search(queryEmbedding, topK: 5);

    Console.WriteLine($"\nQuestion: {question}\n");

    var rank = 1;
    foreach (var (chunk, score) in results)
    {
        Console.WriteLine(new string('-', 72));
        Console.WriteLine($"#{rank++}  score {score:F4}  |  {chunk.HeadingPath}");
        Console.WriteLine();
        Console.WriteLine(chunk.Content);
        Console.WriteLine();
    }

    Console.WriteLine(new string('=', 72));
    Console.WriteLine("Read these. Could you answer the question from them alone?");
    Console.WriteLine("If not, fix chunking before wiring this into a prompt.");
    return 0;
}
