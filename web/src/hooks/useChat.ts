import { useCallback, useEffect, useRef, useState } from "react";
import { askQuestion } from "../lib/api";
import { loadTurns, saveTurns } from "../lib/chatStore";
import type { ChatTurn } from "../lib/types";

export type ChatStatus = "idle" | "sending" | "error";

/**
 * Owns one conversation's turns, loaded from and written back to the browser
 * store. ChatPage is keyed on chatId so a route change remounts this hook and
 * the initializer re-reads — no reload-on-prop-change effect needed.
 */
export function useChat(chatId: string) {
  const [turns, setTurns] = useState<ChatTurn[]>(() => loadTurns(chatId));
  const [status, setStatus] = useState<ChatStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const nextId = useRef(0);

  useEffect(() => {
    saveTurns(chatId, turns);
  }, [chatId, turns]);

  const send = useCallback(async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setTurns((prev) => [
      ...prev,
      { id: `u${nextId.current++}`, role: "user", content: trimmed },
    ]);
    setStatus("sending");
    setError(null);

    try {
      const { answer, citations } = await askQuestion(trimmed);
      setTurns((prev) => [
        ...prev,
        {
          id: `a${nextId.current++}`,
          role: "assistant",
          content: answer,
          citations,
        },
      ]);
      setStatus("idle");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Something went wrong");
      setStatus("error");
    }
  }, []);

  return { turns, status, error, send };
}
