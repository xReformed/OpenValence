import type { ChatTurn } from "./types";

/**
 * Browser-local chat history. This is a stepping stone, not the destination:
 * it exists so the sidebar is real rather than decorative, and it gets
 * replaced by the API + Postgres once /api/ask lands. Nothing here leaves
 * the user's browser.
 */

const INDEX_KEY = "chemia.chats";
const turnsKey = (id: string) => `chemia.chat.${id}`;

export interface ChatMeta {
  id: string;
  title: string;
  updatedAt: number;
}

/* localStorage throws outright in some contexts (blocked site data, private
   windows, quota) — never let that take the page down. */
function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Nothing useful to do — history is a convenience, not correctness.
  }
}

/* useSyncExternalStore requires a stable snapshot, so the list is cached
   and invalidated on write rather than rebuilt on every read. */
let cache: ChatMeta[] | null = null;
const listeners = new Set<() => void>();

function invalidate() {
  cache = null;
  listeners.forEach((listener) => listener());
}

export function subscribeToChats(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getChats(): ChatMeta[] {
  if (!cache) {
    cache = read<ChatMeta[]>(INDEX_KEY, []).sort(
      (a, b) => b.updatedAt - a.updatedAt,
    );
  }
  return cache;
}

/** Next free numeric id, so URLs stay /chat/1, /chat/2, … */
export function nextChatId(): string {
  const numbers = getChats()
    .map((chat) => Number(chat.id))
    .filter((value) => Number.isFinite(value));
  return String((numbers.length > 0 ? Math.max(...numbers) : 0) + 1);
}

export function loadTurns(id: string): ChatTurn[] {
  return read<ChatTurn[]>(turnsKey(id), []);
}

export function saveTurns(id: string, turns: ChatTurn[]) {
  // An untouched chat stays out of the sidebar, the way ChatGPT does it.
  if (turns.length === 0) return;

  write(turnsKey(id), turns);

  const title =
    turns.find((turn) => turn.role === "user")?.content.slice(0, 60) ?? "Chat";
  const others = read<ChatMeta[]>(INDEX_KEY, []).filter(
    (chat) => chat.id !== id,
  );
  write(INDEX_KEY, [...others, { id, title, updatedAt: Date.now() }]);
  invalidate();
}

export function deleteChat(id: string) {
  try {
    localStorage.removeItem(turnsKey(id));
  } catch {
    // Same as above — best effort.
  }
  write(
    INDEX_KEY,
    read<ChatMeta[]>(INDEX_KEY, []).filter((chat) => chat.id !== id),
  );
  invalidate();
}
