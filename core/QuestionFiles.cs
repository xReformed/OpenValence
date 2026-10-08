using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.RegularExpressions;

namespace Core;

/// <summary>
/// One question as stored: the fields every question has become columns; the
/// rest (choices, or answer/unit/tolerance) is kept as JSON.
/// </summary>
public sealed record StoredQuestion(
    string Id,
    string Book,
    string Section,
    int Position,
    string Type,
    string Prompt,
    string Explanation,
    string BodyJson);

public sealed class QuestionFileException(IReadOnlyList<string> problems)
    : Exception($"{problems.Count} problem(s) in the question files:\n  " + string.Join("\n  ", problems))
{
    public IReadOnlyList<string> Problems { get; } = problems;
}

/// <summary>
/// Reads questions/&lt;book&gt;/&lt;section&gt;.json. Each file is a JSON array in the
/// web app's Question shape (web/src/lib/types.ts), in the order the section
/// shows them. Every question is checked before anything is written, and all
/// problems are reported at once.
/// </summary>
public static partial class QuestionFiles
{
    private static readonly string[] CommonFields = ["id", "type", "prompt", "explanation"];

    private static readonly Dictionary<string, string[]> BodyFields = new()
    {
        ["multiple-choice"] = ["choices"],
        ["numeric"] = ["answer", "unit", "tolerance"],
    };

    private static readonly string[] ChoiceFields = ["text", "correct", "why"];

    public static List<StoredQuestion> Load(string root)
    {
        if (!Directory.Exists(root))
        {
            throw new DirectoryNotFoundException($"No question folder at {root}.");
        }

        var files = Directory
            .EnumerateFiles(root, "*.json", SearchOption.AllDirectories)
            .OrderBy(path => path, StringComparer.Ordinal)
            .ToList();
        var problems = new List<string>();
        var questions = new List<StoredQuestion>();
        // Every well-formed id, even on a question with other problems, so a
        // duplicate is reported in the same run.
        var ids = new List<(string Id, string Where)>();

        foreach (var file in files)
        {
            var book = Path.GetFileName(Path.GetDirectoryName(file))!;
            var section = Path.GetFileNameWithoutExtension(file);
            var where = $"{book}/{section}.json";
            if (!Slug().IsMatch(book)) problems.Add($"{where}: the folder must be a book key like beginning-chemistry");
            if (!SectionNumber().IsMatch(section)) problems.Add($"{where}: the file name must be a section number like 3.4");

            JsonNode? parsed;
            try
            {
                parsed = JsonNode.Parse(File.ReadAllText(file));
            }
            catch (JsonException error)
            {
                problems.Add($"{where}: not valid JSON ({error.Message})");
                continue;
            }
            if (parsed is not JsonArray list)
            {
                problems.Add($"{where}: the file must be a JSON array of questions");
                continue;
            }

            for (var i = 0; i < list.Count; i++)
            {
                if (list[i] is JsonObject item && Text(item, "id") is { } id && Slug().IsMatch(id))
                {
                    ids.Add((id, $"{book}/{section}"));
                }
                var question = Check(list[i], $"{where} question {i + 1}", problems);
                if (question is not null)
                {
                    questions.Add(question with { Book = book, Section = section, Position = i });
                }
            }
        }

        if (files.Count == 0) problems.Add($"no .json files under {root}");
        foreach (var id in ids.GroupBy(entry => entry.Id).Where(group => group.Count() > 1))
        {
            problems.Add($"id \"{id.Key}\" is used {id.Count()} times ({string.Join(", ", id.Select(entry => entry.Where))}); ids must be unique");
        }

        if (problems.Count > 0) throw new QuestionFileException(problems);
        return questions;
    }

    private static StoredQuestion? Check(JsonNode? node, string where, List<string> problems)
    {
        if (node is not JsonObject question)
        {
            problems.Add($"{where}: must be an object");
            return null;
        }
        var start = problems.Count;

        var id = Text(question, "id");
        if (id is null || !Slug().IsMatch(id)) problems.Add($"{where}: \"id\" must be lowercase words joined by hyphens, like sigfigs-area");
        else where = $"{where} ({id})";

        var type = Text(question, "type");
        if (type is null || !BodyFields.ContainsKey(type))
        {
            problems.Add($"{where}: \"type\" must be \"multiple-choice\" or \"numeric\"");
            return null;
        }

        if (string.IsNullOrWhiteSpace(Text(question, "prompt"))) problems.Add($"{where}: \"prompt\" is missing");
        if (string.IsNullOrWhiteSpace(Text(question, "explanation"))) problems.Add($"{where}: \"explanation\" is missing");
        foreach (var field in question.Select(pair => pair.Key).Except(CommonFields).Except(BodyFields[type]))
        {
            problems.Add($"{where}: unknown field \"{field}\"");
        }

        if (type == "multiple-choice") CheckChoices(question["choices"], where, problems);
        else CheckNumeric(question, where, problems);

        if (problems.Count > start) return null;

        var body = new JsonObject();
        foreach (var field in BodyFields[type].Where(question.ContainsKey))
        {
            body[field] = question[field]!.DeepClone();
        }
        return new StoredQuestion(id!, "", "", 0, type, Text(question, "prompt")!, Text(question, "explanation")!, body.ToJsonString());
    }

    private static void CheckChoices(JsonNode? node, string where, List<string> problems)
    {
        if (node is not JsonArray choices || choices.Count < 2)
        {
            problems.Add($"{where}: \"choices\" must be a list of at least two choices");
            return;
        }

        var correct = 0;
        for (var i = 0; i < choices.Count; i++)
        {
            var label = $"{where} choice {i + 1}";
            if (choices[i] is not JsonObject choice)
            {
                problems.Add($"{label}: must be an object");
                continue;
            }
            if (string.IsNullOrWhiteSpace(Text(choice, "text"))) problems.Add($"{label}: \"text\" is missing");
            if (choice.ContainsKey("correct"))
            {
                if (choice["correct"] is JsonValue flag && flag.TryGetValue<bool>(out var value) && value) correct++;
                else problems.Add($"{label}: \"correct\" can only be true (leave it out on wrong choices)");
            }
            if (choice.ContainsKey("why") && string.IsNullOrWhiteSpace(Text(choice, "why"))) problems.Add($"{label}: \"why\" must be text");
            foreach (var field in choice.Select(pair => pair.Key).Except(ChoiceFields))
            {
                problems.Add($"{label}: unknown field \"{field}\"");
            }
        }
        if (correct != 1) problems.Add($"{where}: exactly one choice must be correct (found {correct})");
    }

    private static void CheckNumeric(JsonObject question, string where, List<string> problems)
    {
        if (Number(question, "answer") is not { } answer || !double.IsFinite(answer))
        {
            problems.Add($"{where}: \"answer\" must be a number");
        }
        if (question.ContainsKey("unit") && string.IsNullOrWhiteSpace(Text(question, "unit")))
        {
            problems.Add($"{where}: \"unit\" must be text");
        }
        if (question.ContainsKey("tolerance") && Number(question, "tolerance") is not >= 0)
        {
            problems.Add($"{where}: \"tolerance\" must be a number, 0 or more");
        }
    }

    private static string? Text(JsonObject node, string field) =>
        node[field] is JsonValue value && value.TryGetValue<string>(out var text) ? text : null;

    private static double? Number(JsonObject node, string field) =>
        node[field] is JsonValue value && value.TryGetValue<double>(out var number) ? number : null;

    [GeneratedRegex(@"^[a-z0-9]+(-[a-z0-9]+)*$")]
    private static partial Regex Slug();

    [GeneratedRegex(@"^\d+\.\d+$")]
    private static partial Regex SectionNumber();
}
