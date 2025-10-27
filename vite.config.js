import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for importing files easily
      "@/components": path.resolve(__dirname, "src/components"), // Alias for components
      "@/styles": path.resolve(__dirname, "src/styles"), // Alias for styles
    },
  },
});
