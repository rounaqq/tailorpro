// Works around a Next.js static-export bug on Windows: segment prefetch files
// are written as `route/__next.seg/__PAGE__.txt` (the path separator becomes a
// directory) instead of `route/__next.seg.__PAGE__.txt`, which is what the
// client router requests. This flattens those directories so prefetches don't
// 404. On macOS/Linux the export is already correct and this is a no-op.
import { readdirSync, renameSync, rmdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
let moved = 0;

// Flatten every file inside a misplaced `__next.*` directory into its parent,
// joining the nested path segments with dots.
function flatten(dir, parent, prefix) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      flatten(p, parent, `${prefix}.${name}`);
    } else {
      renameSync(p, join(parent, `${prefix}.${name}`));
      moved++;
    }
  }
  rmdirSync(dir);
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(p, dir, name);
    else if (name !== "_next") walk(p);
  }
}

walk(OUT);
console.log(`fix-export-segments: flattened ${moved} segment file(s)`);
