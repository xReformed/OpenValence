# Transcription tools

Scripts that turn LibreTexts pages into corpus markdown, for any book or chapter on LibreTexts, with no code changes. They produced chapters 8–16 of *Beginning Chemistry* (`sources/openstax/introductory/`).

Requires Python 3.10+, standard library only. Run from the repo root. Every script takes any mix of corpus paths: a section file, a chapter folder, a whole book folder, or a glob.

The conventions the output follows (mechanical cleaning only, `[Note: …]` for upstream errors, plain-text math) are described in the main [README](../../README.md#transcription-conventions).

## Adding a book or chapter

```bash
BOOK=sources/openstax/orgchem

# 1. Create the section files (front matter only) from the book's or a chapter's page
python tools/transcribe/stubs.py "https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(OpenStax)" $BOOK

# 2. Download the pages
python tools/transcribe/fetch.py $BOOK

# 3. Convert for review; nothing in the corpus changes
python tools/transcribe/fill.py $BOOK --preview
#    read sources/raw/libretexts/<book>/<NN>-<n>.md and check every calculation, name, and equation

# 4. Write the converted text into the empty section files
python tools/transcribe/fill.py $BOOK

# 5. Add a [Note: …] paragraph in the corpus file after anything the source gets wrong

# 6. Look for conversion leftovers
python tools/transcribe/scan.py $BOOK
```

Then, outside these tools: check the book's license and record it in [sources/ATTRIBUTION.md](../../sources/ATTRIBUTION.md). To show the book in the web app, add it to `BOOKS` in `web/scripts/gen-learning-paths.mjs` and to a branch's `path` in `web/src/lib/roadmap.ts`, then run `npm run gen:paths` in `web/`.

To do one chapter or one section, pass its folder or file instead of the book's.

## Notes

Corrections are written straight into the corpus files: a paragraph starting `[Note:` directly after the paragraph it corrects. The tools treat them as part of the file. Whenever `fill.py` re-converts a section, it carries each note over after the same paragraph as before. If that paragraph's text has changed, the note goes in the nearest matching spot and `fill.py` prints it, so you can check its place.

## After changing lt2md.py

Each LibreTexts book brings markup the converter hasn't seen, so expect to extend `lt2md.py`. After any change, re-run the regression check over everything converted so far:

```bash
python tools/transcribe/regress.py sources/openstax/introductory
```

Every converted section should come out `identical`. A difference is either a regression to fix or an improvement to apply:

```bash
python tools/transcribe/fill.py sources/openstax/introductory --force
```

Sections the converter didn't produce are safe from that command. *Chemistry* 1e and chapters 1–7 of *Beginning Chemistry* were transcribed separately, by hand and through an epub/pandoc pipeline. They have no downloaded pages, so they are skipped. `fill.py` also refuses to replace any section whose text matches the conversion by less than 80%. To re-transcribe such a section from scratch, empty its body first.

## Files

| File | What it does |
| ---- | ------------ |
| `stubs.py` | Creates the section files for a book or chapter from its LibreTexts page: `<Chapter-Title>/<NN>-<n>-<Section-Title>.md`, front matter only. Reads the title, author, and license from the page (override with `--book`, `--author`, `--license`). Never overwrites, and skips end-of-chapter pages |
| `fetch.py` | Downloads each section's page, using its `source_url`, to `sources/raw/libretexts/<book path>/` (git-ignored) |
| `lt2md.py` | The converter: one page in, markdown out. `python lt2md.py <page.html> <section, e.g. 16.3>` |
| `fill.py` | Converts downloaded pages and writes them into the corpus, carrying over existing notes. `--preview` to review first, `--force` to replace changed sections |
| `regress.py` | Re-converts written sections and diffs them against the corpus, ignoring notes |
| `scan.py` | Flags leftovers: stray TeX, braces, doubled carets, `H2 O`-style spacing, lone punctuation |
| `paths.py` | Shared helpers: finding section files and where their pages are kept |

## Known quirks

- `scan.py` flags the braces in the quantum-number sets of 8.3 and 8.4 (`{1, 0, 0, +1/2}`); they are printed that way in the source.
- LibreTexts numbers some appendices as a chapter (*Chemistry* 1e's "22: Appendices" of data tables), so `stubs.py` creates them. Delete the stubs you don't want to transcribe.
- LibreTexts pages are inconsistent, so the converter carries many page-specific repairs (broken `alt` attributes, pre-rendered MathJax, Example boxes closed mid-solution). Each is commented where it is handled in `lt2md.py`.
