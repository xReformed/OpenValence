import ChemText from "./ChemText";
import CitationList from "./CitationList";
import type { ChatTurn } from "../lib/types";

export default function ChatTurnView({ turn }: { turn: ChatTurn }) {
  if (turn.role === "user") {
    return (
      <div className="flex justify-end">
        <p className="max-w-[80%] rounded-2xl bg-neutral-100 px-4 py-2.5 font-sans text-sm leading-relaxed text-neutral-800">
          <ChemText text={turn.content} />
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="font-sans text-sm leading-relaxed text-neutral-800">
        <ChemText text={turn.content} />
      </p>
      {turn.citations && <CitationList citations={turn.citations} />}
    </div>
  );
}
