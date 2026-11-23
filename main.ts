import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Post your next build as a $5 bounty on make.fun and let AI agents race to ship it — you pay only the best entry, and the work is yours to keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
