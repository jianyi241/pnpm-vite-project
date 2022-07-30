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
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/about.vue')
    },
    {
        path: '/display/grid',
        name: 'Grid',
        component: () => import('@/views/display/grid/grid.vue')
    },
    {
        path: '/three-dimensional',
        name: 'ThreeDimensional',
        component: () =>
            import('@/views/three-dimensional/three-dimensional.vue')
    },
    {
        path: '/data-structure',
        name: 'DataStructure',
        component: () => import('@/views/data-structure/data-structure.vue')
    },
    {
        path: '/ramda',
        name: 'Ramda',
        component: () => import('@/views/ramda/ramda.vue')
    }
]

const routerHistory: RouterHistory = createWebHistory(import.meta.env.BASE_URL)

const router: Router = createRouter({
    history: routerHistory,
    routes: routers
})

export default router
