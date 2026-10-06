import {
  createBrowserRouter,
  data,
  redirect,
  type LoaderFunctionArgs,
} from "react-router-dom";
import AppShell from "./components/AppShell";
import { nextChatId } from "./lib/chatStore";
import { findTopic } from "./lib/topics";
import { ChatRoute } from "./pages/ChatPage";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import RoadmapPage from "./pages/RoadmapPage";
import { BranchPathRoute } from "./pages/BranchPathPage";
import { BOOK_CHAPTERS, BOOK_META } from "./lib/learningPaths.generated";
import { getBranch } from "./lib/roadmap";
import { loadSectionText } from "./lib/sectionText";
import { TopicRoute } from "./pages/TopicPage";

export function branchLoader({ params }: LoaderFunctionArgs) {
  const branch = getBranch(params.slug);
  if (!branch) throw data("Branch not found", { status: 404 });
  return branch;
}

/* /roadmap/:slug/:book/:section — one textbook section, in a branch's path.
   The book is in the URL because both introductory books have a "8.2". */
export async function sectionLoader({ params }: LoaderFunctionArgs) {
  const branch = getBranch(params.slug);
  const stage = branch?.path?.find((candidate) => candidate.book === params.book);
  if (!branch || !stage) throw data("Section not found", { status: 404 });

  const sections = BOOK_CHAPTERS[stage.book].flatMap((chapter) =>
    chapter.sections.map((section) => ({ chapter, section })),
  );
  const index = sections.findIndex(({ section }) => section.number === params.section);
  if (index < 0) throw data("Section not found", { status: 404 });
  const { chapter, section } = sections[index];

  /* Previous / next skip sections that are still empty stubs. */
  const neighbour = (step: -1 | 1) => {
    for (let i = index + step; i >= 0 && i < sections.length; i += step) {
      if (sections[i].section.ready) return sections[i].section;
    }
    return undefined;
  };

  return {
    branch,
    stage,
    meta: BOOK_META[stage.book],
    chapter,
    section,
    text: section.ready ? await loadSectionText(section.file) : undefined,
    previous: neighbour(-1),
    next: neighbour(1),
  };
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
          { path: "roadmap", Component: RoadmapPage },
          { path: "roadmap/:slug", loader: branchLoader, Component: BranchPathRoute },
          {
            path: "roadmap/:slug/:book/:section",
            loader: sectionLoader,
            /* Split out: the markdown renderer only loads with a section page. */
            lazy: async () => ({ Component: (await import("./pages/SectionPage")).SectionRoute }),
          },
          { path: "chat", loader: newChatLoader },
          { path: "chat/:chatId", Component: ChatRoute },
          { path: "*", loader: notFoundLoader },
        ],
      },
    ],
  },
]);
