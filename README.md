# OpenValence

**A grounded chemistry Q&A app.** Ask a chemistry question in plain language and get an answer built from real textbook sources, with every claim traceable back to the passage it came from.

General-purpose chatbots answer chemistry from fuzzy memory and invent specifics — bond energies, vapor pressures, molar masses — with total confidence. OpenValence retrieves relevant passages from a curated, openly-licensed corpus first, then answers using only what it retrieved. If the corpus doesn't cover the question, the correct answer is "I don't know."

---

## Status

Retrieval works end to end from the command line, and the web app is built — but the piece that joins them, the answer endpoint, does not exist yet. The chat page currently returns placeholder answers.

| Piece | State |
| ----- | ----- |
| Corpus: OpenStax *Chemistry* 1e | **Complete** — all 21 chapters, 124 sections |
| Corpus: *Beginning Chemistry* (Ball) | **Complete** — all 16 chapters, 100 sections |
| Markdown chunker | Working |
| Embedding + index build | Working |
| Similarity search (CLI) | Working |
| Eval question set | **152 questions** written, all for *Chemistry* 1e — no runner yet |
| HTTP API | Scaffolded — no endpoints yet |
| Web UI | **Built** — landing page, topic pages, roadmap and learning paths, in-app section pages, chat with history and citations (chat runs on mock answers) |
| Practice | **Started** — the books' Examples and Exercises are "compare with the book's solution" cards on the section pages, and OpenValence's own questions (written in [questions/](questions/), served from the database; a pool of up to 30 per section through 9.7 (7.2, 8.2 and 9.2 still to do), of which each student gets 10 at random) get one try each and a score, and a set must score 6 out of 10 to unlock the next section. Mastery bars fill as sections are finished; scores don't feed into them yet |
| Grounded answer generation | Not started |
| Abstention (similarity floor) | Not started |
| PubChem compound facts | Not started |

---

## Repo layout

```
sources/     Curated corpus — markdown, one file per textbook section
questions/   Practice questions: a folder per book and chapter, one JSON file per section, imported into the database
ingest/      .NET console app: chunk → embed → search
api/         ASP.NET Core minimal API — serves the practice questions; the answer endpoint is still to build
web/         React + Vite + Tailwind frontend
core/        Shared .NET code — database connection, question files and storage
tests/       xUnit tests for core/ and ingest/
database/    index.json lands here when no database is configured (git-ignored)
evals/       questions.jsonl — the retrieval and answer eval set
docs/        Design notes (practice question types)
tools/       transcribe/ — scripts that turn LibreTexts books into corpus markdown
```

---

## Requirements

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- Node 22+ (for the web app; CI uses 24)
- An embedding provider — OpenAI by default, or anything with an OpenAI-compatible `/v1/embeddings` endpoint (Voyage, a local Ollama, …). Anthropic has no embeddings API, so this is always a separate provider.
- An Anthropic API key, for answer generation in `api/` (not used until the answer endpoint exists)
- Python 3.10+, only if you use the transcription tools in [tools/transcribe/](tools/transcribe/README.md)
- Optional: Postgres with the `pgvector` extension, to hold the search index. This project uses [Neon](https://neon.com); a local `pgvector/pgvector` Docker container works the same way. Without one, the index is a JSON file.

Keys live in a `.env` file at the repo root, which is git-ignored. Both `ingest/` and `api/` load it on startup, and `.env.local` too, where `neon link` writes the database URLs (`DATABASE_URL`, `DATABASE_URL_UNPOOLED`); `.env.local` wins over `.env`.

```bash
cp .env.example .env    # then fill in the keys
```

A real environment variable with the same name takes precedence over `.env`.

Embedding settings: `EMBEDDING_API_KEY` (falls back to `OPENAI_API_KEY`), plus optional `EMBEDDING_BASE_URL` (default `https://api.openai.com/v1`) and `EMBEDDING_MODEL` (default `text-embedding-3-small`). To use a local Ollama, for example:

```ini
EMBEDDING_BASE_URL=http://localhost:11434/v1
EMBEDDING_MODEL=nomic-embed-text
EMBEDDING_API_KEY=ollama    # any non-empty value; the client requires one
```

Whatever you choose, the index and the queries must use the **same** model. Switching models means re-running `embed`; `search` warns if they don't match.

---

## Running the ingestion pipeline

Three commands, in the order you use them. Run from the repo root.

**1. Chunk** — no API key needed. Inspect the output before spending money on embeddings.

```bash
dotnet run --project ingest -- chunk
```

Prints every chunk with its heading path and approximate token count. If a chunk looks like it lost its context or swallowed three topics at once, fix the chunker before going further.

**2. Embed** — builds the index: in Postgres + pgvector when `DATABASE_URL` is set (in `.env` or `.env.local`), otherwise in `database/index.json`.

```bash
dotnet run --project ingest -- embed
```

`embed` rebuilds the whole index each run; in Postgres it swaps in the new table in one transaction, so searches never see half an index. A JSON index is git-ignored, so each machine builds its own. A Postgres index is shared by every machine that uses the same `DATABASE_URL`: build it once on Neon and every PC (and, later, the API) searches the same copy. To use Neon, link the repo once (`neon link --project-id <id>`), which writes `.env.local`; to use a local database instead:

```bash
docker run -d --name openvalence-db -e POSTGRES_PASSWORD=openvalence -p 5432:5432 pgvector/pgvector:pg17
# then in .env: DATABASE_URL=postgresql://postgres:openvalence@localhost:5432/postgres
```

`embed` creates the `vector` extension and the `chunks` table itself.

**3. Search** — sanity-check retrieval.

```bash
dotnet run --project ingest -- search "why is oxygen paramagnetic?"
```

Prints the top 5 chunks with similarity scores. The question to ask yourself is the one the tool prints back at you: *could you answer the question from these passages alone?* If not, retrieval is the problem, not the model.

`chunk` and `embed` accept an optional path argument if you want to run against a subset of `sources/`.

**Practice questions** — load `questions/` into the database.

```bash
dotnet run --project ingest -- questions           # check every file, then import
dotnet run --project ingest -- questions --check   # check only; no database needed
```

Each section's questions are one JSON file in its chapter's folder, `questions/<book>/<chapter>/<section>.json` (for example [questions/beginning-chemistry/03-atoms-molecules-and-ions/3.4.json](questions/beginning-chemistry/03-atoms-molecules-and-ions/3.4.json)); every chapter of both books has a folder, named by its two-digit number and title, and the import reports a file in the wrong chapter's folder. Each file is an array in the web app's `Question` shape ([types.ts](web/src/lib/types.ts)), in the order the section shows them. The import checks every question first — exactly one correct choice, numeric answers that are numbers, no unknown fields (a misspelled `tolerence` is caught), ids unique across all files — and reports every problem at once. Then it replaces the `questions` table in one transaction, so a question deleted from its file disappears from the app too. Keep ids stable: students' saved answers are stored by id.

## Running the web app

```bash
cd web
npm install
npm run dev
```

Section pages get their practice questions from the API, which reads them from the database in `DATABASE_URL` (the dev server proxies `/api` to it). Run it alongside:

```bash
dotnet run --project api
```

Without it, section pages still work, with a note where the questions would be.

What's there today:

- **Landing page** — hero with an animated demo of a grounded answer, then Features, Topics, How it works, and Sources sections
- **Topic pages** (`/topics/:slug`) — what each subject area covers, with example questions
- **Roadmap** (`/roadmap`) — the six branches of chemistry (introductory, organic, inorganic, physical, analytical, biochemistry) as cards, each with its sources, scope, and a mastery bar. Only introductory chemistry has content so far. A branch's mastery bar is the share of its learning path's sections the reader has finished, kept in the browser
- **Learning paths** (`/roadmap/:slug`) — a branch's books chapter by chapter, in study order; introductory chemistry's is *Beginning Chemistry*. Every transcribed section links to its section page
- **Section pages** (`/roadmap/:slug/:book/:section`) — a corpus section rendered in the app:
  - Each Example and Exercise is a **practice card**: type an answer, then compare it with the book's solution, or ask the chat to explain it.
  - Sections with questions in [questions/](questions/) end with **Check yourself**: OpenValence's own numeric and multiple-choice questions. A section's questions are a pool, and each student gets a set of 10 drawn at random (all of them, when there are 10 or fewer), kept in the browser so a reload shows the same ones ([questionSets.ts](web/src/lib/questionSets.ts)). Each question gets one try, then locks and shows the reasoning (and, for a wrong choice, why it's wrong); the set totals a score ("7 / 10 correct"). The **Next** section link stays locked until a set scores **6 or more out of 10** (the same share of a smaller set). Below that, **Try again** draws a new random set: questions the student hasn't seen first, then ones from earlier sets (their old answers cleared), so the pool never runs out. After a pass, **Try 10 more questions** does the same for extra practice, and Next stays open for good.
  - **Books are read in order.** A section counts as finished when you continue past it with Next, and the learning path locks every section and chapter after the first unfinished one, with a "Continue with …" button to pick up where you left off ([progress.ts](web/src/lib/progress.ts), stored as `chemia.progress`). Each book is its own sequence. Answers are kept in `localStorage` (`chemia.practice`), like chat history.
  - `[Note: …]` corrections show as highlighted asides.
  - Figures show their captions. Where [web/src/assets/figures/](web/src/assets/figures/) has an image for one, mostly illustrations made for OpenValence, it shows above the caption; the file name says which figure it belongs to (see [figureImages.ts](web/src/lib/figureImages.ts)). `npm run dev` and `npm run build` pick up new images when they start; with the dev server already running, run `npm run gen:figures`.
  - A side panel credits the source and its license, links to the original page, and starts a chat about the section.
- **Light and dark mode** — follows the system setting until you pick one with the sun/moon button in the header (or the chat sidebar); the choice is remembered in `localStorage`. Dark mode remaps Tailwind's grey scale in [web/src/index.css](web/src/index.css), so components rarely need `dark:` classes
- **Chat** (`/chat`) — a conversation view with a sidebar of past chats (stored in the browser's `localStorage`), chemistry notation rendered with proper sub- and superscripts (formulas, charges, `Ka`-style constants, `sp3d2`), and numbered citations that expand to show the exact source passage and link to it

The chat calls `askQuestion` in [web/src/lib/api.ts](web/src/lib/api.ts), which currently returns a **mock** answer (`USE_MOCK = true`) so the layout can be judged. When `/api/ask` exists, set `USE_MOCK` to `false`; the dev server already proxies `/api` to the API at `http://localhost:5281`.

Section pages read the markdown in `sources/` directly; the dev server is allowed to serve from outside `web/` for this. The learning paths come from the corpus's front matter, via a generated file, [web/src/lib/learningPaths.generated.ts](web/src/lib/learningPaths.generated.ts). After adding or filling corpus files, regenerate it:

```bash
npm run gen:paths
```

Otherwise new sections stay unlinked on the learning path, under "Being added".

Concept paths (`/roadmap/balancing` and the rest) are one file each in [web/src/lib/concepts/](web/src/lib/concepts/), listed in its `index.ts`. Each loads with its own page, so the app doesn't carry them all.

---

## Tests

```bash
cd web && npm test     # Vitest: grading, chemistry notation, the Example/Exercise parser, figure images, concept paths
dotnet test           # xUnit, from the repo root: question file checks, database URLs, chunking, search scoring
```

Several tests read the real corpus: every section is parsed, every image file must match a caption or image box in its book, and every file in `questions/` must pass the import's checks. The parser test compares against a snapshot of every Example and Exercise it finds; when a parser change is meant to move one, check the section, then update the snapshot with `npx vitest run -u`.

GitHub Actions ([ci.yml](.github/workflows/ci.yml)) runs all of this, plus lint, both builds, and `questions --check`, on every push to `main` and every pull request. None of it needs a database or API keys.

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

Two open textbooks, transcribed from [LibreTexts](https://chem.libretexts.org/) into one markdown file per section:

| Book | Folder | Coverage | License |
| ---- | ------ | -------- | ------- |
| [*Chemistry* 1e](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)) — OpenStax | `sources/openstax/genchem-1e/` | All 21 chapters, 124 sections | CC BY 4.0 |
| [*Beginning Chemistry*](https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)) (Ball) | `sources/openstax/introductory/` | All 16 chapters, 100 sections | CC BY-NC-SA 3.0 |

Each file carries YAML frontmatter with its title, book, chapter, source URL, author, and license, so any retrieved chunk can be traced back to the page it came from. [sources/ATTRIBUTION.md](sources/ATTRIBUTION.md) records every document and its license.

**Scope is deliberate.** This is introductory and general chemistry, not all of chemistry. A tight corpus that answers its domain well demos better than a sprawling one that answers everything vaguely — and it makes "I don't have a source for that" a meaningful, testable response rather than an excuse. End-of-chapter exercise pages were deliberately not transcribed; exercises that sit inside a section page, with their answers, were kept.

### Transcription conventions

Cleaning is mechanical only — strip navigation, unwrap glossary links, convert markup — and the text is never rewritten or summarised, because a citation must quote what the source actually said. Chapters 8–16 of *Beginning Chemistry* were converted by the scripts in [tools/transcribe/](tools/transcribe/README.md), which work for any LibreTexts book. The conventions that follow from that:

- **Upstream errors are kept, and flagged.** Where the source is wrong or contradicts itself, the text is reproduced as printed and a `[Note: …]` paragraph immediately after explains the correction. Typical cases are a misprinted value, a mislabelled table, arithmetic that doesn't follow, an unbalanced equation, a stale "Example 4" reference, or markup broken on the LibreTexts page. There are 32 such notes in *Chemistry* 1e and 102 in *Beginning Chemistry*. They double as eval material: the `defect` and `contradiction` questions test whether the app follows the note rather than the misprint.
- **Figures** are represented by their captions and alt text. An image with a real description outside a figure becomes `[Image: …]`; one whose alt text is only a file name becomes `[Image not described in source]` (and an embedded sound clip becomes `[Audio not described in source]`). Many Lewis structures, molecular-shape diagrams and organic structures fall in that last group, so questions that need the picture itself have no text answer in the corpus.
- **Math** is written as plain text: `ΔH_vap`, `1s^2 2s^2 2p^6`, `Mg^2+(g) → Mg^3+(g) + e^−`. The specific forms:
  - **Grouped exponents:** an exponent that is an expression is grouped, `e^(−0.693 t/t_1/2)`, or `e^{…}` when it contains parentheses of its own. The site renders both forms, but neither nests.
  - **Cancelled units:** units cancelled in a worked calculation keep their strikeout, as `~~mol HCl~~`.
  - **Nuclides:** written with Unicode prescripts, as in the OpenStax nuclear chapter: `²³⁵₉₂U → ⁴₂He + ²³¹₉₀Th`.
  - **Double bonds:** written without spaces, `CH2=CH2`.
  - **Lewis dot diagrams:** *Beginning Chemistry* draws these in TeX, so they survive as text with combining marks (`·Ṇ̇:` is N with single dots to the left, above, and below, and a pair on the right).
- **Exercises and answers** keep their structure. Lettered parts keep their letters (`a. …`), nested under their question. Where a book answers only the odd-numbered exercises, the even ones remain as empty items (`2.`) so the numbering stays right.
- **Where an Example ends:** markdown can't show where an Example's box ends. In the one place where an Example has no Exercise after it and the book's text resumes (16.5.1), a `<!-- end of example -->` comment marks the end. The site uses it to end the practice card, and the chunker strips HTML comments.

### Licensing

The two books are licensed differently, and the difference matters:

- ***Chemistry* 1e** — © OpenStax, **CC BY 4.0**, adapted by LibreTexts. Reuse and redistribution with attribution, including commercially.
- ***Beginning Chemistry*** — **CC BY-NC-SA 3.0** (author listed on LibreTexts as Anonymous). Attribution required, **no commercial use**, and adaptations must be shared under the same license.

Showing source text back to the reader is the whole premise of the app, which is precisely where copyright bites — so every source file keeps its attribution frontmatter, and the site footer must credit each book whose text it shows. If OpenValence is ever monetised, the NonCommercial book has to come out of the corpus first.

Do not add material to `sources/` unless you have checked its license and recorded it in `ATTRIBUTION.md`.

---

## Evals

[evals/questions.jsonl](evals/questions.jsonl) holds **152 questions**, one JSON object per line:

```json
{"id": "q005", "kind": "calculation", "answerable": true,
 "q": "How do you calculate the pH of a buffer from the concentrations of the weak acid and its conjugate base?",
 "files": ["genchem-1e/14-6-Buffers"], "expect": "Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]).",
 "note": "14-7 also mentions Henderson-Hasselbalch in a titration context; 14-6 is where it is derived."}
```

`files` names the section(s) a correct retrieval must hit, matching chunk IDs (`genchem-1e/14-6-Buffers#3`: the book folder, then the section file); `expect` is what a correct answer says; `note` explains what the question tests.

| Kind | Count | What it tests |
| ---- | ----: | ------------- |
| concept | 37 | Explanations, often in casual student phrasing |
| calculation | 25 | Worked methods and values, recomputed during writing |
| unanswerable | 21 | Questions the corpus can't answer — near misses (NMR, SN1/SN2), specific values it doesn't list, format gaps, off-topic requests |
| fact | 24 | Single facts and definitions |
| distractor | 22 | A term that appears in many files but is taught in one |
| exact-token | 13 | Questions that hinge on a precise token (`sp3d2`, `Ka` vs `Kb`) — the baseline for hybrid search |
| defect | 9 | The correct answer follows a `[Note: …]`, not the misprinted text |
| contradiction | 1 | Two sections disagree (Tc-99m half-life) |

The questions were written for *Chemistry* 1e. Two former `unanswerable` questions are now answered by *Beginning Chemistry*, which `embed` indexes alongside it: q133 (S=O bond energy, its 9.5) and q010 (a secondary amine, its 16.6). Both books have a 10.2 Intermolecular Forces and a 13.4 Le Chatelier section, so q003 and q004 accept either book's; q084 (the Haber process) only *Chemistry* 1e's. There is no runner yet; the plan is below.

---

## Architecture

**Ingestion**, offline and one-time:

```
markdown → parse frontmatter → chunk → embed → Postgres + pgvector (or index.json)
```

**Query**, per question (retrieval exists in the CLI; the rest is the answer endpoint still to build):

```
question → embed → top-k by cosine similarity → LLM with "answer only from
this context" → answer + the chunks as citations
```

The index lives in Postgres + `pgvector` when `DATABASE_URL` is set (Neon, for this project), so every machine — and later the API — queries one copy. Without a database it falls back to a flat `index.json` loaded into memory, which keeps the project runnable with nothing to stand up. Both stores search exactly, by cosine similarity, and return identical results: about 13 ms in Postgres over the current 2,662 chunks. An approximate HNSW index only pays off at tens of thousands of chunks, and would blur the retrieval evals.

---

## Known issues

- **The landing page promises more than the app does yet.** It describes abstention ("if the sources don't cover it, it tells you") and grounded, cited answers, neither of which exists until the answer endpoint and the similarity floor are built. The hero demo's "Searching 124 textbook sections" also needs updating once *Beginning Chemistry* is embedded (224 sections across both books).
- **No mobile navigation.** The header links are hidden below the `md` breakpoint with no menu in their place.

---

## Roadmap

Two tracks: the **platform** (what the app can do) and the **subjects** (what it knows). The platform work comes first, because every subject added after it is measured with the same eval runner and inherits the same answer flow.

### Platform

1. **Retrieval eval runner** — an `eval` command in `ingest/` that runs `questions.jsonl` through search and reports recall@1/5/10 and MRR by question kind, plus the top-1 similarity score for every question. Turns chunk-size and embedding-model choices into measurement instead of guesswork
2. **Answer endpoint** — `POST /api/ask` in `api/`: retrieval wired to Claude with the grounding instruction, returning `{ answer, citations }`; then switch the web app off the mock
3. **Abstention** — a similarity floor below which the app declines instead of guessing, calibrated from the eval's top-1 scores on answerable vs unanswerable questions. Grounding isn't real until the app can refuse
4. **Answer grading** — run the eval set through `/api/ask` and grade answers against `expect`, especially the `unanswerable`, `defect` and `contradiction` questions
5. **Hybrid search** — BM25 alongside vectors. Chemistry is full of exact tokens (`sp3d2`, `ΔH°f`, `ClF4+`) that embeddings blur together; the `exact-token` questions are the before/after measure
6. **Calculator tools** — stoichiometry, molar mass, limiting reagent, dilution, pH, gas laws, and unit conversions computed in code, with the model choosing the tool and explaining the result. Models make arithmetic slips; code doesn't
7. **Equation balancer** — exact balancing with a linear-algebra solver (including redox in acidic or basic solution), then a step-by-step explanation; can also check a student's own attempt
8. **PubChem facts** — live authoritative properties for compound questions
9. **Structure rendering** — PubChem PNG endpoint first, then SmilesDrawer for in-app 2D

Later:
- **Graded practice:** grade answers on the section pages' practice cards, and let the scores, not just finished sections, drive mastery. Question types and grading are planned in [docs/practice-question-types.md](docs/practice-question-types.md).
- **Scope filtering** by subject, book, or chapter.
- **A 3D structure viewer.**

### Roadmap page restructure (future)

Today `/roadmap` shows one card per branch of chemistry. The planned layout splits it into two kinds of card:

- **One "LibreTexts books" card** for the textbook learning paths. Both transcribed books come from LibreTexts (*Beginning Chemistry* and *Chemistry* 1e), so they sit together under one card, read chapter by chapter as they are now.
- **One card per concept**, each a levelled path through a single skill across both books:
  - **Stoichiometry**, following the [stoichiometry roadmap](#stoichiometry-roadmap-future) below
  - **Chemical balancing**, following the [equation balancing roadmap](#equation-balancing-roadmap-future) below
  - **Nomenclature**
  - more concepts later

A concept card's levels link to the textbook sections that teach them; for example, limiting reagents to *Beginning Chemistry* 5.7. Each card has its own mastery bar, so a student can work on one skill without reading the books in order.

### Stoichiometry roadmap (future)

A levelled path through stoichiometry, from units to multi-concept problems, grouped into stages. It covers everything a full general chemistry course teaches; levels marked *advanced* are usually taught later and work well as bonus levels. Each level's example is a worked problem the calculator tools (platform item 6) should be able to check.

| Stage | Level | Skill | Example |
| --- | --- | --- | --- |
| Foundations | 1 | Units, dimensional analysis, significant figures | 250 mL = 0.250 L; report answers to correct sig figs |
| | 2 | Molar mass | Ca(NO₃)₂ = 164.10 g/mol |
| | 3 | Grams ↔ moles ↔ particles | 36.04 g H₂O = 2.000 mol = 1.204 × 10²⁴ molecules |
| Formulas | 4 | Percent composition | % H in H₂O = 11.19% |
| | 5 | Empirical and molecular formulas | 40.0% C, 6.7% H, 53.3% O → CH₂O; molar mass 180 → C₆H₁₂O₆ |
| | 6 | Hydrate formulas | 2.50 g CuSO₄·xH₂O heated leaves 1.60 g → x = 5 |
| | 7 | Combustion analysis *(advanced)* | 1.000 g sample gives 3.138 g CO₂ and 1.285 g H₂O → CH₂ |
| Reaction stoichiometry | 8 | Mole ratios | N₂ + 3H₂ → 2NH₃: 2.0 mol N₂ gives 4.0 mol NH₃ |
| | 9 | Mass to mass | 16.04 g CH₄ burned gives 44.01 g CO₂ |
| | 10 | Limiting reagent and theoretical yield | 2.0 mol H₂ + 2.0 mol O₂ → H₂ limiting, 2.0 mol H₂O |
| | 11 | Excess reagent remaining | Same reaction: 1.0 mol (32.0 g) O₂ left over |
| | 12 | Percent yield | Theoretical 36.0 g, actual 30.6 g → 85.0% |
| | 13 | Percent purity | 10.0 g impure CaCO₃ releases 3.96 g CO₂ → 90.1% pure |
| | 14 | Multi-step reactions | Two steps at 80% and 75% yield → 60% overall |
| Solutions | 15 | Molarity | 5.844 g NaCl in 0.500 L → 0.200 M |
| | 16 | Dilution | 10.0 mL of 6.00 M diluted to 100.0 mL → 0.600 M |
| | 17 | Precipitation and gravimetric analysis | 1.433 g AgCl collected → 0.01000 mol Cl⁻ in sample |
| | 18 | Titrations | 20.0 mL of 0.100 M NaOH neutralizes 25.0 mL H₂SO₄ → 0.0400 M |
| | 19 | Back titration *(advanced)* | Add excess acid, titrate what's left, work backward |
| Gases | 20 | Volume ratios at same T and P | 1.0 L N₂ needs 3.0 L H₂ |
| | 21 | Gas stoichiometry with PV = nRT | Liters of CO₂ produced at given T and P |
| | 22 | Gas collected over water | Subtract water vapor pressure (Dalton's law) |
| Energy and applied | 23 | Thermochemical stoichiometry | Burning 2.000 mol CH₄ (ΔH ≈ −890 kJ/mol) releases about 1780 kJ |
| | 24 | Atom economy (green chemistry) | CaCO₃ → CaO + CO₂: atom economy for CaO = 56.0% |
| | 25 | Electrochemical stoichiometry *(advanced)* | 2.00 A for 965 s deposits 0.635 g Cu |
| | 26 | Real-world multi-concept problems | Burning 1.00 kg propane needs about 3.63 kg O₂ |

### Equation balancing roadmap (future)

A levelled path through balancing chemical equations, from counting atoms to redox and disproportionation. It pairs with the equation balancer (platform item 7): the balancer checks a student's attempt at each level and explains the steps. Every example below balances in atoms and charge.

| Level | Skill | Example |
| --- | --- | --- |
| 1 | Atom counting (including hydrates) | Ca(NO₃)₂: 1 Ca, 2 N, 6 O · CuSO₄·5H₂O: 1 Cu, 1 S, 9 O, 10 H |
| 2 | Synthesis and decomposition, with state symbols | 2Mg(s) + O₂(g) → 2MgO(s) · 2H₂O₂(l) → 2H₂O(l) + O₂(g) |
| 3 | Odd/even trick | Al + O₂ → Al₂O₃: odd O on the right, so double it → 4Al + 3O₂ → 2Al₂O₃ |
| 4 | Single and double replacement | Zn + 2HCl → ZnCl₂ + H₂ · AgNO₃ + NaCl → AgCl + NaNO₃ |
| 5 | Polyatomic ions as units | 3Ca(OH)₂ + 2H₃PO₄ → Ca₃(PO₄)₂ + 6H₂O |
| 6 | Word equations to balanced equations | "Aluminum reacts with chlorine gas to form aluminum chloride" → 2Al + 3Cl₂ → 2AlCl₃ |
| 7 | Hydrocarbon combustion (including the fractional method) | C₂H₆ + 7/2 O₂ → 2CO₂ + 3H₂O, then ×2 → 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O |
| 8 | Combustion of fuels containing oxygen | C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O |
| 9 | Predicting products | Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ |
| 10 | Net ionic equations | Ag⁺(aq) + Cl⁻(aq) → AgCl(s) |
| 11 | Many-element equations (algebraic method) | 2Ca₃(PO₄)₂ + 6SiO₂ + 10C → 6CaSiO₃ + P₄ + 10CO |
| 12 | Redox in acidic solution | MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O |
| 13 | Redox in basic solution | 2MnO₄⁻ + 6I⁻ + 4H₂O → 2MnO₂ + 3I₂ + 8OH⁻ |
| 14 | Disproportionation | Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O (Cl goes from 0 to −1 and +1) |

### Subjects

| Subject | Source | License | Status |
| ------- | ------ | ------- | ------ |
| Introductory chemistry | *Beginning Chemistry* (Ball) | CC BY-NC-SA 3.0 | **Transcribed** — all 16 chapters; not yet embedded or evaluated |
| General chemistry | OpenStax *Chemistry* 1e | CC BY 4.0 | **Transcribed** — not yet embedded or evaluated |
| Organic chemistry | Candidate: OpenStax *Organic Chemistry* | CC BY-NC-SA 4.0 (confirm before transcribing) | **Planned** — `sources/openstax/orgchem/` exists, empty |
| Chemical engineering | Not chosen | — | **Planned** |
| Analytical, physical, inorganic, biochemistry | Not chosen | — | **Later** |

Suggested order: embed both transcribed books and measure them, then organic, then chemical engineering.

**Introductory chemistry** — the on-ramp: the same ground as general chemistry at a gentler level, so it catches beginners' phrasing.

- Write eval questions for this book (all 152 current questions target *Chemistry* 1e). Its 102 `[Note: …]` corrections are ready-made `defect` questions
- When it is embedded:
  - mark it "In use" in the landing page's Sources section;
  - add it to the footer attribution;
  - update the hero demo's section count.

**General chemistry** — the core of the app and the subject the eval set is written for.

- First `embed` and retrieval-eval baseline (platform items 1–3 land here first)
- Calculator tools and the equation balancer (platform items 6–7) — most of the topic pages' "coming soon" items belong to this subject

**Organic chemistry** — the biggest step up in scope, and the first subject where pictures carry the meaning.

- Scope: structure and bonding, functional groups and nomenclature, stereochemistry, reaction mechanisms (substitution, elimination, addition, carbonyl chemistry), and spectroscopy (IR, NMR, mass spec)
- Structure rendering (platform item 9) becomes essential rather than nice-to-have, and diagrams without alt text will be a larger gap than in the general chemistry books
- Seven `unanswerable` eval questions become answerable once this book is in: q040 (aldol), q121 (NMR splitting), q122 (IR carbonyl stretch), q123 (SN1/SN2), q124 (Markovnikov), q125 (Hückel's rule), q126 (R/S). Re-label them in the same change, or the abstention eval will report correct answers as failures
- The candidate book is NonCommercial, like *Beginning Chemistry* — see [Licensing](#licensing)

**Chemical engineering** — the other half of the "Organic chemistry & chemical engineering" topic page.

- Scope: units and dimensional analysis, material balances, energy balances
- Mostly calculation, so it leans on calculator tools more than on retrieval
- Needs an openly licensed text; none chosen yet

**Later subjects** — each would turn specific `unanswerable` questions into answerable ones, which is the check that it landed:

- **Analytical chemistry** — titration theory, error analysis, instrumental methods
- **Physical chemistry** — thermodynamics and kinetics in depth, quantum chemistry (q128 Debye–Hückel, q130 particle in a box)
- **Inorganic chemistry** — symmetry, crystal field theory (q127 Jahn–Teller distortion)
- **Biochemistry** — enzyme kinetics and metabolism (q129 Michaelis–Menten, q139 Krebs cycle)

**Adding a subject — definition of done:**

1. License checked and recorded in [sources/ATTRIBUTION.md](sources/ATTRIBUTION.md)
2. Transcribed with the [conventions](#transcription-conventions) above: mechanical cleaning only, upstream errors flagged with `[Note: …]`
3. Document IDs unique across books
4. Eval questions written for it, and any `unanswerable` questions it now covers re-labelled
5. Embedded, with the retrieval eval re-run — no regression on existing subjects, and watch the `distractor` questions, since overlapping books compete for the same queries
6. Landing page Sources section, footer attribution, and topic pages updated

---

## Non-goals

- Training or fine-tuning a model — this is retrieval, not learning
- Retrosynthesis or synthesis planning
- Research-paper-level answers

---

## License

Code: **not yet chosen** — add one before making this public.
Corpus: *Chemistry* 1e is CC BY 4.0, © OpenStax; *Beginning Chemistry* is CC BY-NC-SA 3.0 (see [Licensing](#licensing)).
