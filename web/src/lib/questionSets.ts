import type { PracticeAnswer, Question } from "./types";

/* A section's practice questions are a pool (up to 30), and a student sees a
   set of SET_SIZE drawn at random. The set is kept in this browser, like the
   answers (practiceStore.ts), so a reload shows the same questions. Scoring
   PASS_MARK or more on a set unlocks the next section, for good. Once a set
   is answered the student can draw another ("Try again"), new questions
   first, so the pool never runs out. */

export const SET_SIZE = 10;

export const PASS_MARK = 6;

/** The score a set of `size` questions needs: 6 of 10, or the same share of a smaller set. */
export function passMark(size: number): number {
  return Math.ceil((size * PASS_MARK) / SET_SIZE);
}

export interface QuestionSet {
  /** Question ids, in the pool's order. */
  ids: string[];
  /** A set has been passed here before, so Next stays open. */
  cleared?: boolean;
}

type Answers = Readonly<Record<string, PracticeAnswer>>;

function sample(ids: string[], count: number, random: () => number): string[] {
  const out = [...ids];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out.slice(0, count);
}

function inPoolOrder(pool: Question[], ids: Iterable<string>): string[] {
  const chosen = new Set(ids);
  return pool.filter((question) => chosen.has(question.id)).map((question) => question.id);
}

/**
 * The set to show: the saved one, or a fresh draw that prefers questions not
 * yet answered. A saved set loses questions that left the pool and is topped
 * up again from unanswered ones.
 */
export function chooseSet(
  pool: Question[],
  saved: QuestionSet | undefined,
  answers: Answers,
  random: () => number = Math.random,
): QuestionSet {
  const size = Math.min(SET_SIZE, pool.length);
  const ids = inPoolOrder(pool, saved?.ids ?? []);
  if (ids.length < size) {
    const taken = new Set(ids);
    const left = pool.map((question) => question.id).filter((id) => !taken.has(id));
    const unanswered = left.filter((id) => !answers[id]);
    const answered = left.filter((id) => answers[id]);
    ids.push(...sample(unanswered, size - ids.length, random));
    ids.push(...sample(answered, size - ids.length, random));
  }
  return { ids: inPoolOrder(pool, ids), ...(saved?.cleared ? { cleared: true } : {}) };
}

/**
 * The next set, picked at random: questions not answered yet first, then
 * ones answered in earlier sets, and the set just finished only as a last
 * resort, so a retry looks different whenever the pool allows. `reset` lists
 * the answered questions it brings back, whose old answers must be cleared
 * so they can be tried again. `cleared` carries over whether a set has been
 * passed already.
 */
export function drawNewSet(
  pool: Question[],
  answers: Answers,
  current: string[],
  cleared: boolean,
  random: () => number = Math.random,
): { set: QuestionSet; reset: string[] } {
  const size = Math.min(SET_SIZE, pool.length);
  const all = pool.map((question) => question.id);
  const unanswered = all.filter((id) => !answers[id]);
  const earlier = all.filter((id) => answers[id] && !current.includes(id));
  const recent = all.filter((id) => answers[id] && current.includes(id));
  const ids = sample(unanswered, size, random);
  ids.push(...sample(earlier, size - ids.length, random));
  ids.push(...sample(recent, size - ids.length, random));
  return {
    set: { ids: inPoolOrder(pool, ids), ...(cleared ? { cleared: true } : {}) },
    reset: ids.filter((id) => answers[id]),
  };
}

const KEY = "chemia.questionSets";

/* localStorage throws outright in some contexts (blocked site data, private
   windows, quota) — never let that take the page down. */
function read(): Record<string, QuestionSet> {
  try {
    const raw = localStorage.getItem(KEY);
    const data: unknown = raw ? JSON.parse(raw) : {};
    return data && typeof data === "object" && !Array.isArray(data)
      ? (data as Record<string, QuestionSet>)
      : {};
  } catch {
    return {};
  }
}

/* useSyncExternalStore requires a stable snapshot, so the record is only
   replaced when it changes. */
let sets: Readonly<Record<string, QuestionSet>> = read();
const listeners = new Set<() => void>();

export function subscribeToQuestionSets(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getQuestionSets(): Readonly<Record<string, QuestionSet>> {
  return sets;
}

export function saveQuestionSet(key: string, set: QuestionSet) {
  const current = sets[key];
  if (current && current.cleared === set.cleared && current.ids.join() === set.ids.join()) return;
  sets = { ...sets, [key]: set };
  try {
    localStorage.setItem(KEY, JSON.stringify(sets));
  } catch {
    // Best effort: the set still holds for this visit.
  }
  listeners.forEach((listener) => listener());
}
