import { createRouter, createWebHistory } from 'vue-router'
import Content from '@/views/content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/main/home.vue'),
          meta: { title: '首页', key: 'home' }
        }
      ]
    }
  ]
})

export default router
