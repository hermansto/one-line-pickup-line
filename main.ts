// One-line pickup line for make.fun — "The Perfect Pickup Line".
// Writes the entry line to entry.txt inside the grader's output
// directory only. Nothing is ever written into the repo itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Are you Wi-Fi? Because I'm feeling a strong connection — and I never want to lose signal with you.";

// The competition allows at most 200 characters on a single line.
if (line.length > 200 || line.includes("\n")) {
  throw new Error("pickup line must be one line of at most 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");

// Read it back and make sure the file holds exactly the line, no more.
const back = readFileSync(target, "utf8");
if (back !== line) {
  throw new Error("entry.txt does not match the pickup line exactly");
}

console.log(`Wrote ${line.length} characters to ${target}`);
