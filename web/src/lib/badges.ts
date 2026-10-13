import analyticalBadge from "../assets/badges/analytical.webp";
import biochemistryBadge from "../assets/badges/biochemistry.webp";
import inorganicBadge from "../assets/badges/inorganic.webp";
import introductoryBadge from "../assets/badges/introductory.webp";
import organicBadge from "../assets/badges/organic.webp";
import physicalBadge from "../assets/badges/physical.webp";
import { branchProgress } from "./mastery";
import type { QuestionSet } from "./questionSets";
import type { Branch, PracticeAnswer } from "./types";

/* Badges on the profile page, for completing a roadmap: every section on its
   learning path finished. Worked out from reading progress (progress.ts) and
   practice answers (practiceStore.ts), so nothing extra is recorded.

   A roadmap can have two: one for finishing it, and a master badge for
   finishing it with a 100% correct rate on its practice. (Asking Claude for
   help isn't recorded yet; once it is, help will count against the master
   badge too.)

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
      "intense" (golden rays and sparkles), "nature" (leaves, fireflies and
      sunlight), "crystal" (a turning lattice, prismatic light and rising
      crystals), "quantum" (electrons orbiting, rippling waves and flickers),
      "spectrum" (spectral bars, a scanning beam, a falling drop and bubbles) or
      "helix" (a double helix turning round the medal, light and rising bubbles). */
  effect?: "intense" | "nature" | "crystal" | "quantum" | "spectrum" | "helix";
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
    description: "Finish the roadmap with every practice answer correct.",
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
    description: "Finish the roadmap with every practice answer correct.",
    image: organicBadge,
    effect: "nature",
  },
  {
    id: "inorganic",
    roadmap: "inorganic",
    requirement: "complete",
    title: "Inorganic chemistry",
    description: "Finished every section of the inorganic chemistry roadmap.",
    image: inorganicBadge,
  },
  {
    id: "inorganic-master",
    roadmap: "inorganic",
    requirement: "master",
    title: "Inorganic chemistry Master",
    description: "Finish the roadmap with every practice answer correct.",
    image: inorganicBadge,
    effect: "crystal",
  },
  {
    id: "physical",
    roadmap: "physical",
    requirement: "complete",
    title: "Physical chemistry",
    description: "Finished every section of the physical chemistry roadmap.",
    image: physicalBadge,
  },
  {
    id: "physical-master",
    roadmap: "physical",
    requirement: "master",
    title: "Physical chemistry Master",
    description: "Finish the roadmap with every practice answer correct.",
    image: physicalBadge,
    effect: "quantum",
  },
  {
    id: "analytical",
    roadmap: "analytical",
    requirement: "complete",
    title: "Analytical chemistry",
    description: "Finished every section of the analytical chemistry roadmap.",
    image: analyticalBadge,
  },
  {
    id: "analytical-master",
    roadmap: "analytical",
    requirement: "master",
    title: "Analytical chemistry Master",
    description: "Finish the roadmap with every practice answer correct.",
    image: analyticalBadge,
    effect: "spectrum",
  },
  {
    id: "biochemistry",
    roadmap: "biochemistry",
    requirement: "complete",
    title: "Biochemistry",
    description: "Finished every section of the biochemistry roadmap.",
    image: biochemistryBadge,
  },
  {
    id: "biochemistry-master",
    roadmap: "biochemistry",
    requirement: "master",
    title: "Biochemistry Master",
    description: "Finish the roadmap with every practice answer correct.",
    image: biochemistryBadge,
    effect: "helix",
  },
];

/** What the practice stores keep: each question's answer, and each section's current set. */
export interface PracticeRecord {
  answers: Readonly<Record<string, PracticeAnswer>>;
  sets: Readonly<Record<string, QuestionSet>>;
}

const NO_PRACTICE: PracticeRecord = { answers: {}, sets: {} };

/**
 * A roadmap's practice score: the answers given in its books' sections. An
 * answer names its section; older ones don't, so they're placed by the
 * section whose current question set holds them, and left out if none does
 * (an answer from a set since replaced by "Try again").
 */
export function roadmapPractice(branch: Branch, { answers, sets }: PracticeRecord) {
  const books = new Set<string>((branch.path ?? []).map((stage) => stage.book));
  const setOf = new Map<string, string>();
  for (const [key, set] of Object.entries(sets)) for (const id of set.ids) setOf.set(id, key);
  let answered = 0;
  let correct = 0;
  for (const [id, answer] of Object.entries(answers)) {
    const section = answer.section ?? setOf.get(id);
    if (!section || !books.has(section.slice(0, section.indexOf("/")))) continue;
    answered += 1;
    if (answer.result === "correct") correct += 1;
  }
  return { answered, correct };
}

/** A roadmap counts as complete once every transcribed section on its path is finished. */
export function roadmapComplete(branch: Branch, finished: ReadonlySet<string>): boolean {
  const { finished: done, total } = branchProgress(branch, finished);
  return total > 0 && done === total;
}

/** A master badge also needs every practice answer on the roadmap correct, and at least one. */
export function practicePerfect(branch: Branch, practice: PracticeRecord): boolean {
  const { answered, correct } = roadmapPractice(branch, practice);
  return answered > 0 && correct === answered;
}

/** Whether one badge is earned. */
export function isEarned(
  badge: Badge,
  branches: Branch[],
  finished: ReadonlySet<string>,
  practice: PracticeRecord = NO_PRACTICE,
): boolean {
  const branch = branches.find((b) => b.slug === badge.roadmap);
  if (!branch || !roadmapComplete(branch, finished)) return false;
  return badge.requirement === "complete" || practicePerfect(branch, practice);
}

/** The badges earned, in list order. */
export function earnedBadges(
  branches: Branch[],
  finished: ReadonlySet<string>,
  practice: PracticeRecord = NO_PRACTICE,
  badges: Badge[] = BADGES,
): Badge[] {
  return badges.filter((badge) => isEarned(badge, branches, finished, practice));
}
