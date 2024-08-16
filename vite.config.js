import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': new URL('./src', import.meta.url).pathname } },
  plugins: [react(),],
})
