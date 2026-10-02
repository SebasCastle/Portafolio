import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    modulePreload: {
      resolveDependencies: (_filename, deps) =>
        // Avoid preloading lazy route chunks on the critical path
        deps.filter((dep) => !dep.includes('Scrabble') && !dep.includes('Gifts') && !dep.includes('gifts')),
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react-dom') || id.includes('/react/') || id.includes('react-router')) {
              return 'react-vendor'
            }
            if (id.includes('lucide-react')) return 'icons'
            if (id.includes('axios')) return 'http'
          }
        },
      },
    },
  },
})
