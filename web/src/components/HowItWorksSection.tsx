import type { ComponentType } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { ChatIcon, CheckIcon, DocumentIcon, SearchIcon } from "./LandingIcons";

const STEPS: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
  example: string;
}[] = [
  {
    icon: ChatIcon,
    title: "You ask",
    body: "Type a chemistry question in plain language, the way you'd ask a tutor.",
    example: "What's the pH of this buffer?",
  },
  {
    icon: SearchIcon,
    title: "It searches the textbook",
    body: "Your question is compared with every section of the sources, and the closest passages are pulled out.",
    example: "Closest match: 14.6 Buffers",
  },
  {
    icon: CheckIcon,
    title: "It checks the match",
    body: "If no passage is close enough, it tells you the sources don't cover your question instead of guessing.",
    example: "Close enough to answer",
  },
  {
    icon: DocumentIcon,
    title: "It answers with citations",
    body: "The answer is written only from those passages, and every claim links back to the one it came from.",
    example: "pH = 4.74 [1]",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-5 text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
          From question to cited answer in four steps.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
          Every answer takes the same path, so you always know where it came
          from.
        </p>
      </Reveal>

      <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <span
          aria-hidden="true"
          className="absolute top-10.5 right-[12.5%] left-[12.5%] hidden h-px bg-neutral-300 lg:block"
        />
        {STEPS.map(({ icon: StepIcon, title, body, example }, i) => (
          <li key={title} className="relative">
            <Reveal delay={i * 110} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-sm tabular-nums">
                    {i + 1}
                  </span>
                  <StepIcon className="h-5 w-5 text-neutral-400" />
                </div>
                <h3 className="mt-6 font-medium">{title}</h3>
                <p className="mt-2 mb-6 text-sm leading-relaxed text-neutral-500">{body}</p>
                <p className="mt-auto flex items-center gap-2 rounded-lg bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
                  <span className="bg-accent h-1.5 w-1.5 shrink-0 rounded-full" />
                  {example}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
