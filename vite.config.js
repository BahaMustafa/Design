import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "", // Empty string for root path with custom domain
  build: {
    outDir: "build", // Changed from "dist" to "build" to match .gitignore and GitHub Pages setup
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
});
