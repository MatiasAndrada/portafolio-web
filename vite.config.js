import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRefresh()],
  base: '/',
  build: {
    outDir: 'public'
  },
  server: {
    port: 3000,
    hmr: {
      protocol: 'ws',
      host: '0.0.0.0',
      port: 443
    },
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
})
