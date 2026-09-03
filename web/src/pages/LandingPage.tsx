import { Link } from "react-router-dom";
import CookieNotice from "../components/CookieNotice";
import TopNavBar from "../components/TopNavBar";
import DecryptedText from "../components/DecryptedText";

/* Shared colour pairings for the headline: dim words recede, strong words land. */
const DIM = {
  className: "text-neutral-400",
  encryptedClassName: "text-neutral-200",
};
const STRONG = {
  className: "text-neutral-900",
  encryptedClassName: "text-neutral-300",
};

/** Benzene ring — the inline glyph before "grounded". */
function BenzeneGlyph() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="text-accent-ink inline-block h-[0.8em] w-[0.8em] align-[-0.05em]"
    >
      <path
        d="M16 2.5 28 9.25v13.5L16 29.5 4 22.75V9.25Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle
        cx="16"
        cy="16"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-6 pb-28 text-center">
        <h1 className="flex flex-col items-center gap-[0.35em] text-[clamp(1.15rem,5.2vw,3.75rem)] leading-none tracking-[-0.02em]">
          <span className="block">
            <DecryptedText
              text="The future"
              animateOn="load"
              sequential
              speed={45}
              {...DIM}
            />
          </span>

          <span className="block">
            <DecryptedText
              text="of chemistry"
              animateOn="load"
              sequential
              speed={45}
              delay={260}
              {...DIM}
            />
          </span>

          <span className="flex flex-wrap items-center justify-center gap-[0.3em]">
            <DecryptedText
              text="is"
              animateOn="load"
              sequential
              speed={45}
              delay={620}
              {...DIM}
            />

            <span className="inline-flex items-center gap-[0.22em]">
              <BenzeneGlyph />
              <DecryptedText
                text="grounded"
                animateOn="load"
                sequential
                speed={45}
                delay={720}
                {...STRONG}
              />
            </span>

            <DecryptedText
              text="+"
              animateOn="load"
              sequential
              speed={45}
              delay={960}
              {...DIM}
            />

            {/* Plain inline flow, not flex: the citation marker needs to sit
              against the baseline, and vertical-align does nothing in flex. */}
            <span className="whitespace-nowrap">
              <DecryptedText
                text="cited"
                animateOn="load"
                sequential
                speed={45}
                delay={1040}
                {...STRONG}
              />
              <sup className="text-accent-ink align-super text-[0.34em]">
                [1]
              </sup>
            </span>
          </span>
        </h1>

        <p className="mt-9 max-w-md text-[0.6rem] leading-loose text-neutral-500 sm:max-w-lg sm:text-[0.68rem]">
          Ask a chemistry question in plain language. Get an answer drawn from
          real sources, with every claim traceable back to where it came from.
        </p>

        <Link
          to="/chat"
          className="shadow-accent/45 mt-11 rounded-lg bg-neutral-900 px-7 py-4 text-[0.65rem] text-white shadow-[0_0_55px_-12px] transition-transform hover:scale-[1.02]"
        >
          Ask A Question
        </Link>

        {/* Marketing-page concern only: on /chat it would sit on the composer. */}
        <CookieNotice />
      </main>
    </>
  );
}
