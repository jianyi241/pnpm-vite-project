import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
  RouterHistory,
} from "vue-router";

const routers:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  }
]

const routerHistory: RouterHistory = createWebHistory('/')

const router: Router = createRouter({
  history: routerHistory,
  routes: routers
})

export default router
