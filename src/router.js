import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Blog from './views/blog'
import Home from './views/home'
import Salon from './views/salon'
import About from './views/about'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Blog',
      path: '/blog',
      component: Blog,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Salon',
      path: '/salon',
      component: Salon,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
