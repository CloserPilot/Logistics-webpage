import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    host: true,          // Escucha en todas las interfaces
    port: 5173,          // Puedes cambiar el puerto si quieres
    strictPort: false,   // No fuerza error si el puerto está ocupado
  }
})