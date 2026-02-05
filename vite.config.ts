import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lib: resolve(import.meta.dirname, "src/lib"),
      routes: resolve(import.meta.dirname, "src/routes"),
    },
  },
});
