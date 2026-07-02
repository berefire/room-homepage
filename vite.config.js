import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/room-homepage/",
  resolve: {
    alias: {
      "@styles": resolve(__dirname, "src/styles"),
      "@assets": resolve(__dirname, "src/assets"),
      "@js": resolve(__dirname, "src/js")
    }
  }
});