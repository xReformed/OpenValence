import { Outlet } from "react-router-dom";

/**
 * h-dvh + min-h-0 is what lets ChatPage pin its composer to the bottom and
 * scroll only the transcript. Each page owns its own chrome and scroll region
 * — the landing page has the top nav, the chat page has the sidebar.
 */
export default function AppShell() {
  return (
    <div className="font-michroma flex h-dvh flex-col overflow-hidden bg-white text-neutral-900">
      <div className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}
