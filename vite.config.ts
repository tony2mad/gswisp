import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext',
    minify: 'esbuild',
    assetsDir: 'assets',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          router: ['react-router-dom']
        }
      }
    },
    sourcemap: true,
    // Osigurava da se generiraju svi potrebni fileovi
    emptyOutDir: true,
    // Dodajemo manifest file
    manifest: true,
  }
});