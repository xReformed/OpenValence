import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CookieNotice from "../components/CookieNotice";
import Eyebrow from "../components/Eyebrow";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import SourcesSection from "../components/SourcesSection";
import TopNavBar from "../components/TopNavBar";
import { TOPICS, askHref } from "../lib/topics";
import { ArrowRightIcon, ChevronRightIcon } from "../components/LandingIcons";

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

/* Each one is answerable from the current corpus (Beginning Chemistry 10.2 and
   7.6, Organic Chemistry 1.9). */
const CLOSING_QUESTIONS = [
  "Why does water have a much higher boiling point than hydrogen sulfide?",
  "What is Hess's law?",
  "What is the hybridization and bond angle at the carbon atoms in a carbon-carbon triple bond?",
];

function ClosingCall() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="rounded-3xl border border-neutral-200 bg-white px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Have a chemistry question?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-500">
            Ask it the way you'd ask a tutor. Every answer shows the textbook
            passage it came from.
          </p>
          <ul className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {CLOSING_QUESTIONS.map((question) => (
              <li key={question}>
                <Link
                  to={askHref(question)}
                  className="hover:border-accent-ink inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-left text-sm text-neutral-700 transition-colors hover:text-neutral-900"
                >
                  {question}
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryButton className="mt-10" />
        </div>
      </Reveal>
    </section>
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
        <HeroSection />

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
              chemistry sequence, plus all of OpenStax Organic Chemistry and
              LibreTexts Inorganic Chemistry, with more subjects and tools on
              the way.
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

        <ClosingCall />
      </main>

      <SiteFooter />

      <CookieNotice />
    </div>
  );
}
