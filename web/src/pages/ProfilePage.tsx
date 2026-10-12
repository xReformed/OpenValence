import { useRef, useState, useSyncExternalStore, type ComponentType, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BookIcon,
  CameraIcon,
  CheckIcon,
  GearIcon,
  PencilIcon,
  UserIcon,
  ValenceMark,
} from "../components/LandingIcons";
import BadgeArt from "../components/BadgeArt";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import TopNavBar from "../components/TopNavBar";
import { BADGES, earnedBadges } from "../lib/badges";
import { deleteChat, getChats, subscribeToChats } from "../lib/chatStore";
import { BOOK_CHAPTERS, BOOK_META } from "../lib/learningPaths.generated";
import { getAnswers, subscribeToPractice } from "../lib/practiceStore";
import { answerTotals, exportData, importData, resetLearning, sectionScores } from "../lib/profileData";
import {
  ABOUT_MAX,
  NAME_MAX,
  getProfile,
  initials,
  saveProfile,
  shrinkPhoto,
  subscribeToProfile,
  type Profile,
} from "../lib/profileStore";
import { getFinished, isFinished, sectionLocks, subscribeToProgress } from "../lib/progress";
import { getQuestionSets, passMark, subscribeToQuestionSets } from "../lib/questionSets";
import { BRANCHES } from "../lib/roadmap";
import type { BookKey } from "../lib/types";

/* The reader's profile. Their name, photo and goal are what they enter here
   (profileStore.ts); everything else is worked out from what the other pages
   already keep in this browser. There are no accounts: nothing leaves it. */

type IconType = ComponentType<{ className?: string }>;

const LEARNING_BRANCHES = BRANCHES.filter((branch) => branch.status === "in-progress" && branch.path);

/* Where a book's sections live in the app, and what they're called. */
function branchFor(book: BookKey) {
  return BRANCHES.find((branch) => branch.path?.some((stage) => stage.book === book));
}
function sectionTitle(book: BookKey, number: string) {
  return BOOK_CHAPTERS[book].flatMap((chapter) => chapter.sections).find((s) => s.number === number)?.title;
}
function sectionHref(book: BookKey, number: string) {
  const branch = branchFor(book);
  return branch ? `/roadmap/${branch.slug}/${book}/${number}` : undefined;
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-neutral-200 bg-white ${className}`}>{children}</div>;
}

/* A card's title with its icon in an accent disc, as in the two cards side by side. */
function CardTitle({ icon: Icon, children }: { icon: IconType; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-medium">
      <span className="bg-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
        <Icon className="text-on-accent h-4 w-4" />
      </span>
      {children}
    </h2>
  );
}

/* The share of answers that were right, as a ring with the figure inside. */
function AccuracyRing({ rate }: { rate: number }) {
  const percent = Math.round(rate * 100);
  const circumference = 2 * Math.PI * 42;
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={`${percent}% of answers correct`} className="h-28 w-28 shrink-0">
      <circle cx="50" cy="50" r="42" fill="none" strokeWidth="9" className="stroke-neutral-100" />
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - rate)}
        transform="rotate(-90 50 50)"
        className="stroke-accent transition-[stroke-dashoffset] duration-700 motion-reduce:transition-none"
      />
      <text x="50" y="50" textAnchor="middle" dominantBaseline="central" className="fill-current text-[1.4rem] tabular-nums">
        {percent}%
      </text>
    </svg>
  );
}

function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
      <h2 className="text-xl tracking-tight">{title}</h2>
      {note && <p className="text-sm text-neutral-500">{note}</p>}
    </div>
  );
}

function Avatar({ profile, className = "" }: { profile: Profile; className?: string }) {
  const letters = initials(profile.name);
  return (
    <span
      className={`flex items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white ${className}`}
    >
      {profile.photo ? (
        <img src={profile.photo} alt="" className="h-full w-full object-cover" />
      ) : letters ? (
        <span className="text-accent-ink text-3xl tracking-tight">{letters}</span>
      ) : (
        <UserIcon className="h-10 w-10 text-neutral-400" />
      )}
    </span>
  );
}

const button =
  "rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900";
const field =
  "focus:border-accent-ink w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none transition-colors";

function EditForm({ profile, onDone }: { profile: Profile; onDone: (note: string) => void }) {
  const [name, setName] = useState(profile.name);
  const [about, setAbout] = useState(profile.about);
  const [goal, setGoal] = useState(profile.goal);

  return (
    <form
      className="mt-6 flex max-w-xl flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onDone(saveProfile({ name, about, goal }) ? "Profile saved." : "Couldn't save: this browser's storage is full or blocked.");
      }}
    >
      <label className="flex flex-col gap-1.5 text-sm text-neutral-600">
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={NAME_MAX} className={field} autoFocus />
      </label>
      <label className="flex flex-col gap-1.5 text-sm text-neutral-600">
        Studying
        <select value={goal} onChange={(e) => setGoal(e.target.value)} className={field}>
          <option value="">Not set</option>
          {LEARNING_BRANCHES.map((branch) => (
            <option key={branch.slug} value={branch.slug}>
              {branch.title}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm text-neutral-600">
        <span className="flex justify-between">
          About
          <span className="tabular-nums text-neutral-400">
            {about.length}/{ABOUT_MAX}
          </span>
        </span>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          maxLength={ABOUT_MAX}
          rows={3}
          placeholder="What you're studying, or what you're aiming for."
          className={`${field} resize-none`}
        />
      </label>
      <div className="flex flex-wrap gap-2.5">
        <button type="submit" className="bg-accent hover:bg-accent-ink rounded-lg px-4 py-2 text-sm text-on-accent transition-colors hover:text-white">
          Save
        </button>
        <button type="button" onClick={() => onDone("")} className={button}>
          Cancel
        </button>
        {profile.photo && (
          <button
            type="button"
            onClick={() => onDone(saveProfile({ photo: "" }) ? "Photo removed." : "Couldn't remove the photo.")}
            className={`${button} hover:border-red-400 hover:text-red-600`}
          >
            Remove photo
          </button>
        )}
      </div>
    </form>
  );
}

export default function ProfilePage() {
  const profile = useSyncExternalStore(subscribeToProfile, getProfile);
  const finished = useSyncExternalStore(subscribeToProgress, getFinished);
  const answers = useSyncExternalStore(subscribeToPractice, getAnswers);
  const sets = useSyncExternalStore(subscribeToQuestionSets, getQuestionSets);
  const chats = useSyncExternalStore(subscribeToChats, getChats);
  const [editing, setEditing] = useState(false);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const photoInput = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  /* Weakest first, so the sections worth another try come to the top. */
  const allScores = sectionScores(sets, answers);
  const scores = [...allScores].sort((a, b) => a.correct / a.size - b.correct / b.size).slice(0, 6);
  const goal = LEARNING_BRANCHES.find((branch) => branch.slug === profile.goal);

  /* Each learning path's book: how far along, and where to pick up. */
  const books = LEARNING_BRANCHES.flatMap((branch) =>
    branch.path!.map((stage) => {
      const chapters = BOOK_CHAPTERS[stage.book];
      const ready = chapters.flatMap((chapter) => chapter.sections).filter((s) => s.ready);
      const done = ready.filter((s) => isFinished(finished, stage.book, s.number)).length;
      const { blockedBy } = sectionLocks(stage.book, chapters, finished);
      return { branch, book: stage.book, ready: ready.length, done, next: ready.find((s) => s.number === blockedBy) };
    }),
  );
  /* How well the reader is answering: every recorded answer, and the sets
     they've completed (current sets only; a new draw replaces the old). */
  const totals = answerTotals(answers);
  const rate = totals.answered ? totals.correct / totals.answered : 0;
  const completeSets = allScores.filter((s) => s.answered === s.size);
  const practiceFigures = [
    { label: "Questions answered", value: totals.answered },
    { label: "Sections practised", value: allScores.length },
    { label: "Sets passed", value: completeSets.filter((s) => s.correct >= passMark(s.size)).length },
    { label: "Perfect sets", value: completeSets.filter((s) => s.correct === s.size).length },
  ];

  /* One badge per finished roadmap (lib/badges.ts). */
  const badges = earnedBadges(BRANCHES, finished);

  async function choosePhoto(file: File) {
    try {
      const photo = await shrinkPhoto(file);
      setNote(saveProfile({ photo }) ? "Photo updated." : "Couldn't save the photo: this browser's storage is full or blocked.");
    } catch {
      setNote("That file couldn't be read as an image.");
    }
  }

  function download() {
    const blob = new Blob([exportData()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `openvalence-progress-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Progress exported.");
  }

  async function restore(file: File) {
    try {
      const count = importData(await file.text());
      setMessage(`Imported ${count} item${count === 1 ? "" : "s"}. Reloading…`);
      /* The stores read localStorage once, at load. */
      window.location.reload();
    } catch (error) {
      setMessage(error instanceof Error && error.message.startsWith("This isn't") ? error.message : "That file couldn't be read.");
    }
  }

  function reset() {
    if (!window.confirm("Reset your reading progress and practice answers? Your profile and chats are kept.")) return;
    resetLearning();
    window.location.reload();
  }

  function clearChats() {
    if (!window.confirm(`Delete all ${chats.length} chat${chats.length === 1 ? "" : "s"}? This can't be undone.`)) return;
    for (const chat of chats) deleteChat(chat.id);
    setMessage("Chat history cleared.");
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8">
        <Reveal>
          <section aria-label="Profile">
            {/* The banner: an accent wash over the site's grid texture. */}
            <div
              className="relative h-32 overflow-hidden rounded-3xl border border-neutral-200 sm:h-40"
              style={{
                background:
                  "linear-gradient(115deg, color-mix(in oklab, var(--color-accent) 38%, transparent), color-mix(in oklab, var(--color-accent) 10%, transparent) 55%, transparent)",
              }}
            >
              <div className="bg-grid absolute inset-0 opacity-60" />
              {!editing && (
                <button
                  type="button"
                  onClick={() => {
                    setNote("");
                    setEditing(true);
                  }}
                  className="text-accent-ink absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm transition-colors hover:border-neutral-400"
                >
                  <PencilIcon className="h-4 w-4" />
                  Edit profile
                </button>
              )}
              <a
                href="#your-data"
                aria-label="Data and settings"
                title="Data and settings"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-600 backdrop-blur transition-colors hover:text-neutral-900"
              >
                <GearIcon className="h-4.5 w-4.5" />
              </a>
            </div>

            <div className="-mt-14 px-5 sm:-mt-16 sm:px-8">
              <div className="relative w-fit">
                <Avatar profile={profile} className="h-28 w-28 ring-4 ring-neutral-50 sm:h-32 sm:w-32" />
                <button
                  type="button"
                  onClick={() => photoInput.current?.click()}
                  aria-label={profile.photo ? "Change photo" : "Add a photo"}
                  title={profile.photo ? "Change photo" : "Add a photo"}
                  className="text-accent-ink absolute right-0 bottom-1 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-colors hover:border-neutral-400"
                >
                  <CameraIcon className="h-4 w-4" />
                </button>
                <input
                  ref={photoInput}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    event.target.value = "";
                    if (file) void choosePhoto(file);
                  }}
                />
              </div>
            </div>

            <div className="px-5 sm:px-8">
              {editing ? (
                <EditForm
                  profile={profile}
                  onDone={(text) => {
                    setNote(text);
                    setEditing(false);
                  }}
                />
              ) : (
                <div className="mt-5">
                  <h1 className="text-3xl tracking-tight sm:text-4xl">{profile.name || "Your profile"}</h1>
                  <p className="text-accent-ink mt-1.5">
                    {goal ? `Studying ${goal.title.toLowerCase()}` : "Learning with OpenValence"}
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-neutral-500">
                    {profile.about ||
                      (profile.name
                        ? "Add a line about what you're studying with Edit profile."
                        : "Kept in this browser only, and never sent anywhere. Add your name and what you're studying with Edit profile.")}
                  </p>
                </div>
              )}
              <p role="status" className="mt-3 min-h-5 text-sm text-neutral-500">
                {note}
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={80}>
          <Panel className="mt-6 p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-medium">Badges</h2>
              {badges.length > 0 && (
                <Link to="/profile/badges" className="group text-accent-ink inline-flex items-center gap-1.5 text-sm">
                  {badges.length} of {BADGES.length} earned · View all badges
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
            {badges.length === 0 ? (
              <div className="mt-6 flex flex-col items-center rounded-xl border border-dashed border-neutral-200 px-6 py-12 text-center">
                <ValenceMark className="h-7 w-7 text-neutral-400" />
                <p className="mt-3 text-neutral-700">No badges yet</p>
                <p className="mt-1 max-w-sm text-sm text-neutral-500">
                  Complete a roadmap to earn its badge.
                </p>
                <Link
                  to="/profile/badges"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm transition-colors hover:border-neutral-400"
                >
                  View all badges
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ) : (
              <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {badges.map((badge) => (
                  <li
                    key={badge.id}
                    className="flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-200 px-4 py-7 text-center"
                  >
                    <BadgeArt src={badge.image} earned effect={badge.effect} className="h-24 w-auto" />
                    <p className="mt-4 text-sm font-medium">{badge.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-500">{badge.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Panel className="flex flex-col p-6">
              <CardTitle icon={CheckIcon}>Practice stats</CardTitle>
              {totals.answered === 0 ? (
                <p className="mt-5 text-sm leading-relaxed text-neutral-500">
                  No practice yet. Sections with questions end with Check
                  yourself, and your correct rate shows here.
                </p>
              ) : (
                <>
                  <div className="mt-6 flex items-center gap-6">
                    <AccuracyRing rate={rate} />
                    <div>
                      <p className="text-sm text-neutral-500">Correct rate</p>
                      <p className="mt-1 text-lg tabular-nums">
                        {totals.correct} of {totals.answered}
                      </p>
                      <p className="text-sm text-neutral-500">answers correct</p>
                    </div>
                  </div>
                  <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200">
                    {practiceFigures.map(({ label, value }) => (
                      <div key={label} className="flex flex-col-reverse bg-white px-4 py-3">
                        <dt className="text-xs text-neutral-500">{label}</dt>
                        <dd className="text-xl tracking-tight tabular-nums">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
              <div className="mt-auto pt-6">
                <div className="border-t border-neutral-200 pt-4">
                  <Link to="/roadmap/learn" className="group text-accent-ink inline-flex items-center gap-1.5 text-sm">
                    Practice more
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Panel>

            <Panel className="flex flex-col p-6">
              <CardTitle icon={BookIcon}>Learning progress</CardTitle>
              <ul className="mt-5 flex flex-col gap-5">
                {books.map(({ branch, book, ready, done, next }) => {
                  const percent = ready ? Math.round((done / ready) * 100) : 0;
                  return (
                    <li key={book}>
                      <div className="flex justify-between text-sm">
                        <span>{BOOK_META[book].title}</span>
                        <span className="tabular-nums text-neutral-600">{done > 0 && percent === 0 ? "<1" : percent}%</span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={BOOK_META[book].title}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={percent}
                        className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-100"
                      >
                        {/* At least a sliver once something is finished. */}
                        <div className="bg-accent h-full rounded-full" style={{ width: `${done ? Math.max(percent, 2) : 0}%` }} />
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs">
                        <span className="text-neutral-500 tabular-nums">
                          {done} of {ready} sections
                        </span>
                        {next ? (
                          <Link
                            to={`/roadmap/${branch.slug}/${book}/${next.number}`}
                            className="group text-accent-ink inline-flex items-center gap-1"
                          >
                            {done === 0 ? "Start with" : "Continue with"} {next.number} {next.title}
                            <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        ) : (
                          <span className="text-neutral-500">All caught up</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-6">
                <Link to="/roadmap" className="group text-accent-ink inline-flex items-center gap-1.5 text-sm">
                  View all paths
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Panel>
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-14">
          <SectionHeading title="Practice" note={scores.length > 0 ? "Lowest scores first" : undefined} />
          {scores.length === 0 ? (
            <p className="text-neutral-500">No practice yet. Sections with questions end with Check yourself.</p>
          ) : (
            <Panel>
              <ul className="divide-y divide-neutral-100">
                {scores.map((score) => {
                  const complete = score.answered === score.size;
                  const passed = complete && score.correct >= passMark(score.size);
                  const href = sectionHref(score.book, score.number);
                  const title = `${score.number} ${sectionTitle(score.book, score.number) ?? ""}`.trim();
                  return (
                    <li key={`${score.book}/${score.number}`} className="flex items-center justify-between gap-4 px-6 py-4 text-sm">
                      <span className="min-w-0">
                        {href ? (
                          <Link to={href} className="hover:underline">
                            {title}
                          </Link>
                        ) : (
                          title
                        )}
                        <span className="block text-xs text-neutral-500">{BOOK_META[score.book]?.title}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        <span className="tabular-nums text-neutral-700">
                          {complete ? `${score.correct} / ${score.size}` : `${score.answered} of ${score.size} answered`}
                        </span>
                        {complete && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs ${
                              passed ? "bg-accent text-on-accent" : "bg-neutral-100 text-neutral-500"
                            }`}
                          >
                            {passed ? "Passed" : "Try again"}
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Panel>
          )}
        </Reveal>

        <Reveal delay={220} className="mt-14">
          <SectionHeading title="Recent chats" />
          {chats.length === 0 ? (
            <p className="text-neutral-500">
              No chats yet.{" "}
              <Link to="/chat" className="text-accent-ink hover:underline">
                Ask a question
              </Link>
            </p>
          ) : (
            <Panel>
              <ul className="divide-y divide-neutral-100">
                {chats.slice(0, 5).map((chat) => (
                  <li key={chat.id}>
                    <Link
                      to={`/chat/${chat.id}`}
                      className="flex items-center justify-between gap-4 px-6 py-4 text-sm transition-colors hover:bg-neutral-50"
                    >
                      <span className="min-w-0 truncate">{chat.title}</span>
                      <span className="shrink-0 text-xs text-neutral-500 tabular-nums">
                        {new Date(chat.updatedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Panel>
          )}
        </Reveal>

        <Reveal delay={260} className="mt-14">
          <div id="your-data" className="scroll-mt-6">
            <SectionHeading title="Your data" />
            <Panel className="p-6">
              <p className="max-w-xl text-sm leading-relaxed text-neutral-500">
                There are no accounts: your profile, progress, practice answers
                and chats stay in this browser. Export them to keep a copy or
                move to another device.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <button type="button" onClick={download} className={button}>
                  Export progress
                </button>
                <button type="button" onClick={() => fileInput.current?.click()} className={button}>
                  Import progress
                </button>
                <input
                  ref={fileInput}
                  type="file"
                  accept="application/json,.json"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    event.target.value = "";
                    if (file) void restore(file);
                  }}
                />
                <button type="button" onClick={reset} className={`${button} hover:border-red-400 hover:text-red-600`}>
                  Reset progress
                </button>
                <button
                  type="button"
                  onClick={clearChats}
                  disabled={chats.length === 0}
                  className={`${button} hover:border-red-400 hover:text-red-600 disabled:pointer-events-none disabled:opacity-40`}
                >
                  Clear chat history
                </button>
              </div>
              <p role="status" className="mt-4 min-h-5 text-sm text-neutral-500">
                {message}
              </p>
            </Panel>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
