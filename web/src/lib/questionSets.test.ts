import { describe, expect, it } from "vitest";
import { chooseSet, drawNewSet, PASS_MARK, passMark, SET_SIZE } from "./questionSets";
import type { PracticeAnswer, Question } from "./types";

const pool = (count: number): Question[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `q${i + 1}`,
    type: "numeric",
    prompt: "",
    explanation: "",
    answer: i,
  }));

const answered = (...ids: string[]): Record<string, PracticeAnswer> =>
  Object.fromEntries(ids.map((id) => [id, { result: "correct", answer: "1" }]));

/* A deterministic stand-in for Math.random. */
function seeded(seed = 1) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

describe("chooseSet", () => {
  it("draws SET_SIZE different questions from a bigger pool, in the pool's order", () => {
    const questions = pool(30);
    const { ids } = chooseSet(questions, undefined, {}, seeded());
    expect(ids).toHaveLength(SET_SIZE);
    expect(new Set(ids).size).toBe(SET_SIZE);
    const order = questions.map((question) => question.id);
    expect([...ids].sort((a, b) => order.indexOf(a) - order.indexOf(b))).toEqual(ids);
  });

  it("varies from one draw to the next", () => {
    const random = seeded(7);
    const draws = new Set(Array.from({ length: 5 }, () => chooseSet(pool(30), undefined, {}, random).ids.join()));
    expect(draws.size).toBeGreaterThan(1);
  });

  it("shows a small pool whole", () => {
    expect(chooseSet(pool(6), undefined, {}, seeded()).ids).toEqual(["q1", "q2", "q3", "q4", "q5", "q6"]);
  });

  it("prefers questions not answered yet", () => {
    const done = answered(...pool(20).map((question) => question.id));
    const { ids } = chooseSet(pool(30), undefined, done, seeded());
    expect(ids.every((id) => !done[id])).toBe(true);
  });

  it("keeps a saved set, and its cleared flag", () => {
    const saved = { ids: ["q2", "q4", "q6", "q8", "q10", "q12", "q14", "q16", "q18", "q30"], cleared: true };
    expect(chooseSet(pool(30), saved, {}, seeded())).toEqual(saved);
  });

  it("drops questions that left the pool and tops the set up again", () => {
    const saved = { ids: ["q1", "q2", "gone"] };
    const { ids } = chooseSet(pool(30), saved, {}, seeded());
    expect(ids).toHaveLength(SET_SIZE);
    expect(ids).toContain("q1");
    expect(ids).toContain("q2");
    expect(ids).not.toContain("gone");
  });
});

describe("drawNewSet", () => {
  const questions = pool(30);
  const first10 = questions.slice(0, 10).map((question) => question.id);

  it("draws questions not answered yet first, and clears nothing", () => {
    const { set, reset } = drawNewSet(questions, answered(...first10), first10, false, seeded());
    expect(set.ids).toHaveLength(SET_SIZE);
    expect(set.ids.some((id) => first10.includes(id))).toBe(false);
    expect(reset).toEqual([]);
  });

  it("keeps the section unlocked only if a set was passed", () => {
    expect(drawNewSet(questions, {}, [], true, seeded()).set.cleared).toBe(true);
    expect(drawNewSet(questions, {}, [], false, seeded()).set.cleared).toBeUndefined();
  });

  it("tops up from earlier sets when few questions are new, and clears their answers", () => {
    const done = questions.slice(0, 25).map((question) => question.id);
    const current = done.slice(15, 25);
    const { set, reset } = drawNewSet(questions, answered(...done), current, false, seeded());
    expect(set.ids).toHaveLength(SET_SIZE);
    expect(set.ids).toEqual(expect.arrayContaining(["q26", "q27", "q28", "q29", "q30"]));
    expect(reset).toHaveLength(5);
    expect(reset.every((id) => done.includes(id) && !current.includes(id))).toBe(true);
  });

  it("never runs out: with every question answered it brings back a full set", () => {
    const all = questions.map((question) => question.id);
    const { set, reset } = drawNewSet(questions, answered(...all), first10, false, seeded());
    expect(set.ids).toHaveLength(SET_SIZE);
    expect(set.ids.some((id) => first10.includes(id))).toBe(false);
    expect([...reset].sort()).toEqual([...set.ids].sort());
  });

  it("repeats the set just finished only when the pool has nothing else", () => {
    const small = pool(4);
    const ids = small.map((question) => question.id);
    const { set, reset } = drawNewSet(small, answered(...ids), ids, false, seeded());
    expect(set.ids).toEqual(ids);
    expect(reset).toHaveLength(4);
  });
});

describe("passMark", () => {
  it("is PASS_MARK out of a full set", () => {
    expect(passMark(SET_SIZE)).toBe(PASS_MARK);
    expect(passMark(10)).toBe(6);
  });

  it("asks the same share of a smaller set, rounding up", () => {
    expect(passMark(5)).toBe(3);
    expect(passMark(6)).toBe(4);
    expect(passMark(2)).toBe(2);
  });
});
