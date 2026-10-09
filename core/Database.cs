using Npgsql;

namespace Core;

public static class Database
{
    /// <summary>
    /// The first of these environment variables that has a value, as an Npgsql
    /// connection string; null when none is set. `neon link` writes both
    /// DATABASE_URL (pooled, for an API's many short requests) and
    /// DATABASE_URL_UNPOOLED (direct, for batch tools that rebuild tables).
    /// </summary>
    public static string? FromEnvironment(params string[] names)
    {
        var value = names
            .Select(Environment.GetEnvironmentVariable)
            .FirstOrDefault(value => !string.IsNullOrWhiteSpace(value));
        return value is null ? null : ToConnectionString(value);
    }

    /// <summary>
    /// Neon and most hosts hand out URLs (postgresql://user:pass@host/db?sslmode=require);
    /// Npgsql wants key=value pairs. Anything that isn't a URL passes through.
    /// </summary>
    public static string ToConnectionString(string value)
    {
        if (!value.StartsWith("postgres://", StringComparison.OrdinalIgnoreCase)
            && !value.StartsWith("postgresql://", StringComparison.OrdinalIgnoreCase))
        {
            return value;
        }

        var uri = new Uri(value);
        var credentials = uri.UserInfo.Split(':', 2);
        var builder = new NpgsqlConnectionStringBuilder
        {
            Host = uri.Host,
            Port = uri.Port > 0 ? uri.Port : 5432,
            Database = Uri.UnescapeDataString(uri.AbsolutePath.TrimStart('/')),
            Username = Uri.UnescapeDataString(credentials[0]),
            Password = credentials.Length > 1 ? Uri.UnescapeDataString(credentials[1]) : null,
        };

        foreach (var pair in uri.Query.TrimStart('?').Split('&', StringSplitOptions.RemoveEmptyEntries))
        {
            var parts = pair.Split('=', 2);
            var setting = parts.Length > 1 ? Uri.UnescapeDataString(parts[1]) : "";
            switch (parts[0].ToLowerInvariant())
            {
                case "sslmode":
                    builder.SslMode = Enum.Parse<SslMode>(setting.Replace("-", ""), ignoreCase: true);
                    break;
                case "channel_binding":
                    builder.ChannelBinding = Enum.Parse<ChannelBinding>(setting, ignoreCase: true);
                    break;
            }
        }

        return builder.ConnectionString;
    }

    /// <summary>For log lines: host and database, never the password.</summary>
    public static string Describe(string connectionString)
    {
        var builder = new NpgsqlConnectionStringBuilder(connectionString);
        return $"Postgres at {builder.Host}/{builder.Database}";
    }
}
