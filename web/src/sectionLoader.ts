import { data, type LoaderFunctionArgs } from "react-router-dom";
import { BOOK_CHAPTERS, BOOK_META } from "./lib/learningPaths.generated";
import { getBranch } from "./lib/roadmap";
import { loadSectionText } from "./lib/sectionText";
import type { BookKey, Question } from "./lib/types";

/* OpenValence's practice questions for one section, from the API, which reads
   them from the database (imported from questions/). Null when the API can't
   be reached, so the page can still show the text with a note instead. */
async function loadQuestions(book: BookKey, section: string, signal: AbortSignal) {
  try {
    const response = await fetch(`/api/questions/${book}/${encodeURIComponent(section)}`, { signal });
    return response.ok ? ((await response.json()) as Question[]) : null;
  } catch (error) {
    if (signal.aborted) throw error;
    return null;
  }
}

/* /roadmap/:slug/:book/:section — one textbook section, in a branch's path.
   The book is in the URL because both introductory books have a "8.2".
   Kept out of router.ts so the books' chapter lists load with the page. */
export async function sectionLoader({ params, request }: LoaderFunctionArgs) {
  const branch = getBranch(params.slug);
  const stage = branch?.path?.find((candidate) => candidate.book === params.book);
  if (!branch || !stage) throw data("Section not found", { status: 404 });

  const sections = BOOK_CHAPTERS[stage.book].flatMap((chapter) =>
    chapter.sections.map((section) => ({ chapter, section })),
  );
  const index = sections.findIndex(({ section }) => section.number === params.section);
  if (index < 0) throw data("Section not found", { status: 404 });
  const { chapter, section } = sections[index];

  /* Previous / next skip sections that are still empty stubs. */
  const neighbour = (step: -1 | 1) => {
    for (let i = index + step; i >= 0 && i < sections.length; i += step) {
      if (sections[i].section.ready) return sections[i].section;
    }
    return undefined;
  };

  const [text, questions] = section.ready
    ? await Promise.all([
        loadSectionText(section.file),
        loadQuestions(stage.book, section.number, request.signal),
      ])
    : [undefined, []];

  return {
    branch,
    stage,
    meta: BOOK_META[stage.book],
    chapter,
    section,
    text,
    questions: questions ?? [],
    questionsUnavailable: questions === null,
    previous: neighbour(-1),
    next: neighbour(1),
  };
}
