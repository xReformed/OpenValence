import PracticeQuestion from "../PracticeQuestion";
import type { Question } from "../../lib/types";

/* The end-of-section practice questions, written for OpenValence and served
   by the API, then the score once any are answered. While questions remain,
   the locked Next link (SectionNav) scrolls here: #check-yourself. */
export default function CheckYourself({
  questions,
  context,
  answered,
  score,
  hasNext,
}: {
  questions: Question[];
  /** Which section this is, for "Ask for an explanation". */
  context: string;
  answered: number;
  score: number;
  hasNext: boolean;
}) {
  const remaining = questions.length - answered;
  return (
    <section aria-labelledby="check-yourself" className="mt-16 max-w-3xl">
      <h2 id="check-yourself" className="text-2xl tracking-tight">
        Check yourself
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        Practice questions written for OpenValence, not taken from the
        book. One try each; your score is shown after the last
        question.
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
            remaining === 0
              ? "border-accent-ink/25 bg-accent/5"
              : "border-neutral-200 bg-white"
          }`}
        >
          {remaining === 0 ? (
            <>
              <p className="text-accent-ink text-xs font-medium tracking-wide uppercase">
                Your score
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
                  : `You got ${score} of the ${questions.length} questions right.`}
                {hasNext && " The next section is unlocked."}
              </p>
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

/* Shown instead when the API couldn't be reached. */
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
