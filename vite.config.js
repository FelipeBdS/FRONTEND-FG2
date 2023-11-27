import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FRONTEND-FG2/",
  build: {
    rollupOptions: {
      external: [
        // Adicione os caminhos dos módulos que você deseja externalizar
        "/FRONTEND-FG2/assets/index-lNpJ9YsO.js",
      ],
    },
  },
});