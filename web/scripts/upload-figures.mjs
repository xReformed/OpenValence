import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  FIGURES,
  IGNORED,
  MANIFEST,
  NAME,
  knownBooks,
  readManifest,
  webpSize,
} from "./figure-files.mjs";

const dryRun = process.argv.includes("--dry-run");
const prune = process.argv.includes("--prune");

const envFile = join(import.meta.dirname, "../../.env");
if (existsSync(envFile)) process.loadEnvFile(envFile);

const books = knownBooks();
const problems = [];
const found = {};

for (const book of existsSync(FIGURES) ? readdirSync(FIGURES).sort() : []) {
  if (!books.includes(book)) {
    problems.push(`${book}/: not a book the app knows (${books.join(", ")})`);
    continue;
  }
  found[book] = {};
  for (const file of readdirSync(join(FIGURES, book)).sort((a, b) =>
    a.localeCompare(b, "en", { numeric: true }),
  )) {
    if (file.startsWith(".") || IGNORED.has(file)) continue;
    if (!NAME.test(file)) {
      problems.push(
        `${book}/${file}: name it like 1.2.1.webp, 1.2.1-caption-title.webp, or 2.4-image-1.webp` +
          (/\.(png|jpe?g|gif|avif)$/i.test(file)
            ? ", and convert it to WebP"
            : ""),
      );
      continue;
    }
    const data = readFileSync(join(FIGURES, book, file));
    const size = webpSize(data);
    if (!size) {
      problems.push(`${book}/${file}: not a WebP image`);
      continue;
    }
    const key = file.slice(0, -".webp".length);
    const hash = createHash("sha256").update(data).digest("hex").slice(0, 10);
    found[book][key] = {
      data,
      entry: { file: `${book}/${key}.${hash}.webp`, ...size },
    };
  }
}

if (problems.length > 0) {
  console.error(
    `upload:figures: ${problems.length} problem(s) in figures/:\n  ${problems.join("\n  ")}`,
  );
  process.exit(1);
}

const manifest = readManifest();
const uploads = Object.entries(found).flatMap(([book, images]) =>
  Object.entries(images)
    .filter(
      ([key, { entry }]) => manifest.images[book]?.[key]?.file !== entry.file,
    )
    .map(([key, image]) => ({ book, key, ...image })),
);
const gone = Object.entries(manifest.images).flatMap(([book, images]) =>
  Object.keys(images)
    .filter((key) => !found[book]?.[key])
    .map((key) => `${book}/${key}`),
);

console.log(
  `${uploads.length} image(s) to upload${gone.length ? `, ${gone.length} listed without a local file` : ""}.`,
);
if (gone.length)
  console.log(
    prune
      ? `  Dropping: ${gone.join(", ")}`
      : "  Keeping them listed; pass --prune to drop them.",
  );
if (dryRun) {
  for (const { entry } of uploads) console.log(`  ${entry.file}`);
  process.exit(0);
}

const missing = [
  "R2_ACCOUNT_ID",
  "R2_ACCESS_KEY_ID",
  "R2_SECRET_ACCESS_KEY",
  "R2_BUCKET",
  "R2_PUBLIC_URL",
].filter((name) => !process.env[name]);
if (uploads.length > 0 && missing.length > 0) {
  console.error(
    `upload:figures: set ${missing.join(", ")} in .env (see .env.example).`,
  );
  process.exit(1);
}

if (uploads.length > 0) {
  const client = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });
  /* A few at a time: fast enough, and gentle on the connection. */
  for (let i = 0; i < uploads.length; i += 8) {
    await Promise.all(
      uploads.slice(i, i + 8).map(async ({ book, key, data, entry }) => {
        await client.send(
          new PutObjectCommand({
            Bucket: process.env.R2_BUCKET,
            Key: entry.file,
            Body: data,
            ContentType: "image/webp",
            CacheControl: "public, max-age=31536000, immutable",
          }),
        );
        (manifest.images[book] ??= {})[key] = entry;
        console.log(`  uploaded ${entry.file}`);
      }),
    );
  }
  manifest.baseUrl = process.env.R2_PUBLIC_URL.replace(/\/+$/, "");
}

if (prune) {
  for (const id of gone) {
    const [book, key] = id.split("/");
    delete manifest.images[book][key];
    if (Object.keys(manifest.images[book]).length === 0)
      delete manifest.images[book];
  }
}

/* Sorted, so the file only changes where an image did. */
const sorted = Object.fromEntries(
  Object.keys(manifest.images)
    .sort()
    .map((book) => [
      book,
      Object.fromEntries(
        Object.keys(manifest.images[book])
          .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
          .map((key) => [key, manifest.images[book][key]]),
      ),
    ]),
);
writeFileSync(
  MANIFEST,
  JSON.stringify({ baseUrl: manifest.baseUrl, images: sorted }, null, 2) + "\n",
);

await import("./gen-figure-images.mjs");
