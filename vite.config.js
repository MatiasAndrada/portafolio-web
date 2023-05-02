import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: 'src/main.jsx',
    },
    outDir: 'dist',
    assetsDir: 'public',
    assetsInclude: 'src/assets/**',
    root: './public',
  },
});
