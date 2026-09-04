# Sources

Every document under this folder is openly licensed. Record each one here
before ingesting it — the license field ends up in the `documents` table and
gets shown next to every citation.

| Document | Source | Author | License |
| --- | --- | --- | --- |
| `openstax/genchem-1e/**` | [Chemistry 1e — LibreTexts](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)) | OpenStax | CC BY 4.0 |

## Layout

- `raw/` — original downloads (`.epub`) and the raw pandoc output. Gitignored:
  large, binary, and re-downloadable.
- `openstax/`, and one folder per source — cleaned markdown, one file per
  section, with front matter. This is what `ingest` actually reads, and it is
  committed so the corpus is reviewable.

## Rule

Cleaning is mechanical only — strip nav, unwrap glossary links, drop figure
references. Never let a model rewrite or summarise source text: a citation
must quote what the source actually said.
