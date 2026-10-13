import { describe, expect, it } from "vitest";
import { BADGES, type PracticeRecord, earnedBadges, roadmapComplete, roadmapPractice } from "./badges";
import { BOOK_CHAPTERS } from "./learningPaths.generated";
import { BRANCHES } from "./roadmap";

const introductory = BRANCHES.find((branch) => branch.slug === "introductory")!;
const allIntroductory = new Set(
  BOOK_CHAPTERS["beginning-chemistry"]
    .flatMap((chapter) => chapter.sections)
    .filter((section) => section.ready)
    .map((section) => `beginning-chemistry/${section.number}`),
);
const allButOne = new Set([...allIntroductory].slice(1));
const allOrganic = new Set(
  BOOK_CHAPTERS["organic-chemistry"]
    .flatMap((chapter) => chapter.sections)
    .filter((section) => section.ready)
    .map((section) => `organic-chemistry/${section.number}`),
);
const earnedIds = (finished: ReadonlySet<string>, practice?: PracticeRecord) =>
  earnedBadges(BRANCHES, finished, practice).map((badge) => badge.id);
const correct = (section: string) => ({ result: "correct" as const, answer: "x", section });
const wrong = (section: string) => ({ result: "incorrect" as const, answer: "y", section });

describe("badges", () => {
  it("awards the introductory badge only when every section on its path is finished", () => {
    expect(roadmapComplete(introductory, allIntroductory)).toBe(true);
    expect(roadmapComplete(introductory, allButOne)).toBe(false);
    expect(earnedIds(allIntroductory)).toEqual(["introductory"]);
    expect(earnedIds(allButOne)).toEqual([]);
  });

  it("awards the organic badge for finishing the organic path, separately", () => {
    expect(earnedIds(allOrganic)).toEqual(["organic"]);
    expect(earnedIds(new Set([...allIntroductory, ...allOrganic]))).toEqual(["introductory", "organic"]);
  });

  it("awards a master badge for a finished roadmap with every practice answer correct", () => {
    const perfect = { answers: { q1: correct("beginning-chemistry/1.2"), q2: correct("beginning-chemistry/5.6") }, sets: {} };
    expect(earnedIds(allIntroductory, perfect)).toEqual(["introductory", "introductory-master"]);
  });

  it("withholds the master badge for one wrong answer, no answers, or an unfinished roadmap", () => {
    const oneWrong = { answers: { q1: correct("beginning-chemistry/1.2"), q2: wrong("beginning-chemistry/5.6") }, sets: {} };
    expect(earnedIds(allIntroductory, oneWrong)).toEqual(["introductory"]);
    expect(earnedIds(allIntroductory, { answers: {}, sets: {} })).toEqual(["introductory"]);
    expect(earnedIds(allIntroductory)).toEqual(["introductory"]);
    const perfect = { answers: { q1: correct("beginning-chemistry/1.2") }, sets: {} };
    expect(earnedIds(allButOne, perfect)).toEqual([]);
  });

  it("scores each roadmap on its own books' answers", () => {
    const practice = {
      answers: { q1: correct("beginning-chemistry/1.2"), q2: wrong("organic-chemistry/1.1") },
      sets: {},
    };
    expect(roadmapPractice(introductory, practice)).toEqual({ answered: 1, correct: 1 });
    expect(earnedIds(new Set([...allIntroductory, ...allOrganic]), practice)).toEqual([
      "introductory",
      "introductory-master",
      "organic",
    ]);
  });

  it("places older answers without a section by the question set holding them", () => {
    const practice = {
      answers: {
        q1: { result: "correct" as const, answer: "x" },
        q2: { result: "incorrect" as const, answer: "y" },
        orphan: { result: "incorrect" as const, answer: "z" },
      },
      sets: { "beginning-chemistry/1.2": { ids: ["q1"] }, "organic-chemistry/1.1": { ids: ["q2"] } },
    };
    expect(roadmapPractice(introductory, practice)).toEqual({ answered: 1, correct: 1 });
    expect(earnedIds(allIntroductory, practice)).toEqual(["introductory", "introductory-master"]);
  });

  it("never awards a badge for a roadmap with nothing to read yet", () => {
    const later = BRANCHES.find((branch) => !branch.path)!;
    expect(roadmapComplete(later, allIntroductory)).toBe(false);
    const everything = new Set([...allIntroductory, ...allOrganic]);
    expect(earnedIds(everything)).not.toContain("inorganic");
    expect(earnedIds(everything)).not.toContain("inorganic-master");
    expect(earnedIds(everything)).not.toContain("physical");
    expect(earnedIds(everything)).not.toContain("physical-master");
    expect(earnedIds(everything)).not.toContain("analytical");
    expect(earnedIds(everything)).not.toContain("analytical-master");
    expect(earnedIds(everything)).not.toContain("biochemistry");
    expect(earnedIds(everything)).not.toContain("biochemistry-master");
  });

  it("points every badge at a real roadmap, with unique ids", () => {
    expect(new Set(BADGES.map((badge) => badge.id)).size).toBe(BADGES.length);
    for (const badge of BADGES) expect(BRANCHES.some((branch) => branch.slug === badge.roadmap)).toBe(true);
  });
});
