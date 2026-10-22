import { describe, expect, it } from "vitest";
import { BOOK_CHAPTERS } from "./learningPaths.generated";
import { branchProgress } from "./mastery";
import { sectionLocks } from "./progress";
import { BRANCHES } from "./roadmap";
import { stageChapters, stageOf } from "./stages";

const physical = BRANCHES.find((branch) => branch.slug === "physical")!;
const introductory = BRANCHES.find((branch) => branch.slug === "introductory")!;

describe("learning path stages", () => {
  it("covers every chapter of a book split into parts once, in order", () => {
    const numbers = physical.path!.flatMap((stage) => stageChapters(stage).map((chapter) => chapter.number));
    expect(numbers).toEqual(BOOK_CHAPTERS["physical-chemistry"].map((chapter) => chapter.number));
  });

  it("keeps a whole-book stage whole", () => {
    expect(stageChapters(introductory.path![0])).toBe(BOOK_CHAPTERS["beginning-chemistry"]);
  });

  it("opens each part at its first section, with nothing finished", () => {
    const starts = physical.path!.map((stage) => sectionLocks(stage.book, stageChapters(stage), new Set()).blockedBy);
    expect(starts).toEqual(["1.1", "16.1", "27.1"]);
  });

  it("finds the part that holds a section", () => {
    expect(stageOf(physical, "physical-chemistry", "3.2")?.chapters).toEqual([1, 15]);
    expect(stageOf(physical, "physical-chemistry", "22.1")?.chapters).toEqual([16, 26]);
    expect(stageOf(physical, "physical-chemistry", "28.3")?.chapters).toEqual([27, 31]);
    expect(stageOf(physical, "physical-chemistry", "99.1")).toBeUndefined();
    expect(stageOf(physical, "beginning-chemistry", "3.2")).toBeUndefined();
  });

  it("counts each section once toward mastery", () => {
    const total = BOOK_CHAPTERS["physical-chemistry"].flatMap((chapter) => chapter.sections).length;
    expect(branchProgress(physical, new Set()).total).toBe(total);
  });
});
