import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import CookieNotice from "../components/CookieNotice";
import Reveal from "../components/Reveal";
import { prefersReducedMotion, useReveal } from "../hooks/useReveal";
import SiteFooter from "../components/SiteFooter";
import TopNavBar from "../components/TopNavBar";
import { TOPICS } from "../lib/topics";
import {
  ArrowRightIcon,
  BookIcon,
  CalculatorIcon,
  ChatIcon,
  CheckIcon,
  ChevronRightIcon,
  DocumentIcon,
  FlaskIcon,
  HistoryIcon,
  QuestionIcon,
  SendIcon,
  StepsIcon,
  ValenceMark,
} from "../components/LandingIcons";

/* Every value in the demo is taken from the worked buffer example in
   sources/.../14-6-Buffers.md, so the preview shows a real grounded answer. */
const DEMO_QUESTION =
  "What is the pH of a buffer made from 0.10 M acetic acid and 0.10 M sodium acetate?";

const DEMO_STEPS = [
  "Understanding the question",
  "Searching 124 textbook sections",
  "Found: 14.6 Buffers (OpenStax Chemistry)",
  "Writing a grounded answer",
  "Attaching citations",
];

/* Pacing for the preview: a beat before the first step finishes, then a
   steady tick, so the whole run reads in about four seconds. */
const FIRST_STEP_MS = 1100;
const STEP_MS = 650;

type StepState = "done" | "active" | "pending";

const DEMO_RESULT: { key: string; label: ReactNode; value: ReactNode }[] = [
  { key: "ka", label: "Ka (acetic acid)", value: <>1.8 × 10<sup>−5</sup></> },
  { key: "pka", label: "pKa", value: "4.74" },
  { key: "acid", label: <>[CH<sub>3</sub>CO<sub>2</sub>H]</>, value: "0.10 M" },
  { key: "base", label: <>[CH<sub>3</sub>CO<sub>2</sub><sup>−</sup>]</>, value: "0.10 M" },
  { key: "ph", label: "pH", value: "4.74" },
];

const FEATURES = [
  {
    icon: FlaskIcon,
    title: "Grounded and cited",
    body: "Answers come from an openly licensed chemistry textbook, not a model's fuzzy memory. Click any citation to read the exact passage.",
  },
  {
    icon: QuestionIcon,
    title: "Honest about gaps",
    body: "If the sources don't cover your question, it says so instead of guessing.",
  },
  {
    icon: StepsIcon,
    title: "Explains the why",
    body: "Walks through the reasoning step by step, so you learn the method, not just the answer.",
  },
];

/**
 * How many demo steps have finished. Starts counting once the preview is on
 * screen and stops when every step is done; reduced-motion users start there.
 */
function useDemoProgress(start: boolean) {
  const [done, setDone] = useState(() =>
    prefersReducedMotion() ? DEMO_STEPS.length : 0,
  );

  useEffect(() => {
    if (!start || done >= DEMO_STEPS.length) return;
    const timer = setTimeout(
      () => setDone((count) => count + 1),
      done === 0 ? FIRST_STEP_MS : STEP_MS,
    );
    return () => clearTimeout(timer);
  }, [start, done]);

  return done;
}

function StepMarker({ state }: { state: StepState }) {
  if (state === "done") {
    return (
      <CheckIcon className="text-accent-ink motion-safe:animate-pop h-4 w-4 shrink-0" />
    );
  }
  if (state === "active") {
    return (
      <span className="border-accent-ink/25 border-t-accent-ink h-4 w-4 shrink-0 animate-spin rounded-full border-2" />
    );
  }
  return <span className="h-4 w-4 shrink-0 rounded-full border border-neutral-300" />;
}

/**
 * Product preview: a sidebar, one question, the agent's steps ticking through,
 * then the result. The result card holds its space from the start so nothing
 * below it shifts when it fades in.
 */
function ProductPreview() {
  const [ref, inView] = useReveal<HTMLDivElement>(0.35);
  const done = useDemoProgress(inView);
  const finished = done >= DEMO_STEPS.length;
  const stepState = (i: number): StepState =>
    i < done ? "done" : i === done ? "active" : "pending";

  const sidebar = [
    { icon: ChatIcon, label: "New chat", active: true },
    { icon: HistoryIcon, label: "History" },
    { icon: BookIcon, label: "Sources" },
    { icon: CalculatorIcon, label: "Tools" },
  ];

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="flex rounded-2xl border border-neutral-200 bg-neutral-50 p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]"
    >
      <aside className="hidden w-36 shrink-0 flex-col gap-1 p-3 sm:flex">
        <ValenceMark className="mb-4 h-5 w-5" />
        {sidebar.map(({ icon: ItemIcon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
              active ? "bg-neutral-200/70 text-neutral-900" : "text-neutral-500"
            }`}
          >
            <ItemIcon className="h-3.5 w-3.5" />
            {label}
          </div>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-xl bg-white p-4">
        <div className="ml-auto max-w-[85%] rounded-lg bg-neutral-100 px-3 py-2 text-xs leading-relaxed text-neutral-700">
          {DEMO_QUESTION}
        </div>

        <div className="flex gap-2.5">
          <ValenceMark className="mt-2 h-4 w-4 shrink-0" />
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <ul className="flex flex-col gap-2.5 rounded-lg border border-neutral-200 p-3">
              {DEMO_STEPS.map((label, i) => (
                <li
                  key={label}
                  className={`flex items-center gap-2.5 text-xs ${
                    stepState(i) === "pending"
                      ? "text-neutral-400"
                      : "text-neutral-700"
                  }`}
                >
                  <StepMarker state={stepState(i)} />
                  {label}
                </li>
              ))}
            </ul>

            <div
              className={`rounded-lg border border-neutral-200 p-3 transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none ${
                finished ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <p className="mb-2 text-xs font-medium">
                Buffer pH (Henderson–Hasselbalch)
              </p>
              <dl className="divide-y divide-neutral-100 rounded-md border border-neutral-100 text-xs">
                {DEMO_RESULT.map(({ key, label, value }, i) => (
                  <div
                    key={key}
                    style={{ transitionDelay: finished ? `${200 + i * 90}ms` : "0ms" }}
                    className={`flex justify-between px-2.5 py-1.5 transition-opacity duration-500 motion-reduce:transition-none ${
                      finished ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <dt className="text-neutral-600">{label}</dt>
                    <dd className="tabular-nums">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
                <span className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1">
                  <DocumentIcon className="h-3 w-3" />
                  Source: 14.6 Buffers
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1">
                  <StepsIcon className="h-3 w-3" />
                  Show the steps
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-400">
          Ask a follow-up…
          <SendIcon className="h-3.5 w-3.5 text-neutral-600" />
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.7rem] tracking-[0.25em] text-neutral-500 uppercase">
      {children}
    </p>
  );
}

/** The dark "Ask a question" button; the arrow nudges forward on hover. */
function PrimaryButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/chat"
      className={`group inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-white transition-colors hover:bg-neutral-700 ${className}`}
    >
      Ask a question
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function LandingPage() {
  /* The router doesn't scroll to #anchors on its own, and the nav links here
     are router links so they also work from topic pages. */
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    /* The app shell doesn't scroll, so the landing page owns its scroll region.
       font-sans overrides the shell's display font for long-form reading. */
    <div className="min-h-0 flex-1 overflow-y-auto scroll-smooth bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 sm:px-8 lg:px-12">
        {/* Hero: each line fades up in turn, then the preview plays. */}
        <section className="grid items-center gap-14 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div>
            <Reveal>
              <Eyebrow>A grounded AI assistant for chemistry</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-5 text-5xl leading-[1.05] tracking-tight sm:text-6xl">
                Ask chemistry questions. Get answers you can check.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-neutral-500">
                OpenValence answers in plain language using real textbook
                sources, and every claim links back to the passage it came
                from. If the sources don't cover it, it tells you.
              </p>
            </Reveal>
            <Reveal delay={270} className="mt-9 flex flex-wrap items-center gap-8">
              <PrimaryButton />
              <Link
                to="/#features"
                className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
              >
                See how it works
              </Link>
            </Reveal>
          </div>

          <Reveal delay={350}>
            <ProductPreview />
          </Reveal>
        </section>

        {/* Features */}
        <section
          id="features"
          className="grid scroll-mt-6 gap-10 py-16 md:grid-cols-3 lg:gap-16"
        >
          {FEATURES.map(({ icon: FeatureIcon, title, body }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-white">
                <FeatureIcon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-lg">{title}</h2>
              <p className="mt-2 leading-relaxed text-neutral-500">{body}</p>
            </Reveal>
          ))}
        </section>

        {/* Topics */}
        <section
          id="topics"
          className="grid scroll-mt-6 items-center gap-12 py-20 lg:grid-cols-[1.3fr_1fr]"
        >
          <Reveal>
            <Eyebrow>Built for people who love chemistry</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              From your first mole to your first titration.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
              Covers all 21 chapters of OpenStax Chemistry, the full general
              chemistry sequence, with more subjects and tools on the way.
            </p>
            <PrimaryButton className="mt-9" />
          </Reveal>

          <ul className="flex flex-col gap-3">
            {TOPICS.map(({ slug, title, soon }, i) => (
              <li key={slug}>
                <Reveal delay={100 + i * 70}>
                  <Link
                    to={`/topics/${slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 transition-[border-color,box-shadow,translate] duration-200 hover:-translate-y-px hover:border-neutral-400 hover:shadow-[0_6px_16px_-10px_rgba(0,0,0,0.25)]"
                  >
                    <span className={soon ? "text-neutral-500" : undefined}>
                      {title}
                    </span>
                    <span className="flex shrink-0 items-center gap-3">
                      {soon && (
                        <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-neutral-500">
                          Coming soon
                        </span>
                      )}
                      <ChevronRightIcon className="h-4 w-4 text-neutral-400 transition-[color,translate] duration-200 group-hover:translate-x-0.5 group-hover:text-neutral-900" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />

      {/* Marketing-page concern only: on /chat it would sit on the composer. */}
      <CookieNotice />
    </div>
  );
}
