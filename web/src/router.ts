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
import { TopicRoute } from "./pages/TopicPage";

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
          { path: "chat", loader: newChatLoader },
          { path: "chat/:chatId", Component: ChatRoute },
          { path: "*", loader: notFoundLoader },
        ],
      },
    ],
  },
]);
