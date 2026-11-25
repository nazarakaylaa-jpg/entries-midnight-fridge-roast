// Midnight Fridge Roast: one line roasting a smart fridge that refuses to open after midnight.
// Writes the roast to /output/entry.txt (1-200 characters of UTF-8 text, single line).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// PASS 2 (final): tightened to ONE bureaucratic demand. Pass 1 listed three
// demands (permission slip + reason + witness) which crowded the joke.
// Now: one metaphor (curfew / hall pass, same family) and one kicker —
// the fridge wants approval signed by me, the adult who bought the fridge.
// The midnight rule itself is the target; it reads like something said
// out loud at the fridge door at 00:05.
const ROAST =
  "My fridge treats midnight like a curfew \u2014 no snack without a hall pass signed by me, the adult who bought the fridge.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  const text = ROAST.trim();
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.includes("\n")) throw new Error("entry must be a single line");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, text + "\n", "utf8");
  console.log(`Wrote ${chars} characters to ${outPath}`);
  console.log(text);
}

main();
