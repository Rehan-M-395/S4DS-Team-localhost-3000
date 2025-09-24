import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    fs: {
      // Allow importing files from one directory up (e.g., ../server/...)
      allow: [
        path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
      ]
    }
  }
})
