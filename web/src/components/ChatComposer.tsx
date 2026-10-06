import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpIcon } from "./LandingIcons";

const MAX_ROWS_PX = 200;

export default function ChatComposer({
  onSend,
  busy,
}: {
  onSend: (question: string) => void;
  busy: boolean;
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_ROWS_PX)}px`;
  }, [value]);

  /* The box stays editable while an answer loads, so the next question can be
     typed; only sending waits. */
  const canSend = !busy && value.trim() !== "";
  const submit = () => {
    if (!canSend) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="shrink-0 px-4 pt-2 pb-5 sm:px-6">
      <form
        className="mx-auto w-full max-w-3xl"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <div className="flex items-end gap-2 rounded-2xl border border-neutral-200 bg-white p-2 pl-4 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.3)] transition-colors focus-within:border-neutral-400">
          <label htmlFor="chat-question" className="sr-only">
            Ask a chemistry question
          </label>
          <textarea
            id="chat-question"
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                submit();
              }
            }}
            placeholder="Ask a chemistry question"
            className="flex-1 resize-none bg-transparent py-2 text-[0.95rem] leading-relaxed text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send question"
            className="bg-accent hover:bg-accent-ink flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-neutral-900 transition-colors hover:text-white disabled:bg-neutral-100 disabled:text-neutral-400"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-center text-xs text-neutral-400">
          Answers come only from OpenValence&#39;s textbook sources. Enter to
          send, Shift&#8202;+&#8202;Enter for a new line.
        </p>
      </form>
    </div>
  );
}
