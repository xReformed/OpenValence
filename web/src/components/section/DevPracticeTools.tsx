import { useEffect, useMemo, useState } from "react";
import { BOOK_CHAPTERS } from "../../lib/learningPaths.generated";
import { clearAnswers, getAnswers, recordAnswer } from "../../lib/practiceStore";
import type { BookKey, PracticeAnswer, Question } from "../../lib/types";

/* Development only: SectionPage renders this when import.meta.env.DEV, so
   production builds leave it out. Shortcuts for testing the practice flow:
   answer the set right or wrong, reset the section, or unlock the whole book.
   The same actions are on window.ovDev in the browser console. */

const PRACTICE_KEY = "chemia.practice";
const SETS_KEY = "chemia.questionSets";
const PROGRESS_KEY = "chemia.progress";

function answerFor(question: Question, correct: boolean): PracticeAnswer {
  const result = correct ? "correct" : "incorrect";
  if (question.type === "numeric") {
    const wrong = question.answer === 0 ? 1 : question.answer * 2;
    return { result, answer: String(correct ? question.answer : wrong) };
  }
  const choice = question.choices.find((c) => Boolean(c.correct) === correct) ?? question.choices[0];
  return { result, answer: choice.text };
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export default function DevPracticeTools({
  book,
  section,
  questions,
  pool,
}: {
  book: BookKey;
  section: string;
  /** The set shown. */
  questions: Question[];
  pool: Question[];
}) {
  const [open, setOpen] = useState(false);

  const tools = useMemo(() => {
    /* How many to answer right; the rest are answered wrong. */
    const answer = (right: number) => {
      const answers = getAnswers();
      questions
        .filter((question) => !answers[question.id])
        .forEach((question, i) => recordAnswer(question.id, answerFor(question, i < right)));
    };
    const resetSection = () => {
      clearAnswers(pool.map((question) => question.id));
      const sets = readJson<Record<string, unknown>>(SETS_KEY, {});
      delete sets[`${book}/${section}`];
      localStorage.setItem(SETS_KEY, JSON.stringify(sets));
      const finished = readJson<string[]>(PROGRESS_KEY, []).filter((key) => key !== `${book}/${section}`);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(finished));
      location.reload();
    };
    const unlockBook = () => {
      const all = BOOK_CHAPTERS[book]
        .flatMap((chapter) => chapter.sections)
        .filter((s) => s.ready)
        .map((s) => `${book}/${s.number}`);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify([...new Set([...readJson<string[]>(PROGRESS_KEY, []), ...all])]));
      location.reload();
    };
    const resetEverything = () => {
      [PRACTICE_KEY, SETS_KEY, PROGRESS_KEY].forEach((key) => localStorage.removeItem(key));
      location.reload();
    };
    return {
      passAll: () => answer(questions.length),
      failAll: () => answer(0),
      answer,
      resetSection,
      unlockBook,
      resetEverything,
    };
  }, [book, section, questions, pool]);

  useEffect(() => {
    const target = window as unknown as { ovDev?: typeof tools };
    target.ovDev = tools;
    return () => {
      delete target.ovDev;
    };
  }, [tools]);

  return (
    <div className="fixed bottom-4 left-4 z-40 font-sans text-xs">
      {open && (
        <div className="mb-2 flex w-56 flex-col gap-1.5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-950 shadow-sm">
          <p className="font-medium tracking-wide text-amber-800 uppercase">Dev tools</p>
          <button type="button" onClick={tools.passAll} className="rounded-md bg-white px-2 py-1.5 text-left hover:bg-amber-100">
            Answer the set correctly
          </button>
          <button type="button" onClick={tools.failAll} className="rounded-md bg-white px-2 py-1.5 text-left hover:bg-amber-100">
            Answer the set wrong
          </button>
          <button type="button" onClick={tools.resetSection} className="rounded-md bg-white px-2 py-1.5 text-left hover:bg-amber-100">
            Reset this section
          </button>
          <button type="button" onClick={tools.unlockBook} className="rounded-md bg-white px-2 py-1.5 text-left hover:bg-amber-100">
            Unlock the whole book
          </button>
          <button type="button" onClick={tools.resetEverything} className="rounded-md bg-white px-2 py-1.5 text-left hover:bg-amber-100">
            Reset all progress
          </button>
          <p className="text-amber-800">Console: ovDev.answer(n) answers n right, the rest wrong.</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 font-medium text-amber-800 shadow-sm hover:bg-amber-100"
      >
        {open ? "Close dev tools" : "Dev"}
      </button>
    </div>
  );
}
