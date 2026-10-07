import { useId, useState, useSyncExternalStore, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { gradeNumeric, shuffled } from "../lib/grading";
import { getAnswers, recordAnswer, subscribeToPractice } from "../lib/practiceStore";
import { askHref } from "../lib/topics";
import type {
  MultipleChoiceQuestion,
  NumericQuestion,
  PracticeAnswer,
  Question,
} from "../lib/types";
import ChemText from "./ChemText";
import { ArrowRightIcon, CheckIcon } from "./LandingIcons";

/* One attempt per question, so the section's score means something: the
   answer locks when checked, and the reasoning is shown either way. */
export default function PracticeQuestion({
  question,
  number,
  context,
}: {
  question: Question;
  number: number;
  /* "section 12.6 of Beginning Chemistry (Ball)", for "Ask for an explanation". */
  context: string;
}) {
  const id = useId();
  const saved = useSyncExternalStore(subscribeToPractice, getAnswers)[question.id];
  return (
    <section
      aria-labelledby={`${id}-title`}
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id={`${id}-title`} className="text-lg tracking-tight text-neutral-400">
          Question {number}
        </h3>
        {saved?.result === "correct" ? (
          <span className="bg-accent/15 text-accent-ink inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs">
            <CheckIcon className="h-3 w-3" />
            Correct
          </span>
        ) : saved ? (
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-500">
            Incorrect
          </span>
        ) : (
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-500">
            {question.type === "numeric" ? "Calculate" : "Choose one"}
          </span>
        )}
      </div>
      <p className="mt-4 leading-relaxed text-neutral-800">
        <ChemText text={question.prompt} />
      </p>
      {question.type === "numeric" ? (
        <NumericAnswer question={question} saved={saved} id={id} context={context} />
      ) : (
        <ChoiceAnswer question={question} saved={saved} id={id} context={context} />
      )}
    </section>
  );
}

interface AnswerProps<Q> {
  question: Q;
  saved?: PracticeAnswer;
  id: string;
  context: string;
}

function NumericAnswer({ question, saved, id, context }: AnswerProps<NumericQuestion>) {
  const [input, setInput] = useState("");
  const [unreadable, setUnreadable] = useState(false);

  return (
    <form
      className="mt-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (saved || !input.trim()) return;
        const graded = gradeNumeric(question, input);
        if (graded === "unreadable") setUnreadable(true);
        else recordAnswer(question.id, { result: graded, answer: input.trim() });
      }}
    >
      <label htmlFor={`${id}-answer`} className="text-xs text-neutral-500">
        Your answer
      </label>
      <div className="mt-1.5 flex items-center gap-2">
        <input
          id={`${id}-answer`}
          value={saved ? saved.answer : input}
          readOnly={Boolean(saved)}
          autoComplete="off"
          onChange={(event) => {
            setInput(event.target.value);
            setUnreadable(false);
          }}
          placeholder="e.g. 6.0e-3 or 6.0 × 10^-3"
          className="w-full max-w-64 rounded-xl border border-neutral-200 bg-neutral-50/60 px-3.5 py-2.5 tabular-nums transition-colors placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white focus:outline-none read-only:bg-white"
        />
        {question.unit && <span className="text-neutral-500">{question.unit}</span>}
      </div>

      {unreadable && (
        <p role="status" className="mt-2 text-sm text-neutral-500">
          Couldn&#39;t read that as a number. Try a form like 4.49, 4.0e-11, or 4.0 × 10^-11.
        </p>
      )}

      {saved ? (
        <Feedback saved={saved} explanation={question.explanation} question={question} context={context} />
      ) : (
        <SubmitRow disabled={!input.trim()} />
      )}
    </form>
  );
}

function ChoiceAnswer({ question, saved, id, context }: AnswerProps<MultipleChoiceQuestion>) {
  const [order] = useState(() => shuffled(question.choices));
  const [picked, setPicked] = useState<number | null>(null);
  const chosen = saved ? order.findIndex((option) => option.text === saved.answer) : picked;

  return (
    <form
      className="mt-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (saved || picked === null) return;
        const choice = order[picked];
        recordAnswer(question.id, {
          result: choice.correct ? "correct" : "incorrect",
          answer: choice.text,
        });
      }}
    >
      {/* relative: the sr-only legend is absolutely positioned, and without a
          positioned ancestor it would hang off the document and give the whole
          page a second scrollbar. */}
      <fieldset className="relative">
        <legend className="sr-only">Choices</legend>
        <div className="flex flex-col gap-2">
          {order.map((option, i) => {
            /* Once answered, the right choice is marked too: there's no second try. */
            const state = !saved
              ? i === chosen
                ? "picked"
                : "idle"
              : option.correct
                ? "right"
                : i === chosen
                  ? "wrong"
                  : "idle";
            return (
              <label
                key={option.text}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 transition-colors ${
                  state === "right"
                    ? "border-accent-ink bg-accent/10"
                    : state === "wrong"
                      ? "border-neutral-400 bg-neutral-50"
                      : state === "picked"
                        ? "border-neutral-900"
                        : "border-neutral-200"
                } ${saved ? "cursor-default" : "cursor-pointer hover:border-neutral-400"}`}
              >
                <input
                  type="radio"
                  name={`${id}-choice`}
                  checked={i === chosen}
                  disabled={Boolean(saved)}
                  onChange={() => setPicked(i)}
                  className="accent-accent-ink mt-1"
                />
                <span className="leading-relaxed">
                  <ChemText text={option.text} />
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {saved ? (
        <Feedback
          saved={saved}
          detail={saved.result === "incorrect" && chosen !== null ? order[chosen]?.why : undefined}
          explanation={question.explanation}
          question={question}
          context={context}
        />
      ) : (
        <SubmitRow disabled={picked === null} />
      )}
    </form>
  );
}

function SubmitRow({ disabled }: { disabled: boolean }) {
  return (
    <div className="mt-4">
      <button
        type="submit"
        disabled={disabled}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-700 disabled:bg-neutral-200 disabled:text-neutral-400"
      >
        Check my answer
      </button>
    </div>
  );
}

function Feedback({
  saved,
  detail,
  explanation,
  question,
  context,
}: {
  saved: PracticeAnswer;
  detail?: string;
  explanation: string;
  question: Question;
  context: string;
}) {
  const correct = saved.result === "correct";
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div
        role="status"
        className={`rounded-xl border px-4 py-4 ${
          correct ? "border-accent-ink/25 bg-accent/5" : "border-neutral-200 bg-neutral-50/60"
        }`}
      >
        <p
          className={`text-xs font-medium tracking-wide uppercase ${
            correct ? "text-accent-ink" : "text-neutral-500"
          }`}
        >
          {correct ? "Correct" : "Not quite"}
        </p>
        {detail && <Line>{detail}</Line>}
        <Line>{explanation}</Line>
      </div>

      <Link
        to={askHref(`Explain this practice question about ${context}: ${question.prompt}`)}
        className="group inline-flex items-center gap-1 self-start text-sm text-neutral-700 transition-colors hover:text-neutral-900"
      >
        Ask for an explanation
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function Line({ children }: { children: string }): ReactNode {
  return (
    <p className="mt-2 leading-relaxed text-neutral-800">
      <ChemText text={children} />
    </p>
  );
}
