import { useSyncExternalStore } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import MasteryBar from "../components/MasteryBar";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import StatusPill from "../components/StatusPill";
import TopNavBar from "../components/TopNavBar";
import learnPracticeIcon from "../assets/concept/learn-and-practice.webp";
import { levelCount } from "../lib/conceptLevels";
import { CONCEPTS } from "../lib/concepts";
import { branchMastery } from "../lib/mastery";
import { getFinished, subscribeToProgress } from "../lib/progress";
import { BRANCHES } from "../lib/roadmap";
import { roadmapCardClass } from "../lib/roadmapCard";

/* Faded artwork bleeding off a card's corner, like the branch cards'. Dark mode
   flips its brightness (invert) but not its colours (hue-rotate back). */
function CardArtwork({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      width={176}
      height={176}
      className="pointer-events-none absolute -top-6 -right-6 h-36 w-36 opacity-25 transition-[opacity,scale] duration-300 group-hover:scale-105 group-hover:opacity-40 motion-reduce:transition-none sm:h-44 sm:w-44 dark:invert dark:hue-rotate-180"
    />
  );
}

export default function RoadmapPage() {
  const [params] = useSearchParams();
  const finished = useSyncExternalStore(subscribeToProgress, getFinished);

  /* The branches moved to /roadmap/learn; old /roadmap?branch=… links follow. */
  const branchParam = params.get("branch");
  if (branchParam) {
    return <Navigate to={{ pathname: "/roadmap/learn", search: `?branch=${branchParam}` }} replace />;
  }

  /* Mastery across the branches that have textbooks so far. */
  const available = BRANCHES.filter((card) => card.status === "in-progress");
  const learnMastery =
    available.length > 0
      ? available.reduce((sum, card) => sum + branchMastery(card, finished), 0) / available.length
      : 0;

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 pb-20 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl pt-6">
          <Eyebrow>Roadmap</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Pick where to start.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            Learn and Practice follows the textbooks, branch by branch. Concept
            paths, like chemical balancing and stoichiometry, take one skill
            level by level.
          </p>
        </Reveal>

        {/* Learn and Practice, then one card per concept path (lib/concepts). */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Reveal className="h-full">
              <Link to="/roadmap/learn" className={roadmapCardClass(false)}>
                <CardArtwork src={learnPracticeIcon} />
                <span className="relative self-start">
                  <StatusPill status="in-progress" />
                </span>
                <span className="relative mt-10 block">
                  <span className="text-2xl leading-tight tracking-tight">Learn and Practice</span>
                  <span className="mt-1.5 block text-sm text-neutral-500">
                    {BRANCHES.length} branches · textbooks with practice questions
                  </span>
                  <MasteryBar className="mt-5" score={learnMastery} available={available.length > 0} />
                </span>
              </Link>
            </Reveal>
          </li>
          {CONCEPTS.map((concept, i) => (
            <li key={concept.slug}>
              <Reveal delay={(i + 1) * 70} className="h-full">
                <Link to={`/roadmap/${concept.slug}`} className={roadmapCardClass(false)}>
                  <CardArtwork src={concept.icon} />
                  <span className="relative self-start">
                    <StatusPill status={concept.status} />
                  </span>
                  <span className="relative mt-10 block">
                    <span className="text-2xl leading-tight tracking-tight">{concept.title}</span>
                    <span className="mt-1.5 block text-sm text-neutral-500">
                      {levelCount(concept)} levels · {concept.span}
                    </span>
                    <MasteryBar className="mt-5" score={0} available={concept.status === "in-progress"} />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
