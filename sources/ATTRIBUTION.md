# Sources

Every document under this folder is openly licensed. Record each one here
before ingesting it — the license field ends up in the `documents` table and
gets shown next to every citation.

| Document | Source | Author | License |
| --- | --- | --- | --- |
| `openstax/introductory/**` | [Beginning Chemistry (Ball) — LibreTexts](https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)) | Anonymous (as listed on LibreTexts) | CC BY-NC-SA 3.0 |
| `openstax/orgchem/**` | [Organic Chemistry (OpenStax) — LibreTexts](https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(OpenStax)) | OpenStax (John McMurry, *Organic Chemistry*, 10th ed.) | CC BY-NC-SA 4.0 |
| `openstax/inorgchem/**` | [Inorganic Chemistry (LibreTexts)](https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)) | Mixed: per section, see each file's front matter | Mixed: per section (CC BY, CC BY-SA, CC BY-NC, CC BY-NC-SA) |

`openstax/introductory/` is complete: all 100 sections, transcribed from the
LibreTexts pages (chapters 8–16 with the scripts in `tools/transcribe/`). Its
licence is NonCommercial and ShareAlike.

`openstax/orgchem/` is complete: one folder per chapter (1–31) and one file per
section, all 447 sections transcribed from the LibreTexts pages with the scripts
in `tools/transcribe/`. The "Additional Problems" pages (end-of-chapter
exercises) are left out, as are the front matter, appendix and back matter. It
is NonCommercial and ShareAlike too.

`openstax/inorgchem/` is complete: one folder per chapter (1–15) and one file
per section, all 79 sections transcribed from the LibreTexts pages with the
scripts in `tools/transcribe/`. Each section's sub-pages go into its file (see
`tools/transcribe/README.md`). The problem pages and the appendix are left out,
as are 7.4, 7.5, 7.6, 8.8, 8.10, 8.12 and 15.1, which are empty on LibreTexts,
and the empty sub-pages 15.2.2 and 15.4.2–15.4.6. The book is compiled from
several authors, so the license and author are recorded per section, read from
its pages; where a section's pages differ, the most restrictive license is
recorded. 4.2, 9.3, 11.1 and 15.3 carry no license tag on LibreTexts, nor do
11.2's sub-pages or 15.4.1, and these are marked `"Unverified"`; confirm them
before ingesting.

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
