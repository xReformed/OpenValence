import { describe, expect, it } from "vitest";
import { BOOK_CHAPTERS } from "./learningPaths.generated";
import { splitPractice } from "./practiceBlocks";
import { loadSectionText } from "./sectionText";
import type { BookKey, PracticeBlock, SectionSegment } from "./types";

const md = (...lines: string[]) => lines.join("\n");
const blocks = (segments: SectionSegment[]) =>
  segments.filter((segment): segment is PracticeBlock => segment.kind === "practice");

describe("splitPractice", () => {
  it("splits an Exercise into question and answer, and resumes the book's prose after it", () => {
    const segments = splitPractice(
      md(
        "Some prose before.",
        "",
        "### Exercise 2.4.1",
        "",
        "How many significant figures are in 0.0450?",
        "",
        "**Answer**",
        "",
        "three",
        "",
        "Rounding is the next topic, and it follows rules that are worth learning carefully in order.",
      ),
    );
    expect(segments.map((segment) => segment.kind)).toEqual(["text", "practice", "text"]);
    expect(segments[1]).toEqual({
      kind: "practice",
      type: "Exercise",
      number: "2.4.1",
      title: undefined,
      prompt: "How many significant figures are in 0.0450?",
      reveal: "three",
      revealLabel: "Answer",
    });
    expect(segments[2]).toMatchObject({ kind: "text", markdown: expect.stringContaining("Rounding is the next topic") });
  });

  it("keeps an Example's whole worked solution, and reads its title", () => {
    const [example] = blocks(
      splitPractice(
        md(
          "### Example 8.4.1: Carbon Atoms",
          "",
          "How many atoms?",
          "",
          "**Solution**",
          "",
          "First, count them.",
          "",
          "This is a long explanatory sentence that would end an Exercise's answer if it were one.",
          "",
          "## Next heading",
        ),
      ),
    );
    expect(example.number).toBe("8.4.1");
    expect(example.title).toBe("Carbon Atoms");
    expect(example.revealLabel).toBe("Solution");
    expect(example.reveal).toContain("This is a long explanatory sentence");
    expect(example.reveal).not.toContain("Next heading");
  });

  it("keeps lettered answers together, with their labels", () => {
    const [exercise] = blocks(
      splitPractice(
        md("### Exercise 2.4.2", "", "Round each number.", "", "**Answer a**", "", "1.23", "", "**Answer b**", "", "4.6"),
      ),
    );
    expect(exercise.revealLabel).toBe("Answers");
    expect(exercise.reveal).toBe(md("**Answer a**", "", "1.23", "", "**Answer b**", "", "4.6"));
  });

  it("ends an Example where the transcription marks the end of its box", () => {
    const segments = splitPractice(
      md("### Example 16.5.1", "", "Name it.", "", "**Solution**", "", "ethanol", "<!-- end of example -->", "Prose again."),
    );
    expect(blocks(segments)[0].reveal).toBe("ethanol");
    expect(segments.at(-1)).toEqual({ kind: "text", markdown: "Prose again." });
  });

  it("leaves a block without an answer marker as ordinary text", () => {
    const text = md("### Example 1.1.1", "", "Just a heading and prose, no solution.");
    expect(splitPractice(text)).toEqual([{ kind: "text", markdown: text }]);
  });
});

/* Every Example and Exercise the parser finds in the corpus, with how much of
   the text after the marker it reveals. A change to the parser's rules shows
   up here as a snapshot difference; check it against the section, then
   update the snapshot with `npx vitest run -u` if the new split is right. */
describe("the corpus", () => {
  const sections = (Object.keys(BOOK_CHAPTERS) as BookKey[]).flatMap((book) =>
    BOOK_CHAPTERS[book].flatMap((chapter) =>
      chapter.sections.filter((section) => section.ready).map((section) => ({ book, section })),
    ),
  );

  it("splits every section the same way as before", async () => {
    const found: Record<string, string[]> = {};
    for (const { book, section } of sections) {
      const text = await loadSectionText(section.file);
      expect(text, `${book} ${section.number}`).toBeDefined();
      const items = blocks(splitPractice(text!));
      if (items.length === 0) continue;
      found[`${book} ${section.number}`] = items.map(
        (item) =>
          `${item.type} ${item.number}: ${item.revealLabel}, ${item.reveal.split(/\n\s*\n/).length} paragraph(s)` +
          (item.prompt ? "" : ", no question text"),
      );
    }
    expect(found).toMatchSnapshot();
  });
});
