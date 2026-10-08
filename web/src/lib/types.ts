/* The app's shared types, all in one place. Import them from here.
   Component props, and helper types that a single file uses privately, stay
   with that file instead. */

/* ── Books and learning paths ──────────────────────────────────────────────
   The data lives in learningPaths.generated.ts, built from the corpus front
   matter by scripts/gen-learning-paths.mjs. BookKey is generated too (one per
   book configured there), so it's re-exported rather than written out here. */

export type { BookKey } from "./learningPaths.generated";
import type { BookKey } from "./learningPaths.generated";

export interface PathSection {
  number: string;
  title: string;
  ready: boolean;
  file: string;
  sourceUrl: string;
}

export interface PathChapter {
  number: number;
  title: string;
  sections: PathSection[];
}

export interface BookMeta {
  title: string;
  author: string;
  license: string;
}

/* ── Roadmap ─────────────────────────────────────────────────────────────── */

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
  sources: {
    title: string;
    license: string;
    progress: string;
    complete: boolean;
  }[];
  /** What the current books already teach at an introductory level, if anything. */
  alreadyCovered?: string;
  scope: string[];
  steps: { label: string; done?: boolean }[];
  /** Chapters come from learningPaths.generated.ts; absent until a book exists. */
  path?: PathStage[];
}

/** One level of a concept path; the tag will key its questions and mastery. */
export interface ConceptLevel {
  skill: string;
  tag: string;
  /** In the corpus's notation (SO4^2−, Mg2+), for ChemText to format. */
  example?: string;
  /** Usually taught later; works as a bonus level. */
  advanced?: boolean;
}

/** A run of levels. Levels are numbered straight through, across stages. */
export interface ConceptStage {
  /** Absent when a path isn't split into stages. */
  title?: string;
  levels: ConceptLevel[];
}

/** A levelled path through one skill, like chemical balancing (lib/concepts). */
export interface Concept {
  slug: string;
  title: string;
  /** Card artwork, an image URL (src/assets/concept). */
  icon: string;
  status: BranchStatus;
  summary: string;
  /** The card's subtitle on /roadmap, after the level count. */
  span: string;
  stages: ConceptStage[];
}

/* ── Section pages ───────────────────────────────────────────────────────── */

export type SectionSegment = { kind: "text"; markdown: string } | PracticeBlock;

/** One of the book's Examples or Exercises: the question, then its solution. */
export interface PracticeBlock {
  kind: "practice";
  type: "Example" | "Exercise";
  number: string;
  title?: string;
  prompt: string;
  reveal: string;
  revealLabel: string;
}

/** A run of chemistry notation, for rendering sub- and superscripts (chemText.ts). */
export interface ChemSegment {
  kind: "text" | "sub" | "sup";
  text: string;
}

/** An illustration made for OpenValence, shown in place of a book figure. */
export interface FigureImage {
  src: string;
  width: number;
  height: number;
}

/* ── OpenValence practice questions ───────────────────────────────────────
   Written as questions/<book>/<section>.json, imported into the database, and
   served by the API in exactly this shape (core/QuestionFiles.cs checks it). */

interface QuestionBase {
  /** Unique across all question files; saved answers refer to it. */
  id: string;
  prompt: string;
  explanation: string;
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: "multiple-choice";
  /** Exactly one is correct. */
  choices: { text: string; correct?: true; why?: string }[];
}

export interface NumericQuestion extends QuestionBase {
  type: "numeric";
  answer: number;
  /** Shown beside the input; also accepted after the number. */
  unit?: string;
  /** Relative: 0.01 accepts anything within 1% of the answer. */
  tolerance?: number;
}

export type Question = MultipleChoiceQuestion | NumericQuestion;

export type NumericResult = "correct" | "incorrect" | "unreadable";

/** A question's one attempt, kept so the score holds across visits. */
export interface PracticeAnswer {
  result: "correct" | "incorrect";
  /** The choice picked, or the number as typed. */
  answer: string;
}

/* ── Chat ────────────────────────────────────────────────────────────────── */

export interface Citation {
  id: string;
  sourceTitle: string;
  sourceUrl: string;
  /** The retrieved chunk text, shown verbatim — never paraphrased. */
  snippet: string;
}

export interface AskResponse {
  answer: string;
  citations: Citation[];
}

export type Role = "user" | "assistant";

export interface ChatTurn {
  id: string;
  role: Role;
  content: string;
  citations?: Citation[];
}

export interface ChatMeta {
  id: string;
  title: string;
  updatedAt: number;
}

export type ChatStatus = "idle" | "sending" | "error";

/* ── Topics, progress, and preferences ───────────────────────────────────── */

export interface Topic {
  slug: string;
  title: string;
  soon?: boolean;
  summary: string;
  questions: string[];
  coveredHeading: string;
  covered: string[];
  coming?: string[];
}

export type Theme = "light" | "dark";
