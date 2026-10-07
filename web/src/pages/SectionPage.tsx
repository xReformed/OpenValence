import {
  Children,
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import Markdown, { type Components } from "react-markdown";
import { Link, useLoaderData, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import ChemText from "../components/ChemText";
import MasteryBar from "../components/MasteryBar";
import PracticeQuestion from "../components/PracticeQuestion";
import ReadingProgress from "../components/ReadingProgress";
import SiteFooter from "../components/SiteFooter";
import TopNavBar from "../components/TopNavBar";
import {
  ArrowRightIcon,
  ChatIcon,
  ChevronRightIcon,
  DocumentIcon,
  ExternalLinkIcon,
  LockIcon,
} from "../components/LandingIcons";
import {
  findFigureImage,
  findPlaceholderImage,
  numberImagePlaceholders,
} from "../lib/figureImages";
import { splitPractice } from "../lib/practiceBlocks";
import { practiceFor } from "../lib/practiceQuestions";
import { getAnswers, subscribeToPractice } from "../lib/practiceStore";
import { branchMastery, branchProgress } from "../lib/mastery";
import { getFinished, markFinished, subscribeToProgress } from "../lib/progress";
import { askHref } from "../lib/topics";
import type { BookKey, FigureImage, PracticeBlock } from "../lib/types";
import type { sectionLoader } from "../router";

const LICENSE_URLS: Record<string, string> = {
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY-NC-SA 3.0": "https://creativecommons.org/licenses/by-nc-sa/3.0/",
};

/** Run the chemistry-notation renderer over plain-text children. */
function chem(children: ReactNode): ReactNode {
  return Children.map(children, (child) =>
    typeof child === "string" ? <ChemText text={child} /> : child,
  );
}

/* Which section is being rendered, for looking up stand-in images. */
const FigureSource = createContext<{ book: BookKey; section: string } | undefined>(undefined);

/* Inside an Example or Exercise, whose question may need its images. */
const InPracticeCard = createContext(false);

/* An "[Image: …]" box with a stand-in image: the book's description stays
   visible, and the image opens below it. */
function PlaceholderImage({
  label,
  image,
  startOpen,
}: {
  label: string;
  image: FigureImage;
  startOpen: boolean;
}) {
  return (
    <details
      open={startOpen}
      className="group rounded-xl border border-dashed border-neutral-300 text-sm text-neutral-500"
    >
      <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 transition-colors hover:text-neutral-700 [&::-webkit-details-marker]:hidden">
        <DocumentIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <span className="min-w-0 flex-1">{label}</span>
        <span className="flex shrink-0 items-center gap-1 text-neutral-700">
          <span className="group-open:hidden">Show</span>
          <span className="hidden group-open:inline">Hide</span>
          <ChevronRightIcon className="h-3.5 w-3.5 rotate-90 transition-transform group-open:-rotate-90 motion-reduce:transition-none" />
        </span>
      </summary>
      <div className="px-4 pb-4">
        <img
          src={image.src}
          alt={label.replace(/^Image:\s*/, "")}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="h-auto w-full rounded-lg border border-neutral-200 bg-neutral-100"
        />
      </div>
    </details>
  );
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
    /* A stand-in image for this figure, if one has been made (see figureImages.ts).
       The book's caption and description stay visible exactly as printed; the
       description also serves as the image's alt text. */
    const image = book ? findFigureImage(book, first) : undefined;
    const plain = parts.every((part) => typeof part === "string")
      ? parts.join("")
      : null;
    if (image && plain !== null) {
      const [caption, ...description] = plain.split("\n");
      return (
        <figure className="flex flex-col gap-3">
          <img
            src={image.src}
            alt={description.join(" ").trim() || caption}
            width={image.width}
            height={image.height}
            loading="lazy"
            className="h-auto w-full rounded-xl border border-neutral-200 bg-neutral-100"
          />
          <figcaption className="border-l-2 border-neutral-200 pl-4 text-sm leading-relaxed text-neutral-500">
            <span className="whitespace-pre-line">{chem(children)}</span>
          </figcaption>
        </figure>
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

function SectionMarkdown({ children }: { children: string }) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} components={MARKDOWN} skipHtml>
      {children}
    </Markdown>
  );
}

/* An Example or Exercise from the book: answer first, then compare with the
   book's solution. Ungraded; OpenValence's own questions are the graded ones. */
function PracticeCard({
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
    <InPracticeCard.Provider value={true}>
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
            <SectionMarkdown>{item.prompt}</SectionMarkdown>
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
                <SectionMarkdown>{item.reveal}</SectionMarkdown>
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
    </InPracticeCard.Provider>
  );
}

export function SectionRoute() {
  const { book, section } = useParams<{ book: string; section: string }>();
  return <SectionPage key={`${book}/${section}`} />;
}

export default function SectionPage() {
  /* sectionLoader has already turned an unknown branch, book, or section into a 404. */
  const { branch, stage, meta, chapter, section, text, previous, next } =
    useLoaderData<typeof sectionLoader>();
  const scroller = useRef<HTMLDivElement>(null);
  const sectionHref = (number: string) =>
    `/roadmap/${branch.slug}/${stage.book}/${number}`;
  const segments = useMemo(
    () => (text ? splitPractice(numberImagePlaceholders(text)) : []),
    [text],
  );
  const figureSource = useMemo(
    () => ({ book: stage.book, section: section.number }),
    [stage.book, section.number],
  );
  const questionCount = segments.filter(
    (segment) => segment.kind === "practice",
  ).length;
  const questions = text ? practiceFor(stage.book, section.number) : [];
  const answers = useSyncExternalStore(subscribeToPractice, getAnswers);
  const answered = questions.filter((question) => answers[question.id]).length;
  const score = questions.filter((question) => answers[question.id]?.result === "correct").length;
  const remaining = questions.length - answered;
  const finished = useSyncExternalStore(subscribeToProgress, getFinished);
  const pathProgress = branchProgress(branch, finished);
  const plural = (n: number, word: string) =>
    `${n} ${word}${n === 1 ? "" : "s"}`;
  const practiceSummary =
    questions.length > 0
      ? `${plural(questions.length, "practice question")} at the end of the section, checked automatically${
          questionCount > 0
            ? `, plus ${questionCount} from the book to compare with its solutions`
            : ""
        }. ${
          remaining === 0
            ? `You scored ${score} out of ${questions.length}.`
            : `${answered} of ${questions.length} answered; answer them all to ${next ? "unlock the next section" : "finish the book"}.`
        }`
      : questionCount > 0
        ? `This section has ${plural(questionCount, "question")} from the book. Answer each one, then compare with the book's solution.`
        : "Graded practice questions for this section are coming soon.";
  const credit =
    meta.author === "Anonymous"
      ? "published on LibreTexts"
      : `by ${meta.author}, via LibreTexts`;

  return (
    <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <ReadingProgress container={scroller} />
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 pb-20 sm:px-8 lg:px-12">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500"
        >
          <Link
            to={{ pathname: "/roadmap", search: `?branch=${branch.slug}` }}
            className="transition-colors hover:text-neutral-900"
          >
            Roadmap
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            to={`/roadmap/${branch.slug}`}
            className="transition-colors hover:text-neutral-900"
          >
            {branch.title}
          </Link>
          <span aria-hidden="true">/</span>
          <span>
            {stage.title} · Chapter {chapter.number}
          </span>
        </nav>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <article className="min-w-0">
            <header>
              <p className="text-sm text-neutral-500">
                Chapter {chapter.number}: {chapter.title}
              </p>
              <h1 className="mt-3 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
                <span className="text-neutral-400 tabular-nums">
                  {section.number}
                </span>{" "}
                {section.title}
              </h1>
            </header>

            {text ? (
              <div className="mt-10 flex max-w-3xl flex-col gap-5 text-[1.02rem] leading-relaxed text-neutral-800">
                <FigureSource.Provider value={figureSource}>
                  {segments.map((segment, i) =>
                    segment.kind === "text" ? (
                      <SectionMarkdown key={i}>
                        {segment.markdown}
                      </SectionMarkdown>
                    ) : (
                      <PracticeCard
                        key={i}
                        item={segment}
                        bookTitle={meta.title}
                      />
                    ),
                  )}
                </FigureSource.Provider>
              </div>
            ) : (
              <p className="mt-10 max-w-3xl rounded-xl border border-dashed border-neutral-300 px-5 py-4 text-neutral-500">
                This section is still being added to the corpus. Check back
                soon, or{" "}
                <Link
                  to={`/roadmap/${branch.slug}`}
                  className="underline underline-offset-4"
                >
                  pick another section
                </Link>
                .
              </p>
            )}

            {questions.length > 0 && (
              <section
                aria-labelledby="check-yourself"
                className="mt-16 max-w-3xl"
              >
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
                      context={`section ${section.number}, "${section.title}", of ${meta.title}`}
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
                          {next && " The next section is unlocked."}
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
            )}

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
              {/* The last section of a book has no Next; Finish marks it done
                  and goes back to the learning path for the next book. */}
              {remaining === 0 && (
                <Link
                  to={next ? sectionHref(next.number) : `/roadmap/${branch.slug}`}
                  onClick={() => markFinished(stage.book, section.number)}
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
                      <>Finish {stage.title}</>
                    )}
                  </span>
                </Link>
              )}
              {remaining > 0 && (
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
                      <>Finish {stage.title}</>
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
                    {remaining === 1
                      ? `Answer the last question to ${next ? "continue" : "finish"}`
                      : `Answer the ${remaining} remaining questions to ${next ? "continue" : "finish"}`}
                  </button>
                </div>
              )}
            </nav>
          </article>

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
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
