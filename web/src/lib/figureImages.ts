/* Images shown for a book's figures, from src/assets/figures/<book>/.

   The corpus only has each figure's caption and description: the original
   images were not transcribed, and many are third-party stock photos the
   books' licences don't cover. Most images there are OpenValence's own
   stand-ins; a few are the book's original, where its parts are free to use
   (3.1 image 1: an 1800s portrait and NASA's sun). Either way the book's
   caption stays as printed.

   To show an image, add its file; the name says where it goes (see
   scripts/gen-figure-images.mjs, which lists them all for the app):

     1.2.1.webp                       above "Figure 1.2.1: …"
     3.2.1-a-simple-periodic-table.webp
                                      where the book prints a number twice,
                                      plus the caption's title
     2.4-image-1.webp                 section 2.4's first "[Image: …]" box,
                                      behind a Show/Hide toggle (open from
                                      the start inside an Example or Exercise) */
import { FIGURE_IMAGES } from "./figureImages.generated";
import type { BookKey, FigureImage } from "./types";

/* "A Simple Periodic Table" → "a-simple-periodic-table", as in the file names. */
function slug(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findFigureImage(
  book: BookKey,
  caption: string,
): FigureImage | undefined {
  const match = caption.match(/^Figure (\d+\.\d+\.\d+[a-z]?):?\s*([^.:©\n]*)/);
  if (!match) return undefined;
  const [, number, title] = match;
  const images = FIGURE_IMAGES[book];
  return images?.[`${number}-${slug(title)}`] ?? images?.[number];
}

export function findPlaceholderImage(
  book: BookKey,
  section: string,
  position: number,
): FigureImage | undefined {
  return FIGURE_IMAGES[book]?.[`${section}-image-${position}`];
}

/* Writes each standalone "[Image…]" box's position into it ("[Image #3: …]")
   for the page to look up and strip again. Every image the section mentions
   is counted, including ones inside list items that can't show a picture
   yet, so a position never shifts. */
export function numberImagePlaceholders(markdown: string): string {
  let seen = 0;
  return markdown
    .split("\n")
    .map((line) => {
      const position = seen + 1;
      seen += line.split("[Image").length - 1;
      return /^\[Image[^\]]*\]\s*$/.test(line)
        ? line.replace("[Image", `[Image #${position}`)
        : line;
    })
    .join("\n");
}
