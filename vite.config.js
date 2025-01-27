import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Design/', // Remove this if using a custom domain
  plugins: [react()],
});
