import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // For GitHub Pages: set base to '/repo-name/' (e.g., '/agency/')
  // For custom domain or root deployment, use '/'
  base: process.env.VITE_BASE_PATH || '/',
})
