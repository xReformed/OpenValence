import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import ChemText from "../ChemText";
import { DocumentIcon } from "../LandingIcons";
import { findFigureImage, findPlaceholderImage } from "../../lib/figureImages";
import type { BookKey } from "../../lib/types";
import { FigureWithImage, PlaceholderImage } from "./SectionImages";

function chem(children: ReactNode): ReactNode {
  return Children.map(children, (child) =>
    typeof child === "string" ? <ChemText text={child} /> : child,
  );
}

/* The text inside rendered children, links included: a caption's
   "Source: http://…" arrives as a link element, not a string. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

const FigureSource = createContext<{ book: BookKey; section: string } | undefined>(undefined);

/* Inside an Example or Exercise, whose question may need its images. */
const InPracticeCard = createContext(false);

export function FigureSourceProvider({
  book,
  section,
  children,
}: {
  book: BookKey;
  section: string;
  children: ReactNode;
}) {
  const value = useMemo(() => ({ book, section }), [book, section]);
  return <FigureSource.Provider value={value}>{children}</FigureSource.Provider>;
}

/* The corpus has its own conventions on top of markdown: transcription notes,
   image placeholders, and figure captions with their alt text on the next
   line. Paragraphs keep their line breaks, because lettered lists and
   caption/description pairs are written one per line. */
function Paragraph({ children }: { children?: ReactNode }) {
  const source = useContext(FigureSource);
  const inPracticeCard = useContext(InPracticeCard);
  const book = source?.book;
  const parts = Children.toArray(children);
  /* "[Image #3: …]": numberImagePlaceholders wrote the position in. */
  const tag = typeof parts[0] === "string" ? parts[0].match(/^\[Image #(\d+)/) : null;
  if (tag) parts[0] = "[Image" + (parts[0] as string).slice(tag[0].length);
  const first = typeof parts[0] === "string" ? parts[0] : "";
  const whole = parts.length === 1 ? first : "";

  if (first.startsWith("[Note:")) {
    const last = parts.length - 1;
    const body = parts.map((part, i) => {
      if (typeof part !== "string") return part;
      let text = part;
      if (i === 0) text = text.replace(/^\[Note:\s*/, "");
      if (i === last) text = text.replace(/\]\s*$/, "");
      if (i === 0) text = text.charAt(0).toUpperCase() + text.slice(1);
      return text;
    });
    return (
      <aside className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
        <p className="mb-1 text-xs font-medium tracking-wide text-amber-800 uppercase">
          Transcription note
        </p>
        <p className="whitespace-pre-line">{chem(body)}</p>
      </aside>
    );
  }

  if (/^\[[^\]]+\]$/.test(whole.trim())) {
    const label = whole.trim().slice(1, -1);
    const image =
      tag && source ? findPlaceholderImage(source.book, source.section, Number(tag[1])) : undefined;
    if (image) {
      return <PlaceholderImage label={label} image={image} startOpen={inPracticeCard} />;
    }
    return (
      <p className="flex items-start gap-2 rounded-xl border border-dashed border-neutral-300 px-4 py-3 text-sm text-neutral-500">
        <DocumentIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{whole.trim().slice(1, -1)}</span>
      </p>
    );
  }

  /* "Figure 3.3.1: …" is a caption; "Figure 3.3.1 shows …" is prose. */
  if (/^Figure \d+\.\d+\.\d+[a-z]?:/.test(first)) {
    const image = book ? findFigureImage(book, first) : undefined;
    if (image) {
      const [caption, ...description] = parts.map(textOf).join("").split("\n");
      return (
        <FigureWithImage
          image={image}
          alt={description.join(" ").trim() || caption}
          caption={chem(children)}
        />
      );
    }
    return (
      <p className="border-l-2 border-neutral-200 pl-4 text-sm leading-relaxed whitespace-pre-line text-neutral-500">
        {chem(children)}
      </p>
    );
  }

  return <p className="whitespace-pre-line">{chem(parts)}</p>;
}

const MARKDOWN: Components = {
  p: Paragraph,
  h1: ({ children }) => (
    <h2 className="pt-6 text-2xl tracking-tight">{chem(children)}</h2>
  ),
  h2: ({ children }) => (
    <h2 className="pt-6 text-2xl tracking-tight">{chem(children)}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="pt-4 text-xl tracking-tight">{chem(children)}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="pt-2 text-lg tracking-tight">{chem(children)}</h4>
  ),
  strong: ({ children }) => (
    <strong className="font-medium text-neutral-900">{chem(children)}</strong>
  ),
  em: ({ children }) => <em>{chem(children)}</em>,
  /* ~~g Ag~~: a unit the book strikes out to show it cancelling. */
  del: ({ children }) => (
    <del className="decoration-neutral-400">{chem(children)}</del>
  ),
  ul: ({ children }) => (
    <ul className="flex list-disc flex-col gap-1.5 pl-6 marker:text-neutral-400">
      {children}
    </ul>
  ),
  ol: ({ children, start }) => (
    <ol
      start={start}
      className="flex list-decimal flex-col gap-1.5 pl-6 marker:text-neutral-400"
    >
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{chem(children)}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-neutral-200 bg-neutral-50 px-4 py-2.5 font-medium">
      {chem(children)}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-neutral-100 px-4 py-2.5">
      {chem(children)}
    </td>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-neutral-300 pl-4 text-neutral-600">
      {children}
    </blockquote>
  ),
};

export default function SectionMarkdown({
  children,
  openImages = false,
}: {
  children: string;
  openImages?: boolean;
}) {
  return (
    <InPracticeCard.Provider value={openImages}>
      <Markdown remarkPlugins={[remarkGfm]} components={MARKDOWN} skipHtml>
        {children}
      </Markdown>
    </InPracticeCard.Provider>
  );
}
