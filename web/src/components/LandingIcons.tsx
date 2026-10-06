import type { ReactNode } from "react";

function Icon({
  className = "h-5 w-5",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

type IconProps = { className?: string };

export function ValenceMark({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 12V5M12 12l-6 4M12 12l6 4" />
      <circle cx="12" cy="4" r="2.2" fill="currentColor" />
      <circle cx="5" cy="17" r="2.2" fill="currentColor" />
      <circle cx="19" cy="17" r="2.2" fill="currentColor" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </Icon>
  );
}

export function FlaskIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M10 2v7.5a2 2 0 0 1-.2.9L4.7 20.5a1 1 0 0 0 .9 1.5h12.8a1 1 0 0 0 .9-1.5l-5.1-10.1a2 2 0 0 1-.2-.9V2" />
      <path d="M8.5 2h7M7 16h10" />
    </Icon>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8M8 9h2" />
    </Icon>
  );
}

export function QuestionIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
    </Icon>
  );
}

export function StepsIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </Icon>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </Icon>
  );
}

export function HistoryIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </Icon>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </Icon>
  );
}

export function CalculatorIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </Icon>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="m9 18 6-6-6-6" />
    </Icon>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </Icon>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function TrashIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
    </Icon>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </Icon>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </Icon>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </Icon>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Icon>
  );
}

export function SendIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M5 12 3 4l18 8-18 8 2-8Zm0 0h7" />
    </Icon>
  );
}
