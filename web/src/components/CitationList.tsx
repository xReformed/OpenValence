import { useId, useState } from "react";
import type { Citation } from "../lib/types";
import ChemText from "./ChemText";
import { BookIcon, ExternalLinkIcon } from "./LandingIcons";

export default function CitationList({ citations }: { citations: Citation[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const panelId = useId();
  if (citations.length === 0) return null;

  const openIndex = citations.findIndex((citation) => citation.id === openId);
  const open = openIndex >= 0 ? citations[openIndex] : undefined;

  return (
    <div className="mt-5">
      <p className="flex items-center gap-1.5 text-xs text-neutral-500">
        <BookIcon className="h-3.5 w-3.5" />
        Sources
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {citations.map((citation, index) => {
          const selected = openId === citation.id;
          return (
            <button
              key={citation.id}
              type="button"
              aria-expanded={selected}
              aria-controls={panelId}
              onClick={() => setOpenId(selected ? null : citation.id)}
              className={`flex max-w-full items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs transition-colors ${
                selected
                  ? "border-accent-ink bg-accent/10 text-neutral-900"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              <span className="flex h-4 min-w-4 items-center justify-center rounded bg-neutral-100 px-1 text-[0.65rem] tabular-nums">
                {index + 1}
              </span>
              <span className="max-w-64 truncate">{citation.sourceTitle}</span>
            </button>
          );
        })}
      </div>

      {open && (
        <figure
          id={panelId}
          className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
        >
          <blockquote className="border-accent border-l-2 pl-3 text-sm leading-relaxed text-neutral-700">
            <ChemText text={open.snippet} />
          </blockquote>
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
            <span>
              [{openIndex + 1}] {open.sourceTitle}
            </span>
            <a
              href={open.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-ink inline-flex items-center gap-1 transition-colors"
            >
              Read the original
              <ExternalLinkIcon className="h-3 w-3" />
            </a>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
