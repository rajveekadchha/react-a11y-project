import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,        // so you can use test(), expect() globally
    environment: "jsdom", // good default for React projects
  },
});
3