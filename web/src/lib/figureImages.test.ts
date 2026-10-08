import { describe, expect, it } from "vitest";
import { FIGURE_IMAGES } from "./figureImages.generated";
import { findFigureImage, findPlaceholderImage, numberImagePlaceholders } from "./figureImages";
import { BOOK_CHAPTERS } from "./learningPaths.generated";
import { loadSectionText } from "./sectionText";
import type { BookKey, FigureImage } from "./types";

describe("numberImagePlaceholders", () => {
  it("numbers standalone image boxes, counting every image mentioned", () => {
    const text = ["[Image: a]", "- a list item [Image: b]", "", "[Image: c]", "Prose [Image: d] here."].join("\n");
    expect(numberImagePlaceholders(text).split("\n")).toEqual([
      "[Image #1: a]",
      "- a list item [Image: b]",
      "",
      "[Image #3: c]",
      "Prose [Image: d] here.",
    ]);
  });
});

describe("findFigureImage", () => {
  const book: BookKey = "beginning-chemistry";
  const images = FIGURE_IMAGES[book]!;

  it("finds a figure by its number", () => {
    expect(findFigureImage(book, "Figure 1.2.1: The Phases of Matter. Ice, water, steam.")).toBe(images["1.2.1"]);
  });

  it("tells apart two figures the book gave the same number, by title", () => {
    expect(findFigureImage(book, "Figure 3.2.1: The Structure of the Atom. Atoms have…")).toBe(
      images["3.2.1-the-structure-of-the-atom"],
    );
    expect(findFigureImage(book, "Figure 3.2.1: A Simple Periodic Table")).toBe(images["3.2.1-a-simple-periodic-table"]);
  });

  it("finds nothing for a figure without an image", () => {
    expect(findFigureImage(book, "Figure 99.9.9: Not drawn yet")).toBeUndefined();
  });
});

/* Catches an image whose file name doesn't match its caption: a typo, a
   wrong number, or a title that differs from the book's. */
describe("every image file", () => {
  it("matches a figure caption or image box in its book", { timeout: 30_000 }, async () => {
    const used = new Set<FigureImage>();
    for (const book of Object.keys(FIGURE_IMAGES) as BookKey[]) {
      for (const section of BOOK_CHAPTERS[book].flatMap((chapter) => chapter.sections)) {
        if (!section.ready) continue;
        const text = numberImagePlaceholders((await loadSectionText(section.file)) ?? "");
        for (const line of text.split("\n")) {
          const image = /^Figure \d+\.\d+\.\d+[a-z]?:/.test(line)
            ? findFigureImage(book, line)
            : findPlaceholderImage(book, section.number, Number(line.match(/^\[Image #(\d+)/)?.[1]));
          if (image) used.add(image);
        }
      }
    }
    const unused = Object.entries(FIGURE_IMAGES).flatMap(([book, images]) =>
      Object.entries(images)
        .filter(([, image]) => !used.has(image))
        .map(([name]) => `${book}/${name}.webp`),
    );
    expect(unused).toEqual([]);
  });
});
