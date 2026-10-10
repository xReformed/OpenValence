import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import CookieNotice from "../components/CookieNotice";
import Eyebrow from "../components/Eyebrow";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Reveal from "../components/Reveal";
import { prefersReducedMotion, useReveal } from "../hooks/useReveal";
import SiteFooter from "../components/SiteFooter";
import SourcesSection from "../components/SourcesSection";
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
  HistoryIcon,
  SendIcon,
  StepsIcon,
  ValenceMark,
} from "../components/LandingIcons";

/* Every value in the demo is taken from Example 5.6.1 in
   sources/openstax/introductory/.../05-6-Yields.md, so the preview shows a
   real grounded answer. */
const DEMO_QUESTION =
  "If 30.5 g of zinc reacts with nitric acid and gives 65.2 g of zinc nitrate, what is the percent yield?";

const DEMO_STEPS = [
  "Understanding the question",
  "Searching 116 textbook sections",
  "Found: 5.6 Yields (Beginning Chemistry)",
  "Writing a grounded answer",
  "Attaching citations",
];

const FIRST_STEP_MS = 1100;
const STEP_MS = 650;

type StepState = "done" | "active" | "pending";

const DEMO_RESULT: { key: string; label: ReactNode; value: ReactNode }[] = [
  { key: "zn", label: "Molar mass of Zn", value: "65.39 g/mol" },
  { key: "salt", label: <>Molar mass of Zn(NO<sub>3</sub>)<sub>2</sub></>, value: "189.41 g/mol" },
  { key: "theoretical", label: "Theoretical yield", value: "88.3 g" },
  { key: "actual", label: "Actual yield", value: "65.2 g" },
  { key: "percent", label: "Percent yield", value: "73.8%" },
];

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
        <ValenceMark className="text-accent-ink mb-4 h-5 w-5" />
        {sidebar.map(({ icon: ItemIcon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
              active ? "bg-neutral-200/70 text-neutral-900" : "text-neutral-500"
            }`}
          >
            <ItemIcon className={`h-3.5 w-3.5 ${active ? "text-accent-ink" : ""}`} />
            {label}
          </div>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-xl bg-white p-4">
        <div className="ml-auto max-w-[85%] rounded-lg bg-neutral-100 px-3 py-2 text-xs leading-relaxed text-neutral-700">
          {DEMO_QUESTION}
        </div>

        <div className="flex gap-2.5">
          <ValenceMark className="text-accent-ink mt-2 h-4 w-4 shrink-0" />
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
                Percent yield (actual ÷ theoretical × 100%)
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
                <span className="border-accent-ink flex items-center gap-1.5 rounded-md border px-2 py-1">
                  <DocumentIcon className="text-accent-ink h-3 w-3" />
                  Source: 5.6 Yields
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1">
                  <StepsIcon className="text-accent-ink h-3 w-3" />
                  Show the steps
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-400">
          Ask a follow-up…
          <SendIcon className="text-accent-ink h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}

function PrimaryButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/chat"
      className={`group bg-accent hover:bg-accent-ink inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-on-accent transition-colors hover:text-white ${className}`}
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
    <div className="min-h-0 flex-1 overflow-y-auto scroll-smooth bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 sm:px-8 lg:px-12">
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
                to="/#how-it-works"
                className="decoration-accent hover:decoration-accent-ink underline underline-offset-4 transition-colors"
              >
                See how it works
              </Link>
            </Reveal>
          </div>

          <Reveal delay={350}>
            <ProductPreview />
          </Reveal>
        </section>

        <FeaturesSection />

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
              Covers all 16 chapters of Beginning Chemistry, the introductory
              chemistry sequence, and the start of OpenStax Organic Chemistry,
              with more subjects and tools on the way.
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

        <HowItWorksSection />

        <SourcesSection />
      </main>

      <SiteFooter />

      <CookieNotice />
    </div>
  );
}
