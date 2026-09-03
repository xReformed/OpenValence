import { useEffect, useRef, useState } from "react";
import ChatComposer from "../components/ChatComposer";
import ChatSidebar from "../components/ChatSidebar";
import ChatTurnView from "../components/ChatTurnView";
import { useChat } from "../hooks/useChat";

const EXAMPLES = [
  "What makes something count as matter?",
  "Why is a physical change reversible?",
  "What is the difference between mass and weight?",
];

export default function ChatPage({ chatId }: { chatId: string }) {
  const { turns, status, error, send } = useChat(chatId);
  const [menuOpen, setMenuOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [turns, status]);

  const empty = turns.length === 0;

  return (
    <div className="flex min-h-0 flex-1">
      <div className="hidden h-full md:block">
        <ChatSidebar activeChatId={chatId} />
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <button
            type="button"
            aria-label="Close chat list"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-neutral-900/20"
          />
          <div className="absolute inset-y-0 left-0 bg-white">
            <ChatSidebar
              activeChatId={chatId}
              onNavigate={() => setMenuOpen(false)}
            />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex shrink-0 items-center px-4 py-3 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open chat list"
            className="text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {empty ? (
            <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
              <h1 className="text-lg tracking-tight text-neutral-900 sm:text-xl">
                What do you want to know?
              </h1>

              <div className="mt-8 flex flex-col gap-2">
                {EXAMPLES.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => send(example)}
                    className="rounded-lg border border-neutral-200 px-4 py-2.5 font-sans text-xs text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-10">
              {turns.map((turn) => (
                <ChatTurnView key={turn.id} turn={turn} />
              ))}

              {status === "sending" && (
                <p className="font-sans text-sm text-neutral-400">
                  Retrieving sources&#8230;
                </p>
              )}

              {status === "error" && (
                <p className="font-sans text-sm text-red-600">
                  {error} &mdash; nothing was answered, so nothing is cited.
                </p>
              )}

              <div ref={bottomRef} />
            </div>
          )}
        </div>

        <ChatComposer onSend={send} busy={status === "sending"} />
      </div>
    </div>
  );
}
