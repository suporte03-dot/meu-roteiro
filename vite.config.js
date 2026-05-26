import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/meu-roteiro/',
})
npm.cmd run build
npm.cmd install --save-dev gh-pages
npm.cmd run deploy

