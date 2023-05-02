// vite.config.js
import path from 'path';

export default {
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:4000',
    },
    fs: {
      strict: false,
      // Indica a Vite que sirva los archivos estáticos desde src/assets
      allow: ['./src/assets'],
    },
  },
};
