import { defineConfig } from 'vite'
import vueRouter from 'vue-router/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({
      dts: 'src/route-map.d.ts',
    }),
    vue()],
})
