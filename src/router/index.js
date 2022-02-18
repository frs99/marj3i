import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/learn-programming',
    name: 'learn-programming',
    component: () => import('../views/learn-programming.vue')
  },
  {
    path: '/learn-web',
    name: 'learn-web',
    component: () => import('../views/learn-web.vue')
  },
  {
    path: '/testblog',
    name: 'Test',
    component: () => import('../views/testblog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
