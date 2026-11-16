// Driver for the ai-excited-01 entry: it carries the finished image from the
// repository into the output directory, byte for byte, every run. The copy is
// checked by size afterwards so a truncated write fails loudly instead of
// silently entering a broken image.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
if (statSync(source).size !== statSync(target).size) {
  throw new Error('entry.png copy is incomplete');
}
