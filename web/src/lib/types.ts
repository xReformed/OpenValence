export interface Citation {
  id: string;
  sourceTitle: string;
  sourceUrl: string;
  /** The retrieved chunk text, shown verbatim — never paraphrased. */
  snippet: string;
}

export interface AskResponse {
  answer: string;
  citations: Citation[];
}

export type Role = "user" | "assistant";

export interface ChatTurn {
  id: string;
  role: Role;
  content: string;
  citations?: Citation[];
}
