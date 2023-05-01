import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
        format: 'es',
        manualChunks: undefined,
        preserveModules: true,
        preferConst: true,
        sourcemap: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    fs: {
      strict: false,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
    open: true,
    port: 3000,
  },
});
