import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
  },
});
