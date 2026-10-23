import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

export const FIGURES = join(here, "../figures");
/** What has been uploaded: each image's object in R2 and its size. */
export const MANIFEST = join(here, "../figures.json");

export const NAME =
  /^(?:\d+\.\d+\.\d+[a-z]?(?:-[a-z0-9]+)*|\d+\.\d+-image-\d+)\.webp$/;
export const KEY =
  /^(?:\d+\.\d+\.\d+[a-z]?(?:-[a-z0-9]+)*|\d+\.\d+-image-\d+)$/;
export const IGNORED = new Set(["desktop.ini", "Thumbs.db"]);

/** The books the app knows, from the generated learning paths. */
export function knownBooks() {
  return readFileSync(
    join(here, "../src/lib/learningPaths.generated.ts"),
    "utf8",
  )
    .match(/^export type BookKey = (.*);$/m)[1]
    .match(/"[^"]+"/g)
    .map((key) => JSON.parse(key));
}

/** Width and height from a WebP header: lossy, lossless, or extended. */
export function webpSize(data) {
  if (
    data.toString("ascii", 0, 4) !== "RIFF" ||
    data.toString("ascii", 8, 12) !== "WEBP"
  )
    return null;
  switch (data.toString("ascii", 12, 16)) {
    case "VP8 ":
      return {
        width: data.readUInt16LE(26) & 0x3fff,
        height: data.readUInt16LE(28) & 0x3fff,
      };
    case "VP8L": {
      const bits = data.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >>> 14) & 0x3fff) + 1,
      };
    }
    case "VP8X":
      return {
        width: data.readUIntLE(24, 3) + 1,
        height: data.readUIntLE(27, 3) + 1,
      };
    default:
      return null;
  }
}

/** The manifest, or an empty one before the first upload. */
export function readManifest() {
  try {
    return JSON.parse(readFileSync(MANIFEST, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return { baseUrl: "", images: {} };
    throw error;
  }
}
