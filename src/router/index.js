import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
  
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/admin',
    name: 'admin',
  
    component: () => import( '../views/Admin.vue')
  },
  {
    path: '/shop/:id',
    name: 'painting',
 
    component: () => import('../views/Painting.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
  
    component: () => import('../views/ContactForm.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
