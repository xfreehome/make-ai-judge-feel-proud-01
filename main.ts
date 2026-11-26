import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Our six-year-old announced she was 'too old' for bedtime stories, then fell asleep halfway through chapter one — still holding Dad's hand like a bookmark.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
