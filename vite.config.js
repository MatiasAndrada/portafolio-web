import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    reactRefresh(),
    viteCompression({
      // habilitar la compresión Brotli y gzip
      algorithm: 'brotli,gzip',
      // Reglas para comprimir archivos
        include: /\.(css|js|html|json|xml|txt|svg|png|jpg|jpeg|webp|gif|bin|gltf)$/i,
      // Configuración de compresión para gzip
      gzip: {
        filename: '[path].gz[query]',
        level: 9,
      },
      // usar la misma extensión que los archivos fuente
      ext: '.gz',

      // incluir archivos de mayor tamaño para la compresión (en bytes)
      threshold: 10240,

      // configuración específica para Brotli
      brotli: {
        // la calidad de la compresión, que va de 0 a 11
        quality: 11,
        // el tamaño de la ventana de compresión, que puede variar de 10 a 24
        lgwin: 22,
        // el modo de compresión, que puede ser 0 (genérico) o 1 (texto)
        mode: 0,
        // la extensión que se agregará a los archivos comprimidos con Brotli
        extension: 'br',
      },
    }),
  ],
});
