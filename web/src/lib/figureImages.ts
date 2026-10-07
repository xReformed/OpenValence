/* Images shown for a book's figures, keyed by book and figure number.

   The corpus only has each figure's caption and description: the original
   images were not transcribed, and many are third-party stock photos the
   books' licences don't cover. Most images listed here are OpenValence's own
   stand-ins; a few are the book's original, where its parts are free to use
   (3.1 image 1: an 1800s portrait and NASA's sun). Either way the book's
   caption stays as printed. Add an entry to show an image above that
   figure's caption.

   The images are web copies (WebP, at most 1600px wide) of the PNG originals
   in src/assets. A key is the figure number ("1.2.1"), or the number plus the
   caption's title ("1.2.2 Physical Changes") where the book prints the same
   number twice.

   Unnumbered images, the "[Image: …]" boxes, are keyed by section and
   position: "2.4 image 1" is the first image the section mentions (file
   2.4-image-1.webp). The page shows them behind a Show/Hide toggle, open
   from the start inside an Example or Exercise. */
import figure1_1_1 from "../assets/figures/beginning-chemistry/1.1.1.webp";
import figure1_2_1 from "../assets/figures/beginning-chemistry/1.2.1.webp";
import figure1_2_2a from "../assets/figures/beginning-chemistry/1.2.2-chemical-properties.webp";
import figure1_2_2b from "../assets/figures/beginning-chemistry/1.2.2-physical-changes.webp";
import figure1_2_3 from "../assets/figures/beginning-chemistry/1.2.3.webp";
import figure1_2_4 from "../assets/figures/beginning-chemistry/1.2.4.webp";
import figure1_2_5 from "../assets/figures/beginning-chemistry/1.2.5.webp";
import figure1_2_6 from "../assets/figures/beginning-chemistry/1.2.6.webp";
import figure1_3_1 from "../assets/figures/beginning-chemistry/1.3.1.webp";
import figure1_3_2 from "../assets/figures/beginning-chemistry/1.3.2.webp";
import figure1_3_3 from "../assets/figures/beginning-chemistry/1.3.3.webp";
import figure2_1_1 from "../assets/figures/beginning-chemistry/2.1.1.webp";
import figure2_2_1 from "../assets/figures/beginning-chemistry/2.2.1.webp";
import figure2_2_2 from "../assets/figures/beginning-chemistry/2.2.2.webp";
import figure2_3_1 from "../assets/figures/beginning-chemistry/2.3.1.webp";
import figure2_3_2 from "../assets/figures/beginning-chemistry/2.3.2.webp";
import figure2_3_3 from "../assets/figures/beginning-chemistry/2.3.3.webp";
import figure2_4_1 from "../assets/figures/beginning-chemistry/2.4.1.webp";
import figure2_4_2 from "../assets/figures/beginning-chemistry/2.4.2.webp";
import image2_4_1 from "../assets/figures/beginning-chemistry/2.4-image-1.webp";
import image2_4_2 from "../assets/figures/beginning-chemistry/2.4-image-2.webp";
import image2_4_3 from "../assets/figures/beginning-chemistry/2.4-image-3.webp";
import image2_4_4 from "../assets/figures/beginning-chemistry/2.4-image-4.webp";
import image2_4_5 from "../assets/figures/beginning-chemistry/2.4-image-5.webp";
import image3_1_1 from "../assets/figures/beginning-chemistry/3.1-image-1.webp";
import figure3_2_1 from "../assets/figures/beginning-chemistry/3.2.1.webp";
import figure3_2_2 from "../assets/figures/beginning-chemistry/3.2.2.webp";
import figure3_3_1 from "../assets/figures/beginning-chemistry/3.3.1.webp";
import figure3_4_2 from "../assets/figures/beginning-chemistry/3.4.2.webp";
import type { BookKey, FigureImage } from "./types";

export const FIGURE_IMAGES: Partial<
  Record<BookKey, Record<string, FigureImage>>
> = {
  "beginning-chemistry": {
    "1.1.1": { src: figure1_1_1, width: 1448, height: 1086 },
    "1.2.1": { src: figure1_2_1, width: 1600, height: 533 },
    "1.2.2 Chemical Properties": {
      src: figure1_2_2a,
      width: 1536,
      height: 1024,
    },
    "1.2.2 Physical Changes": { src: figure1_2_2b, width: 1448, height: 1086 },
    "1.2.3": { src: figure1_2_3, width: 1448, height: 1086 },
    "1.2.4": { src: figure1_2_4, width: 1600, height: 800 },
    "1.2.5": { src: figure1_2_5, width: 1536, height: 1024 },
    "1.2.6": { src: figure1_2_6, width: 1448, height: 1086 },
    "1.3.1": { src: figure1_3_1, width: 1448, height: 1086 },
    "1.3.2": { src: figure1_3_2, width: 1536, height: 1024 },
    "1.3.3": { src: figure1_3_3, width: 1448, height: 1086 },
    "2.1.1": { src: figure2_1_1, width: 1536, height: 1024 },
    "2.2.1": { src: figure2_2_1, width: 1266, height: 1243 },
    "2.2.2": { src: figure2_2_2, width: 1448, height: 1086 },
    "2.3.1": { src: figure2_3_1, width: 1448, height: 1086 },
    "2.3.2": { src: figure2_3_2, width: 1536, height: 1024 },
    "2.3.3": { src: figure2_3_3, width: 1448, height: 1086 },
    "2.4.1": { src: figure2_4_1, width: 1536, height: 1024 },
    "2.4.2": { src: figure2_4_2, width: 1774, height: 887 },
    "2.4 image 1": { src: image2_4_1, width: 1536, height: 1024 },
    "2.4 image 2": { src: image2_4_2, width: 1536, height: 512 },
    "2.4 image 3": { src: image2_4_3, width: 1536, height: 512 },
    "2.4 image 4": { src: image2_4_4, width: 1536, height: 576 },
    "2.4 image 5": { src: image2_4_5, width: 1536, height: 576 },
    "3.1 image 1": { src: image3_1_1, width: 1158, height: 663 },
    "3.2.1 The Structure of the Atom": {
      src: figure3_2_1,
      width: 1448,
      height: 1086,
    },
    "3.2.1 A Simple Periodic Table": {
      src: figure3_2_2,
      width: 1536,
      height: 1024,
    },
    "3.3.1": { src: figure3_3_1, width: 1448, height: 1086 },
    "3.4.2": { src: figure3_4_2, width: 1774, height: 887 },
  },
};

export function findFigureImage(
  book: BookKey,
  caption: string,
): FigureImage | undefined {
  const match = caption.match(/^Figure (\d+\.\d+\.\d+[a-z]?):?\s*([^.:©\n]*)/);
  if (!match) return undefined;
  const [, number, title] = match;
  const images = FIGURE_IMAGES[book];
  return images?.[`${number} ${title.trim()}`] ?? images?.[number];
}

export function findPlaceholderImage(
  book: BookKey,
  section: string,
  position: number,
): FigureImage | undefined {
  return FIGURE_IMAGES[book]?.[`${section} image ${position}`];
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
