// One-Line Laugh Sprint — entry program (program/v1).
// Writes a single original funny line about everyday life to /output/entry.txt.
// The judge compares entries two at a time on how funny, fresh and tightly
// worded they are; the line below is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The self-checkout asked if I wanted a receipt, and I said yes, because " +
  "somewhere in my life I need written proof I accomplished something today.";

// Gate guard: the sealed scorer requires 1–200 characters of UTF-8 text.
// Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
