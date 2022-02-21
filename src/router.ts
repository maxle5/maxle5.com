import { createWebHistory, createRouter } from 'vue-router';
import About from './views/About.vue';
import Projects from './views/Projects.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: About
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        }
    ]
});