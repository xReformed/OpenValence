import type { ReactNode } from "react";
import { ChevronRightIcon, DocumentIcon } from "../LandingIcons";
import type { FigureImage } from "../../lib/types";

/* A book figure with a stand-in image (lib/figureImages.ts). The book's
   caption and description stay visible exactly as printed; the description
   also serves as the image's alt text. */
export function FigureWithImage({
  image,
  alt,
  caption,
}: {
  image: FigureImage;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="flex flex-col gap-3">
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        className="h-auto w-full rounded-xl border border-neutral-200 bg-neutral-100"
      />
      <figcaption className="border-l-2 border-neutral-200 pl-4 text-sm leading-relaxed text-neutral-500">
        <span className="whitespace-pre-line">{caption}</span>
      </figcaption>
    </figure>
  );
}

/* An "[Image: …]" box with a stand-in image: the book's description stays
   visible, and the image opens below it. */
export function PlaceholderImage({
  label,
  image,
  startOpen,
}: {
  label: string;
  image: FigureImage;
  startOpen: boolean;
}) {
  return (
    <details
      open={startOpen}
      className="group rounded-xl border border-dashed border-neutral-300 text-sm text-neutral-500"
    >
      <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 transition-colors hover:text-neutral-700 [&::-webkit-details-marker]:hidden">
        <DocumentIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <span className="min-w-0 flex-1">{label}</span>
        <span className="flex shrink-0 items-center gap-1 text-neutral-700">
          <span className="group-open:hidden">Show</span>
          <span className="hidden group-open:inline">Hide</span>
          <ChevronRightIcon className="h-3.5 w-3.5 rotate-90 transition-transform group-open:-rotate-90 motion-reduce:transition-none" />
        </span>
      </summary>
      <div className="px-4 pb-4">
        <img
          src={image.src}
          alt={label.replace(/^Image:\s*/, "")}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="h-auto w-full rounded-lg border border-neutral-200 bg-neutral-100"
        />
      </div>
    </details>
  );
}
