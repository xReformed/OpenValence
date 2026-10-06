import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    /* Section pages import the corpus straight from ../sources (see
       src/lib/sectionText.ts), so the dev server may read the repo root. */
    fs: { allow: [".."] },
    proxy: {
      "/api": {
        target: "http://localhost:5281",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
