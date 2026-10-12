import { describe, expect, it } from "vitest";
import { BADGES, earnedBadges, isTracked, roadmapComplete } from "./badges";
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
const earnedIds = (finished: ReadonlySet<string>) => earnedBadges(BRANCHES, finished).map((badge) => badge.id);

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

  it("keeps the master badges locked, since help isn't recorded yet", () => {
    expect(isTracked("master")).toBe(false);
    const everything = new Set([...allIntroductory, ...allOrganic]);
    expect(earnedIds(everything)).not.toContain("introductory-master");
    expect(earnedIds(everything)).not.toContain("organic-master");
  });

  it("never awards a badge for a roadmap with nothing to read yet", () => {
    const later = BRANCHES.find((branch) => !branch.path)!;
    expect(roadmapComplete(later, allIntroductory)).toBe(false);
  });

  it("points every badge at a real roadmap, with unique ids", () => {
    expect(new Set(BADGES.map((badge) => badge.id)).size).toBe(BADGES.length);
    for (const badge of BADGES) expect(BRANCHES.some((branch) => branch.slug === badge.roadmap)).toBe(true);
  });
});
