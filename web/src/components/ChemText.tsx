import { useChemText } from "../hooks/useChemText";

export default function ChemText({ text }: { text: string }) {
  return <>{useChemText(text)}</>;
}
