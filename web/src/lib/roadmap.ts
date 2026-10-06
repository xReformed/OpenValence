/* The subject roadmap shown at /roadmap. Keep it in step with the
   "Subjects" part of the README roadmap and with sources/ATTRIBUTION.md. */

/* Web-sized copies (384px WebP, trimmed and centred) of the *-icon.png
   originals in src/assets; regenerate them if an original changes. */
import analyticalIcon from "../assets/roadmap/analytical.webp";
import biochemistryIcon from "../assets/roadmap/biochemistry.webp";
import inorganicIcon from "../assets/roadmap/inorganic.webp";
import introductoryIcon from "../assets/roadmap/introductory.webp";
import organicIcon from "../assets/roadmap/organic.webp";
import physicalIcon from "../assets/roadmap/physical.webp";

import type { BookKey } from "./learningPaths.generated";

export type BranchStatus = "in-progress" | "planned" | "later";

/** One textbook in a branch's learning path, studied in this order. */
export interface PathStage {
  book: BookKey;
  label: string;
  title: string;
  note: string;
}

export interface Branch {
  slug: string;
  title: string;
  icon: string;
  status: BranchStatus;
  summary: string;
  sources: { title: string; license: string; progress: string; complete: boolean }[];
  /** What the current books already teach at an introductory level, if anything. */
  alreadyCovered?: string;
  scope: string[];
  steps: { label: string; done?: boolean }[];
  /** Chapters come from learningPaths.generated.ts; absent until a book exists. */
  path?: PathStage[];
}

export const STATUS_LABEL: Record<BranchStatus, string> = {
  "in-progress": "In progress",
  planned: "Planned",
  later: "Later",
};

const CHOOSE_AND_ANSWER = [
  { label: "Choose an openly licensed textbook" },
  { label: "Transcribe it word for word" },
  { label: "Answer questions from it, with citations" },
];

export const BRANCHES: Branch[] = [
  {
    slug: "introductory",
    icon: introductoryIcon,
    title: "Introductory chemistry",
    status: "in-progress",
    summary:
      "The first-year sequence, from measurement and the mole to equilibrium and electrochemistry. Two textbooks cover it, one gentler than the other.",
    sources: [
      {
        title: "Chemistry 1e (OpenStax)",
        license: "CC BY 4.0",
        progress: "All 21 chapters",
        complete: true,
      },
      {
        title: "Beginning Chemistry (Ball)",
        license: "CC BY-NC-SA 3.0",
        progress: "All 16 chapters",
        complete: true,
      },
    ],
    scope: [
      "Measurement and the mole",
      "Atoms and the periodic table",
      "Bonding and molecular shape",
      "Reactions and stoichiometry",
      "Gases, liquids, and solids",
      "Equilibrium, acids, and bases",
      "Thermochemistry and electrochemistry",
    ],
    steps: [
      { label: "Transcribe Chemistry 1e", done: true },
      { label: "Transcribe Beginning Chemistry", done: true },
      { label: "Grounded answers with citations" },
      { label: "Calculator tools and an equation balancer" },
    ],
    path: [
      {
        book: "beginning-chemistry",
        label: "Start here",
        title: "Beginning Chemistry (Ball)",
        note: "A gentler first pass through the core ideas and vocabulary.",
      },
      {
        book: "chemistry-1e",
        label: "Then",
        title: "Chemistry 1e (OpenStax)",
        note: "The full general chemistry sequence, in more depth.",
      },
    ],
  },
  {
    slug: "organic",
    icon: organicIcon,
    title: "Organic chemistry",
    status: "planned",
    summary:
      "The chemistry of carbon compounds: how they're built, how they're named, and how they react.",
    sources: [
      {
        title: "Organic Chemistry (OpenStax), candidate",
        license: "License to confirm",
        progress: "Not started",
        complete: false,
      },
    ],
    alreadyCovered:
      "Chemistry 1e chapter 20 introduces hydrocarbons, functional groups, and naming.",
    scope: [
      "Structure and bonding",
      "Functional groups and nomenclature",
      "Stereochemistry",
      "Reaction mechanisms",
      "Spectroscopy: IR, NMR, and mass spec",
    ],
    steps: [
      { label: "Confirm the textbook's license" },
      { label: "Transcribe it word for word" },
      { label: "Show molecule structures as real diagrams" },
      { label: "Answer questions on mechanisms and spectra, with citations" },
    ],
  },
  {
    slug: "inorganic",
    icon: inorganicIcon,
    title: "Inorganic chemistry",
    status: "later",
    summary:
      "Everything beyond carbon: the main-group and transition elements, their compounds, and the symmetry that explains them.",
    sources: [],
    alreadyCovered:
      "Chemistry 1e chapters 18–19 cover the main-group elements, transition metals, and coordination chemistry.",
    scope: [
      "Periodic trends in depth",
      "Symmetry and group theory",
      "Crystal field theory",
      "Coordination compounds",
      "Solid-state structures",
    ],
    steps: CHOOSE_AND_ANSWER,
  },
  {
    slug: "physical",
    icon: physicalIcon,
    title: "Physical chemistry",
    status: "later",
    summary:
      "The physics underneath chemistry: why reactions happen, how fast they go, and what electrons are really doing.",
    sources: [],
    alreadyCovered: "Chemistry 1e chapters 12 and 16 introduce kinetics and thermodynamics.",
    scope: [
      "Thermodynamics in depth",
      "Chemical kinetics",
      "Quantum chemistry",
      "The theory behind spectroscopy",
    ],
    steps: CHOOSE_AND_ANSWER,
  },
  {
    slug: "analytical",
    icon: analyticalIcon,
    title: "Analytical chemistry",
    status: "later",
    summary:
      "Finding out what's in a sample and how much: careful measurement, statistics, and instruments.",
    sources: [],
    alreadyCovered:
      "Chemistry 1e sections 1.5, 4.6, and 14.7 introduce uncertainty, quantitative analysis, and titrations.",
    scope: [
      "Error analysis and statistics",
      "Titrations in depth",
      "Spectrophotometry",
      "Chromatography",
      "Electrochemical methods",
    ],
    steps: CHOOSE_AND_ANSWER,
  },
  {
    slug: "biochemistry",
    icon: biochemistryIcon,
    title: "Biochemistry",
    status: "later",
    summary:
      "The chemistry of living things: the molecules cells are made of and the reactions that keep them running.",
    sources: [],
    scope: [
      "Amino acids and proteins",
      "Enzymes and enzyme kinetics",
      "Carbohydrates and lipids",
      "Nucleic acids",
      "Metabolism",
    ],
    steps: CHOOSE_AND_ANSWER,
  },
];

/** For the roadmap page: an unknown or missing ?branch= falls back to the first. */
export function findBranch(slug: string | null): Branch {
  return BRANCHES.find((branch) => branch.slug === slug) ?? BRANCHES[0];
}

/** For /roadmap/:slug, where an unknown slug is a 404. */
export function getBranch(slug: string | undefined): Branch | undefined {
  return BRANCHES.find((branch) => branch.slug === slug);
}
