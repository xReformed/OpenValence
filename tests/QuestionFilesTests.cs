using System.Text.Json.Nodes;
using Core;

namespace Tests;

/// <summary>
/// The checks `dotnet run --project ingest -- questions` runs before anything
/// reaches the database. Each test writes a small questions/ folder of its own.
/// </summary>
public sealed class QuestionFilesTests : IDisposable
{
    private readonly string root = Directory.CreateTempSubdirectory("openvalence-questions-").FullName;

    public void Dispose() => Directory.Delete(root, recursive: true);

    private void Write(string path, string json)
    {
        var file = Path.Combine(root, path);
        Directory.CreateDirectory(Path.GetDirectoryName(file)!);
        File.WriteAllText(file, json);
    }

    private IReadOnlyList<string> Problems() =>
        Assert.Throws<QuestionFileException>(() => QuestionFiles.Load(root)).Problems;

    private const string Choice = """{ "id": "pick-one", "type": "multiple-choice", "prompt": "Which?", "explanation": "Because.", "choices": [{ "text": "A", "correct": true, "why": "Right." }, { "text": "B" }] }""";
    private const string Numeric = """{ "id": "work-it-out", "type": "numeric", "prompt": "How much?", "explanation": "Divide.", "answer": 2.5, "unit": "g", "tolerance": 0 }""";

    [Fact]
    public void Loads_each_question_with_its_book_section_and_position()
    {
        Write("beginning-chemistry/3.4.json", $"[{Choice}, {Numeric}]");

        var questions = QuestionFiles.Load(root);

        Assert.Equal(2, questions.Count);
        Assert.All(questions, question => Assert.Equal(("beginning-chemistry", "3.4"), (question.Book, question.Section)));
        Assert.Equal(["pick-one", "work-it-out"], questions.Select(question => question.Id));
        Assert.Equal([0, 1], questions.Select(question => question.Position));
        Assert.Equal("Which?", questions[0].Prompt);
        Assert.Equal("Because.", questions[0].Explanation);
    }

    [Fact]
    public void Keeps_only_the_type_specific_fields_in_the_body()
    {
        Write("beginning-chemistry/3.4.json", $"[{Choice}, {Numeric}]");

        var questions = QuestionFiles.Load(root);

        Assert.Equal(["choices"], JsonNode.Parse(questions[0].BodyJson)!.AsObject().Select(pair => pair.Key));
        var numeric = JsonNode.Parse(questions[1].BodyJson)!.AsObject();
        Assert.Equal(["answer", "unit", "tolerance"], numeric.Select(pair => pair.Key));
        Assert.Equal(2.5, numeric["answer"]!.GetValue<double>());
    }

    [Fact]
    public void Catches_a_misspelled_field()
    {
        Write("beginning-chemistry/3.4.json", $"[{Numeric.Replace("\"tolerance\"", "\"tolerence\"")}]");

        Assert.Contains(Problems(), problem => problem.Contains("unknown field \"tolerence\""));
    }

    [Theory]
    [InlineData("""[{ "text": "A" }, { "text": "B" }]""", "found 0")]
    [InlineData("""[{ "text": "A", "correct": true }, { "text": "B", "correct": true }]""", "found 2")]
    public void Needs_exactly_one_correct_choice(string choices, string found)
    {
        Write("beginning-chemistry/3.4.json", $$"""[{ "id": "pick-one", "type": "multiple-choice", "prompt": "Which?", "explanation": "Because.", "choices": {{choices}} }]""");

        Assert.Contains(Problems(), problem => problem.Contains($"exactly one choice must be correct ({found})"));
    }

    [Fact]
    public void Rejects_correct_false_rather_than_leaving_it_out()
    {
        Write("beginning-chemistry/3.4.json", $"[{Choice.Replace("{ \"text\": \"B\" }", "{ \"text\": \"B\", \"correct\": false }")}]");

        Assert.Contains(Problems(), problem => problem.Contains("\"correct\" can only be true"));
    }

    [Theory]
    [InlineData("\"answer\": 2.5", "\"answer\": \"2.5\"", "\"answer\" must be a number")]
    [InlineData("\"tolerance\": 0", "\"tolerance\": -0.01", "\"tolerance\" must be a number, 0 or more")]
    [InlineData("\"unit\": \"g\"", "\"unit\": \"\"", "\"unit\" must be text")]
    [InlineData("\"id\": \"work-it-out\"", "\"id\": \"Work It Out\"", "\"id\" must be lowercase words")]
    [InlineData("\"type\": \"numeric\"", "\"type\": \"essay\"", "\"type\" must be")]
    [InlineData("\"prompt\": \"How much?\"", "\"prompt\": \" \"", "\"prompt\" is missing")]
    public void Checks_each_field(string field, string replacement, string problem)
    {
        Write("beginning-chemistry/3.4.json", $"[{Numeric.Replace(field, replacement)}]");

        Assert.Contains(Problems(), found => found.Contains(problem));
    }

    [Fact]
    public void Finds_a_duplicate_id_across_files_even_on_a_question_with_other_problems()
    {
        Write("beginning-chemistry/3.4.json", $"[{Numeric}]");
        Write("beginning-chemistry/3.5.json", $"[{Numeric.Replace("\"answer\": 2.5", "\"answer\": \"oops\"")}]");

        var problems = Problems();

        Assert.Contains(problems, problem => problem.Contains("\"answer\" must be a number"));
        Assert.Contains(problems, problem =>
            problem.Contains("id \"work-it-out\" is used 2 times")
            && problem.Contains("beginning-chemistry/3.4")
            && problem.Contains("beginning-chemistry/3.5"));
    }

    [Fact]
    public void Reports_every_problem_at_once()
    {
        Write("beginning-chemistry/3.4.json", $"[{Choice.Replace("\"correct\": true, ", "")}, {Numeric.Replace("\"answer\": 2.5", "\"answr\": 2.5")}]");
        Write("Beginning Chemistry/intro.json", "{}");

        var problems = Problems();

        Assert.Contains(problems, problem => problem.Contains("found 0"));
        Assert.Contains(problems, problem => problem.Contains("unknown field \"answr\""));
        Assert.Contains(problems, problem => problem.Contains("the folder must be a book key"));
        Assert.Contains(problems, problem => problem.Contains("the file name must be a section number"));
        Assert.Contains(problems, problem => problem.Contains("must be a JSON array"));
    }

    [Fact]
    public void Reports_broken_json_and_an_empty_folder()
    {
        Assert.Contains(Problems(), problem => problem.Contains("no .json files"));

        Write("beginning-chemistry/3.4.json", "[{ \"id\": ");
        Assert.Contains(Problems(), problem => problem.Contains("not valid JSON"));
    }

    [Fact]
    public void The_repos_own_questions_are_all_valid()
    {
        var questions = QuestionFiles.Load(Path.Combine(Repo.Root, "questions"));

        Assert.NotEmpty(questions);
    }
}
