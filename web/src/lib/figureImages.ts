/* Images shown for a book's figures, keyed by book and figure number.

   The corpus only has each figure's caption and description: the original
   images were not transcribed, and many are third-party stock photos the
   books' licences don't cover. Anything listed here is OpenValence's own
   stand-in; the book's caption stays as printed. Add an entry to show an
   image above that figure's caption.

   The images are web copies (WebP, at most 1600px wide) of the PNG originals
   in src/assets. A key is the figure number ("1.2.1"), or the number plus the
   caption's title ("1.2.2 Physical Changes") where the book prints the same
   number twice. */
import figure1_1_1 from "../assets/figures/beginning-chemistry/1.1.1.webp";
import figure1_2_1 from "../assets/figures/beginning-chemistry/1.2.1.webp";
import figure1_2_2a from "../assets/figures/beginning-chemistry/1.2.2-chemical-properties.webp";
import figure1_2_2b from "../assets/figures/beginning-chemistry/1.2.2-physical-changes.webp";
import figure1_2_3 from "../assets/figures/beginning-chemistry/1.2.3.webp";
import figure1_2_4 from "../assets/figures/beginning-chemistry/1.2.4.webp";
import figure1_2_5 from "../assets/figures/beginning-chemistry/1.2.5.webp";
import figure1_2_6 from "../assets/figures/beginning-chemistry/1.2.6.webp";
import type { BookKey } from "./learningPaths.generated";

export interface FigureImage {
  src: string;
  width: number;
  height: number;
}

export const FIGURE_IMAGES: Partial<Record<BookKey, Record<string, FigureImage>>> = {
  "beginning-chemistry": {
    "1.1.1": { src: figure1_1_1, width: 1448, height: 1086 }, // Dramatic Six-Scene Visual Collage
    "1.2.1": { src: figure1_2_1, width: 1600, height: 533 }, // The Phases of Water Matter
    // The book numbers both of these 1.2.2.
    "1.2.2 Chemical Properties": { src: figure1_2_2a, width: 1536, height: 1024 }, // Burning Match in the Dark
    "1.2.2 Physical Changes": { src: figure1_2_2b, width: 1448, height: 1086 }, // Melting Ice Cubes on Reflective Surface
    "1.2.3": { src: figure1_2_3, width: 1448, height: 1086 }, // Types of Mixtures_ Visible vs Uniform
    "1.2.4": { src: figure1_2_4, width: 1600, height: 800 }, // Mercury Droplets and Sulfur Crystals
    "1.2.5": { src: figure1_2_5, width: 1536, height: 1024 }, // Matter Classification Flowchart
    "1.2.6": { src: figure1_2_6, width: 1448, height: 1086 }, // Everyday Essentials_ Care, Food, and Travel
  },
};

/** "Figure 1.2.2: Physical Changes: The solid ice…" -> the image for that figure, if any. */
export function findFigureImage(book: BookKey, caption: string): FigureImage | undefined {
  const match = caption.match(/^Figure (\d+\.\d+\.\d+[a-z]?):?\s*([^.:©]*)/);
  if (!match) return undefined;
  const [, number, title] = match;
  const images = FIGURE_IMAGES[book];
  return images?.[`${number} ${title.trim()}`] ?? images?.[number];
}
