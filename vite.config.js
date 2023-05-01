import { defineConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react';

//hacer que pueda admitir fuentes locales ttf y otf

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
});
