import { BOOK_CHAPTERS } from "./learningPaths.generated";
import { isFinished } from "./progress";
import type { Branch } from "./types";

/* Mastery of a roadmap branch, from 0 (nothing yet) to 1 (mastered): the share
   of its learning path's sections the reader has finished. Computed from
   reading progress (progress.ts), so it lives in this browser too. */
export function branchProgress(branch: Branch, done: ReadonlySet<string>) {
  const sections = (branch.path ?? []).flatMap((stage) =>
    BOOK_CHAPTERS[stage.book]
      .flatMap((chapter) => chapter.sections)
      .filter((section) => section.ready)
      .map((section) => isFinished(done, stage.book, section.number)),
  );
  return { finished: sections.filter(Boolean).length, total: sections.length };
}

export function branchMastery(branch: Branch, done: ReadonlySet<string>): number {
  const { finished, total } = branchProgress(branch, done);
  return total > 0 ? finished / total : 0;
}

const LEVELS: [threshold: number, name: string][] = [
  [1, "Mastered"],
  [0.75, "Advanced"],
  [0.5, "Proficient"],
  [0.25, "Developing"],
  [Number.MIN_VALUE, "Beginner"],
];

export function masteryLevel(score: number): string {
  return LEVELS.find(([threshold]) => score >= threshold)?.[1] ?? "Not started";
}
