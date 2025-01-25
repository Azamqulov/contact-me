import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Contact from '@/views/Contact.vue'
import Blog from '@/views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
  ],
})

export default router
