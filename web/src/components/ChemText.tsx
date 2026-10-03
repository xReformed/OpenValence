import { useChemText } from "../hooks/useChemText";

/** Renders chemistry text with proper subscripts and superscripts. */
export default function ChemText({ text }: { text: string }) {
  return <>{useChemText(text)}</>;
}
