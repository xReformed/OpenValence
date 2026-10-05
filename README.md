# OpenValence

**A grounded chemistry Q&A app.** Ask a chemistry question in plain language and get an answer built from real textbook sources, with every claim traceable back to the passage it came from.

General-purpose chatbots answer chemistry from fuzzy memory and invent specifics — bond energies, vapor pressures, molar masses — with total confidence. OpenValence retrieves relevant passages from a curated, openly-licensed corpus first, then answers using only what it retrieved. If the corpus doesn't cover the question, the correct answer is "I don't know."

---

## Status

Retrieval works end to end from the command line, and the web app is built — but the piece that joins them, the answer endpoint, does not exist yet. The chat page currently returns placeholder answers.

| Piece | State |
| ----- | ----- |
| Corpus: OpenStax *Chemistry* 1e | **Complete** — all 21 chapters, 124 sections |
| Corpus: *Beginning Chemistry* (Ball) | **In progress** — chapters 1–10 done (61 of 100 sections); 11–16 are empty stubs |
| Markdown chunker | Working |
| Embedding + index build | Working |
| Similarity search (CLI) | Working |
| Eval question set | **152 questions** written — no runner yet |
| HTTP API | Scaffolded — no endpoints yet |
| Web UI | **Built** — landing page, topic pages, chat with history and citations, running on mock answers |
| Grounded answer generation | Not started |
| Abstention (similarity floor) | Not started |
| PubChem compound facts | Not started |

---

## Repo layout

```
sources/     Curated corpus — markdown, one file per textbook section
ingest/      .NET console app: chunk → embed → search
api/         ASP.NET Core minimal API (scaffold — loads .env, no endpoints)
web/         React + Vite + Tailwind frontend
core/        Shared domain logic (empty)
database/    Generated index.json lands here (git-ignored)
evals/       questions.jsonl — the retrieval and answer eval set
```

---

## Requirements

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- Node 20+ (for the web app)
- An embedding provider — OpenAI by default, or anything with an OpenAI-compatible `/v1/embeddings` endpoint (Voyage, a local Ollama, …). Anthropic has no embeddings API, so this is always a separate provider.
- An Anthropic API key, for answer generation in `api/` (not used until the answer endpoint exists)

Keys live in a `.env` file at the repo root, which is git-ignored. Both `ingest/` and `api/` load it on startup.

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

**2. Embed** — builds `database/index.json`.

```bash
dotnet run --project ingest -- embed
```

The index is generated and git-ignored, so each machine builds its own.

**3. Search** — sanity-check retrieval.

```bash
dotnet run --project ingest -- search "why is oxygen paramagnetic?"
```

Prints the top 5 chunks with similarity scores. The question to ask yourself is the one the tool prints back at you: *could you answer the question from these passages alone?* If not, retrieval is the problem, not the model.

`chunk` and `embed` accept an optional path argument if you want to run against a subset of `sources/`.

## Running the web app

```bash
cd web
npm install
npm run dev
```

What's there today:

- **Landing page** — hero with an animated demo of a grounded answer, then Features, Topics, How it works, and Sources sections
- **Topic pages** (`/topics/:slug`) — what each subject area covers, with example questions
- **Chat** (`/chat`) — a conversation view with a sidebar of past chats (stored in the browser's `localStorage`), chemistry notation rendered with proper sub- and superscripts (formulas, charges, `Ka`-style constants, `sp3d2`), and numbered citations that expand to show the exact source passage and link to it

The chat calls `askQuestion` in [web/src/lib/api.ts](web/src/lib/api.ts), which currently returns a **mock** answer (`USE_MOCK = true`) so the layout can be judged. When `/api/ask` exists, set `USE_MOCK` to `false`; the dev server already proxies `/api` to the API at `http://localhost:5281`.

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
| [*Beginning Chemistry*](https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)) (Ball) | `sources/openstax/introductory/` | Chapters 1–10 transcribed (61 of 100 sections); chapters 11–16 are stubs | CC BY-NC-SA 3.0 |

Each file carries YAML frontmatter with its title, book, chapter, source URL, author, and license, so any retrieved chunk can be traced back to the page it came from. [sources/ATTRIBUTION.md](sources/ATTRIBUTION.md) records every document and its license.

**Scope is deliberate.** This is introductory and general chemistry, not all of chemistry. A tight corpus that answers its domain well demos better than a sprawling one that answers everything vaguely — and it makes "I don't have a source for that" a meaningful, testable response rather than an excuse. End-of-chapter exercise pages were deliberately not transcribed.

### Transcription conventions

Cleaning is mechanical only — strip navigation, unwrap glossary links, convert markup — and the text is never rewritten or summarised, because a citation must quote what the source actually said. The conventions that follow from that:

- **Upstream errors are kept, and flagged.** Where the source is wrong or contradicts itself (a misprinted value, a mislabelled table, arithmetic that doesn't follow), the text is reproduced as printed and a `[Note: …]` paragraph immediately after explains the correction. There are 32 such notes in *Chemistry* 1e and 15 so far in *Beginning Chemistry*. They double as eval material: the `defect` and `contradiction` questions test whether the app follows the note rather than the misprint.
- **Figures** are represented by their captions and alt text. An image with a real description outside a figure becomes `[Image: …]`; one whose alt text is only a file name becomes `[Image not described in source]`. Many Lewis structures and molecular-shape diagrams fall in that last group, so questions that need the picture itself have no text answer in the corpus.
- **Math** is written as plain text (`ΔH_vap`, `1s^2 2s^2 2p^6`, `Mg^2+(g) → Mg^3+(g) + e^−`). In *Beginning Chemistry*, Lewis dot diagrams are drawn in TeX in the source, so they survive as text with combining marks (`·Ṇ̇:` is N with single dots to the left, above, and below, and a pair on the right).

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
 "files": ["14-6-Buffers"], "expect": "Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]).",
 "note": "14-7 also mentions Henderson-Hasselbalch in a titration context; 14-6 is where it is derived."}
```

`files` names the section(s) a correct retrieval must hit, matching chunk IDs (`14-6-Buffers#3`); `expect` is what a correct answer says; `note` explains what the question tests.

| Kind | Count | What it tests |
| ---- | ----: | ------------- |
| concept | 37 | Explanations, often in casual student phrasing |
| calculation | 25 | Worked methods and values, recomputed during writing |
| unanswerable | 23 | Questions the corpus can't answer — near misses (NMR, SN1/SN2), specific values it doesn't list, format gaps, off-topic requests |
| fact | 22 | Single facts and definitions |
| distractor | 22 | A term that appears in many files but is taught in one |
| exact-token | 13 | Questions that hinge on a precise token (`sp3d2`, `Ka` vs `Kb`) — the baseline for hybrid search |
| defect | 9 | The correct answer follows a `[Note: …]`, not the misprinted text |
| contradiction | 1 | Two sections disagree (Tc-99m half-life) |

The questions currently target *Chemistry* 1e. There is no runner yet; the plan is below.

---

## Architecture

**Ingestion**, offline and one-time:

```
markdown → parse frontmatter → chunk → embed → index.json
```

**Query**, per question (retrieval exists in the CLI; the rest is the answer endpoint still to build):

```
question → embed → top-k by cosine similarity → LLM with "answer only from
this context" → answer + the chunks as citations
```

The index is currently a flat `index.json` loaded into memory — fine at this corpus size, and it keeps the project runnable with no database to stand up. Postgres + `pgvector` is the migration path when the corpus outgrows it.

---

## Known issues

- **Duplicate document IDs across books.** Chunk IDs are `<file name>#<n>`, and two file names exist in both books: `10-2-Intermolecular-Forces` and `13-4-Shifting-Equilibria-Le-Chateliers-Principle`. The first collides as soon as both are embedded (the second once that *Beginning Chemistry* stub is filled), and eval questions q003, q004 and q084 would count the wrong book's chunks as hits. Fix before the next `embed`: include the book folder in the document ID and update the eval `files` entries to match.
- **The landing page promises more than the app does yet.** It describes abstention ("if the sources don't cover it, it tells you") and grounded, cited answers, neither of which exists until the answer endpoint and the similarity floor are built. The hero demo's "Searching 124 textbook sections" also needs updating once *Beginning Chemistry* is embedded.
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

Later: adaptive practice mode (question types and grading planned in [docs/practice-question-types.md](docs/practice-question-types.md)), scope filtering by subject, book, or chapter, 3D structure viewer.

### Subjects

| Subject | Source | License | Status |
| ------- | ------ | ------- | ------ |
| Introductory chemistry | *Beginning Chemistry* (Ball) | CC BY-NC-SA 3.0 | **In progress** — chapters 1–10 of 16 transcribed |
| General chemistry | OpenStax *Chemistry* 1e | CC BY 4.0 | **Transcribed** — not yet embedded or evaluated |
| Organic chemistry | Candidate: OpenStax *Organic Chemistry* | CC BY-NC-SA 4.0 (confirm before transcribing) | **Planned** — `sources/openstax/orgchem/` exists, empty |
| Chemical engineering | Not chosen | — | **Planned** |
| Analytical, physical, inorganic, biochemistry | Not chosen | — | **Later** |

Suggested order: finish introductory, get general chemistry embedded and measured, then organic, then chemical engineering.

**Introductory chemistry** — the on-ramp: the same ground as general chemistry at a gentler level, so it catches beginners' phrasing.

- Transcribe chapters 11–16: Solutions, Acids and Bases, Chemical Equilibrium, Oxidation and Reduction, Nuclear Chemistry, Organic Chemistry
- Fix the duplicate document IDs first (see [Known issues](#known-issues)) — chapter 13 adds the second collision
- Write eval questions for this book (all 152 current questions target *Chemistry* 1e), including `defect` questions built from its `[Note: …]` corrections
- When it is embedded: mark it "In use" in the landing page's Sources section and add it to the footer attribution

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
