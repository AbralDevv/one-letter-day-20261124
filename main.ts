// One Letter for Your Day — entry program.
//
// Writes exactly one letter, "Q", to entry.txt. Q stands for the word
// behind the day: quiet — the kind of day that says little and means it.
// The gate requires UTF-8 text of exactly 1 character, A–Z, nothing else:
// no word, no gloss, no punctuation, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Q";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
const target = join(dir, "entry.txt");
writeFileSync(target, LETTER, "utf8");

// Self-check: the gate accepts only UTF-8 text of exactly 1 character.
import { readFileSync } from "node:fs";
const written = readFileSync(target, "utf8");
if (written !== LETTER || written.length !== 1) {
  throw new Error(`entry.txt must hold exactly one letter, got ${JSON.stringify(written)}`);
}
console.log(`wrote ${LETTER} to ${target}`);
