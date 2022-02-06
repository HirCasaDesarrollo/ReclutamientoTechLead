import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokedex from '../views/Pokedex.vue'
import Legendaries from '../views/Legendaries.vue'
import PageNotFound from '../views/404.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/lgendaries',
    name: 'Legendaries',
    component: Legendaries
  },
  { path: '/page-not-found',
    component: PageNotFound //Vue component
  },
  { path: '*', redirect: '/page-not-found' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
