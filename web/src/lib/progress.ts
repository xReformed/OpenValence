import type { BookKey, PathChapter } from "./types";

/* Reading progress: a section is finished once the reader continues past it
   with its Next link (which a section with practice questions only shows once
   they're all answered). Kept in this browser only, like chat history. */

const KEY = "chemia.progress";
const sectionKey = (book: BookKey, number: string) => `${book}/${number}`;

/* localStorage throws outright in some contexts (blocked site data, private
   windows, quota) — never let that take the page down. */
function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const data: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data.filter((key): key is string => typeof key === "string") : [];
  } catch {
    return [];
  }
}

/* useSyncExternalStore requires a stable snapshot, so the set is only
   replaced when it changes. */
let finished: ReadonlySet<string> = new Set(read());
const listeners = new Set<() => void>();

export function subscribeToProgress(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getFinished(): ReadonlySet<string> {
  return finished;
}

export function markFinished(book: BookKey, number: string) {
  const key = sectionKey(book, number);
  if (finished.has(key)) return;
  finished = new Set([...finished, key]);
  try {
    localStorage.setItem(KEY, JSON.stringify([...finished]));
  } catch {
    // Best effort: the next section still opens for this visit.
  }
  listeners.forEach((listener) => listener());
}

/* A book opens in reading order: the first section not yet finished is where
   the reader is (blockedBy), and every section after it is locked. Stubs
   don't count; there's nothing in them to read. */
export function sectionLocks(
  book: BookKey,
  chapters: PathChapter[],
  done: ReadonlySet<string>,
): { locked: ReadonlySet<string>; blockedBy?: string } {
  const locked = new Set<string>();
  let blockedBy: string | undefined;
  for (const section of chapters.flatMap((chapter) => chapter.sections)) {
    if (!section.ready) continue;
    if (blockedBy) locked.add(section.number);
    else if (!done.has(sectionKey(book, section.number))) blockedBy = section.number;
  }
  return { locked, blockedBy };
}

export function isFinished(done: ReadonlySet<string>, book: BookKey, number: string) {
  return done.has(sectionKey(book, number));
}
