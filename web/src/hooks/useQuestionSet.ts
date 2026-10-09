import { useEffect, useState, useSyncExternalStore } from "react";
import { clearAnswers, getAnswers, subscribeToPractice } from "../lib/practiceStore";
import {
  chooseSet,
  drawNewSet,
  getQuestionSets,
  passMark,
  saveQuestionSet,
  subscribeToQuestionSets,
} from "../lib/questionSets";
import type { Question } from "../lib/types";

/* The practice questions a section shows: a random set from its pool, drawn
   on the first visit and kept, so a reload shows the same ones, and how the
   student is doing on it (lib/questionSets.ts). `key` is "<book>/<section>". */
export function useQuestionSet(key: string, pool: Question[]) {
  const sets = useSyncExternalStore(subscribeToQuestionSets, getQuestionSets);
  const answers = useSyncExternalStore(subscribeToPractice, getAnswers);
  const [first] = useState(() => chooseSet(pool, getQuestionSets()[key], getAnswers()));
  /* Bumped for each new set, so its questions mount fresh. */
  const [round, setRound] = useState(0);
  const set = sets[key] ?? first;

  useEffect(() => {
    if (first.ids.length > 0) saveQuestionSet(key, first);
  }, [key, first]);

  const shown = new Set(set.ids);
  const questions = pool.filter((question) => shown.has(question.id));
  const answered = questions.filter((question) => answers[question.id]).length;
  const score = questions.filter((question) => answers[question.id]?.result === "correct").length;
  const mark = passMark(questions.length);
  const passed = questions.length > 0 && answered === questions.length && score >= mark;
  const cleared = passed || Boolean(set.cleared);

  return {
    questions,
    answered,
    score,
    passMark: mark,
    passed,
    /** A set has been passed, so Next stays open. */
    cleared,
    unanswered: pool.filter((question) => !answers[question.id]).length,
    round,
    drawNew: () => {
      const { set: next, reset } = drawNewSet(pool, getAnswers(), set.ids, cleared);
      clearAnswers(reset);
      saveQuestionSet(key, next);
      setRound((n) => n + 1);
    },
  };
}
