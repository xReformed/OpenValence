import type { AskResponse } from "./types";

/**
 * The /api/ask endpoint does not exist yet — api/ is still the .NET template.
 * Flip this to false the moment it does, and delete mockAsk below.
 */
const USE_MOCK = true;

async function mockAsk(question: string): Promise<AskResponse> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return {
    answer:
      `A grounded answer to "${question}" will appear here, written only from ` +
      `the retrieved chunks below. Until /api/ask exists this text is a ` +
      `placeholder so the layout can be judged — it is not a real answer.`,
    citations: [
      {
        id: "c1",
        sourceTitle: "1.2: Matter — LibreTexts General Chemistry",
        sourceUrl: "https://chem.libretexts.org/",
        snippet:
          "Matter is anything that has mass and takes up space. A hot dog has mass and takes up space, so it is matter.",
      },
      {
        id: "c2",
        sourceTitle: "1.3: Physical and Chemical Properties",
        sourceUrl: "https://chem.libretexts.org/",
        snippet:
          "Love is an emotion, and emotions are not matter — they have neither mass nor volume.",
      },
    ],
  };
}

export async function askQuestion(
  question: string,
  signal?: AbortSignal,
): Promise<AskResponse> {
  if (USE_MOCK) return mockAsk(question);

  const response = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Ask failed (${response.status})`);
  }
  return (await response.json()) as AskResponse;
}
