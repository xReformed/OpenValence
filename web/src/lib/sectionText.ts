/* The corpus itself, read straight from sources/ — no copy to keep in sync.
   Each section becomes its own lazily loaded chunk, so a page only downloads
   the one section it shows. */
const SECTIONS = import.meta.glob<string>("../../../sources/openstax/*/*/*.md", {
  query: "?raw",
  import: "default",
});

export async function loadSectionText(file: string): Promise<string | undefined> {
  const load = SECTIONS[`../../../sources/openstax/${file}`];
  if (!load) return undefined;
  /* A Windows checkout (core.autocrlf) can give CRLF line endings. */
  const raw = (await load()).replace(/\r\n/g, "\n");
  /* Drop the YAML front matter; the page shows it as attribution instead. */
  return raw.replace(/^---\n[\s\S]*?\n---\n?/, "").trim();
}
