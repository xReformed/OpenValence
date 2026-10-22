import { BOOK_CHAPTERS } from "./learningPaths.generated";
import type { Branch, PathChapter, PathStage } from "./types";

/* A learning path stage is a whole book, or a run of its chapters: Physical
   Chemistry is split into parts that each open on their own, so a student can
   start at thermodynamics or kinetics without the quantum chapters first. */
export function stageChapters(stage: PathStage): PathChapter[] {
  const chapters = BOOK_CHAPTERS[stage.book];
  if (!stage.chapters) return chapters;
  const [first, last] = stage.chapters;
  return chapters.filter((chapter) => chapter.number >= first && chapter.number <= last);
}

/** The stage of a branch's path that holds one of its books' sections. */
export function stageOf(branch: Branch, book: string, section: string): PathStage | undefined {
  return branch.path?.find(
    (stage) =>
      stage.book === book &&
      stageChapters(stage).some((chapter) => chapter.sections.some((s) => s.number === section)),
  );
}
