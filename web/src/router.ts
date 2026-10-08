import {
  createBrowserRouter,
  data,
  redirect,
  type LoaderFunctionArgs,
} from "react-router-dom";
import AppShell from "./components/AppShell";
import { nextChatId } from "./lib/chatStore";
import { getBranch } from "./lib/roadmap";
import { findTopic } from "./lib/topics";
import type { Concept } from "./lib/types";
import { ChatRoute } from "./pages/ChatPage";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import { TopicRoute } from "./pages/TopicPage";

/* Each concept path's file (lib/concepts/<slug>.ts), by name only: the file
   itself loads with its page, so the app doesn't carry every path's levels. */
const CONCEPT_FILES = import.meta.glob<Concept>(
  ["./lib/concepts/*.ts", "!./lib/concepts/index.ts"],
  { import: "default" },
);

export function branchLoader({ params }: LoaderFunctionArgs) {
  const branch = getBranch(params.slug);
  if (!branch) throw data("Branch not found", { status: 404 });
  return branch;
}

export function topicLoader({ params }: LoaderFunctionArgs) {
  const topic = findTopic(params.slug);
  if (!topic) throw data("Topic not found", { status: 404 });
  return topic;
}

/* /chat hands out the next free id. The chat itself isn't written to the
   store until the first message, so empty ones never clutter the sidebar.
   A ?q= question rides along; ChatPage asks it once, then drops it from the
   URL so a reload doesn't ask it again. */
function newChatLoader({ request }: LoaderFunctionArgs) {
  const question = new URL(request.url).searchParams.get("q")?.trim();
  const to = `/chat/${nextChatId()}`;
  return redirect(question ? `${to}?q=${encodeURIComponent(question)}` : to);
}

function notFoundLoader(): never {
  throw data("Page not found", { status: 404 });
}

export const router = createBrowserRouter([
  {
    Component: AppShell,
    HydrateFallback: () => null,
    children: [
      {
        ErrorBoundary: ErrorPage,
        children: [
          { index: true, Component: LandingPage },
          { path: "topics/:slug", loader: topicLoader, Component: TopicRoute },
          /* The roadmap pages load on demand: they bring the books' chapter
             lists (learningPaths.generated.ts), which the landing page and
             chat don't need. */
          {
            path: "roadmap",
            lazy: async () => ({ Component: (await import("./pages/RoadmapPage")).default }),
          },
          /* A fixed path outranks roadmap/:slug, so "learn" is never read as a branch. */
          {
            path: "roadmap/learn",
            lazy: async () => ({ Component: (await import("./pages/LearnPracticePage")).default }),
          },
          /* Each concept path gets a fixed path the same way, e.g. /roadmap/balancing. */
          ...Object.entries(CONCEPT_FILES).map(([file, load]) => ({
            path: `roadmap/${file.slice(file.lastIndexOf("/") + 1, -".ts".length)}`,
            loader: () => load(),
            lazy: async () => ({ Component: (await import("./pages/ConceptPathPage")).default }),
          })),
          {
            path: "roadmap/:slug",
            loader: branchLoader,
            lazy: async () => ({ Component: (await import("./pages/BranchPathPage")).BranchPathRoute }),
          },
          {
            path: "roadmap/:slug/:book/:section",
            /* The page brings the markdown renderer; the loader, the chapter lists. */
            lazy: async () => {
              const [{ sectionLoader }, { SectionRoute }] = await Promise.all([
                import("./sectionLoader"),
                import("./pages/SectionPage"),
              ]);
              return { loader: sectionLoader, Component: SectionRoute };
            },
          },
          { path: "chat", loader: newChatLoader },
          { path: "chat/:chatId", Component: ChatRoute },
          { path: "*", loader: notFoundLoader },
        ],
      },
    ],
  },
]);
