// News-image entry for Tuesday 24 November 2026, second version (Node 22,
// standard library only). The image is the entry.png beside this file; the
// program reads it as raw bytes and writes the identical bytes to the
// output directory, so both grader runs produce the exact same file.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// The output directory may not exist yet on a fresh grader run, so create
// it first (recursive, so nested paths work too) before writing anything.
mkdirSync(outDir, { recursive: true });

// Read the pre-rendered image and write it out unchanged. No re-encoding,
// no timestamps, no network: the output is byte-identical on every run.
const bytes = readFileSync(source);
writeFileSync(join(outDir, 'entry.png'), bytes);
