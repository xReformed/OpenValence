import { useMemo, type ReactNode } from "react";
import { parseChemText } from "../lib/chemText";
import { parseMath, type MathNode } from "../lib/mathText";

function formatRun(text: string, key: string): ReactNode[] {
  return parseChemText(text).map((segment, i) => {
    if (segment.kind === "sub") return <sub key={`${key}.${i}`}>{segment.text}</sub>;
    if (segment.kind === "sup") return <sup key={`${key}.${i}`}>{segment.text}</sup>;
    return segment.text;
  });
}

/* A bracket against a stacked fraction is drawn as tall as it, as TeX's
   \left( … \right) would: "((∂U)/(∂S))_V". */
function bigBracket(bracket: string, key: string): ReactNode {
  return (
    <span key={key} className="inline-block align-middle text-[1.6em] leading-none font-light">
      {bracket}
    </span>
  );
}

function formatNodes(nodes: MathNode[], key: string): ReactNode[] {
  return nodes.flatMap((node, i) => {
    const id = `${key}.${i}`;
    if (node.kind === "text") {
      let text = node.text;
      const out: ReactNode[] = [];
      const opens = nodes[i + 1]?.kind === "frac" && /[([]$/.test(text);
      const closes = nodes[i - 1]?.kind === "frac" && /^[)\]]/.test(text);
      if (closes) {
        out.push(bigBracket(text[0], id + "c"));
        text = text.slice(1);
      }
      const open = opens && text ? text[text.length - 1] : "";
      if (open) text = text.slice(0, -1);
      /* chemText only reads "_V" as a subscript after something; with the
         bracket drawn separately, a zero-width space stands in for it. */
      out.push(...formatRun(closes ? `\u200b${text}` : text, id));
      if (open) out.push(bigBracket(open, id + "o"));
      return out;
    }
    if (node.kind === "frac") {
      /* Stacked, with the slash kept for copying and screen readers. "relative"
         keeps the sr-only slash positioned inside the fraction: otherwise it is
         placed against the whole document, past the page's own scroll area,
         and the window gets a second scrollbar. */
      return (
        <span key={id} className="relative mx-0.5 inline-flex flex-col items-center text-[0.9em] leading-tight align-middle">
          <span className="border-b border-current px-0.5">{formatNodes(node.num, id + "n")}</span>
          <span className="sr-only">/</span>
          <span className="px-0.5">{formatNodes(node.den, id + "d")}</span>
        </span>
      );
    }
    return (
      <span key={id} className="whitespace-nowrap">
        √<span className="border-t border-current pl-0.5">{formatNodes(node.body, id + "r")}</span>
      </span>
    );
  });
}

export function formatChem(text: string): ReactNode {
  return formatNodes(parseMath(text), "m");
}

export function useChemText(text: string): ReactNode {
  return useMemo(() => formatChem(text), [text]);
}
