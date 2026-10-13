import { useState } from "react";
import { Link } from "react-router-dom";
import { prefersReducedMotion } from "../hooks/useReveal";
import { READY_SECTIONS } from "../lib/corpusStats.generated";
import { ArrowRightIcon, BookIcon, FlaskIcon, ValenceMark } from "./LandingIcons";
import Reveal from "./Reveal";

const SECTIONS = READY_SECTIONS.toLocaleString("en-US");

/* One cumulus cloud: overlapping puffs (x, y, radius) on a flat base. */
const PUFFS: [number, number, number][] = [
  [-40, 18, 34],
  [0, 0, 48],
  [48, -26, 56],
  [100, -6, 50],
  [145, 16, 36],
  [60, 18, 44],
];

/* Where the clouds sit in the 1200 × 700 scene. */
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

/* A sky over rolling hills, drawn in CSS and SVG, under the hero video. */
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
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <HeroScene />
        </div>
      </Reveal>
    </section>
  );
}
