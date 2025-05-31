import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
    resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
      'public': path.resolve(__dirname, './public'),
      'components': path.resolve(__dirname, './src/components'),
      'common': path.resolve(__dirname, './src/common'),
    },
  },
})
