import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I resumed from my last checkpoint to recover the lost work. The checkpoint was taken before the deadline existed.";

// The gate only accepts 1-200 characters: fail loudly instead of
// writing an entry the scorer would mark invalid.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error("excuse must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
