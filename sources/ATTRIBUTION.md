# Sources

Every document under this folder is openly licensed. Record each one here
before ingesting it — the license field ends up in the `documents` table and
gets shown next to every citation.

| Document | Source | Author | License |
| --- | --- | --- | --- |
| `openstax/introductory/**` | [Beginning Chemistry (Ball) — LibreTexts](https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)) | Anonymous (as listed on LibreTexts) | CC BY-NC-SA 3.0 |
| `openstax/orgchem/**` | [Organic Chemistry (OpenStax) — LibreTexts](https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(OpenStax)) | OpenStax (John McMurry, *Organic Chemistry*, 10th ed.) | CC BY-NC-SA 4.0 |

`openstax/introductory/` is complete: all 100 sections, transcribed from the
LibreTexts pages (chapters 8–16 with the scripts in `tools/transcribe/`). Its
licence is NonCommercial and ShareAlike.

`openstax/orgchem/` has one folder per chapter (1–31) and one file per
section. Chapter 1 (Structure and Bonding) is transcribed; the other chapters
are still stubs with front matter only. The
"Additional Problems" pages (end-of-chapter exercises) are left out, as are
the front matter, appendix and back matter. It is NonCommercial and ShareAlike
too.

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
