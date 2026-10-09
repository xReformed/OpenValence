import { describe, expect, it } from "vitest";
import { parseChemText } from "./chemText";

function render(text: string): string {
  return parseChemText(text)
    .map((segment) =>
      segment.kind === "sub" ? `_{${segment.text}}` : segment.kind === "sup" ? `^{${segment.text}}` : segment.text,
    )
    .join("");
}

describe("parseChemText", () => {
  it.each([
    ["10^−5", "10^{−5}"],
    ["10^-5", "10^{−5}"],
    ["1s^2 2s^2", "1s^{2} 2s^{2}"],
    ["m^3", "m^{3}"],
    ["SO4^2−", "SO_{4}^{2−}"],
    ["Fe^2+", "Fe^{2+}"],
    ["x^{n+1}", "x^{n+1}"],
    ["x^(n+1)", "x^{n+1}"],
  ])("raises carets: %j", (input, expected) => {
    expect(render(input)).toBe(expected);
  });

  it.each([
    ["ΔH°_f", "ΔH°_{f}"],
    ["ΔH_vap", "ΔH_{vap}"],
    ["u_rms", "u_{rms}"],
    ["t_(1/2)", "t_{1/2}"],
    ["K_{eq}", "K_{eq}"],
  ])("lowers underscores: %j", (input, expected) => {
    expect(render(input)).toBe(expected);
  });

  it.each([
    ["H2O", "H_{2}O"],
    ["CH3CO2H", "CH_{3}CO_{2}H"],
    ["Ca(OH)2", "Ca(OH)_{2}"],
    ["CuSO4·5H2O", "CuSO_{4}·5H_{2}O"],
    ["CaCl2(aq)", "CaCl_{2}(aq)"],
    ["2H2(g) + O2(g)", "2H_{2}(g) + O_{2}(g)"],
    ["2H2O(ℓ)", "2H_{2}O(ℓ)"],
    ["C2H5OH(ℓ) and Br2(ℓ)", "C_{2}H_{5}OH(ℓ) and Br_{2}(ℓ)"],
  ])("subscripts formulas: %j", (input, expected) => {
    expect(render(input)).toBe(expected);
  });

  it.each([
    ["H3O+", "H_{3}O^{+}"],
    ["OH−", "OH^{−}"],
    ["NH4+", "NH_{4}^{+}"],
    ["Na+", "Na^{+}"],
    ["Fe3+", "Fe^{3+}"],
    ["[Co(en)3]3+", "[Co(en)_{3}]^{3+}"],
    ["an e− is", "an e^{−} is"],
  ])("raises charges: %j", (input, expected) => {
    expect(render(input)).toBe(expected);
  });

  it.each([
    ["Ka", "K_{a}"],
    ["pKa", "pK_{a}"],
    ["Ksp", "K_{sp}"],
    ["Kw", "K_{w}"],
    ["E°cell", "E°_{cell}"],
    ["sp3", "sp^{3}"],
    ["sp3d2", "sp^{3}d^{2}"],
  ])("formats constants and hybrids: %j", (input, expected) => {
    expect(render(input)).toBe(expected);
  });

  it("finds formulas inside prose brackets", () => {
    expect(render("the ion (CO3^2−) is")).toBe("the ion (CO_{3}^{2−}) is");
    expect(render("gases (H2O, CO2)")).toBe("gases (H_{2}O, CO_{2})");
  });

  it.each([
    "Table P1",
    "section 14.6",
    "COVID19",
    "MP3",
    "In 1995, 12 people",
    "Answer b",
    "https://example.org/a_b/H2O",
  ])("leaves plain text alone: %j", (input) => {
    expect(render(input)).toBe(input);
  });

  it("returns one text segment for text without notation", () => {
    expect(parseChemText("Matter takes up space.")).toEqual([{ kind: "text", text: "Matter takes up space." }]);
  });
});
