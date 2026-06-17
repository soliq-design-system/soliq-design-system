import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig(({ command }) => ({
  base,
  plugins: [react()],
  resolve: command === "serve"
    ? {
        alias: {
          "soliq-design-system": resolve(__dirname, "../../packages/experience/src/index.ts")
        }
      }
    : undefined,
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]"
      }
    }
  }
}));
