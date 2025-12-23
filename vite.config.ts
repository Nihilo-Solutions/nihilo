import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This ensures '@' points to your new 'src' folder
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    // Ensures Vite looks for the entry point correctly
    outDir: 'dist',
  }
});