import { Link, useLoaderData, useParams } from "react-router-dom";
import ChemText from "../components/ChemText";
import SiteFooter from "../components/SiteFooter";
import TopNavBar from "../components/TopNavBar";
import {
  ArrowRightIcon,
  BookIcon,
  CheckIcon,
  ChevronRightIcon,
} from "../components/LandingIcons";
import { askHref, TOPICS } from "../lib/topics";
import type { topicLoader } from "../router";

/* Route component for /topics/:slug. Keyed on slug so moving between topics
   resets the page (and its scroll position) instead of reusing it. */
export function TopicRoute() {
  const { slug } = useParams<{ slug: string }>();
  return <TopicPage key={slug} />;
}

export default function TopicPage() {
  const topic = useLoaderData<typeof topicLoader>();

  const others = TOPICS.filter((other) => other.slug !== topic.slug);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-352 px-5 pb-20 sm:px-8 lg:px-12">
        <Link
          to={{ pathname: "/", hash: "#topics" }}
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
        >
          &larr; All topics
        </Link>

        <header className="mt-8 max-w-3xl">
          <span
            className={`rounded-full px-2.5 py-1 text-xs ${
              topic.soon
                ? "bg-neutral-100 text-neutral-500"
                : "bg-accent/15 text-accent-ink"
            }`}
          >
            {topic.soon ? "Coming soon" : "Available now"}
          </span>
          <h1 className="mt-5 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            {topic.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            {topic.summary}
          </p>
        </header>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <section>
            <h2 className="text-[0.7rem] tracking-[0.25em] text-neutral-500 uppercase">
              {topic.questions.length === 0
                ? "Not available yet"
                : topic.soon
                  ? "You can already ask"
                  : "Try asking"}
            </h2>
            {topic.questions.length > 0 ? (
              <ul className="mt-5 flex flex-col gap-3">
                {topic.questions.map((question) => (
                  <li key={question}>
                    <Link
                      to={askHref(question)}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white px-5 py-4 transition-colors hover:border-neutral-400"
                    >
                      <span>
                        <ChemText text={question} />
                      </span>
                      <ArrowRightIcon className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-900" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 rounded-xl border border-dashed border-neutral-300 px-5 py-4 text-neutral-500">
                Nothing to try yet. This topic needs the PubChem tool, which
                isn't built.
              </p>
            )}
          </section>

          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="flex items-center gap-2 font-medium">
                <BookIcon className="h-4 w-4" />
                {topic.coveredHeading}
              </h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
                {topic.covered.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {topic.coming && (
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h2 className="font-medium">Coming soon</h2>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm text-neutral-600">
                  {topic.coming.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-neutral-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <section className="mt-20">
          <h2 className="text-[0.7rem] tracking-[0.25em] text-neutral-500 uppercase">
            Other topics
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  to={`/topics/${other.slug}`}
                  className="flex h-full items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 transition-colors hover:border-neutral-400"
                >
                  <span className={other.soon ? "text-neutral-500" : undefined}>
                    {other.title}
                  </span>
                  <ChevronRightIcon className="h-4 w-4 shrink-0 text-neutral-400" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
