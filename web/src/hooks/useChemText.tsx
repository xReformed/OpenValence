import { useMemo, type ReactNode } from "react";
import { parseChemText } from "../lib/chemText";

export function formatChem(text: string): ReactNode {
  return parseChemText(text).map((segment, i) => {
    if (segment.kind === "sub") return <sub key={i}>{segment.text}</sub>;
    if (segment.kind === "sup") return <sup key={i}>{segment.text}</sup>;
    return segment.text;
  });
}

export function useChemText(text: string): ReactNode {
  return useMemo(() => formatChem(text), [text]);
}
