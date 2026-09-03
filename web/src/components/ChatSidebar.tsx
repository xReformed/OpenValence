import { useSyncExternalStore } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteChat,
  getChats,
  nextChatId,
  subscribeToChats,
} from "../lib/chatStore";

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
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
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-neutral-100">
      <div className="flex shrink-0 items-center justify-between px-4 py-5">
        <Link to="/" className="flex items-center gap-1.5 text-sm">
          Chemia
          <span className="bg-accent mt-0.5 block h-2 w-2" />
        </Link>
      </div>

      <div className="shrink-0 px-3">
        <button
          type="button"
          onClick={() => {
            navigate(`/chat/${nextChatId()}`);
            onNavigate?.();
          }}
          className="flex w-full items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-[0.6rem] text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
        >
          <PlusIcon />
          New chat
        </button>
      </div>

      <p className="shrink-0 px-4 pt-6 pb-2 text-[0.55rem] text-neutral-400">
        Chats
      </p>

      <nav className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        {chats.length === 0 ? (
          <p className="px-2 font-sans text-xs text-neutral-300">
            No chats yet.
          </p>
        ) : (
          chats.map((chat) => {
            const active = chat.id === activeChatId;
            return (
              <div key={chat.id} className="group relative">
                <Link
                  to={`/chat/${chat.id}`}
                  onClick={onNavigate}
                  title={chat.title}
                  className={`block truncate rounded-md py-2 pr-7 pl-2 font-sans text-xs transition-colors ${
                    active
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
                >
                  {chat.title}
                </Link>

                <button
                  type="button"
                  aria-label={`Delete ${chat.title}`}
                  onClick={() => {
                    deleteChat(chat.id);
                    if (active) navigate(`/chat/${nextChatId()}`);
                  }}
                  className="absolute top-1/2 right-1 -translate-y-1/2 px-1.5 text-xs text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100 hover:text-neutral-600"
                >
                  &times;
                </button>
              </div>
            );
          })
        )}
      </nav>

      <div className="shrink-0 border-t border-neutral-100 px-4 py-3">
        <p className="text-[0.55rem] leading-relaxed text-neutral-400">
          Local session
          <span className="block text-neutral-300">
            History stays in this browser
          </span>
        </p>
      </div>
    </aside>
  );
}
