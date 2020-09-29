import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/default',
    name: 'default',
    component: () => import(/* webpackChunkName: "about" */ '../views/Default.vue'),
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Default.vue'),
    children: [
      {
        path: '*',
        redirect: 'default',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
