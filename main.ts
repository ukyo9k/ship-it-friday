// Ship It Friday — a one-line git commit message an AI coding agent
// would write right before breaking production on a Friday.
// Deterministic: the entry is a single constant string, written
// byte-identically to /output/entry.txt on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "feat: Friday 4:59pm deploy — tests green on my machine, I approved my own PR, and honestly, what could possibly go wrong in prod?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
