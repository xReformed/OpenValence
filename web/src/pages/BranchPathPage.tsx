import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import MasteryBar from "../components/MasteryBar";
import SiteFooter from "../components/SiteFooter";
import StatusPill from "../components/StatusPill";
import TopNavBar from "../components/TopNavBar";
import { ArrowRightIcon, ChevronRightIcon } from "../components/LandingIcons";
import { BOOK_CHAPTERS, type PathChapter } from "../lib/learningPaths.generated";
import { loadMastery } from "../lib/masteryStore";
import type { branchLoader } from "../router";

export function BranchPathRoute() {
  const { slug } = useParams<{ slug: string }>();
  return <BranchPathPage key={slug} />;
}

function ChapterState({ chapter }: { chapter: PathChapter }) {
  const ready = chapter.sections.filter((section) => section.ready).length;
  const total = chapter.sections.length;
  if (ready === total) {
    return <span className="text-accent-ink text-xs whitespace-nowrap">Ready</span>;
  }
  return (
    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-neutral-500">
      {ready === 0 ? "Being added" : `${ready} of ${total} ready`}
    </span>
  );
}

function ChapterRow({
  chapter,
  sectionHref,
}: {
  chapter: PathChapter;
  sectionHref: (number: string) => string;
}) {
  return (
    <details className="group rounded-xl border border-neutral-200 bg-white transition-colors open:border-neutral-400">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-xs tabular-nums">
          {chapter.number}
        </span>
        <span className="min-w-0 flex-1">{chapter.title}</span>
        <span className="hidden text-xs whitespace-nowrap text-neutral-400 sm:inline">
          {chapter.sections.length} sections
        </span>
        <ChapterState chapter={chapter} />
        <ChevronRightIcon className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none" />
      </summary>
      <ol className="flex flex-col gap-0.5 border-t border-neutral-100 px-3 py-3 text-sm sm:pl-15">
        {chapter.sections.map((section) => (
          <li key={section.number}>
            {/* Only sections with text are links; a stub would be an empty page. */}
            {section.ready ? (
              <Link
                to={sectionHref(section.number)}
                className="group/section flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-neutral-50"
              >
                <span className="w-10 shrink-0 text-neutral-400 tabular-nums">{section.number}</span>
                <span className="min-w-0 flex-1 text-neutral-700 group-hover/section:text-neutral-900">
                  {section.title}
                </span>
                <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-neutral-300 transition-[color,translate] group-hover/section:translate-x-0.5 group-hover/section:text-neutral-700" />
              </Link>
            ) : (
              <span className="flex items-center gap-3 px-2 py-1.5 text-neutral-400">
                <span className="w-10 shrink-0 tabular-nums">{section.number}</span>
                <span>
                  {section.title}
                  <span className="ml-2 text-xs">· being added</span>
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </details>
  );
}

export default function BranchPathPage() {
  /* branchLoader has already turned an unknown slug into a 404. */
  const branch = useLoaderData<typeof branchLoader>();
  const [mastery] = useState(loadMastery);

  return (
    /* Same scroll ownership and font override as the other pages. */
    <div className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 pb-20 sm:px-8 lg:px-12">
        <Link
          to={{ pathname: "/roadmap", search: `?branch=${branch.slug}` }}
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
        >
          &larr; Roadmap
        </Link>

        <header className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="flex items-center gap-4">
              <img src={branch.icon} alt="" width={64} height={64} className="h-16 w-16" />
              <StatusPill status={branch.status} />
            </div>
            <div className="mt-6">
              <Eyebrow>Learning path</Eyebrow>
            </div>
            <h1 className="mt-4 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              {branch.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              {branch.summary}
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <MasteryBar score={mastery[branch.slug] ?? 0} available={branch.status === "in-progress"} />
          </div>
        </header>

        {branch.path ? (
          branch.path.map((stage, i) => {
            const chapters = BOOK_CHAPTERS[stage.book];
            const sections = chapters.flatMap((chapter) => chapter.sections);
            const ready = sections.filter((section) => section.ready).length;
            return (
              <section key={stage.book} className="mt-16">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <Eyebrow>{`Step ${i + 1} · ${stage.label}`}</Eyebrow>
                    <h2 className="mt-3 text-2xl tracking-tight">{stage.title}</h2>
                    <p className="mt-2 text-neutral-500">{stage.note}</p>
                  </div>
                  <p className="text-sm text-neutral-500 tabular-nums">
                    {ready} of {sections.length} sections ready
                  </p>
                </div>
                <ol className="mt-6 flex flex-col gap-3">
                  {chapters.map((chapter) => (
                    <li key={chapter.number}>
                      <ChapterRow
                        chapter={chapter}
                        sectionHref={(number) => `/roadmap/${branch.slug}/${stage.book}/${number}`}
                      />
                    </li>
                  ))}
                </ol>
              </section>
            );
          })
        ) : (
          <section className="mt-16 rounded-2xl border border-dashed border-neutral-300 bg-white p-8">
            <h2 className="text-2xl tracking-tight">No textbook yet</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-neutral-500">
              A learning path needs an openly licensed textbook to build on, and
              this branch doesn't have one yet. When it does, its chapters will
              appear here in study order. It will cover:
            </p>
            <ul className="mt-5 flex flex-col gap-2 text-sm text-neutral-600">
              {branch.scope.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            {branch.alreadyCovered && (
              <p className="mt-6 text-sm leading-relaxed text-neutral-500">
                <span className="text-neutral-700">Already in the sources: </span>
                {branch.alreadyCovered}
              </p>
            )}
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
