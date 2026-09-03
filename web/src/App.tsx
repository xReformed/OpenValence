import { useMemo } from "react";
import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";
import { nextChatId } from "./lib/chatStore";
import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage";

/**
 * h-dvh + min-h-0 is what lets ChatPage pin its composer to the bottom and
 * scroll only the transcript. Each page owns its own chrome and scroll region
 * — the landing page has the top nav, the chat page has the sidebar.
 */
function AppShell() {
  return (
    <div className="font-michroma flex h-dvh flex-col overflow-hidden bg-white text-neutral-900">
      <div className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}

/* A different chatId is a different conversation, so remount rather than
   reconcile — useChat's state initializer then re-reads the store. */
function ChatRoute() {
  const { chatId } = useParams<{ chatId: string }>();
  const id = chatId ?? "1";
  return <ChatPage key={id} chatId={id} />;
}

/* /chat hands out the next free id. The chat itself isn't written to the
   store until the first message, so empty ones never clutter the sidebar. */
function NewChatRoute() {
  const id = useMemo(() => nextChatId(), []);
  return <Navigate to={`/chat/${id}`} replace />;
}

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<NewChatRoute />} />
        <Route path="/chat/:chatId" element={<ChatRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
