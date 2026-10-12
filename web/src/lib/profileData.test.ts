import { beforeEach, describe, expect, it } from "vitest";
import { answerTotals, exportData, importData, resetLearning, sectionScores } from "./profileData";
import type { PracticeAnswer } from "./types";

const right: PracticeAnswer = { result: "correct", answer: "2" };
const wrong: PracticeAnswer = { result: "incorrect", answer: "3" };

describe("sectionScores", () => {
  it("scores each section's current set from the saved answers", () => {
    const sets = {
      "beginning-chemistry/5.6": { ids: ["a", "b", "c"] },
      "organic-chemistry/1.2": { ids: ["x", "y"] },
      "beginning-chemistry/2.4": { ids: ["p"] }, // nothing answered: left out
    };
    const answers = { a: right, b: wrong, c: right, x: wrong, old: right };
    expect(sectionScores(sets, answers)).toEqual([
      { book: "beginning-chemistry", number: "5.6", correct: 2, answered: 3, size: 3 },
      { book: "organic-chemistry", number: "1.2", correct: 0, answered: 1, size: 2 },
    ]);
  });

  it("totals every answer, including ones from earlier sets", () => {
    expect(answerTotals({ a: right, b: wrong, c: right })).toEqual({ answered: 3, correct: 2 });
  });
});

/* A Map-backed stand-in: the tests run in Node, which has no localStorage. */
class MemoryStorage {
  private items = new Map<string, string>();
  get length() {
    return this.items.size;
  }
  key(index: number) {
    return [...this.items.keys()][index] ?? null;
  }
  getItem(key: string) {
    return this.items.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    this.items.set(key, String(value));
  }
  removeItem(key: string) {
    this.items.delete(key);
  }
  clear() {
    this.items.clear();
  }
}

describe("export, import and reset", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "localStorage", { value: new MemoryStorage(), configurable: true });
    localStorage.setItem("chemia.progress", '["beginning-chemistry/1.2"]');
    localStorage.setItem("chemia.practice", '{"a":{"result":"correct","answer":"2"}}');
    localStorage.setItem("chemia.chats", "[]");
    localStorage.setItem("other.app", "not ours");
  });

  it("round-trips OpenValence's own entries and nothing else", () => {
    const file = exportData(new Date("2026-10-12T00:00:00Z"));
    expect(JSON.parse(file).data).toEqual({
      "chemia.chats": "[]",
      "chemia.practice": '{"a":{"result":"correct","answer":"2"}}',
      "chemia.progress": '["beginning-chemistry/1.2"]',
    });
    localStorage.clear();
    expect(importData(file)).toBe(3);
    expect(localStorage.getItem("chemia.progress")).toBe('["beginning-chemistry/1.2"]');
  });

  it("refuses files that aren't progress exports, and foreign keys inside them", () => {
    expect(() => importData('{"data":{}}')).toThrow(/isn't an OpenValence progress file/);
    const file = JSON.stringify({ format: "openvalence-progress", version: 1, data: { "evil.key": "x", "chemia.theme": "dark" } });
    expect(importData(file)).toBe(1);
    expect(localStorage.getItem("evil.key")).toBeNull();
  });

  it("resets the learning record but keeps chats", () => {
    resetLearning();
    expect(localStorage.getItem("chemia.progress")).toBeNull();
    expect(localStorage.getItem("chemia.practice")).toBeNull();
    expect(localStorage.getItem("chemia.chats")).toBe("[]");
  });
});
