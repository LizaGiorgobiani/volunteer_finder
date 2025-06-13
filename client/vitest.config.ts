import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test(), expect(), etc.
    environment: "jsdom", // Simulates DOM for React components
    setupFiles: "./src/setupTests.ts",
  },
});
