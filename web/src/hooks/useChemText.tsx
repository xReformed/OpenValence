import { useMemo, type ReactNode } from "react";
import { parseChemText } from "../lib/chemText";

/**
 * Chemistry text → React nodes with real <sub>/<sup> elements, so "H2O",
 * "SO4^2−" and "ΔH°_f" render as H₂O, SO₄²⁻ and ΔH°f. Only presentation
 * changes; the ^ and _ markers are the sole characters dropped. Parsing rules
 * and their limits are documented in lib/chemText.ts.
 */
export function formatChem(text: string): ReactNode {
  return parseChemText(text).map((segment, i) => {
    if (segment.kind === "sub") return <sub key={i}>{segment.text}</sub>;
    if (segment.kind === "sup") return <sup key={i}>{segment.text}</sup>;
    return segment.text;
  });
}

/** formatChem, memoised so long answers aren't re-parsed on every render. */
export function useChemText(text: string): ReactNode {
  return useMemo(() => formatChem(text), [text]);
}
