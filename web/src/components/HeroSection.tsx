import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { prefersReducedMotion, useReveal } from "../hooks/useReveal";
import { BOOK_COUNT, READY_SECTIONS } from "../lib/corpusStats.generated";
import {
  ArrowRightIcon,
  BookIcon,
  CheckIcon,
  DocumentIcon,
  FlaskIcon,
  SendIcon,
  UserIcon,
  ValenceMark,
} from "./LandingIcons";
import Reveal from "./Reveal";

/* Every value in the demo is taken from Example 5.6.1 in
   sources/openstax/introductory/.../05-6-Yields.md, so the preview shows a
   real grounded answer. */
const DEMO_QUESTION = "30.5 g of zinc reacts with nitric acid and gives 65.2 g of zinc nitrate. What's the percent yield?";

const SECTIONS = READY_SECTIONS.toLocaleString("en-US");

/* The answer's progress, one step at a time (the left card). */
const DEMO_STEPS = [
  { dot: "bg-rose-500", title: "Question understood", detail: "Percent yield from grams of reactant and product" },
  { dot: "bg-sky-500", title: "Textbooks searched", detail: `${SECTIONS} sections across ${BOOK_COUNT} books` },
  { dot: "bg-emerald-500", title: "Passage found", detail: "5.6 Yields, Beginning Chemistry" },
  { dot: "bg-violet-500", title: "Answer worked out", detail: "Theoretical yield 88.3 g, actual 65.2 g" },
  { dot: "bg-amber-500", title: "Citations attached", detail: "Every step linked to its passage" },
];

/* The tutor's replies (the right card), each shown once the step before it is done. */
const DEMO_REPLIES = [
  { after: 3, text: "Found it in 5.6 Yields (Beginning Chemistry): percent yield = actual ÷ theoretical × 100%." },
  { after: 4, text: "30.5 g of zinc could make 88.3 g of zinc nitrate, and 65.2 g was collected." },
  { after: 5, text: "So the percent yield is 73.8%.", cite: "Source: 5.6 Yields" },
];

const FIRST_STEP_MS = 1100;
const STEP_MS = 700;

function useDemoProgress(start: boolean) {
  const [done, setDone] = useState(() => (prefersReducedMotion() ? DEMO_STEPS.length : 0));

  useEffect(() => {
    if (!start || done >= DEMO_STEPS.length) return;
    const timer = setTimeout(() => setDone((count) => count + 1), done === 0 ? FIRST_STEP_MS : STEP_MS);
    return () => clearTimeout(timer);
  }, [start, done]);

  return done;
}

function StepStatus({ state }: { state: "done" | "active" | "pending" }) {
  if (state === "done") return <CheckIcon className="text-accent-ink motion-safe:animate-pop h-3.5 w-3.5" />;
  if (state === "active") {
    return (
      <span className="border-accent-ink/25 border-t-accent-ink h-3.5 w-3.5 animate-spin rounded-full border-2" />
    );
  }
  return <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />;
}

function ProgressCard({ done }: { done: number }) {
  const finished = done >= DEMO_STEPS.length;
  return (
    <div className="flex min-w-0 flex-col rounded-xl bg-white p-4 sm:p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200">
          <DocumentIcon className="h-4 w-4 text-neutral-600" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Percent yield question</p>
          <p className="text-xs text-neutral-500">Beginning Chemistry · just now</p>
        </div>
      </div>

      <p className="mt-5 text-[0.65rem] font-medium tracking-widest text-neutral-400 uppercase">Answer progress</p>
      <ol className="mt-3 flex flex-col">
        {DEMO_STEPS.map((step, i) => {
          const state = i < done ? "done" : i === done ? "active" : "pending";
          return (
            <li key={step.title} className="relative flex gap-3 pb-4 last:pb-0">
              {/* The line joining each dot to the next. */}
              {i < DEMO_STEPS.length - 1 && (
                <span className="absolute top-3 bottom-0 left-[3.5px] w-px bg-neutral-200" />
              )}
              <span
                className={`relative mt-1.5 h-2 w-2 shrink-0 rounded-full transition-colors duration-300 ${
                  state === "pending" ? "bg-neutral-300" : step.dot
                }`}
              />
              <div className="min-w-0 flex-1">
                <p className={`text-sm ${state === "pending" ? "text-neutral-400" : "text-neutral-900"}`}>
                  {step.title}
                </p>
                <p className="mt-0.5 truncate text-xs text-neutral-500">{step.detail}</p>
              </div>
              <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                <StepStatus state={state} />
              </span>
            </li>
          );
        })}
      </ol>

      <div
        className={`mt-5 flex items-center gap-3 rounded-lg border border-neutral-200 px-3 py-2.5 transition-[opacity,translate] duration-500 motion-reduce:transition-none ${
          finished ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        <span className="bg-accent/15 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          <CheckIcon className="text-accent-ink h-3.5 w-3.5" />
        </span>
        <div className="min-w-0">
          <p className="text-accent-ink text-sm font-medium">Answer grounded</p>
          <p className="truncate text-xs text-neutral-500">Cited to Beginning Chemistry 5.6</p>
        </div>
      </div>
    </div>
  );
}

function ChatCard({ done }: { done: number }) {
  return (
    <div className="flex min-w-0 flex-col rounded-xl bg-white">
      <div className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3.5 sm:px-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200">
          <ValenceMark className="text-accent-ink h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">OpenValence</p>
          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            Chemistry tutor
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
          </p>
        </div>
        <span className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="h-1 w-1 rounded-full bg-neutral-300" />
          ))}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-end gap-2">
          <p className="max-w-[80%] rounded-xl rounded-tr-sm bg-sky-600 px-3 py-2 text-xs leading-relaxed text-[#fff]">
            {DEMO_QUESTION}
          </p>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <UserIcon className="h-3.5 w-3.5 text-neutral-500" />
          </span>
        </div>

        {DEMO_REPLIES.map((reply) => {
          const shown = done >= reply.after;
          return (
            <div
              key={reply.text}
              className={`flex items-start gap-2 transition-[opacity,translate] duration-500 motion-reduce:transition-none ${
                shown ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200">
                <ValenceMark className="text-accent-ink h-3.5 w-3.5" />
              </span>
              <div className="max-w-[85%] rounded-xl rounded-tl-sm border border-neutral-200 px-3 py-2 text-xs leading-relaxed text-neutral-700">
                {reply.text}
                {reply.cite && (
                  <span className="border-accent-ink mt-2 flex w-fit items-center gap-1.5 rounded-md border px-2 py-0.5 text-[0.65rem]">
                    <DocumentIcon className="text-accent-ink h-3 w-3" />
                    {reply.cite}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        <div className="mt-auto flex items-center justify-between gap-2 rounded-lg border border-neutral-200 py-1.5 pr-1.5 pl-3 text-xs text-neutral-400">
          Ask a follow-up…
          <span className="bg-accent flex h-7 w-7 items-center justify-center rounded-md">
            <SendIcon className="text-on-accent h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* One cumulus cloud: overlapping puffs (x, y, radius) on a flat base. */
const PUFFS: [number, number, number][] = [
  [-40, 18, 34],
  [0, 0, 48],
  [48, -26, 56],
  [100, -6, 50],
  [145, 16, 36],
  [60, 18, 44],
];

/* Where the clouds sit in the 1200 × 700 scene; most peek out around the cards. */
const CLOUDS = [
  { x: 90, y: 120, scale: 1.25, opacity: 0.95 },
  { x: 470, y: 70, scale: 0.7, opacity: 0.8 },
  { x: 980, y: 100, scale: 1.4, opacity: 0.95 },
  { x: 60, y: 390, scale: 1.1, opacity: 0.9 },
  { x: 1050, y: 370, scale: 1.0, opacity: 0.9 },
  { x: 760, y: 250, scale: 0.6, opacity: 0.7 },
];

/* Sky footage over the drawn scene, when there is some: put sky.mp4 (and, if
   you have one, a smaller sky.webm) in web/public/hero/. The video fades in once
   it is actually playing, so while it loads, if the files aren't there, or for
   readers who prefer reduced motion or have asked to save data, the drawn sky
   below shows instead. */
const VIDEO_SOURCES = [
  { src: "/hero/sky.webm", type: "video/webm" },
  { src: "/hero/sky.mp4", type: "video/mp4" },
];

function savingData(): boolean {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return Boolean(connection?.saveData);
}

function HeroVideo() {
  const [skip] = useState(() => prefersReducedMotion() || savingData());
  const [playing, setPlaying] = useState(false);
  if (skip) return null;
  return (
    <video
      /* Autoplay is only allowed muted; set it on the element itself, since
         React doesn't always write the muted attribute. */
      ref={(video) => {
        if (video) {
          video.defaultMuted = true;
          video.muted = true;
        }
      }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onPlaying={() => setPlaying(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
        playing ? "opacity-100" : "opacity-0"
      }`}
    >
      {VIDEO_SOURCES.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}

/* A sky over rolling hills, drawn in CSS and SVG, behind the demo cards. */
function HeroScene() {
  return (
    <div aria-hidden="true" className="absolute inset-0 dark:brightness-[0.55] dark:saturate-[0.85]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#2c76d6_0%,#5d9ce8_35%,#a9cdf3_62%,#e2eef8_80%)]" />
      <svg className="hero-clouds absolute inset-0 h-full w-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="hero-cloud-soft" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="hero-cloud-haze" x="-30%" y="-80%" width="160%" height="260%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
          <linearGradient id="hero-cloud-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0.5" stopColor="#ffffff" />
            <stop offset="1" stopColor="#d6e4f2" />
          </linearGradient>
        </defs>
        <g filter="url(#hero-cloud-haze)" fill="#ffffff" opacity="0.55">
          <ellipse cx="200" cy="430" rx="260" ry="50" />
          <ellipse cx="1000" cy="420" rx="280" ry="55" />
          <ellipse cx="600" cy="150" rx="320" ry="40" />
        </g>
        {CLOUDS.map(({ x, y, scale, opacity }) => (
          <g
            key={`${x}-${y}`}
            transform={`translate(${x} ${y}) scale(${scale})`}
            filter="url(#hero-cloud-soft)"
            fill="url(#hero-cloud-shade)"
            opacity={opacity}
          >
            {PUFFS.map(([cx, cy, r]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
            ))}
            <ellipse cx="55" cy="38" rx="125" ry="26" />
          </g>
        ))}
      </svg>
      <svg
        className="absolute inset-x-0 bottom-0 h-[42%] w-full"
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
      >
        <path d="M0 150 C 180 90, 360 120, 520 100 S 860 70, 1200 120 V320 H0 Z" fill="#9cc7b3" opacity="0.75" />
        <path d="M0 190 C 220 130, 420 170, 640 150 S 1000 120, 1200 170 V320 H0 Z" fill="#7fbf5e" />
        <path d="M0 240 C 260 200, 520 230, 760 215 S 1080 200, 1200 230 V320 H0 Z" fill="#5fa846" />
        <path d="M0 285 C 300 260, 640 280, 900 270 S 1150 262, 1200 270 V320 H0 Z" fill="#478f37" />
      </svg>
      <HeroVideo />
      {/* A fine dot texture over the whole scene, like a printed picture. */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1.3px)] bg-[length:5px_5px] mix-blend-overlay" />
    </div>
  );
}

/* The overlapping circles at the start of the pill above the headline. */
const PILL_ICONS = [
  { icon: ValenceMark, tint: "bg-accent/20 text-accent-ink" },
  { icon: BookIcon, tint: "bg-sky-100 text-sky-700" },
  { icon: FlaskIcon, tint: "bg-amber-100 text-amber-700" },
];

export default function HeroSection() {
  const [ref, inView] = useReveal<HTMLDivElement>(0.3);
  const done = useDemoProgress(inView);

  return (
    <section className="flex flex-col items-center pt-10 pb-16 text-center sm:pt-16 lg:pb-24">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1 pr-3.5 pl-1 text-xs text-neutral-600">
          <span aria-hidden="true" className="flex -space-x-1.5">
            {PILL_ICONS.map(({ icon: Icon, tint }, i) => (
              <span
                key={i}
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-white ${tint}`}
              >
                <Icon className="h-3 w-3" />
              </span>
            ))}
          </span>
          {SECTIONS} textbook sections, every claim cited
        </span>
      </Reveal>

      <Reveal delay={90}>
        <h1 className="mt-7 text-5xl leading-[1.05] font-medium tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
          Ask chemistry questions.
          <span className="block text-neutral-400">Get answers you can check.</span>
        </h1>
      </Reveal>

      <Reveal delay={180}>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-balance text-neutral-500">
          OpenValence answers in plain language from real textbooks, and every claim links back to the
          passage it came from. If the sources don't cover it, it tells you.
        </p>
      </Reveal>

      <Reveal delay={270} className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/chat"
          className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] transition-colors hover:bg-neutral-700"
        >
          Ask a question
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
        <Link
          to="/#how-it-works"
          className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm text-neutral-900 transition-colors hover:border-neutral-400"
        >
          See how it works
        </Link>
      </Reveal>

      <Reveal delay={350} className="mt-14 w-full sm:mt-16">
        <div
          ref={ref}
          aria-hidden="true"
          className="relative overflow-hidden rounded-3xl px-4 py-10 text-left sm:px-10 sm:py-16 lg:px-24 lg:py-20"
        >
          <HeroScene />
          <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-2 rounded-2xl border border-white/50 bg-white/25 p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] backdrop-blur-md md:grid-cols-2">
            <ProgressCard done={done} />
            <ChatCard done={done} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
