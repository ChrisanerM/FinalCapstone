import { createRouter, createWebHistory } from 'vue-router'
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
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/CartView.vue')
  },
  {
    path: '/singleview/:id',
    name: 'singleview',
    component: () => import( '../views/SingleProductsView.vue')
  },
  {
    path: '/user/:id',
    name: 'deleteuser',
    component: () => import( '../components/DeleteUser.vue')
  },
  {
    path: '/user/:id',
    name: 'adduser',
    component: () => import( '../components/AddUser.vue')
  },
  {
    path: '/product/:id',
    name: 'deleteproduct',
    component: () => import( '../components/DeleteProduct.vue')
  },
  {
    path: '/product/:id',
    name: 'addProduct',
    component: () => import( '../components/AddProduct.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
})

export default router
