import { defineConfig } from 'vite';
import { resolve } from 'path';

const html = (name) => resolve(import.meta.dirname, 'src', name);

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: html('index.html'),
        characters: html('pages/characters/index.html'),
        races: html('pages/races/index.html'),
        places: html('pages/places/index.html'),
        artifacts: html('pages/artifacts/index.html'),
      },
    },
  },
});