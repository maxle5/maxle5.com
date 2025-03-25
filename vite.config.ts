import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueRouter(),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
