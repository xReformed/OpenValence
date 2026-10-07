import type { NumericQuestion, NumericResult } from "./types";

/* Reads a number the way students type it: "4.0e-11", "4.0 × 10^-11",
   "4.0x10^−11", "4,500", or plain "4.49" — optionally followed by the
   question's unit. Returns null for anything else. */
export function parseNumber(input: string, unit?: string): number | null {
  let text = input.trim().replace(/[−–]/g, "-").replace(/,/g, "");
  if (unit && text.toLowerCase().endsWith(unit.toLowerCase())) {
    text = text.slice(0, -unit.length);
  }
  text = text.replace(/\s+/g, "");

  const scientific = text.match(/^([-+]?\d*\.?\d+)[x×*·]10\^?([-+]?\d+)$/i);
  if (scientific) return Number(scientific[1]) * 10 ** Number(scientific[2]);
  return /^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i.test(text) ? Number(text) : null;
}

export function gradeNumeric(question: NumericQuestion, input: string): NumericResult {
  const value = parseNumber(input, question.unit);
  if (value === null) return "unreadable";
  const tolerance = question.tolerance ?? 0.01;
  return Math.abs(value - question.answer) <= tolerance * Math.abs(question.answer)
    ? "correct"
    : "incorrect";
}

export function shuffled<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
