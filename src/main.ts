import './assets/main.scss'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from 'vue-router/auto-routes'

export const createApp = ViteSSG(App, { routes }, () => {})
