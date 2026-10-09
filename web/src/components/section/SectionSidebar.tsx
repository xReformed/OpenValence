import { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import MasteryBar from "../MasteryBar";
import { ArrowRightIcon, ChatIcon, ExternalLinkIcon } from "../LandingIcons";
import { branchMastery, branchProgress } from "../../lib/mastery";
import { getFinished, subscribeToProgress } from "../../lib/progress";
import { askHref } from "../../lib/topics";
import type { BookMeta, Branch, PathSection } from "../../lib/types";

const LICENSE_URLS: Record<string, string> = {
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY-NC-SA 3.0": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
};

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

export default function SectionSidebar({
  branch,
  section,
  meta,
  questions,
  poolSize,
  answered,
  locked,
  score,
  passMark,
  bookQuestions,
  hasNext,
}: {
  branch: Branch;
  section: PathSection;
  meta: BookMeta;
  /** OpenValence's practice questions in the set shown: how many, answered, and right. */
  questions: number;
  poolSize: number;
  answered: number;
  locked: boolean;
  score: number;
  passMark: number;
  /** The book's own Examples and Exercises in the section. */
  bookQuestions: number;
  hasNext: boolean;
}) {
  const finished = useSyncExternalStore(subscribeToProgress, getFinished);
  const pathProgress = branchProgress(branch, finished);
  const remaining = questions - answered;
  const practiceSummary =
    questions > 0
      ? `${plural(questions, "practice question")} at the end of the section${
          poolSize > questions ? `, picked at random from ${poolSize}` : ""
        }, checked automatically${
          bookQuestions > 0
            ? `, plus ${bookQuestions} from the book to compare with its solutions`
            : ""
        }. ${
          remaining === 0
            ? `You scored ${score} out of ${questions}.${
                locked ? ` You need ${passMark} to ${hasNext ? "unlock the next section" : "finish the book"}, so try again.` : ""
              }`
            : locked
              ? `${answered} of ${questions} answered; score ${passMark} or more to ${hasNext ? "unlock the next section" : "finish the book"}.`
              : `${answered} of ${questions} answered.`
        }`
      : bookQuestions > 0
        ? `This section has ${plural(bookQuestions, "question")} from the book. Answer each one, then compare with the book's solution.`
        : "Graded practice questions for this section are coming soon.";
  const credit =
    meta.author === "Anonymous"
      ? "published on LibreTexts"
      : `by ${meta.author}, via LibreTexts`;

  return (
    <aside className="flex flex-col gap-4 lg:sticky lg:top-6">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="flex items-center gap-2 font-medium">
          <ChatIcon className="h-4 w-4" />
          Ask about this section
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          Get an answer drawn from the sources, with every claim linked to
          its passage.
        </p>
        <Link
          to={askHref(
            `Explain section ${section.number}, "${section.title}", from ${meta.title}.`,
          )}
          className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-neutral-700"
        >
          Ask a question
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-5">
        <h2 className="font-medium">Practice</h2>
        <MasteryBar
          className="mt-4"
          score={branchMastery(branch, finished)}
          available
        />
        <p className="mt-2 text-xs text-neutral-500 tabular-nums">
          {pathProgress.finished} of {pathProgress.total} sections of{" "}
          {branch.title.toLowerCase()} finished
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
          {practiceSummary}
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm leading-relaxed text-neutral-600">
        <h2 className="font-medium text-neutral-900">Source</h2>
        <p className="mt-2">
          From <cite>{meta.title}</cite>, {credit}. Licensed{" "}
          <a
            href={LICENSE_URLS[meta.license]}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
          >
            {meta.license}
          </a>
          . Transcribed word for word; transcription notes are marked
          separately.
        </p>
        {section.sourceUrl && (
          <a
            href={section.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-ink mt-3 inline-flex items-center gap-1 transition-colors"
          >
            Read the original
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </aside>
  );
}
