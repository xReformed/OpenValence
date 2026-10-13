import { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import BadgeArt from "../components/BadgeArt";
import Eyebrow from "../components/Eyebrow";
import {
  ArrowRightIcon,
  CheckIcon,
  LockIcon,
} from "../components/LandingIcons";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import StatusPill from "../components/StatusPill";
import TopNavBar from "../components/TopNavBar";
import { BADGES, type Badge, isEarned, isTracked, roadmapComplete } from "../lib/badges";
import { CONCEPTS } from "../lib/concepts";
import { branchProgress } from "../lib/mastery";
import { getFinished, subscribeToProgress } from "../lib/progress";
import { BRANCHES } from "../lib/roadmap";
import type { BranchStatus } from "../lib/types";

/* Every badge the app will have: one per roadmap, earned by completing it
   (lib/badges.ts), plus a Master badge where one is drawn. Badges with artwork show
   it (greyed out until earned); the rest show as a placeholder, with how far
   the reader has got where the app tracks it. */

interface PlannedBadge {
  slug: string;
  title: string;
  status: BranchStatus;
  href: string;
  /** What earns it. */
  goal: string;
  /** Where the reader stands: a fraction finished, or a note when it isn't tracked. */
  progress: { done: number; total: number } | string;
  earned: boolean;
  /** The badge's artwork, if it has any yet. */
  image?: string;
  /** The artwork's animation, if any. */
  effect?: Badge["effect"];
}

function BadgeTile({ badge }: { badge: PlannedBadge }) {
  const tracked = typeof badge.progress !== "string" ? badge.progress : null;
  const percent =
    tracked && tracked.total
      ? Math.round((tracked.done / tracked.total) * 100)
      : 0;
  return (
    <li>
      <Link
        to={badge.href}
        className="group flex h-full flex-col items-center overflow-hidden rounded-2xl border border-neutral-200 bg-white px-5 py-8 text-center transition-[border-color,translate] duration-200 hover:-translate-y-0.5 hover:border-neutral-400"
      >
        {badge.image ? (
          <BadgeArt src={badge.image} earned={badge.earned} effect={badge.effect} />
        ) : /* Placeholder until the badge's artwork exists. */ badge.earned ? (
          <span className="bg-accent flex h-20 w-20 items-center justify-center rounded-full">
            <CheckIcon className="text-on-accent h-8 w-8" />
          </span>
        ) : (
          <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-neutral-300 bg-neutral-50">
            <LockIcon className="h-7 w-7 text-neutral-400" />
          </span>
        )}
        <p className="mt-5 font-medium">{badge.title}</p>
        <p className="mt-1 text-xs text-neutral-500">
          {badge.earned ? (badge.image ? "Earned" : "Earned · artwork coming soon") : badge.goal}
        </p>

        <div className="mt-auto flex w-full flex-col items-center pt-5">
          <div className="w-full">
            {tracked ? (
              <>
                <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="bg-accent h-full rounded-full"
                    style={{
                      width: `${tracked.done ? Math.max(percent, 2) : 0}%`,
                    }}
                  />
                </div>
                <p className="mt-2 text-xs text-neutral-500 tabular-nums">
                  {tracked.done} of {tracked.total} sections
                </p>
              </>
            ) : (
              <p className="text-xs text-neutral-400">
                {badge.progress as string}
              </p>
            )}
          </div>
          <span className="mt-4">
            <StatusPill status={badge.status} />
          </span>
        </div>
      </Link>
    </li>
  );
}

function BadgeGroup({
  title,
  note,
  badges,
}: {
  title: string;
  note: string;
  badges: PlannedBadge[];
}) {
  return (
    <section className="mt-14">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl tracking-tight">{title}</h2>
        <p className="text-sm text-neutral-500">{note}</p>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {badges.map((badge) => (
          <BadgeTile key={badge.slug} badge={badge} />
        ))}
      </ul>
    </section>
  );
}

export default function BadgesPage() {
  const finished = useSyncExternalStore(subscribeToProgress, getFinished);

  /* A roadmap with artwork shows its badges (completion, and mastery, whose
     own description says what earns it); the rest, one placeholder each. */
  const subjects: PlannedBadge[] = BRANCHES.flatMap((branch): PlannedBadge[] => {
    const { finished: done, total } = branchProgress(branch, finished);
    const goal = `Complete the ${branch.title.toLowerCase()} roadmap`;
    const drawn = BADGES.filter((badge) => badge.roadmap === branch.slug);
    if (drawn.length > 0) {
      return drawn.map((badge) => ({
        slug: badge.id,
        title: badge.title,
        status: branch.status,
        href: `/roadmap/${branch.slug}`,
        goal: badge.requirement === "complete" ? goal : badge.description,
        progress: !branch.path
          ? "No textbook yet"
          : isTracked(badge.requirement)
            ? { done, total }
            : "Help tracking coming soon",
        earned: isEarned(badge, BRANCHES, finished),
        image: badge.image,
        effect: badge.effect,
      }));
    }
    return [
      {
        slug: branch.slug,
        title: branch.title,
        status: branch.status,
        href: `/roadmap/${branch.slug}`,
        goal,
        progress: branch.path ? { done, total } : "No textbook yet",
        earned: roadmapComplete(branch, finished),
      },
    ];
  });
  /* Concept paths don't record progress yet, so their badges can't be earned yet. */
  const concepts: PlannedBadge[] = CONCEPTS.map((concept) => ({
    slug: concept.slug,
    title: concept.title,
    status: concept.status,
    href: `/roadmap/${concept.slug}`,
    goal: `Complete the ${concept.title.toLowerCase()} roadmap`,
    progress: "Progress tracking coming soon",
    earned: false,
  }));
  const earned = subjects.filter((badge) => badge.earned).length;

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8">
        <Reveal className="pt-6">
          <Link
            to="/profile"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            ← Profile
          </Link>
          <div className="mt-6">
            <Eyebrow>Badges</Eyebrow>
          </div>
          <h1 className="mt-5 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Badges to earn
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
            There's a badge for every roadmap you complete, and a Master badge
            for a perfect correct rate without Claude's help. Badges whose
            artwork is still on its way show as a placeholder.
          </p>
          <p className="mt-4 text-sm text-neutral-500 tabular-nums">
            {earned} of {subjects.length + concepts.length} earned
          </p>
        </Reveal>

        <Reveal delay={100}>
          <BadgeGroup
            title="Learn and Practice"
            note="Finish every section on the roadmap's learning path"
            badges={subjects}
          />
        </Reveal>

        <Reveal delay={160}>
          <BadgeGroup
            title="Concept paths"
            note="Complete every level of the path"
            badges={concepts}
          />
        </Reveal>

        <Reveal delay={200} className="mt-14">
          <Link
            to="/roadmap"
            className="group text-accent-ink inline-flex items-center gap-1.5 text-sm"
          >
            See the roadmaps
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
