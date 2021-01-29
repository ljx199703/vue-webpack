import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: home,
    meta: {
      documentTitle: 'Home'
    },
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404/404.vue'),
    meta: {
      documentTitle: '404'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new VueRouter({
  mode: 'hash',
  routes
})