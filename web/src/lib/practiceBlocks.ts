import type { SectionSegment } from "./types";

/* Splits a section's markdown into plain text and practice blocks, so the
   book's Examples and Exercises can be shown as "answer first, then reveal".
   Both textbooks write them the same way:

     ### Exercise 10.3.1            (or ### Example 8.4.1: Carbon Atoms)
     <the question>
     **Answer**                     (or **Solution**, **Answers**, **Answer a** …)
     <the book's answer or worked solution>

   A block without one of those markers is left as ordinary text. */

const START = /^(#{3,4}) (Example|Exercise)\b\s*(.*)$/;
const MARKER = /^\*\*_?(Solutions?|Answers?)_?( [A-Za-z0-9]+)?\*\*\s*$/;
const HEADING = /^(#{2,4}) /;
/* Written by the transcription where an Example's box ends and the book's
   prose resumes; markdown has no other way to say so. Not rendered. */
const BOX_END = /^<!-- end of example -->\s*$/;

/* A sentence of body prose, as opposed to an answer line ("pOH = 11.6",
   "[Kr]5s^1", "rate = k[A]^2"). A clause ending in a comma leads into an
   equation or image ("In the reaction between NH3 and H2O,"). */
function isProse(paragraph: string): boolean {
  const words = paragraph.match(/[A-Za-z]{2,}/g)?.length ?? 0;
  return (
    words >= 12 ||
    (words >= 6 && /[.?!:]\]?\s*$/.test(paragraph) && !paragraph.includes(" = ")) ||
    (words >= 4 && /,\s*$/.test(paragraph))
  );
}

/* In the original pages an Exercise is a boxed section; in markdown the box is
   gone and the book's prose resumes right after the answer. So the answer is
   its first paragraph, plus whatever follows that still looks like answer:
   lettered parts ("**Answer b**" and what comes after), transcription notes,
   whatever an answer line ending in ":" introduces ("The completed ICE chart
   is as follows:" and its table), and short non-prose lines — stopping at the
   first prose sentence, figure, table, list, or bold sub-heading. Checked
   against every Exercise in the corpus; Examples don't need this, as each is
   followed by its Exercise. */
function splitAnswer(paragraphs: string[]): [answer: string[], rest: string[]] {
  let n = 0;
  for (; n < paragraphs.length; n += 1) {
    const paragraph = paragraphs[n];
    const afterMarker = n > 0 && MARKER.test(paragraphs[n - 1]);
    /* A phrase, not a Lewis diagram whose dots are colons (":Är:"). */
    const introduced =
      n > 0 && /:\s*$/.test(paragraphs[n - 1]) && (paragraphs[n - 1].match(/[A-Za-z]{2,}/g)?.length ?? 0) >= 3;
    if (n === 0 || afterMarker || introduced || MARKER.test(paragraph) || paragraph.startsWith("[Note")) continue;
    if (
      /^(Figure |\||#|- )/.test(paragraph) ||
      /^\*\*[^*]+\*\*$/.test(paragraph.trim()) ||
      isProse(paragraph)
    ) {
      break;
    }
  }
  return [paragraphs.slice(0, n), paragraphs.slice(n)];
}

export function splitPractice(markdown: string): SectionSegment[] {
  const lines = markdown.split(/\r?\n/);
  const segments: SectionSegment[] = [];
  let buffer: string[] = [];
  const flush = () => {
    if (buffer.join("\n").trim()) segments.push({ kind: "text", markdown: buffer.join("\n") });
    buffer = [];
  };

  for (let i = 0; i < lines.length; ) {
    const start = lines[i].match(START);
    if (!start) {
      buffer.push(lines[i]);
      i += 1;
      continue;
    }

    /* A ### block runs to the next ## or ### heading, so a sub-heading inside
       a solution (Example 9.7.1 has "#### b:") stays part of it — or to an
       explicit end, where the book's prose resumes after an Example with no
       Exercise of its own (16.5.1). */
    const level = start[1].length;
    let end = i + 1;
    while (end < lines.length) {
      const heading = lines[end].match(HEADING);
      if ((heading && heading[1].length <= level) || BOX_END.test(lines[end])) break;
      end += 1;
    }

    const body = lines.slice(i + 1, end);
    const at = body.findIndex((line) => MARKER.test(line));
    const marker = at >= 0 ? body[at].match(MARKER) : null;
    const type = start[2] as "Example" | "Exercise";
    /* Lettered markers ("Answer a") stay in the revealed text as labels. */
    const lettered = Boolean(marker?.[2]);

    let reveal = "";
    let rest = "";
    if (marker) {
      const after = body.slice(at + 1).join("\n").trim();
      if (type === "Exercise") {
        const [answer, remainder] = splitAnswer(after ? after.split(/\n\s*\n/) : []);
        reveal = answer.join("\n\n");
        rest = remainder.join("\n\n");
      } else {
        reveal = after;
      }
      if (lettered && reveal) reveal = `${body[at]}\n\n${reveal}`;
    }

    if (!marker || !reveal) {
      buffer.push(...lines.slice(i, end));
    } else {
      flush();
      const [number, ...title] = start[3].split(":");
      segments.push({
        kind: "practice",
        type,
        number: number.trim(),
        title: title.join(":").trim() || undefined,
        prompt: body.slice(0, at).join("\n").trim(),
        reveal,
        revealLabel:
          type === "Example" ? "Solution" : lettered || marker[1] === "Answers" ? "Answers" : "Answer",
      });
      /* The book's prose that resumes after an Exercise's answer. */
      if (rest) buffer.push(rest);
    }
    i = end < lines.length && BOX_END.test(lines[end]) ? end + 1 : end;
  }

  flush();
  return segments;
}
