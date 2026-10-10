import type { ComponentType, ReactNode } from "react";
import Reveal from "./Reveal";
import {
  BookIcon,
  CheckIcon,
  DocumentIcon,
  FlaskIcon,
  QuestionIcon,
  ValenceMark,
} from "./LandingIcons";
type IconComponent = ComponentType<{ className?: string }>;

function MiniCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border border-neutral-200 bg-white shadow-[0_10px_24px_-14px_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

function Chip({
  icon: ChipIcon = CheckIcon,
  highlighted = false,
  className = "",
  children,
}: {
  icon?: IconComponent;
  highlighted?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border bg-white px-2.5 py-1 text-[0.65rem] whitespace-nowrap text-neutral-700 shadow-[0_4px_10px_-6px_rgba(0,0,0,0.2)] ${
        highlighted ? "border-accent-ink" : "border-neutral-200"
      } ${className}`}
    >
      <ChipIcon className="text-accent-ink h-3 w-3" />
      {children}
    </span>
  );
}

function Dot({ className = "" }: { className?: string }) {
  return <span className={`bg-accent-ink absolute h-1.5 w-1.5 rounded-full ${className}`} />;
}

function CitedAnswerArt() {
  return (
    <MiniCard className="flex w-44 flex-col items-center px-4 py-4 text-center">
      <span className="bg-accent flex h-9 w-9 items-center justify-center rounded-full">
        <DocumentIcon className="h-4 w-4 text-on-accent" />
      </span>
      <p className="mt-3 text-[0.65rem] text-neutral-500">Answer found in</p>
      <p className="mt-1 text-base">5.6 Yields</p>
    </MiniCard>
  );
}

function AbstainArt() {
  return (
    <div className="flex flex-col items-center">
      <MiniCard className="w-48 px-4 py-3">
        <div className="flex items-baseline justify-between">
          <p className="text-[0.65rem] text-neutral-500">Best match in the sources</p>
          <p className="text-base tabular-nums">0.41</p>
        </div>
        <div className="relative mt-3 h-1.5 rounded-full bg-neutral-100">
          <div className="bg-accent absolute inset-y-0 left-0 w-[41%] rounded-full" />
          <span className="bg-accent-ink absolute top-1/2 left-[41%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow" />
          <span className="absolute -top-1 left-[65%] h-3.5 w-px bg-neutral-400" />
        </div>
        <p className="mt-1.5 pl-[58%] text-[0.6rem] text-neutral-400">needs 0.65</p>
      </MiniCard>
      <span className="relative h-6 w-px bg-neutral-300">
        <Dot className="-bottom-0.5 left-[-2.5px]" />
      </span>
      <Chip icon={QuestionIcon}>Not in the sources</Chip>
    </div>
  );
}

function StepDoc({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <MiniCard className="flex h-14 w-11 flex-col gap-1.5 rounded-lg px-2 pt-2.5">
        <span className="h-1 w-full rounded-full bg-neutral-200" />
        <span className="h-1 w-4/5 rounded-full bg-neutral-200" />
        <span className="h-1 w-full rounded-full bg-neutral-200" />
        <span className="h-1 w-3/5 rounded-full bg-neutral-200" />
      </MiniCard>
      <span className="bg-accent absolute -right-5 -bottom-2 rounded-full px-1.5 py-0.5 text-[0.55rem] whitespace-nowrap text-on-accent">
        {label}
      </span>
    </div>
  );
}

function StepsArt() {
  return (
    <div className="relative flex items-center">
      <span className="relative h-px w-14 bg-neutral-300 md:max-lg:w-4">
        <Dot className="top-[-2.5px] -left-0.5" />
        <StepDoc label="Step 1" className="bottom-3 -left-9" />
      </span>
      <span className="flex h-28 w-28 items-center justify-center rounded-full border border-neutral-200/70 bg-neutral-50/70">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200 bg-white">
          <span className="bg-accent flex h-12 w-12 items-center justify-center rounded-full shadow-[0_8px_18px_-8px_rgba(1,138,68,0.6)]">
            <CheckIcon className="h-6 w-6 text-on-accent" />
          </span>
        </span>
      </span>
      <span className="relative h-px w-14 bg-neutral-300 md:max-lg:w-4">
        <Dot className="top-[-2.5px] -right-0.5" />
        <StepDoc label="Step 2" className="top-3 -right-4" />
      </span>
    </div>
  );
}

const SECTIONS = ["5.3 The Mole", "5.6 Yields", "5.7 Limiting Reagents"];

/* Fixed 300 x 136 px canvas so the connectors meet the chips: chips are 25px
   tall with 8px gaps, so the middle ("5.6 Yields") is centred at y = 89. */
function RetrievalArt() {
  return (
    <div className="relative h-34 w-75">
      <Chip icon={FlaskIcon} className="absolute top-1 left-0">
        Your question
      </Chip>
      <span className="absolute top-7.25 left-6 h-15 w-px bg-neutral-300" />
      <span className="absolute top-22.25 left-6 h-px w-18.5 bg-neutral-300">
        <Dot className="top-[-2.5px] -right-0.5" />
      </span>
      <ul className="absolute top-11 left-26 flex flex-col gap-2">
        {SECTIONS.map((section, i) => (
          <li key={section}>
            <Chip highlighted={i === 1}>{section}</Chip>
          </li>
        ))}
      </ul>
      <span className="absolute top-22.25 left-49.5 h-px w-5.5 bg-neutral-300" />
      <Chip icon={DocumentIcon} className="absolute top-19.25 left-55">
        Cite it
      </Chip>
    </div>
  );
}

function OpenSourcesArt() {
  return (
    <div className="flex items-center gap-6">
      <MiniCard className="flex h-14 w-14 items-center justify-center">
        <BookIcon className="h-6 w-6 text-neutral-700" />
      </MiniCard>
      <MiniCard className="flex h-18 w-18 items-center justify-center">
        <ValenceMark className="text-accent-ink h-10 w-10" />
      </MiniCard>
      <MiniCard className="flex h-14 w-14 items-center justify-center">
        <span className="text-xs font-semibold tracking-wide text-neutral-700">CC BY</span>
      </MiniCard>
    </div>
  );
}

const FEATURES: {
  title: string;
  body: string;
  art: ComponentType;
  wide?: boolean;
}[] = [
  {
    title: "Grounded and cited",
    body: "Answers come from an openly licensed chemistry textbook, not a model's fuzzy memory. Click any citation to read the exact passage.",
    art: CitedAnswerArt,
  },
  {
    title: "Honest about gaps",
    body: "If the sources don't cover your question, it says so instead of guessing.",
    art: AbstainArt,
  },
  {
    title: "Explains the why",
    body: "Walks through the reasoning step by step, so you learn the method, not just the answer.",
    art: StepsArt,
  },
  {
    title: "Finds the right section",
    body: "Searches every section of the textbook and picks the passages that actually answer your question, even when you word it differently.",
    art: RetrievalArt,
    wide: true,
  },
  {
    title: "Built on open textbooks",
    body: "Every source is openly licensed, so the passages behind an answer can be read, shared, and checked by anyone.",
    art: OpenSourcesArt,
    wide: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
          Features
        </span>
        <h2 className="mt-5 text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Chemistry answers you can trust and check.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-neutral-500">
          Built from real textbook passages, so you can see where every answer
          came from and learn how it was worked out.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-6">
        {FEATURES.map(({ title, body, art: Art, wide }, i) => (
          <Reveal
            key={title}
            delay={i * 90}
            className={wide ? "md:col-span-3" : "md:col-span-2"}
          >
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div aria-hidden="true" className="relative flex h-48 items-center justify-center">
                <div className="bg-grid absolute inset-0" />
                <div className="relative">
                  <Art />
                </div>
              </div>
              <div className="px-6 pt-2 pb-6">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
