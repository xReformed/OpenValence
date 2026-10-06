# Sources

Every document under this folder is openly licensed. Record each one here
before ingesting it — the license field ends up in the `documents` table and
gets shown next to every citation.

| Document | Source | Author | License |
| --- | --- | --- | --- |
| `openstax/genchem-1e/**` | [Chemistry 1e — LibreTexts](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)) | OpenStax | CC BY 4.0 |
| `openstax/introductory/**` | [Beginning Chemistry (Ball) — LibreTexts](https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)) | Anonymous (as listed on LibreTexts) | CC BY-NC-SA 3.0 |

`openstax/introductory/` is complete: all 100 sections, transcribed from the
LibreTexts pages (chapters 8–16 with the scripts in `tools/transcribe/`). Note
its licence is NonCommercial and ShareAlike, unlike the CC BY 4.0 of genchem-1e.

## Layout

- `raw/` — original downloads (`.epub`), the raw pandoc output, and the
  LibreTexts pages fetched by `tools/transcribe/fetch.py` (`raw/libretexts/`,
  one folder per book). Gitignored: large, binary, and re-downloadable.
- `openstax/`, and one folder per source — cleaned markdown, one file per
  section, with front matter. This is what `ingest` actually reads, and it is
  committed so the corpus is reviewable.

## Rule

Cleaning is mechanical only — strip nav, unwrap glossary links, drop figure
references. Never let a model rewrite or summarise source text: a citation
must quote what the source actually said.
