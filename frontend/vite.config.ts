import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Plugin oficial da v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://backend:3002', // Nome do serviço no seu docker-compose
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
