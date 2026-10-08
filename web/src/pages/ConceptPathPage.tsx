import { Link, useLoaderData } from "react-router-dom";
import ChemText from "../components/ChemText";
import Eyebrow from "../components/Eyebrow";
import MasteryBar from "../components/MasteryBar";
import SiteFooter from "../components/SiteFooter";
import StatusPill from "../components/StatusPill";
import TopNavBar from "../components/TopNavBar";
import { levelCount } from "../lib/conceptLevels";
import type { Concept } from "../lib/types";

/* /roadmap/<concept> — one concept path, like /roadmap/balancing: its levels in order. */
export default function ConceptPathPage() {
  const concept = useLoaderData<Concept>();
  const available = concept.status === "in-progress";
  const hasAdvanced = concept.stages.some((stage) => stage.levels.some((level) => level.advanced));

  /* Levels are numbered straight through, so each stage starts where the last one ended. */
  const firstLevel = concept.stages.map((_, i) =>
    concept.stages.slice(0, i).reduce((sum, stage) => sum + stage.levels.length, 1),
  );

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 pb-20 sm:px-8 lg:px-12">
        <Link to="/roadmap" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900">
          &larr; Roadmap
        </Link>

        <header className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={concept.icon}
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 dark:invert dark:hue-rotate-180"
              />
              <StatusPill status={concept.status} />
            </div>
            <div className="mt-6">
              <Eyebrow>Concept path</Eyebrow>
            </div>
            <h1 className="mt-4 text-4xl leading-[1.1] tracking-tight sm:text-5xl">{concept.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">{concept.summary}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            {/* No questions are tagged with these levels yet, so nothing to score. */}
            <MasteryBar score={0} available={available} />
          </div>
        </header>

        <section className="mt-16">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl tracking-tight">Levels</h2>
            <p className="text-sm text-neutral-500 tabular-nums">{levelCount(concept)} levels</p>
          </div>
          {hasAdvanced && (
            <p className="mt-2 text-sm text-neutral-500">
              Levels marked Advanced are usually taught later; treat them as bonus levels.
            </p>
          )}
          {concept.stages.map((stage, s) => (
            <div key={stage.title ?? s} className={stage.title ? "mt-10" : "mt-6"}>
              {stage.title && <Eyebrow>{stage.title}</Eyebrow>}
              <ol start={firstLevel[s]} className={`flex flex-col gap-3 ${stage.title ? "mt-4" : ""}`}>
                {stage.levels.map(({ skill, tag, example, advanced }, i) => (
                  <li
                    key={tag}
                    className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white px-5 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-xs tabular-nums">
                      {firstLevel[s] + i}
                    </span>
                    <span className="min-w-0 flex-1">
                      <ChemText text={skill} />
                      {example && (
                        <span className="mt-1 block text-sm text-neutral-500">
                          <ChemText text={example} />
                        </span>
                      )}
                    </span>
                    {advanced && (
                      <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-neutral-500">
                        Advanced
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
