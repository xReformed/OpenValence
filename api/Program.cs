using Core;
using Npgsql;

// Pick up keys from the repo root before configuration is built, so
// ANTHROPIC_API_KEY lands in builder.Configuration: .env.local (where
// `neon link` writes the database URLs) wins over .env, and real environment
// variables win over both.
DotNetEnv.Env.NoClobber().TraversePath().Load(".env.local");
DotNetEnv.Env.NoClobber().TraversePath().Load();

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

// The pooled URL suits an API's many short requests.
var connection = Database.FromEnvironment("DATABASE_URL", "DATABASE_URL_UNPOOLED");
if (connection is not null)
{
    builder.Services.AddSingleton(NpgsqlDataSource.Create(connection));
    builder.Services.AddSingleton<QuestionStore>();
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
else
{
    // Not in development: the web dev server proxies /api to the http port,
    // and a redirect to https would send the browser to another origin
    // (Visual Studio's https profile listens on both).
    app.UseHttpsRedirection();
}

// One section's practice questions, in order, in the web app's Question shape
// (web/src/lib/types.ts). An empty list when the section has none.
app.MapGet("/api/questions/{book}/{section}", async (string book, string section, IServiceProvider services, ILogger<Program> logger) =>
{
    var store = services.GetService<QuestionStore>();
    if (store is null)
    {
        return Results.Problem("No database configured: set DATABASE_URL, or run `neon link`.", statusCode: 503);
    }

    try
    {
        return Results.Content(await store.SectionJsonAsync(book, section), "application/json");
    }
    catch (InvalidOperationException error)
    {
        return Results.Problem(error.Message, statusCode: 503);
    }
    catch (NpgsqlException error)
    {
        // The database couldn't be reached (offline, a DNS hiccup, a dropped
        // VPN) or turned the connection down. The page shows its "couldn't be
        // loaded" note, and a reload tries again.
        logger.LogWarning(error, "Couldn't read the questions for {Book} {Section} from the database", book, section);
        return Results.Problem("The question database isn't available right now. Try again in a moment.", statusCode: 503);
    }
});

app.Run();
