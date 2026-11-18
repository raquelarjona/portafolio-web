
import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/components/layout.vue'
import Home from '@/pages/home/Home.vue'
import Galeria from '@/pages/galeria/galeria.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'galeria',
          name: 'galeria',
          component: Galeria
        }
      ]
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
