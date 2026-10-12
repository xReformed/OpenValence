import { describe, expect, it } from "vitest";
import { NAME_MAX, getProfile, initials, saveProfile } from "./profileStore";

describe("initials", () => {
  it("takes the first and last name's letters, or two letters of one name", () => {
    expect(initials("Priya Sharma")).toBe("PS");
    expect(initials("  ada  lovelace byron ")).toBe("AB");
    expect(initials("Marie")).toBe("MA");
    expect(initials("")).toBe("");
  });
});

describe("saveProfile", () => {
  it("trims and caps the text, and keeps fields it isn't given", () => {
    const store = new Map<string, string>();
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: { setItem: (k: string, v: string) => store.set(k, v), getItem: (k: string) => store.get(k) ?? null },
    });
    expect(saveProfile({ name: `  ${"x".repeat(NAME_MAX + 10)}  `, goal: "organic" })).toBe(true);
    expect(saveProfile({ about: " Studying for my exam. " })).toBe(true);
    expect(getProfile()).toEqual({ name: "x".repeat(NAME_MAX), about: "Studying for my exam.", goal: "organic", photo: "" });
    expect(JSON.parse(store.get("chemia.profile")!).goal).toBe("organic");
  });

  it("reports a refused write and leaves the profile as it was", () => {
    const before = getProfile();
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: {
        setItem: () => {
          throw new Error("QuotaExceededError");
        },
      },
    });
    expect(saveProfile({ photo: "data:image/webp;base64,AAAA" })).toBe(false);
    expect(getProfile()).toBe(before);
  });
});
