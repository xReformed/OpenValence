import { useRef, useSyncExternalStore } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import MasteryBar from "../components/MasteryBar";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import StatusPill from "../components/StatusPill";
import TopNavBar from "../components/TopNavBar";
import { ArrowRightIcon, BookIcon, CheckIcon } from "../components/LandingIcons";
import { branchMastery } from "../lib/mastery";
import { getFinished, subscribeToProgress } from "../lib/progress";
import { BRANCHES, findBranch } from "../lib/roadmap";
import { roadmapCardClass, scrollIntoViewSoftly } from "../lib/roadmapCard";

function SectionLabel({ children }: { children: string }) {
  return (
    <h3 className="text-[0.7rem] tracking-[0.25em] text-neutral-500 uppercase">{children}</h3>
  );
}

/* /roadmap/learn — the "Learn and Practice" card's page: the six branches of
   chemistry and the open branch's sources, scope and steps. */
export default function LearnPracticePage() {
  /* The open branch lives in the URL, so /roadmap/learn?branch=organic can be shared. */
  const [params, setParams] = useSearchParams();
  const branch = findBranch(params.get("branch"));
  const panelRef = useRef<HTMLElement>(null);
  const finished = useSyncExternalStore(subscribeToProgress, getFinished);

  function select(slug: string) {
    setParams({ branch: slug }, { replace: true, preventScrollReset: true });
    /* On narrow screens the panel sits below all six buttons; bring it up. */
    scrollIntoViewSoftly(panelRef.current);
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 pb-20 sm:px-8 lg:px-12">
        <Link to="/roadmap" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900">
          &larr; Roadmap
        </Link>

        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>Learn and Practice</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Six branches of chemistry, one textbook at a time.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            Every subject OpenValence answers comes from an openly licensed
            textbook. Pick a branch to see where it stands.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((card, i) => {
            const { slug, title, icon, status } = card;
            const selected = slug === branch.slug;
            return (
              <li key={slug}>
                <Reveal delay={i * 70} className="h-full">
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-controls="branch-panel"
                    onClick={() => select(slug)}
                    className={roadmapCardClass(selected)}
                  >
                    {/* A faded watermark bleeding off the corner; decorative,
                        since the branch name is right there in text. The icons
                        are black line art, so dark mode flips their brightness
                        (invert) but not their colours (hue-rotate back). */}
                    <img
                      src={icon}
                      alt=""
                      width={176}
                      height={176}
                      className={`pointer-events-none absolute -top-6 -right-6 h-36 w-36 dark:invert dark:hue-rotate-180 transition-[opacity,scale] sm:h-44 sm:w-44 duration-300 group-hover:scale-105 motion-reduce:transition-none ${
                        selected ? "opacity-45" : "opacity-25 group-hover:opacity-40"
                      }`}
                    />
                    <span className="relative self-start">
                      <StatusPill status={status} />
                    </span>
                    <span className="relative mt-10 block">
                      <span className="flex items-baseline gap-3">
                        <span className="text-sm text-neutral-400 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-2xl leading-tight tracking-tight">{title}</span>
                      </span>
                      <MasteryBar
                        className="mt-5"
                        score={branchMastery(card, finished)}
                        available={status === "in-progress"}
                      />
                    </span>
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <section
          id="branch-panel"
          ref={panelRef}
          aria-live="polite"
          aria-labelledby="branch-title"
          className="mt-6 scroll-mt-6 rounded-2xl border border-neutral-200 bg-white p-7 sm:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <img src={branch.icon} alt="" width={48} height={48} className="h-12 w-12 dark:invert dark:hue-rotate-180" />
              <h2 id="branch-title" className="text-3xl tracking-tight">
                {branch.title}
              </h2>
              <StatusPill status={branch.status} />
            </div>
            <Link
              to={`/roadmap/${branch.slug}`}
              className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-neutral-700"
            >
              Go to Roadmap
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
            {branch.summary}
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div>
              <SectionLabel>Sources</SectionLabel>
              {branch.sources.length > 0 ? (
                <ul className="mt-4 flex flex-col gap-3">
                  {branch.sources.map(({ title, license, progress, complete }) => (
                    <li key={title} className="rounded-xl border border-neutral-200 px-4 py-3">
                      <p className="flex items-center gap-2 text-sm">
                        <BookIcon className="h-3.5 w-3.5 shrink-0 text-neutral-500" />
                        {title}
                      </p>
                      <p className="mt-1.5 text-xs text-neutral-500">
                        {license} ·{" "}
                        <span className={complete ? "text-accent-ink" : undefined}>{progress}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 rounded-xl border border-dashed border-neutral-300 px-4 py-3 text-sm text-neutral-500">
                  No textbook chosen yet.
                </p>
              )}
              {branch.alreadyCovered && (
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  <span className="text-neutral-700">Already in the sources: </span>
                  {branch.alreadyCovered}
                </p>
              )}
            </div>

            <div>
              <SectionLabel>
                {branch.status === "in-progress" ? "What it covers" : "What it will cover"}
              </SectionLabel>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
                {branch.scope.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel>Steps</SectionLabel>
              <ol className="mt-4 flex flex-col gap-2.5 text-sm">
                {branch.steps.map(({ label, done }) => (
                  <li key={label} className="flex gap-2.5">
                    {done ? (
                      <CheckIcon className="text-accent-ink mt-0.5 h-4 w-4 shrink-0" />
                    ) : (
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-neutral-300" />
                    )}
                    <span className={done ? "text-neutral-500" : "text-neutral-700"}>
                      {label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
