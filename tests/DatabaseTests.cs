using Core;
using Npgsql;

namespace Tests;

public sealed class DatabaseTests
{
    private static NpgsqlConnectionStringBuilder Parse(string url) => new(Database.ToConnectionString(url));

    [Fact]
    public void Turns_a_Neon_url_into_connection_settings()
    {
        var settings = Parse("postgresql://neondb_owner:secret@ep-example.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

        Assert.Equal("ep-example.us-east-2.aws.neon.tech", settings.Host);
        Assert.Equal(5432, settings.Port);
        Assert.Equal("neondb", settings.Database);
        Assert.Equal("neondb_owner", settings.Username);
        Assert.Equal("secret", settings.Password);
        Assert.Equal(SslMode.Require, settings.SslMode);
        Assert.Equal(ChannelBinding.Require, settings.ChannelBinding);
    }

    [Fact]
    public void Reads_a_port_escaped_characters_and_a_dashed_sslmode()
    {
        var settings = Parse("postgres://me:p%40ss%3Aword@localhost:6543/open%20valence?sslmode=verify-full");

        Assert.Equal(6543, settings.Port);
        Assert.Equal("p@ss:word", settings.Password);
        Assert.Equal("open valence", settings.Database);
        Assert.Equal(SslMode.VerifyFull, settings.SslMode);
    }

    [Fact]
    public void Passes_a_connection_string_through()
    {
        const string connection = "Host=localhost;Database=openvalence;Username=postgres";

        Assert.Equal(connection, Database.ToConnectionString(connection));
    }

    [Fact]
    public void Describes_a_connection_without_its_password()
    {
        var description = Database.Describe(Database.ToConnectionString("postgresql://me:secret@db.example.com/neondb"));

        Assert.Equal("Postgres at db.example.com/neondb", description);
        Assert.DoesNotContain("secret", description);
    }

    [Fact]
    public void Uses_the_first_environment_variable_with_a_value()
    {
        var (blank, set, other) = (Name(), Name(), Name());
        Environment.SetEnvironmentVariable(blank, " ");
        Environment.SetEnvironmentVariable(set, "postgres://me:pw@first.example.com/db");
        Environment.SetEnvironmentVariable(other, "postgres://me:pw@second.example.com/db");
        try
        {
            Assert.Equal("first.example.com", new NpgsqlConnectionStringBuilder(Database.FromEnvironment(blank, set, other)).Host);
            Assert.Null(Database.FromEnvironment(blank, Name()));
        }
        finally
        {
            foreach (var name in new[] { blank, set, other }) Environment.SetEnvironmentVariable(name, null);
        }

        static string Name() => $"OPENVALENCE_TEST_{Guid.NewGuid():N}";
    }
}
