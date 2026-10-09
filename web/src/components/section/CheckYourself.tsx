import PracticeQuestion from "../PracticeQuestion";
import { SET_SIZE } from "../../lib/questionSets";
import type { Question } from "../../lib/types";

/* While the section is locked, the Next link (SectionNav) scrolls here:
   #check-yourself. */
export default function CheckYourself({
  questions,
  poolSize,
  unanswered,
  context,
  answered,
  score,
  passMark,
  passed,
  unlocked,
  hasNext,
  onDrawNew,
}: {
  questions: Question[];
  poolSize: number;
  /** Questions in the whole pool not answered yet. */
  unanswered: number;
  /** Which section this is, for "Ask for an explanation". */
  context: string;
  answered: number;
  score: number;
  passMark: number;
  passed: boolean;
  /** Next is open, from this set or an earlier one. */
  unlocked: boolean;
  hasNext: boolean;
  onDrawNew: () => void;
}) {
  const remaining = questions.length - answered;
  const nextSize = Math.min(SET_SIZE, poolSize);
  const goal = hasNext ? "unlock the next section" : "finish the book";
  const toTop = () =>
    document.getElementById("check-yourself")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section aria-labelledby="check-yourself" className="mt-16 max-w-3xl">
      <h2 id="check-yourself" className="text-2xl tracking-tight">
        Check yourself
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        {poolSize > questions.length
          ? `${questions.length} of this section's ${poolSize} practice questions, picked at random for you. `
          : "Practice questions "}
        written for OpenValence, not taken from the book. One try each; score{" "}
        {passMark} or more out of {questions.length} to {goal}.
      </p>
      <div className="mt-6 flex flex-col gap-5">
        {questions.map((question, i) => (
          <PracticeQuestion
            key={question.id}
            question={question}
            number={i + 1}
            context={context}
          />
        ))}
      </div>
      {answered > 0 && (
        <div
          role="status"
          className={`mt-5 rounded-2xl border p-5 sm:p-6 ${
            remaining > 0
              ? "border-neutral-200 bg-white"
              : passed
                ? "border-accent-ink/25 bg-accent/5"
                : "border-amber-200 bg-amber-50"
          }`}
        >
          {remaining === 0 ? (
            <>
              <p
                className={`text-xs font-medium tracking-wide uppercase ${
                  passed ? "text-accent-ink" : "text-amber-800"
                }`}
              >
                {passed ? "Passed" : "Not passed yet"}
              </p>
              <p className="mt-2 text-4xl tracking-tight tabular-nums">
                {score}
                <span className="text-neutral-400">
                  {" "}/ {questions.length}
                </span>{" "}
                <span className="text-lg text-neutral-500">correct</span>
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                {score === questions.length
                  ? "Every question right."
                  : `You got ${score} of the ${questions.length} questions right.`}{" "}
                {passed
                  ? hasNext
                    ? "The next section is unlocked."
                    : "You can finish the book."
                  : unlocked
                    ? `That's under ${passMark}, but you passed an earlier set, so the way on stays open.`
                    : `You need ${passMark} to ${goal}. Try again with a new set of questions.`}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <button
                  type="button"
                  onClick={() => {
                    onDrawNew();
                    toTop();
                  }}
                  className="rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-700"
                >
                  {passed ? `Try ${nextSize} more questions` : "Try again"}
                </button>
                <span className="text-sm text-neutral-500">
                  {unanswered > 0
                    ? `${nextSize} questions picked at random; ${unanswered} of this section's ${poolSize} are still new to you`
                    : poolSize > questions.length
                      ? `You've seen all ${poolSize} questions, so some will come round again`
                      : "The same questions, to try again"}
                </span>
              </div>
            </>
          ) : (
            <p className="text-sm text-neutral-600">
              {answered} of {questions.length} answered, {score}{" "}
              correct so far.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export function QuestionsUnavailable() {
  return (
    <p className="mt-16 max-w-3xl rounded-xl border border-dashed border-neutral-300 px-5 py-4 text-sm leading-relaxed text-neutral-500">
      This section&#39;s practice questions couldn&#39;t be loaded.
      Reload the page to try again.
      {import.meta.env.DEV && (
        <>
          {" "}
          Running locally? Start the API with{" "}
          <code className="text-neutral-700">dotnet run --project api</code>.
        </>
      )}
    </p>
  );
}
