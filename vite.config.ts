import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to https://aivoranow.com (custom domain on GitHub Pages),
// so assets load from the root.
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
