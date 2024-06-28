import { RouteRecordRaw } from 'vue-router';

export const authRoutes: RouteRecordRaw[] = [
    {
        name: 'Login',
        path: '',
        component: () => import('./LoginPage.vue')
    }
]