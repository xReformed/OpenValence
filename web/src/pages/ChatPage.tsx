import { useEffect, useRef, useState, useSyncExternalStore, type ComponentType } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ChatComposer from "../components/ChatComposer";
import ChatSidebar from "../components/ChatSidebar";
import ChatTurnView, { AssistantAvatar } from "../components/ChatTurnView";
import ChemText from "../components/ChemText";
import {
  ArrowRightIcon,
  BookIcon,
  CalculatorIcon,
  MenuIcon,
  QuestionIcon,
  ValenceMark,
} from "../components/LandingIcons";
import { useChat } from "../hooks/useChat";
import { getChats, subscribeToChats } from "../lib/chatStore";

/* Each one is answerable from the corpus (Beginning Chemistry 1.2, and its 5.6 percent yield example). */
const EXAMPLES: { kind: string; icon: ComponentType<{ className?: string }>; question: string }[] = [
  { kind: "Concept", icon: QuestionIcon, question: "What makes something count as matter?" },
  { kind: "Concept", icon: QuestionIcon, question: "What is the difference between a physical change and a chemical change?" },
  { kind: "Definition", icon: BookIcon, question: "What is the difference between an element and a compound?" },
  {
    kind: "Calculation",
    icon: CalculatorIcon,
    question: "If 30.5 g of zinc reacts with nitric acid and gives 65.2 g of zinc nitrate, what is the percent yield?",
  },
];

export function ChatRoute() {
  const { chatId = "1" } = useParams<{ chatId: string }>();
  return <ChatPage key={chatId} chatId={chatId} />;
}

function Thinking() {
  return (
    <div role="status" className="flex gap-3 sm:gap-4">
      <AssistantAvatar />
      <p className="flex items-center gap-2.5 pt-1.5 text-sm text-neutral-500">
        <span aria-hidden="true" className="flex gap-1">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              style={{ animationDelay: `${delay}ms` }}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 motion-reduce:animate-none"
            />
          ))}
        </span>
        Searching the textbook&#8230;
      </p>
    </div>
  );
}

export default function ChatPage({ chatId }: { chatId: string }) {
  const { turns, status, error, send } = useChat(chatId);
  const [menuOpen, setMenuOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chats = useSyncExternalStore(subscribeToChats, getChats);
  const title = chats.find((chat) => chat.id === chatId)?.title ?? "New chat";

  /* A question handed over as ?q= (see newChatLoader in router.ts). Dropping
     it from the URL first means a reload or back-navigation won't re-ask it;
     the ref covers StrictMode's double effect run. */
  const [searchParams, setSearchParams] = useSearchParams();
  const asked = useRef(false);
  useEffect(() => {
    const question = searchParams.get("q")?.trim();
    if (!question || asked.current) return;
    asked.current = true;
    setSearchParams({}, { replace: true });
    void send(question);
  }, [searchParams, setSearchParams, send]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [turns, status]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  const empty = turns.length === 0;

  return (
    <div className="flex min-h-0 flex-1 bg-white font-sans">
      <div className="hidden h-full md:block">
        <ChatSidebar activeChatId={chatId} />
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <button
            type="button"
            aria-label="Close chat list"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-neutral-900/30"
          />
          <div className="absolute inset-y-0 left-0 shadow-xl">
            <ChatSidebar activeChatId={chatId} onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-3 border-b border-neutral-100 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open chat list"
            className="-ml-1 rounded-md p-1 text-neutral-500 transition-colors hover:text-neutral-900 md:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <p className="truncate text-sm text-neutral-700">{title}</p>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {empty ? (
            <div className="mx-auto flex min-h-full max-w-3xl flex-col justify-center px-4 py-12 sm:px-6">
              <div className="text-center">
                <ValenceMark className="text-accent-ink mx-auto block h-12 w-12" />
                <h1 className="mt-6 text-3xl tracking-tight sm:text-4xl">
                  What do you want to know?
                </h1>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-neutral-500">
                  Answers come only from the textbook sources, and every claim
                  links to the passage it came from.
                </p>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {EXAMPLES.map(({ kind, icon: KindIcon, question }) => (
                  <li key={question}>
                    <button
                      type="button"
                      onClick={() => send(question)}
                      className="group flex h-full w-full flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-left transition-[border-color,box-shadow] duration-200 hover:border-neutral-400 hover:shadow-[0_6px_16px_-10px_rgba(0,0,0,0.25)]"
                    >
                      <span className="flex items-center justify-between gap-2 text-xs text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <KindIcon className="h-3.5 w-3.5" />
                          {kind}
                        </span>
                        <ArrowRightIcon className="h-3.5 w-3.5 text-neutral-300 transition-[color,translate] group-hover:translate-x-0.5 group-hover:text-neutral-700" />
                      </span>
                      <span className="text-sm leading-relaxed text-neutral-800">
                        <ChemText text={question} />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-10 sm:px-6">
              {turns.map((turn) => (
                <ChatTurnView key={turn.id} turn={turn} />
              ))}

              {status === "sending" && <Thinking />}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error} &mdash; nothing was answered, so nothing is cited.
                </div>
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
