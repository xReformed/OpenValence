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

import type { Branch, BranchStatus } from "./types";

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
      "The first-year sequence, from measurement and the mole to equilibrium and electrochemistry.",
    sources: [
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
      { label: "Transcribe Beginning Chemistry", done: true },
      { label: "Grounded answers with citations" },
      { label: "Calculator tools and an equation balancer" },
    ],
    path: [
      {
        book: "beginning-chemistry",
        label: "Start here",
        title: "Beginning Chemistry",
        note: "A gentler first pass through the core ideas and vocabulary.",
      },
    ],
  },
  {
    slug: "organic",
    icon: organicIcon,
    title: "Organic chemistry",
    status: "in-progress",
    summary:
      "The chemistry of carbon compounds: how they're built, how they're named, and how they react.",
    sources: [
      {
        title: "Organic Chemistry (OpenStax)",
        license: "CC BY-NC-SA 4.0",
        progress: "Chapter 1 of 31",
        complete: false,
      },
    ],
    alreadyCovered:
      "Beginning Chemistry chapter 16 introduces hydrocarbons, functional groups, and naming.",
    scope: [
      "Structure and bonding",
      "Functional groups and nomenclature",
      "Stereochemistry",
      "Reaction mechanisms",
      "Spectroscopy: IR, NMR, and mass spec",
    ],
    steps: [
      { label: "Confirm the textbook's license", done: true },
      { label: "Transcribe it word for word" },
      { label: "Show molecule structures as real diagrams" },
      { label: "Answer questions on mechanisms and spectra, with citations" },
    ],
    path: [
      {
        book: "organic-chemistry",
        label: "Start here",
        title: "Organic Chemistry",
        note: "OpenStax's organic chemistry course, transcribed chapter by chapter.",
      },
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
    alreadyCovered: "Beginning Chemistry chapters 7 and 13 introduce energy, enthalpy, and equilibrium.",
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
      "Beginning Chemistry sections 2.4 and 12.4 introduce significant figures and titrations.",
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
