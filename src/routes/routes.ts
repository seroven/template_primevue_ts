import { RouteRecordRaw } from 'vue-router';
import { authRoutes } from '../modules/auth/routes';
import { errorRoutes } from '../modules/error/routes';
import { homeRoutes } from '../modules/home/routes';
import { userRoutes } from '../modules/users/routes';


export const routes:RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/panel/home'
    },
    {
        path: '/panel',
        redirect: '/panel/home',
        component: () => import('../layouts/panel/PanelLayout.vue'),
        children: [
            ...homeRoutes,
            ...userRoutes
        ],
    },
    {
        path: '/auth',
        component: () => import('../layouts/auth/AuthLayout.vue'),
        children: [
            ...authRoutes
        ],
    },
    {
        path: '/error',
        component: () => import('../layouts/auth/AuthLayout.vue'),
        children: [
            ...errorRoutes
        ]
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/error/404'
    }
]