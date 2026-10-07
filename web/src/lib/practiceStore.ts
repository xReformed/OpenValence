import type { PracticeAnswer } from "./types";

/* Each of OpenValence's questions (practiceQuestions.ts) gets one attempt,
   kept in this browser only, like chat history. A section's score comes from
   these, and its Next link opens once all of its questions are answered. */

const KEY = "chemia.practice";

/* localStorage throws outright in some contexts (blocked site data, private
   windows, quota) — never let that take the page down. */
function read(): Record<string, PracticeAnswer> {
  try {
    const raw = localStorage.getItem(KEY);
    const data: unknown = raw ? JSON.parse(raw) : {};
    return data && typeof data === "object" && !Array.isArray(data)
      ? (data as Record<string, PracticeAnswer>)
      : {};
  } catch {
    return {};
  }
}

/* useSyncExternalStore requires a stable snapshot, so the record is only
   replaced when it changes. */
let answers: Readonly<Record<string, PracticeAnswer>> = read();
const listeners = new Set<() => void>();

export function subscribeToPractice(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getAnswers(): Readonly<Record<string, PracticeAnswer>> {
  return answers;
}

/* The first attempt is the one that counts. */
export function recordAnswer(id: string, answer: PracticeAnswer) {
  if (answers[id]) return;
  answers = { ...answers, [id]: answer };
  try {
    localStorage.setItem(KEY, JSON.stringify(answers));
  } catch {
    // Best effort: the score still counts for this visit.
  }
  listeners.forEach((listener) => listener());
}
