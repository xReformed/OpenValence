import { Link } from "react-router-dom";
import { LockIcon } from "../LandingIcons";
import type { PathSection } from "../../lib/types";

export default function SectionNav({
  previous,
  next,
  locked,
  total,
  remaining,
  passMark,
  sectionHref,
  pathHref,
  bookTitle,
  onContinue,
}: {
  previous?: PathSection;
  next?: PathSection;
  locked: boolean;
  /** Practice questions in the set shown, and how many are still unanswered. */
  total: number;
  remaining: number;
  passMark: number;
  sectionHref: (number: string) => string;
  pathHref: string;
  bookTitle: string;
  onContinue: () => void;
}) {
  return (
    <nav
      aria-label="Previous and next section"
      className="mt-16 grid max-w-3xl gap-3 border-t border-neutral-200 pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          to={sectionHref(previous.number)}
          className="group rounded-xl border border-neutral-200 bg-white px-5 py-4 transition-colors hover:border-neutral-400"
        >
          <span className="text-xs text-neutral-500">
            &larr; Previous
          </span>
          <span className="mt-1 block">
            <span className="text-neutral-400 tabular-nums">
              {previous.number}
            </span>{" "}
            {previous.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {!locked && (
        <Link
          to={next ? sectionHref(next.number) : pathHref}
          onClick={onContinue}
          className="group rounded-xl border border-neutral-200 bg-white px-5 py-4 text-right transition-colors hover:border-neutral-400"
        >
          <span className="text-xs text-neutral-500">
            {next ? "Next" : "Finish"} &rarr;
          </span>
          <span className="mt-1 block">
            {next ? (
              <>
                <span className="text-neutral-400 tabular-nums">
                  {next.number}
                </span>{" "}
                {next.title}
              </>
            ) : (
              <>Finish {bookTitle}</>
            )}
          </span>
        </Link>
      )}
      {locked && (
        <div
          aria-disabled="true"
          className="rounded-xl border border-dashed border-neutral-300 px-5 py-4 text-right"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
            <LockIcon className="h-3.5 w-3.5" />
            {next ? "Next" : "Finish"}
          </span>
          <span className="mt-1 block text-neutral-400">
            {next ? (
              <>
                <span className="tabular-nums">{next.number}</span>{" "}
                {next.title}
              </>
            ) : (
              <>Finish {bookTitle}</>
            )}
          </span>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("check-yourself")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="mt-2 text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
          >
            {`Score ${passMark} of ${total} to ${next ? "continue" : "finish"}: `}
            {remaining === 0
              ? "try again"
              : `${remaining} ${remaining === 1 ? "question" : "questions"} left`}
          </button>
        </div>
      )}
    </nav>
  );
}
