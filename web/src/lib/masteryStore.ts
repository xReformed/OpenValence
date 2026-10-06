/* Mastery per roadmap branch, from 0 (nothing yet) to 1 (mastered), kept in
   this browser only, like chat history. Nothing writes to it until practice
   mode exists (docs/practice-question-types.md); it will then be computed from
   per-section results, and can move to a server once there are accounts. */

const KEY = "chemia.mastery";

export type Mastery = Record<string, number>;

/* localStorage throws outright in some contexts (blocked site data, private
   windows, quota) — never let that take the page down. */
export function loadMastery(): Mastery {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (typeof parsed !== "object" || parsed === null) return {};
    const mastery: Mastery = {};
    for (const [slug, value] of Object.entries(parsed)) {
      if (typeof value === "number" && Number.isFinite(value)) {
        mastery[slug] = Math.min(1, Math.max(0, value));
      }
    }
    return mastery;
  } catch {
    return {};
  }
}

export function saveMastery(slug: string, score: number) {
  try {
    const mastery = loadMastery();
    mastery[slug] = Math.min(1, Math.max(0, score));
    localStorage.setItem(KEY, JSON.stringify(mastery));
  } catch {
    // Best effort, like chat history.
  }
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
