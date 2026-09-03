using System.Net.Http.Json;
using System.Text.Json.Serialization;

namespace Ingest;

/// <summary>
/// Calls an OpenAI-compatible /v1/embeddings endpoint.
///
/// Note: Anthropic has no embeddings API, so even if Claude writes your
/// answers you need a separate provider for this step. OpenAI's
/// text-embedding-3-small is the cheap default; Voyage also works — set
/// EMBEDDING_BASE_URL and EMBEDDING_MODEL to switch.
///
/// Whatever you pick, the SAME model must embed your chunks and your
/// questions. Mixing models does not error; it silently returns nonsense.
/// </summary>
public sealed class EmbeddingClient : IDisposable
{
    private const int BatchSize = 100;

    private readonly HttpClient _http = new();
    private readonly string _model;

    public EmbeddingClient()
    {
        var apiKey =
            Environment.GetEnvironmentVariable("EMBEDDING_API_KEY")
            ?? Environment.GetEnvironmentVariable("OPENAI_API_KEY")
            ?? throw new InvalidOperationException(
                "No API key. Set EMBEDDING_API_KEY (or OPENAI_API_KEY) and re-run. "
                + "The 'chunk' command needs no key, so use that to check chunking first.");

        var baseUrl = Environment.GetEnvironmentVariable("EMBEDDING_BASE_URL")
            ?? "https://api.openai.com/v1";
        _model = Environment.GetEnvironmentVariable("EMBEDDING_MODEL")
            ?? "text-embedding-3-small";

        _http.BaseAddress = new Uri(baseUrl.TrimEnd('/') + "/");
        _http.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        _http.Timeout = TimeSpan.FromMinutes(2);
    }

    public string Model => _model;

    public async Task<float[]> EmbedOneAsync(string text)
    {
        var vectors = await EmbedAsync([text]);
        return vectors[0];
    }

    public async Task<List<float[]>> EmbedAsync(IReadOnlyList<string> texts)
    {
        var results = new List<float[]>(texts.Count);

        for (var offset = 0; offset < texts.Count; offset += BatchSize)
        {
            var batch = texts.Skip(offset).Take(BatchSize).ToArray();
            Console.WriteLine($"  embedding {offset + 1}-{offset + batch.Length} of {texts.Count}...");

            var response = await _http.PostAsJsonAsync(
                "embeddings", new EmbeddingRequest(_model, batch));

            if (!response.IsSuccessStatusCode)
            {
                var body = await response.Content.ReadAsStringAsync();
                throw new InvalidOperationException(
                    $"Embedding request failed ({(int)response.StatusCode}): {body}");
            }

            var payload = await response.Content.ReadFromJsonAsync<EmbeddingResponse>()
                ?? throw new InvalidOperationException("Empty embedding response.");

            results.AddRange(payload.Data.OrderBy(d => d.Index).Select(d => d.Embedding));
        }

        return results;
    }

    public void Dispose() => _http.Dispose();

    private sealed record EmbeddingRequest(
        [property: JsonPropertyName("model")] string Model,
        [property: JsonPropertyName("input")] string[] Input);

    private sealed record EmbeddingResponse(
        [property: JsonPropertyName("data")] List<EmbeddingDatum> Data);

    private sealed record EmbeddingDatum(
        [property: JsonPropertyName("index")] int Index,
        [property: JsonPropertyName("embedding")] float[] Embedding);
}
