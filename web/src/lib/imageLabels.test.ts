import { describe, expect, it } from "vitest";
import { numberImagePlaceholders } from "./figureImages";
import { findImageLabel, imageLabelKeys } from "./imageLabels";
import { BOOK_CHAPTERS } from "./learningPaths.generated";
import { loadSectionText } from "./sectionText";

describe("findImageLabel", () => {
  it("finds a description by section and box number", () => {
    expect(findImageLabel("beginning-chemistry", "9.4", 17)).toMatch(/^BF4\^−, step 2/);
  });

  it("finds nothing for a box without one", () => {
    expect(findImageLabel("beginning-chemistry", "9.4", 1)).toBeUndefined();
  });
});

/* Catches a description that has slipped onto the wrong box: a typo in its
   key, or a box added or removed earlier in the section. */
describe("every image description", () => {
  it("lands on a box the book left undescribed", { timeout: 30_000 }, async () => {
    const misplaced: string[] = [];
    for (const { book, key } of imageLabelKeys()) {
      const [, number, position] = key.match(/^(\d+\.\d+)-image-(\d+)$/) ?? [];
      const section = BOOK_CHAPTERS[book].flatMap((chapter) => chapter.sections).find((s) => s.number === number);
      const text = numberImagePlaceholders((section && (await loadSectionText(section.file))) ?? "");
      const box = text.split("\n").find((line) => line.startsWith(`[Image #${position} `));
      if (box !== `[Image #${position} not described in source]`) misplaced.push(`${book}/${key}: ${box ?? "no such box"}`);
    }
    expect(misplaced).toEqual([]);
  });
});
