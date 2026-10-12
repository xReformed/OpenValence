import type { QuestionSet } from "./questionSets";
import type { BookKey, PracticeAnswer } from "./types";

/* The profile page's figures, worked out from what the other stores already
   keep in this browser: no profile data of its own. */

export interface SectionScore {
  book: BookKey;
  /** Section number, e.g. "5.6". */
  number: string;
  correct: number;
  answered: number;
  /** Questions in the section's current set. */
  size: number;
}

/** Each section's current question set, scored: sets are keyed "book/number". */
export function sectionScores(
  sets: Readonly<Record<string, QuestionSet>>,
  answers: Readonly<Record<string, PracticeAnswer>>,
): SectionScore[] {
  return Object.entries(sets)
    .map(([key, set]) => {
      const slash = key.indexOf("/");
      const done = set.ids.filter((id) => answers[id]);
      return {
        book: key.slice(0, slash) as BookKey,
        number: key.slice(slash + 1),
        correct: done.filter((id) => answers[id].result === "correct").length,
        answered: done.length,
        size: set.ids.length,
      };
    })
    .filter((score) => score.answered > 0);
}

/** Every recorded answer, including those from earlier sets. */
export function answerTotals(answers: Readonly<Record<string, PracticeAnswer>>) {
  const all = Object.values(answers);
  return { answered: all.length, correct: all.filter((answer) => answer.result === "correct").length };
}

/* Everything OpenValence keeps lives under this prefix (see the stores). */
const PREFIX = "chemia.";
/** The learning record, as opposed to chats and settings. */
const LEARNING_KEYS = ["chemia.progress", "chemia.practice", "chemia.questionSets"];
const EXPORT_FORMAT = "openvalence-progress";

function ownKeys(): string[] {
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key?.startsWith(PREFIX)) keys.push(key);
  }
  return keys.sort();
}

/** A file holding everything this browser keeps for OpenValence. */
export function exportData(now = new Date()): string {
  const data = Object.fromEntries(ownKeys().map((key) => [key, localStorage.getItem(key)]));
  return JSON.stringify({ format: EXPORT_FORMAT, version: 1, exportedAt: now.toISOString(), data }, null, 2);
}

/** Restores an exported file over what's here. Returns how many entries were written. */
export function importData(text: string): number {
  const parsed: unknown = JSON.parse(text);
  const file = parsed as { format?: unknown; data?: unknown };
  if (!file || file.format !== EXPORT_FORMAT || !file.data || typeof file.data !== "object") {
    throw new Error("This isn't an OpenValence progress file.");
  }
  const entries = Object.entries(file.data as Record<string, unknown>).filter(
    (entry): entry is [string, string] => entry[0].startsWith(PREFIX) && typeof entry[1] === "string",
  );
  for (const [key, value] of entries) localStorage.setItem(key, value);
  return entries.length;
}

/** Forgets finished sections, practice answers and question sets; chats stay. */
export function resetLearning() {
  for (const key of LEARNING_KEYS) localStorage.removeItem(key);
}
