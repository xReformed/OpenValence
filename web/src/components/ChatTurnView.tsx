import ChemText from "./ChemText";
import CitationList from "./CitationList";
import { ValenceMark } from "./LandingIcons";
import type { ChatTurn } from "../lib/types";

export function AssistantAvatar() {
  return (
    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white">
      <ValenceMark className="h-4 w-4" />
    </span>
  );
}

export default function ChatTurnView({ turn }: { turn: ChatTurn }) {
  if (turn.role === "user") {
    return (
      <div className="flex justify-end">
        <p className="max-w-[85%] rounded-2xl rounded-br-md bg-neutral-100 px-4 py-3 text-[0.95rem] leading-relaxed whitespace-pre-wrap text-neutral-900">
          <ChemText text={turn.content} />
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4">
      <AssistantAvatar />
      <div className="min-w-0 flex-1">
        <p className="text-[0.95rem] leading-relaxed whitespace-pre-wrap text-reading">
          <ChemText text={turn.content} />
        </p>
        {turn.citations && <CitationList citations={turn.citations} />}
      </div>
    </div>
  );
}
