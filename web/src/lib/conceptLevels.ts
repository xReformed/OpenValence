import type { Concept } from "./types";

/* Kept apart from lib/concepts, so a concept page can use it without loading
   every path. */
export function levelCount({ stages }: Pick<Concept, "stages">) {
  return stages.reduce((sum, stage) => sum + stage.levels.length, 0);
}
