import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Remove the following line if you are not using lodash
          // lodash: ["lodash"],
        },
      },
    },
  },
});
