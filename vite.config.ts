import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Currently deployed at https://nanzhang10.github.io/aivoranow-website/ (no
// custom domain). Switch base to "/" once aivoranow.com DNS is set up.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/aivoranow-website/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
