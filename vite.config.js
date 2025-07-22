import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // теперь можно писать "@/lib/cn"
      '/lib': path.resolve(__dirname, './src/lib'), // а это именно для "/lib"
    },
  },
});
