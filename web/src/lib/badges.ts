import introductoryBadge from "../assets/badges/introductory.webp";
import organicBadge from "../assets/badges/organic.webp";
import { branchProgress } from "./mastery";
import type { Branch } from "./types";

/* Badges on the profile page, for completing a roadmap: every section on its
   learning path finished. Worked out from reading progress (progress.ts), so
   nothing extra is recorded.

   A roadmap can have two: one for finishing it, and a master badge for a
   100% correct rate on its practice without asking Claude for help. The
   second can't be earned yet, since the app doesn't record whether help was
   used; it shows as locked until it does.

   To add a badge, put its artwork in src/assets/badges/ (a 384px WebP, with
   the full-size original beside it as <name>-badge.webp) and add an entry
   below. Roadmaps without one show as a placeholder on /profile/badges. */

export type BadgeRequirement = "complete" | "master";

export interface Badge {
  id: string;
  /** The roadmap branch slug whose learning path it's awarded for. */
  roadmap: string;
  requirement: BadgeRequirement;
  title: string;
  description: string;
  /** The badge artwork (an imported image URL). */
  image: string;
  /** An animated treatment (components/BadgeArt.tsx), for the hardest badges:
      "intense" (golden rays and sparkles) or "nature" (leaves, fireflies and sunlight). */
  effect?: "intense" | "nature";
}

export const BADGES: Badge[] = [
  {
    id: "introductory",
    roadmap: "introductory",
    requirement: "complete",
    title: "Introductory chemistry",
    description: "Finished every section of the introductory chemistry roadmap.",
    image: introductoryBadge,
  },
  {
    id: "introductory-master",
    roadmap: "introductory",
    requirement: "master",
    title: "Introductory chemistry Master",
    description: "Achieve 100% correct rate without having Claude to help you.",
    image: introductoryBadge,
    effect: "intense",
  },
  {
    id: "organic",
    roadmap: "organic",
    requirement: "complete",
    title: "Organic chemistry",
    description: "Finished every section of the organic chemistry roadmap.",
    image: organicBadge,
  },
  {
    id: "organic-master",
    roadmap: "organic",
    requirement: "master",
    title: "Organic chemistry Master",
    description: "Achieve 100% correct rate without having Claude to help you.",
    image: organicBadge,
    effect: "nature",
  },
];

/** Whether a requirement can be earned yet: help isn't recorded, so master ones can't. */
export const isTracked = (requirement: BadgeRequirement) => requirement === "complete";

/** A roadmap counts as complete once every transcribed section on its path is finished. */
export function roadmapComplete(branch: Branch, finished: ReadonlySet<string>): boolean {
  const { finished: done, total } = branchProgress(branch, finished);
  return total > 0 && done === total;
}

/** Whether one badge is earned. */
export function isEarned(badge: Badge, branches: Branch[], finished: ReadonlySet<string>): boolean {
  const branch = branches.find((b) => b.slug === badge.roadmap);
  return !!branch && isTracked(badge.requirement) && roadmapComplete(branch, finished);
}

/** The badges earned, in list order. */
export function earnedBadges(
  branches: Branch[],
  finished: ReadonlySet<string>,
  badges: Badge[] = BADGES,
): Badge[] {
  return badges.filter((badge) => isEarned(badge, branches, finished));
}
