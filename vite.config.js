import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/humble-eureka/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

