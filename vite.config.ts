/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(async({ mode }) => {
return {
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  optimizeDeps: {
    include: ['firebase/auth', 'rxfire/auth']
  },
  ssr: {
    noExternal: ['rxfire/**'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}}
);
