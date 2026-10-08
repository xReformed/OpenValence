import { describe, expect, it } from "vitest";
import { CONCEPTS } from "./concepts";
import { levelCount } from "./conceptLevels";
import { BRANCHES } from "./roadmap";

/* The router finds concept paths by file name (router.ts), and the roadmap
   lists them from lib/concepts/index.ts, so the two have to agree. */
const FILES = import.meta.glob<{ default: unknown }>(["./concepts/*.ts", "!./concepts/index.ts"], { eager: true });

describe("concept paths", () => {
  it("are each listed in index.ts, from a file named by their slug", () => {
    const fromFiles = Object.entries(FILES).map(([file, module]) => {
      const slug = file.slice("./concepts/".length, -".ts".length);
      expect(module.default, `${file} must export its concept as default`).toMatchObject({ slug });
      return slug;
    });
    expect(CONCEPTS.map((concept) => concept.slug).sort()).toEqual(fromFiles.sort());
  });

  it("have URLs no other roadmap page uses", () => {
    const taken = new Set(["learn", ...BRANCHES.map((branch) => branch.slug)]);
    for (const { slug } of CONCEPTS) expect(taken.has(slug), slug).toBe(false);
  });

  it.each(CONCEPTS.map((concept) => [concept.slug, concept] as const))("%s has levels with skills and tags", (_, concept) => {
    expect(levelCount(concept)).toBeGreaterThan(0);
    for (const stage of concept.stages) {
      expect(stage.levels.length, stage.title).toBeGreaterThan(0);
      for (const level of stage.levels) {
        expect(level.skill.trim(), level.tag).not.toBe("");
        expect(level.tag).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      }
    }
  });

  it.each(CONCEPTS.map((concept) => [concept.slug, concept] as const))("%s uses each tag once", (_, concept) => {
    const tags = concept.stages.flatMap((stage) => stage.levels.map((level) => level.tag));
    expect(tags.filter((tag, i) => tags.indexOf(tag) !== i)).toEqual([]);
  });
});
