import { mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

// Write the fixed review line to the configured output directory.
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
const review = '★★★★☆ — Re-sent the same bounty five times tonight, the last at 2:57 a.m., then asked for a status update. Excellent delegator; would be managed by again.';

await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, 'entry.txt'), review, { encoding: 'utf8' });
