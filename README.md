# OpenValence

**A grounded chemistry Q&A app.** Ask a chemistry question in plain language and get an answer built from real textbook sources, with every claim traceable back to the passage it came from.

General-purpose chatbots answer chemistry from fuzzy memory and invent specifics — bond energies, vapor pressures, molar masses — with total confidence. OpenValence retrieves relevant passages from a curated, openly-licensed corpus first, then answers using only what it retrieved. If the corpus doesn't cover the question, the correct answer is "I don't know."

---

## Status

Early. The ingestion pipeline works end to end; the answer flow does not exist yet.

| Piece | State |
| ----- | ----- |
| Corpus (OpenStax Chemistry 1e, ch. 1–9) | 52 sections transcribed |
| Markdown chunker | Working |
| Embedding + index build | Working |
| Similarity search (CLI) | Working |
| HTTP API | Scaffolded — no endpoints yet |
| Web UI | Scaffolded — Vite + React shell |
| Grounded answer generation | Not started |
| Citations in UI | Not started |
| PubChem compound facts | Not started |

You can currently chunk the corpus, embed it, and query it from the command line. That's the foundation the rest sits on.

---

## Repo layout

```
sources/     Curated corpus — markdown, one file per textbook section
ingest/      .NET console app: chunk → embed → search
api/         ASP.NET Core minimal API (scaffold)
web/         React + Vite + Tailwind frontend (scaffold)
core/        Shared domain logic (empty)
database/    Generated index.json lands here
evals/       Retrieval + answer evaluation suites (empty)
```

---

## Requirements

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- Node 20+ (for the web app)
- An embedding API key — OpenAI by default, or anything OpenAI-compatible

```bash
# Windows (PowerShell)
$env:EMBEDDING_API_KEY = "sk-..."

# macOS / Linux
export EMBEDDING_API_KEY="sk-..."
```

Optional overrides: `EMBEDDING_BASE_URL` (default `https://api.openai.com/v1`) and `EMBEDDING_MODEL`. Set both to point at a local or alternative provider.

---

## Running the ingestion pipeline

Three commands, in the order you use them. Run from the repo root.

**1. Chunk** — no API key needed. Inspect the output before spending money on embeddings.

```bash
dotnet run --project ingest -- chunk
```

Prints every chunk with its heading path and approximate token count. If a chunk looks like it lost its context or swallowed three topics at once, fix the chunker before going further.

**2. Embed** — builds `database/index.json`.

```bash
dotnet run --project ingest -- embed
```

**3. Search** — sanity-check retrieval.

```bash
dotnet run --project ingest -- search "why is oxygen paramagnetic?"
```

Prints the top 5 chunks with similarity scores. The question to ask yourself is the one the tool prints back at you: *could you answer the question from these passages alone?* If not, retrieval is the problem, not the model.

All three accept an optional path argument if you want to run against a subset of `sources/`.

## Running the web app

```bash
cd web
npm install
npm run dev
```

---

## How chunking works

Splitting purely on headings doesn't work for this corpus — a section like *1.1 Chemistry in Context* has no sub-headings and would come out as one oversized chunk. So `MarkdownChunker` runs two stages:

1. Split on `##` headings
2. Within each section, group paragraphs until the size target is hit

Chunks target **500 tokens** and hard-cap at **800**. Below ~500 a chunk carries too little context to stand alone; above 800 it wastes prompt space.

Two details worth knowing:

- **What gets embedded ≠ what gets shown.** `EmbeddedText` prepends the heading path (`9.5: The Kinetic-Molecular Theory > Molecular Velocities`) so the vector knows what topic the passage belongs to. `Content` — without the heading — is what a reader sees as a citation.
- **Figure and table references are stripped.** `(Figure 9.2.1)` points at an image that was never ingested, so it's noise in the embedding and a dead end for the reader.

---

## Corpus

Currently **OpenStax *Chemistry* 1e, chapters 1–9**, transcribed from [LibreTexts](https://chem.libretexts.org/):

| Ch. | Topic |
| --- | ----- |
| 1 | Essential Ideas of Chemistry |
| 2 | Atoms, Molecules, and Ions |
| 3 | Composition of Substances and Solutions |
| 4 | Stoichiometry of Chemical Reactions |
| 5 | Thermochemistry |
| 6 | Electronic Structure and Periodic Properties |
| 7 | Chemical Bonding and Molecular Geometry |
| 8 | Advanced Theories of Covalent Bonding |
| 9 | Gases |

Each file carries YAML frontmatter with its title, book, chapter, source URL, author, and license, so any retrieved chunk can be traced back to the page it came from.

**Scope is deliberate.** This is introductory general chemistry, not all of chemistry. A tight corpus that answers its domain well demos better than a sprawling one that answers everything vaguely — and it makes "I don't have a source for that" a meaningful, testable response rather than an excuse.

### Licensing

Corpus content is © OpenStax, licensed **CC BY 4.0**, adapted by LibreTexts. Redistribution with attribution is exactly what that license permits, which is what makes showing source text back to the user legal. Every source file retains its attribution frontmatter.

Do not add material to `sources/` unless you have checked its license. The entire premise of the app is displaying retrieved text to the reader, which is precisely where copyright bites.

> **Transcription note:** the corpus preserves the source text faithfully, including several upstream errors (a `TBD` answer in 6.2, an exercise answer off by 100× in 6.1, an empty worked solution in 9.2). Figures are represented by their captions and alt text; where a diagram carried no alt text, a `[diagram]` placeholder marks the gap.

---

## Architecture

**Ingestion**, offline and one-time:

```
markdown → parse frontmatter → chunk → embed → index.json
```

**Query**, per question:

```
question → embed → top-k by cosine similarity → LLM with "answer only from
this context" → answer + the chunks as citations
```

The index is currently a flat `index.json` loaded into memory — fine at this corpus size, and it keeps the project runnable with no database to stand up. Postgres + `pgvector` is the migration path when the corpus outgrows it.

---

## Roadmap

1. **Answer endpoint** — wire retrieval into the API, add the grounding instruction
2. **Citations in the UI** — surface retrieved chunks as clickable sources. This is the trust feature; it is not optional
3. **Abstention** — a similarity floor, below which the app declines instead of guessing. Grounding isn't real until the app can refuse
4. **Evals** — retrieval recall@k measured against the 142 textbook exercises in the corpus, whose source sections are already known. Calibrates the abstention threshold and turns chunk-size tuning into measurement instead of guesswork
5. **Hybrid search** — BM25 alongside vectors. Chemistry is full of exact tokens (`sp3d2`, `ΔH°f`, `ClF4+`) that embeddings blur together
6. **PubChem facts** — live authoritative properties for compound questions
7. **Structure rendering** — PubChem PNG endpoint first, then SmilesDrawer for in-app 2D

Later: adaptive practice mode built from the corpus's exercise bank, scope filtering by chapter, 3D structure viewer.

---

## Non-goals

- Training or fine-tuning a model — this is retrieval, not learning
- Retrosynthesis or synthesis planning
- Research-paper-level answers

---

## License

Code: **not yet chosen** — add one before making this public.
Corpus: CC BY 4.0, © OpenStax (see above).
