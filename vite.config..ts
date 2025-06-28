import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    md({
      mode: ['html'] // or ['html', 'toc'] if you want table of contents support
    })
  ]
});
