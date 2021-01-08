import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
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
    path: '*',
    redirect: '/404'
  }
]

export default new VueRouter({
  mode: 'hash',
  routes
})