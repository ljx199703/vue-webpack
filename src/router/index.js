import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../pages/home/home.vue'),
    meta: {
      title: 'Home'
    },
    beforeEnter: (to, from, next) => {
      console.log('route guard')
      next()
    }
  },
  {
    name: 'fantasticBorder',
    path: '/fantasticBorder',
    component: () => import('../pages/fantasticBorder/fantasticBorder.vue'),
    meta: {
      title: 'FantasticBorder'
    }
  },
  {
    name: 'gradient',
    path: '/gradient',
    component: () => import('../pages/gradient/gradient.vue'),
    meta: {
      title: 'Gradient'
    }
  },
  {
    name: 'charge',
    path: '/charge',
    component: () => import('../pages/charge/charge.vue'),
    meta: {
      title: 'Charge'
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404/404.vue'),
    meta: {
      title: '404'
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