import { useLayoutEffect, useRef, useState } from "react";

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

  // Grow with the content up to a cap, then scroll internally.
  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_ROWS_PX)}px`;
  }, [value]);

  const submit = () => {
    if (busy || !value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="border-t border-neutral-100 bg-white px-4 pb-6 pt-4">
      <div className="mx-auto flex w-full max-w-3xl items-end gap-2 rounded-2xl border border-neutral-200 px-3 py-2 focus-within:border-neutral-400">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          disabled={busy}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              submit();
            }
          }}
          placeholder="Ask a chemistry question"
          className="flex-1 resize-none bg-transparent py-1.5 font-sans text-sm leading-relaxed text-neutral-800 placeholder:text-neutral-400 focus:outline-none disabled:opacity-50"
        />

        <button
          type="button"
          onClick={submit}
          disabled={busy || !value.trim()}
          aria-label="Send question"
          className="mb-0.5 shrink-0 rounded-lg bg-neutral-900 px-3 py-2 text-white transition-opacity hover:opacity-80 disabled:opacity-25"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
            <path
              d="M12 19V5M12 5l-6 6M12 5l6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <p className="mx-auto mt-2 max-w-3xl text-[0.55rem] text-neutral-400">
        Answers are drawn only from Chemia&#39;s sources. Enter to send,
        Shift&#8202;+&#8202;Enter for a new line.
      </p>
    </div>
  );
}
