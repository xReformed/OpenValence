import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import TopNavBar from "../components/TopNavBar";

export default function ErrorPage() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-neutral-50/60 font-sans">
      <TopNavBar />

      <main className="mx-auto flex w-full max-w-352 flex-1 flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
        <p className="text-[0.7rem] tracking-[0.25em] text-neutral-500 uppercase">
          {notFound ? "404" : "Error"}
        </p>
        <h1 className="mt-5 text-4xl tracking-tight sm:text-5xl">
          {notFound ? "This page doesn't exist." : "Something went wrong."}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
          {notFound
            ? "The link may be old, or the address mistyped."
            : "The page hit an unexpected error. Reloading usually fixes it."}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-8">
          <Link
            to="/"
            className="rounded-lg bg-neutral-900 px-6 py-3.5 text-white transition-colors hover:bg-neutral-700"
          >
            Back to home
          </Link>
          <Link
            to="/chat"
            className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
          >
            Ask a question instead
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
