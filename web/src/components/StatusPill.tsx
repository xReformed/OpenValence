import { STATUS_LABEL, type BranchStatus } from "../lib/roadmap";

const STATUS_STYLE: Record<BranchStatus, string> = {
  "in-progress": "bg-accent text-on-accent",
  planned: "border border-neutral-300 text-neutral-600",
  later: "bg-neutral-100 text-neutral-500",
};

export default function StatusPill({ status }: { status: BranchStatus }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs whitespace-nowrap ${STATUS_STYLE[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}
