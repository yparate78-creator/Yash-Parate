import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  base: '/Yash-Parate/',
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  server: {
    watch: process.env.DISABLE_HMR === "true" ? null : {},
  },
})
