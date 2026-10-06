import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { BookIcon, CheckIcon, ExternalLinkIcon, QuestionIcon } from "./LandingIcons";

const SOURCES: {
  title: string;
  publisher: string;
  url: string;
  license: string;
  licenseUrl: string;
  coverage: string;
  inUse: boolean;
}[] = [
  {
    title: "Chemistry 1e",
    publisher: "OpenStax, via LibreTexts",
    url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    coverage: "21 chapters · 124 sections",
    inUse: true,
  },
  {
    title: "Beginning Chemistry (Ball)",
    publisher: "LibreTexts",
    url: "https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)",
    license: "CC BY-NC-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    coverage: "16 chapters",
    inUse: false,
  },
];

const PREPARATION = [
  "Copied word for word from the original, never summarized or rewritten.",
  "Mistakes in the original are flagged with a note, not silently fixed.",
  "Each citation shows the exact passage and links to the section it came from.",
];

const NOT_COVERED = [
  "End-of-chapter practice problems",
  "Reaction mechanisms and spectroscopy, such as NMR and IR",
  "Details that only appear inside a figure or diagram",
  "Anything outside chemistry, like news or regulations",
];

export default function SourcesSection() {
  return (
    <section
      id="sources"
      className="grid scroll-mt-6 items-start gap-12 py-20 lg:grid-cols-[1fr_1.15fr]"
    >
      <Reveal>
        <Eyebrow>Sources</Eyebrow>
        <h2 className="mt-5 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Every answer comes from a textbook you can open.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
          OpenValence only answers from openly licensed textbooks, so you can
          always read the original for yourself.
        </p>
        <ul className="mt-8 flex flex-col gap-3">
          {PREPARATION.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed text-neutral-600">
              <CheckIcon className="text-accent-ink mt-1 h-4 w-4 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="flex flex-col gap-4">
        {SOURCES.map(({ title, publisher, url, license, licenseUrl, coverage, inUse }, i) => (
          <Reveal key={title} delay={100 + i * 90}>
            <article className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="group hover:text-accent-ink inline-flex items-center gap-1.5 transition-colors"
                    >
                      {title}
                      <ExternalLinkIcon className="h-3.5 w-3.5 text-neutral-400 transition-colors group-hover:text-current" />
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">{publisher}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs whitespace-nowrap ${
                    inUse ? "bg-accent text-neutral-900" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {inUse ? "In use" : "Being added"}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-600">
                <span className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1">
                  <BookIcon className="h-3 w-3" />
                  {coverage}
                </span>
                <a
                  href={licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-neutral-200 px-2 py-1 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                >
                  {license}
                </a>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={100 + SOURCES.length * 90}>
          <aside className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6">
            <h3 className="flex items-center gap-2 font-medium">
              <QuestionIcon className="h-4 w-4 text-neutral-500" />
              Not in the sources
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
              {NOT_COVERED.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-neutral-500">
              Ask about these and OpenValence will tell you it can't answer from
              its sources, instead of guessing.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
