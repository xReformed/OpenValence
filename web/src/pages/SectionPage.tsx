import { useMemo, useRef, useSyncExternalStore } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ReadingProgress from "../components/ReadingProgress";
import SiteFooter from "../components/SiteFooter";
import TopNavBar from "../components/TopNavBar";
import CheckYourself, { QuestionsUnavailable } from "../components/section/CheckYourself";
import DevPracticeTools from "../components/section/DevPracticeTools";
import PracticeCard from "../components/section/PracticeCard";
import SectionMarkdown, { FigureSourceProvider } from "../components/section/SectionMarkdown";
import SectionNav from "../components/section/SectionNav";
import SectionSidebar from "../components/section/SectionSidebar";
import { useQuestionSet } from "../hooks/useQuestionSet";
import { numberImagePlaceholders } from "../lib/figureImages";
import { splitPractice } from "../lib/practiceBlocks";
import { getFinished, isFinished, markFinished, subscribeToProgress } from "../lib/progress";
import type { sectionLoader } from "../sectionLoader";

export function SectionRoute() {
  const { book, section } = useParams<{ book: string; section: string }>();
  return <SectionPage key={`${book}/${section}`} />;
}

export default function SectionPage() {
  /* sectionLoader has already turned an unknown branch, book, or section into a 404. */
  const {
    branch,
    stage,
    meta,
    chapter,
    section,
    text,
    questions,
    questionsUnavailable,
    previous,
    next,
  } = useLoaderData<typeof sectionLoader>();
  const scroller = useRef<HTMLDivElement>(null);
  const sectionHref = (number: string) =>
    `/roadmap/${branch.slug}/${stage.book}/${number}`;
  const segments = useMemo(
    () => (text ? splitPractice(numberImagePlaceholders(text)) : []),
    [text],
  );
  const bookQuestions = segments.filter(
    (segment) => segment.kind === "practice",
  ).length;
  /* OpenValence's questions: the section's pool, the random set of them this
     student sees, and their score on it (hooks/useQuestionSet.ts). */
  const set = useQuestionSet(`${stage.book}/${section.number}`, questions);
  const shown = set.questions;
  /* Next opens once a set reaches the pass mark, and stays open after that,
     or once the section is finished. */
  const finished = useSyncExternalStore(subscribeToProgress, getFinished);
  const locked =
    shown.length > 0 && !set.cleared && !isFinished(finished, stage.book, section.number);

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
            to={{ pathname: "/roadmap/learn", search: `?branch=${branch.slug}` }}
            className="transition-colors hover:text-neutral-900"
          >
            Learn and Practice
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
              <div className="mt-10 flex max-w-3xl flex-col gap-5 text-[1.02rem] leading-relaxed text-reading">
                <FigureSourceProvider book={stage.book} section={section.number}>
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
                </FigureSourceProvider>
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

            {questionsUnavailable && <QuestionsUnavailable />}

            {shown.length > 0 && (
              <CheckYourself
                key={set.round}
                questions={shown}
                poolSize={questions.length}
                unanswered={set.unanswered}
                context={`section ${section.number}, "${section.title}", of ${meta.title}`}
                answered={set.answered}
                score={set.score}
                passMark={set.passMark}
                passed={set.passed}
                unlocked={!locked}
                hasNext={Boolean(next)}
                onDrawNew={set.drawNew}
              />
            )}

            <SectionNav
              previous={previous}
              next={next}
              locked={locked}
              total={shown.length}
              remaining={shown.length - set.answered}
              passMark={set.passMark}
              sectionHref={sectionHref}
              pathHref={`/roadmap/${branch.slug}`}
              bookTitle={stage.title}
              onContinue={() => markFinished(stage.book, section.number)}
            />
          </article>

          <SectionSidebar
            branch={branch}
            section={section}
            meta={meta}
            questions={shown.length}
            poolSize={questions.length}
            answered={set.answered}
            locked={locked}
            score={set.score}
            passMark={set.passMark}
            bookQuestions={bookQuestions}
            hasNext={Boolean(next)}
          />
        </div>
      </main>

      <SiteFooter />
      {import.meta.env.DEV && shown.length > 0 && (
        <DevPracticeTools book={stage.book} section={section.number} questions={shown} pool={questions} />
      )}
    </div>
  );
}
