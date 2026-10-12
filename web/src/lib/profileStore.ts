/* What the reader tells the profile page about themselves: a name, a line
   about what they're studying, which branch they're aiming at, and a photo.
   All optional, and kept in this browser only, like everything else (there
   are no accounts). The photo is shrunk before it's stored (see
   shrinkPhoto), since localStorage holds only a few megabytes. */

export interface Profile {
  name: string;
  about: string;
  /** A roadmap branch slug, or "" for none chosen. */
  goal: string;
  /** A small square image as a data: URL, or "". */
  photo: string;
}

const KEY = "chemia.profile";
const EMPTY: Profile = { name: "", about: "", goal: "", photo: "" };

/* Limits for what the form accepts, so the page layout holds. */
export const NAME_MAX = 40;
export const ABOUT_MAX = 160;

function read(): Profile {
  try {
    const raw = localStorage.getItem(KEY);
    const data: unknown = raw ? JSON.parse(raw) : {};
    const value = (data && typeof data === "object" ? data : {}) as Record<string, unknown>;
    const text = (key: keyof Profile) => (typeof value[key] === "string" ? (value[key] as string) : "");
    return { name: text("name"), about: text("about"), goal: text("goal"), photo: text("photo") };
  } catch {
    return EMPTY;
  }
}

/* useSyncExternalStore requires a stable snapshot. */
let profile: Readonly<Profile> = read();
const listeners = new Set<() => void>();

export function subscribeToProfile(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getProfile(): Readonly<Profile> {
  return profile;
}

/** Saves the changes; false if the browser refused (storage full or blocked). */
export function saveProfile(changes: Partial<Profile>): boolean {
  const next = {
    ...profile,
    ...changes,
    name: (changes.name ?? profile.name).trim().slice(0, NAME_MAX),
    about: (changes.about ?? profile.about).trim().slice(0, ABOUT_MAX),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    return false;
  }
  profile = next;
  listeners.forEach((listener) => listener());
  return true;
}

/** Initials for the avatar when there's no photo: "Priya Sharma" -> "PS". */
export function initials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words[0][0] + words[words.length - 1][0] : (words[0] ?? "").slice(0, 2)).toUpperCase();
}

/** Crops an image file to a centred square and shrinks it to `size` pixels. */
export function shrinkPhoto(file: File, size = 192): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      const side = Math.min(image.width, image.height);
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const context = canvas.getContext("2d");
      if (!context) return reject(new Error("no canvas"));
      context.drawImage(image, (image.width - side) / 2, (image.height - side) / 2, side, side, 0, 0, size, size);
      const webp = canvas.toDataURL("image/webp", 0.85);
      resolve(webp.startsWith("data:image/webp") ? webp : canvas.toDataURL("image/jpeg", 0.85));
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("not an image"));
    };
    image.src = url;
  });
}
