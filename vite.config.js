import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '',  // Empty string for root path
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    copyPublicDir: true,
  }
});
