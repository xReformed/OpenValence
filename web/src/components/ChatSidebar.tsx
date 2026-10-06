import { useSyncExternalStore } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteChat,
  getChats,
  nextChatId,
  subscribeToChats,
  type ChatMeta,
} from "../lib/chatStore";
import { LockIcon, PlusIcon, TrashIcon, ValenceMark } from "./LandingIcons";

const DAY_MS = 24 * 60 * 60 * 1000;

/* Chats arrive newest first, so grouping preserves that order. */
function groupByDate(chats: ChatMeta[]) {
  const startOfToday = new Date().setHours(0, 0, 0, 0);
  const label = (updatedAt: number) =>
    updatedAt >= startOfToday
      ? "Today"
      : updatedAt >= startOfToday - DAY_MS
        ? "Yesterday"
        : updatedAt >= startOfToday - 7 * DAY_MS
          ? "Previous 7 days"
          : "Older";

  const groups: { label: string; chats: ChatMeta[] }[] = [];
  for (const chat of chats) {
    const name = label(chat.updatedAt);
    const last = groups.at(-1);
    if (last?.label === name) last.chats.push(chat);
    else groups.push({ label: name, chats: [chat] });
  }
  return groups;
}

export default function ChatSidebar({
  activeChatId,
  onNavigate,
}: {
  activeChatId?: string;
  onNavigate?: () => void;
}) {
  const chats = useSyncExternalStore(subscribeToChats, getChats);
  const navigate = useNavigate();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-neutral-200 bg-neutral-50 font-sans">
      <div className="shrink-0 px-5 pt-5 pb-4">
        <Link
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-2 text-base tracking-tight"
        >
          <ValenceMark className="h-5 w-5" />
          OpenValence
        </Link>
      </div>

      <div className="shrink-0 px-3">
        <button
          type="button"
          onClick={() => {
            navigate(`/chat/${nextChatId()}`);
            onNavigate?.();
          }}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 px-3 py-2.5 text-sm text-white transition-colors hover:bg-neutral-700"
        >
          <PlusIcon className="h-4 w-4" />
          New chat
        </button>
      </div>

      <nav aria-label="Chat history" className="min-h-0 flex-1 overflow-y-auto px-3 pt-6 pb-4">
        {chats.length === 0 ? (
          <p className="px-2 text-sm leading-relaxed text-neutral-400">
            Your chats will appear here.
          </p>
        ) : (
          groupByDate(chats).map((group) => (
            <div key={group.label} className="mb-5">
              <p className="px-2 pb-1.5 text-[0.65rem] tracking-[0.2em] text-neutral-400 uppercase">
                {group.label}
              </p>
              <ul className="flex flex-col gap-0.5">
                {group.chats.map((chat) => {
                  const active = chat.id === activeChatId;
                  return (
                    <li key={chat.id} className="group relative">
                      <Link
                        to={`/chat/${chat.id}`}
                        onClick={onNavigate}
                        title={chat.title}
                        aria-current={active ? "page" : undefined}
                        className={`block truncate rounded-lg py-2 pr-9 pl-2.5 text-sm transition-colors ${
                          active
                            ? "bg-white text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.05)] ring-1 ring-neutral-200"
                            : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                        }`}
                      >
                        {chat.title}
                      </Link>
                      {/* Visible on hover or keyboard focus, and always on touch screens. */}
                      <button
                        type="button"
                        aria-label={`Delete chat: ${chat.title}`}
                        onClick={() => {
                          deleteChat(chat.id);
                          if (active) navigate(`/chat/${nextChatId()}`);
                        }}
                        className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-md p-1.5 text-neutral-400 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 hover:bg-neutral-200 hover:text-neutral-700 focus-visible:opacity-100 pointer-coarse:opacity-100"
                      >
                        <TrashIcon className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </nav>

      <div className="shrink-0 border-t border-neutral-200 px-3 py-3">
        <div className="flex flex-col gap-0.5 text-sm">
          <Link
            to="/"
            onClick={onNavigate}
            className="rounded-lg px-2.5 py-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            Home
          </Link>
          <Link
            to="/roadmap"
            onClick={onNavigate}
            className="rounded-lg px-2.5 py-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            Roadmap
          </Link>
        </div>
        <p className="mt-2 flex items-center gap-1.5 px-2.5 text-xs text-neutral-400">
          <LockIcon className="h-3.5 w-3.5 shrink-0" />
          History stays in this browser
        </p>
      </div>
    </aside>
  );
}
