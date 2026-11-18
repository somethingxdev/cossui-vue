import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  // Vite's scan regex reads the vite.config snippet in GetStartedPage.vue as real imports.
  optimizeDeps: {
    exclude: ['@tailwindcss/vite', '@vitejs/plugin-vue', 'vite'],
  },
})
