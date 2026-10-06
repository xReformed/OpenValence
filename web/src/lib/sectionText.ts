/* The corpus itself, read straight from sources/ — no copy to keep in sync.
   Each section becomes its own lazily loaded chunk, so a page only downloads
   the one section it shows. */
const SECTIONS = import.meta.glob<string>("../../../sources/openstax/*/*/*.md", {
  query: "?raw",
  import: "default",
});

/** `file` is a section's path under sources/openstax, as in learningPaths.generated.ts. */
export async function loadSectionText(file: string): Promise<string | undefined> {
  const load = SECTIONS[`../../../sources/openstax/${file}`];
  if (!load) return undefined;
  const raw = await load();
  /* Drop the YAML front matter; the page shows it as attribution instead. */
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();
}
