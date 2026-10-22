import { describe, expect, it } from "vitest";
import { BOOK_CHAPTERS } from "./learningPaths.generated";
import { parseMath, type MathNode } from "./mathText";
import { loadSectionText } from "./sectionText";
import type { BookKey } from "./types";

/* A compact form to compare against: [a/b] for a stacked fraction, √[x] for a root. */
function show(nodes: MathNode[]): string {
  return nodes
    .map((node) =>
      node.kind === "text"
        ? node.text
        : node.kind === "frac"
          ? `[${show(node.num)}/${show(node.den)}]`
          : `√[${show(node.body)}]`,
    )
    .join("");
}
const layout = (text: string) => show(parseMath(text));

describe("parseMath", () => {
  it("stacks a fraction with a bracketed part, dropping the grouping brackets", () => {
    expect(layout("(∂U)/(∂T)")).toBe("[∂U/∂T]");
    expect(layout("k = (kB T)/h")).toBe("k = [kB T/h]");
    expect(layout("ln(f/(f^o))")).toBe("ln([f/f^o])");
    expect(layout("(Δ[A])/Δt")).toBe("[Δ[A]/Δt]");
    expect(layout("−32.9 (kJ)/(mol K)")).toBe("−32.9 [kJ/mol K]");
  });

  it("keeps the bracket round a whole fraction, so its subscript stays on it", () => {
    expect(layout("((∂U)/(∂T))_V")).toBe("([∂U/∂T])_V");
    expect(layout("[(∂ln(f))/(∂p)]_T")).toBe("[[∂ln(f)/∂p]]_T");
  });

  it("takes a symbol's scripts with it, and not a full stop", () => {
    expect(layout("(ΔH^o)/RT^2.")).toBe("[ΔH^o/RT^2].");
    expect(layout("μ = μ_i^* + (RT)/F_i")).toBe("μ = μ_i^* + [RT/F_i]");
  });

  it("nests fractions and roots", () => {
    expect(layout("√((8RT)/(πM))")).toBe("√[[8RT/πM]]");
    expect(layout("((a)/(b))/(c)")).toBe("[[a/b]/c]");
  });

  it("leaves plain slashes, exponents, function arguments and links alone", () => {
    for (const text of [
      "1/2",
      "(1/2)mv^2",
      "mol/L and and/or",
      "e^{−(Δr G°)/RT}",
      "e^(−x)/2",
      "f(x)/2",
      "ln(K)/RT",
      "see https://example.org/(a)/(b)",
      "√2 and √(",
    ]) {
      expect(layout(text)).toBe(text);
    }
  });

  it("returns the text unchanged when there is no slash or root", () => {
    expect(parseMath("H2O(ℓ) + CO2")).toEqual([{ kind: "text", text: "H2O(ℓ) + CO2" }]);
  });
});

/* Every section's text lays out without losing a character. */
describe("the corpus", () => {
  it("keeps every character of every section", { timeout: 60_000 }, async () => {
    const strip = (nodes: MathNode[]): string =>
      nodes
        .map((node) =>
          node.kind === "text" ? node.text : node.kind === "frac" ? `${strip(node.num)}${strip(node.den)}` : strip(node.body),
        )
        .join("");
    const books = Object.keys(BOOK_CHAPTERS) as BookKey[];
    for (const book of books) {
      for (const section of BOOK_CHAPTERS[book].flatMap((chapter) => chapter.sections)) {
        const text = await loadSectionText(section.file);
        for (const line of text!.split("\n")) {
          /* The stacked parts lose their grouping brackets, the slash, and a root's sign. */
          const kept = strip(parseMath(line)).replace(/[()√/]/g, "");
          expect(kept, `${book} ${section.number}`).toBe(line.replace(/[()√/]/g, ""));
        }
      }
    }
  });
});
