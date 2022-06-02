import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
    RouterHistory
} from 'vue-router'

const routers: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue')
    }
]

const routerHistory: RouterHistory = createWebHistory(import.meta.env.BASE_URL)

const router: Router = createRouter({
    history: routerHistory,
    routes: routers
})

export default router
