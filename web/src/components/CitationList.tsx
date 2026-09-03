import { useState } from "react";
import type { Citation } from "../lib/types";

/**
 * Numbered markers that expand in place. The snippet is the retrieved chunk
 * shown verbatim — the point is that the reader can check the claim without
 * leaving the answer.
 */
export default function CitationList({ citations }: { citations: Citation[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  if (citations.length === 0) return null;

  const open = citations.find((citation) => citation.id === openId);

  return (
    <div className="mt-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[0.55rem] text-neutral-400">Sources</span>
        {citations.map((citation, index) => (
          <button
            key={citation.id}
            type="button"
            onClick={() =>
              setOpenId(openId === citation.id ? null : citation.id)
            }
            className={`rounded border px-1.5 py-0.5 text-[0.55rem] transition-colors ${
              openId === citation.id
                ? "border-accent-ink text-accent-ink"
                : "border-neutral-200 text-neutral-500 hover:border-neutral-400"
            }`}
          >
            [{index + 1}]
          </button>
        ))}
      </div>

      {open && (
        <figure className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
          <blockquote className="font-sans text-xs leading-relaxed text-neutral-700">
            {open.snippet}
          </blockquote>
          <figcaption className="mt-2 text-[0.55rem] text-neutral-400">
            <a
              href={open.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-ink transition-colors"
            >
              {open.sourceTitle}&nbsp;&#8599;
            </a>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
