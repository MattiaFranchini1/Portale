import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import UserDetails from '../views/UserDetails.vue'
import RegistrationView from '../views/RegistrationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
  },
  {
    path: '/user-details/:userId', // :userId indica un parametro dinamico nell'URL
    name: 'userDetails',
    component: UserDetails,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path:'/registration',
    name: 'registration',
    component: RegistrationView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
