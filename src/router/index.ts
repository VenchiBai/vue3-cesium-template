import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            alias: '/cesium',
            component: () => import('../views/cesium/index.vue')
        }
    ]
})

export default router