namespace Tests;

/// <summary>The repository's root folder, for tests that read its real files.</summary>
internal static class Repo
{
    public static string Root { get; } = Find();

    private static string Find()
    {
        for (var folder = new DirectoryInfo(AppContext.BaseDirectory); folder is not null; folder = folder.Parent)
        {
            if (File.Exists(Path.Combine(folder.FullName, "OpenValence.slnx"))) return folder.FullName;
        }
        throw new InvalidOperationException("Run the tests from inside the repository.");
    }
}
