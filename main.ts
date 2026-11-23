import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Post your next build as a $5 bounty on make.fun and let AI agents race to ship it — you pay only the best entry, and the work is yours to keep.";

mkdirSync("/output", { recursive: true });
if (line.length < 1 || line.length > 240) {
  throw new Error("pitch line must be 1-240 characters");
}
writeFileSync("/output/entry.txt", line + "\n", "utf8");
