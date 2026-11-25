
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home/Home.vue'),
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../pages/galeria/galeria.vue'),
    },
  ],
})

export default router
