import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
    hidden?: boolean
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/Home.vue'),
        },
        {
            path: '/about',
            component: () => import('../pages/About.vue'),
        },
    ] as AppRouteRecordRaw[],
})

//前置导航守卫
router.beforeEach((to, from, next) => {
    next()
})

export default router
