// Builds src/lib/learningPaths.generated.ts from the corpus front matter, so
// the roadmap's chapter lists follow sources/ instead of being typed by hand.
// Re-run after transcribing sections:  npm run gen:paths
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SOURCES = join(here, "../../sources/openstax");
const OUT = join(here, "../src/lib/learningPaths.generated.ts");
const STATS_OUT = join(here, "../src/lib/corpusStats.generated.ts");

/* Book key used by the web app -> folder under sources/openstax. */
const BOOKS = {
  "beginning-chemistry": "introductory",
  "organic-chemistry": "orgchem",
  "inorganic-chemistry": "inorgchem",
  "physical-chemistry": "physchem",
};

/* Books whose transcription is finished. An empty section file in one of these is a
   page LibreTexts itself leaves empty (sources/ATTRIBUTION.md lists them: Physical
   Chemistry 9.13, 9.16, 12.9, 14.9, 19.1, 28.7), not one still to be transcribed, so it
   is left out of the path instead of showing as "being added". */
const FINISHED = new Set(["introductory", "orgchem", "inorgchem", "physchem"]);

/* LibreTexts usernames in the front matter -> the names shown in credits, as the
   pages' own contributor notes give them. A page tagged only "Unknown" or
   "Libretexts" names no author, like "Anonymous". */
const AUTHORS = {
  Khaas: "Kathryn Haas",
  Cschaller: "Chris Schaller",
  Smcontakes: "Stephen Contakes",
  Mevans: "Michael Evans",
  Zielinskit: "Theresa Julia Zielinski",
  Flowlerm: "Michael Fowler",
  Delmar: "Delmar Larsen",
  Mtuckerman: "Mark Tuckerman",
  Flemingp: "Patrick Fleming",
  Vallancec: "Claire Vallance",
  Smblinder: "S. M. Blinder",
  Wreusch: "William Reusch",
  Tgrubbs: "Tandy Grubbs",
  Simonsj: "Jack Simons",
  Nixr: "Roger Nix",
  Lowers: "Stephen Lower",
  Kcrabtree: "Kyle Crabtree",
  Hdevoe: "Howard DeVoe",
  Frioux: "Frank Rioux",
  Wikipedia: "Wikipedia contributors",
  Unknown: "Anonymous",
  Libretexts: "Anonymous",
};

function parse(file, relative) {
  const text = readFileSync(file, "utf8");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: no front matter`);
  const [, front, body] = match;
  const field = (key) => front.match(new RegExp(`^${key}:\\s*"(.*)"\\s*$`, "m"))?.[1];

  // Chapter is "12: Kinetics" or "2. Atoms, Molecules, and Ions"; title is "12.4: Rate Laws".
  const chapter = field("chapter")?.match(/^(\d+)[.:]\s*(.+)$/);
  const title = field("title")?.match(/^(\d+)\.(\d+)[.:]?\s+(.+)$/);
  if (!chapter || !title || chapter[1] !== title[1]) {
    throw new Error(`${file}: unexpected title/chapter front matter`);
  }
  return {
    chapterNumber: Number(chapter[1]),
    chapterTitle: chapter[2],
    sectionMinor: Number(title[2]),
    meta: { title: field("book"), author: AUTHORS[field("author")] ?? field("author"), license: field("license") },
    section: {
      number: `${title[1]}.${title[2]}`,
      title: title[3],
      ready: body.trim() !== "",
      file: relative,
      sourceUrl: field("source_url") ?? "",
    },
  };
}

const bookMeta = {};

/* A book compiled from several authors (Inorganic Chemistry) records the author and
   license per section. Its book-level credit then says so, and each section carries
   its own; a book with one author and license keeps them at the book level only. */
const MIXED = { author: "various authors", license: "Mixed" };

function chaptersOf(folder) {
  const root = join(SOURCES, folder);
  const byChapter = new Map();
  for (const dir of readdirSync(root, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    for (const name of readdirSync(join(root, dir.name))) {
      if (!name.endsWith(".md")) continue;
      const { chapterNumber, chapterTitle, sectionMinor, meta, section } = parse(
        join(root, dir.name, name),
        `${folder}/${dir.name}/${name}`,
      );
      if (FINISHED.has(folder) && !section.ready) continue;
      const book = (bookMeta[folder] ??= { ...meta });
      if (book.author !== meta.author) book.author = MIXED.author;
      if (book.license !== meta.license) book.license = MIXED.license;
      section.author = meta.author;
      section.license = meta.license;
      if (!byChapter.has(chapterNumber)) {
        byChapter.set(chapterNumber, { number: chapterNumber, title: chapterTitle, sections: [] });
      }
      byChapter.get(chapterNumber).sections.push({ minor: sectionMinor, ...section });
    }
  }
  const book = bookMeta[folder];
  return [...byChapter.values()]
    .sort((a, b) => a.number - b.number)
    .map((chapter) => ({
      ...chapter,
      sections: chapter.sections
        .sort((a, b) => a.minor - b.minor)
        .map(({ number, title, ready, file, sourceUrl, author, license }) => ({
          number,
          title,
          ready,
          file,
          sourceUrl,
          ...(book.author === MIXED.author && { author }),
          ...(book.license === MIXED.license && { license }),
        })),
    }));
}

const data = Object.fromEntries(
  Object.entries(BOOKS).map(([key, folder]) => [key, chaptersOf(folder)]),
);

writeFileSync(
  OUT,
  `// Generated by scripts/gen-learning-paths.mjs from the front matter in
// sources/openstax. Do not edit by hand; run \`npm run gen:paths\` instead.
// The types live in ./types; BookKey is defined here because it follows the
// books configured in the script.

import type { BookMeta, PathChapter } from "./types";

export type BookKey = ${Object.keys(BOOKS).map((key) => JSON.stringify(key)).join(" | ")};

export const BOOK_CHAPTERS: Record<BookKey, PathChapter[]> = ${JSON.stringify(data, null, 2)};

export const BOOK_META: Record<BookKey, BookMeta> = ${JSON.stringify(
    Object.fromEntries(Object.entries(BOOKS).map(([key, folder]) => [key, bookMeta[folder]])),
    null,
    2,
  )};
`,
);

/* A few totals for pages that shouldn't load every book's chapter list (the
   landing page's "Searching N textbook sections"). */
const ready = Object.values(data).flatMap((chapters) =>
  chapters.flatMap((chapter) => chapter.sections.filter((section) => section.ready)),
);
writeFileSync(
  STATS_OUT,
  `// Generated by scripts/gen-learning-paths.mjs; run \`npm run gen:paths\` instead of editing.

/** Transcribed (non-stub) sections across all books. */
export const READY_SECTIONS = ${ready.length};
`,
);

for (const [key, chapters] of Object.entries(data)) {
  const sections = chapters.flatMap((chapter) => chapter.sections);
  console.log(
    `${key}: ${chapters.length} chapters, ${sections.filter((s) => s.ready).length}/${sections.length} sections ready`,
  );
}
