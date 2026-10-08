import { describe, expect, it } from "vitest";
import { gradeNumeric, parseNumber, shuffled } from "./grading";
import type { NumericQuestion } from "./types";

const question = (answer: number, extra: Partial<NumericQuestion> = {}): NumericQuestion => ({
  id: "test",
  type: "numeric",
  prompt: "",
  explanation: "",
  answer,
  ...extra,
});

describe("parseNumber", () => {
  it.each([
    ["4.49", 4.49],
    ["  4.49  ", 4.49],
    ["-3", -3],
    ["+3", 3],
    [".5", 0.5],
    ["4,500", 4500],
    ["−12.5", -12.5],
    ["4.0e-11", 4.0e-11],
    ["4.0E-11", 4.0e-11],
  ])("reads %j", (input, expected) => {
    expect(parseNumber(input)).toBe(expected);
  });

  it.each(["4.0 × 10^-11", "4.0x10^−11", "4.0 X 10^-11", "4.0*10^-11", "4.0·10-11", "4.0 × 10^–11"])(
    "reads scientific notation as typed: %j",
    (input) => {
      expect(parseNumber(input)! / 4.0e-11).toBeCloseTo(1, 12);
    },
  );

  it("drops the question's unit, in any case", () => {
    expect(parseNumber("25.0 mL", "mL")).toBe(25);
    expect(parseNumber("25.0ml", "mL")).toBe(25);
    expect(parseNumber("1.2 × 10^3 kJ", "kJ")).toBeCloseTo(1200, 9);
  });

  it("keeps a unit it wasn't told about unreadable", () => {
    expect(parseNumber("25.0 mL")).toBeNull();
    expect(parseNumber("25.0 g", "mL")).toBeNull();
  });

  it.each(["", "abc", "1/2", "4.5.6", "e5", "--3"])("rejects %j", (input) => {
    expect(parseNumber(input)).toBeNull();
  });
});

describe("gradeNumeric", () => {
  it("accepts answers within 1% by default", () => {
    expect(gradeNumeric(question(100), "100.9")).toBe("correct");
    expect(gradeNumeric(question(100), "99.1")).toBe("correct");
    expect(gradeNumeric(question(100), "101.1")).toBe("incorrect");
  });

  it("measures the tolerance from the answer's size, for negative answers too", () => {
    expect(gradeNumeric(question(-5), "-5.04")).toBe("correct");
    expect(gradeNumeric(question(-5), "5")).toBe("incorrect");
  });

  it("uses the question's own tolerance, and 0 means exact", () => {
    expect(gradeNumeric(question(3, { tolerance: 0 }), "3")).toBe("correct");
    expect(gradeNumeric(question(3, { tolerance: 0 }), "3.0001")).toBe("incorrect");
    expect(gradeNumeric(question(50, { tolerance: 0.1 }), "54")).toBe("correct");
  });

  it("grades very small answers relatively", () => {
    expect(gradeNumeric(question(1.8e-5), "1.8 × 10^-5")).toBe("correct");
    expect(gradeNumeric(question(1.8e-5), "1.8 × 10^-4")).toBe("incorrect");
  });

  it("accepts the unit after the number", () => {
    expect(gradeNumeric(question(22.4, { unit: "L" }), "22.4 L")).toBe("correct");
  });

  it("calls anything it can't read unreadable, not wrong", () => {
    expect(gradeNumeric(question(22.4), "twenty-two")).toBe("unreadable");
    expect(gradeNumeric(question(22.4), "")).toBe("unreadable");
  });
});

describe("shuffled", () => {
  it("returns the same items without changing the original", () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    const copy = shuffled(items);
    expect(items).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect([...copy].sort((a, b) => a - b)).toEqual(items);
  });
});
