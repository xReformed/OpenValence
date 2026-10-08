import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ChemText from "../ChemText";
import { ArrowRightIcon } from "../LandingIcons";
import { askHref } from "../../lib/topics";
import type { PracticeBlock } from "../../lib/types";
import SectionMarkdown from "./SectionMarkdown";

/* An Example or Exercise from the book: answer first, then compare with the
   book's solution. Ungraded; OpenValence's own questions are the graded ones. */
export default function PracticeCard({
  item,
  bookTitle,
}: {
  item: PracticeBlock;
  bookTitle: string;
}) {
  const id = useId();
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);
  const shown = useRef(false);
  const isExample = item.type === "Example";

  /* Move focus to the solution when it appears, so keyboard and screen-reader
     users land on it — but not on first render. */
  useEffect(() => {
    if (revealed && shown.current) revealRef.current?.focus();
    shown.current = true;
  }, [revealed]);

  const explainHref = askHref(
    `Explain how to solve ${item.type} ${item.number} from ${bookTitle}: ${item.prompt.replace(/\[Image #\d+/g, "[Image").replace(/\s+/g, " ").slice(0, 300)}`,
  );

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id={`${id}-title`} className="text-lg tracking-tight">
          <span className="text-neutral-400">
            {item.type} {item.number}
          </span>
          {item.title && <> · {item.title}</>}
        </h3>
        <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-500">
          {isExample ? "Worked example" : "Try it"}
        </span>
      </div>

      {item.prompt && (
        <div className="mt-4 flex flex-col gap-4">
          <SectionMarkdown openImages>{item.prompt}</SectionMarkdown>
        </div>
      )}

      {!revealed ? (
        <form
          className="mt-5"
          onSubmit={(event) => {
            event.preventDefault();
            if (answer.trim()) setRevealed(true);
          }}
        >
          <label htmlFor={`${id}-answer`} className="text-xs text-neutral-500">
            Your answer
          </label>
          <textarea
            id={`${id}-answer`}
            rows={2}
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                (event.ctrlKey || event.metaKey) &&
                answer.trim()
              ) {
                event.preventDefault();
                setRevealed(true);
              }
            }}
            placeholder={
              isExample
                ? "Work it out first, then check the solution"
                : "Type your answer"
            }
            className="mt-1.5 w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50/60 px-3.5 py-2.5 text-[0.95rem] leading-relaxed transition-colors placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white focus:outline-none"
          />
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="submit"
              disabled={!answer.trim()}
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-700 disabled:bg-neutral-200 disabled:text-neutral-400"
            >
              {isExample ? "Check the solution" : "Check my answer"}
            </button>
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="text-sm text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline"
            >
              Just show me
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-5 flex flex-col gap-3">
          {answer.trim() && (
            <div className="rounded-xl border border-neutral-200 px-4 py-3">
              <p className="text-xs text-neutral-500">Your answer</p>
              <p className="mt-1 leading-relaxed whitespace-pre-wrap">
                <ChemText text={answer.trim()} />
              </p>
            </div>
          )}

          <div
            ref={revealRef}
            tabIndex={-1}
            className="border-accent-ink/25 bg-accent/5 rounded-xl border px-4 py-4 outline-none"
          >
            <p className="text-accent-ink text-xs font-medium tracking-wide uppercase">
              {item.revealLabel} from the book
            </p>
            <div className="mt-3 flex flex-col gap-4">
              <SectionMarkdown openImages>{item.reveal}</SectionMarkdown>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {answer.trim() && (
              <span className="text-neutral-500">
                Compare your answer with the book&#39;s.
              </span>
            )}
            {!isExample && (
              <Link
                to={explainHref}
                className="group inline-flex items-center gap-1 text-neutral-700 transition-colors hover:text-neutral-900"
              >
                Ask for an explanation
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
