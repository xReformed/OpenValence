# OpenValence

_A grounded chemistry Q&A app — ask a chemistry question in plain language, get an answer backed by real sources with clickable citations._

> **Working title.** "OpenFlask" is a placeholder — swap in your final name. Note that `Open*` implies open source, so if you keep this public on GitHub (recommended as portfolio fuel), the name is honest and on-brand.

---

## What it is

A retrieval-augmented generation (RAG) web app for chemistry. Instead of letting a general LLM answer from fuzzy memory — where it confidently invents exact values — the app looks up relevant material from **trusted sources first**, hands that to the model, and answers using only what it retrieved. Every answer shows the sources it drew from.

**The problem it solves:** general chatbots hallucinate chemistry specifics (melting points, spectra, exact properties). Grounding the answers in a curated corpus + live data makes them trustworthy _and_ citable.

**Why this project:** it exercises the full modern AI-engineering stack — chunking, embeddings, a vector store, retrieval, grounding, and citation — and can be built almost entirely in TypeScript, on home turf.

---

## Core features (v1)

- Ask a chemistry question in natural language.
- Answer is grounded in retrieved sources, not model memory.
- Clickable citations — see exactly which chunk each claim came from.
- Live compound facts (molecular weight, formula, properties, hazards) fetched from PubChem on demand.

## Nice-to-haves (later)

- Render any compound mentioned as a real 2D structure.
- Interactive, rotatable 3D molecule viewer.
- Chat history / saved questions.
- Scope selector (general chem / organic / etc.).

---

## Tech stack (TypeScript-first)

| Layer               | Choice                        | Notes                                                   |
| ------------------- | ----------------------------- | ------------------------------------------------------- |
| Frontend            | React + TypeScript            | Your existing stack                                     |
| LLM + orchestration | Vercel AI SDK or LangChain.js | Embeddings, retrieval, tool-calling — all in JS/TS      |
| Model API           | Anthropic / OpenAI            | Plain HTTP calls                                        |
| Vector store        | Postgres + `pgvector`         | Sits cleanly under Prisma — one database for everything |
| ORM                 | Prisma                        | Already in your toolkit                                 |
| Compound data       | PubChem REST API              | No key, no scraping — free structured chemistry data    |
| Molecule rendering  | SmilesDrawer → RDKit.js       | 2D structures in-browser; add 3Dmol.js for 3D later     |

**No Python required for this one.** Everything above runs in the TS ecosystem. (Python becomes relevant for the separate property-predictor project, not this.)

---

## How the RAG pipeline works

**Ingestion (done once, up front):**

1. Collect source material (see Corpus below).
2. Split each document into small chunks (a few hundred tokens each).
3. Convert each chunk into an _embedding_ (a vector capturing its meaning).
4. Store chunk text + embedding + source metadata in Postgres/pgvector.

**Query time (per question):**

1. Embed the user's question with the same embedding model.
2. Retrieve the handful of nearest chunks by vector similarity.
3. Send question + retrieved chunks to the LLM with an instruction to answer **only** from the provided context.
4. Return the answer plus the source chunks as citations.
5. (Optional) If the question is about a specific compound, also call PubChem for authoritative facts.

---

## Corpus / data sources

This app needs a **reference library**, not a labeled training dataset — no model training, no labels. Think "stock the bookshelf."

- **PubChem REST API** — structured compound facts on demand. Near-zero gathering; covers "what is caffeine's..." style questions.
- **LibreTexts** — large, free, openly-licensed chemistry textbook collection. Best source for conceptual prose. Open license matters: it's what lets you legally display retrieved text as citations.
- **Wikipedia (chemistry articles)** — usable, openly licensed.
- **Open-access papers** (PubMed Central, arXiv) — optional, for research-level answers. Skip for v1.

**Licensing caution:** the whole selling point is showing source text back to the user, which is exactly where copyright bites. Stick to openly-licensed material — never scrape a commercial textbook and serve its paragraphs.

**Scope first:** don't try to cover "all of chemistry." Pick a lane (e.g. intro general chemistry, or organic reactions) so you can curate a focused corpus that demos convincingly. A tight corpus that answers its domain well beats a huge messy one.

---

## Molecule structure rendering

The AI does **not** draw molecules. It produces a text identifier; a rendering library turns that into a picture (deterministic, always correct — no hallucinated sketches).

- The identifier is **SMILES** — a compact text encoding. Caffeine: `CN1C=NC2=C1C(=O)N(C(=O)N2C)C`
- **Reliability pattern:** have the AI give you the _compound name_, then fetch the canonical SMILES from **PubChem by name**. Don't trust the model's SMILES for obscure compounds — one wrong character = wrong molecule.
- **Rendering progression:**
  1. **PubChem PNG endpoint** — returns a ready-made structure image from a name/CID. Zero rendering code; perfect for proving the feature end to end.
  2. **SmilesDrawer** — crisp 2D structures drawn in-app from SMILES.
  3. **3Dmol.js** — rotatable 3D models. Add last, for wow factor.

---

## Build roadmap

**Phase 1 — Plumbing.** React shell + a plain LLM chat call. No RAG yet. Prove the round-trip works.

**Phase 2 — Ingestion.** Pull a focused LibreTexts set, chunk it, embed it, store in pgvector. Confirm you can retrieve sensible chunks for a test query.

**Phase 3 — RAG.** Wire retrieval into the answer flow: question → retrieve → grounded answer. Add the "answer only from context" instruction.

**Phase 4 — Citations.** Surface the retrieved chunks in the UI as clickable sources. This is the trust feature — don't skip it.

**Phase 5 — PubChem facts.** For compound questions, fetch authoritative properties live.

**Phase 6 — Molecule rendering.** Start with the PubChem PNG endpoint, then swap in SmilesDrawer.

**Phase 7 (optional) — Polish.** 3D viewer, history, scope selector, styling.

---

## Out of scope (for now)

- Training any model (that's the separate property-predictor project).
- Synthesis planning / retrosynthesis (specialized tools like IBM RXN handle that).
- Research-paper-level answers (add open-access papers later if wanted).

---

## Portfolio framing

For the AI-engineering pivot, keep the repo **public** and write the README so a reviewer immediately sees you've handled: embeddings, a vector store, retrieval, grounding against hallucination, and citation. That combination is the legible signal hiring managers look for — the working app is the proof, the public code is the portfolio.
