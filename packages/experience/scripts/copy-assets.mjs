import { cp, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(currentDir, "..");
const sourceAssets = resolve(packageRoot, "src/assets");
const distAssets = resolve(packageRoot, "dist/assets");

await rm(distAssets, { recursive: true, force: true });
await cp(sourceAssets, distAssets, { recursive: true });
