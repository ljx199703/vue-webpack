import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routesNavMap = {
  'home': {
    name: '首页',
    path: '/home'
  },
  'fantasticBorder': {
    name: '边框动效',
    path: '/fantasticBorder'
  },
  'gradient': {
    name: '渐变动效',
    path: '/gradient'
  },
  'charge': {
    name: '充电动效',
    path: '/charge'
  },
}

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
      documentTitle: 'Home'
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
      documentTitle: 'FantasticBorder',
    }
  },
  {
    name: 'gradient',
    path: '/gradient',
    component: () => import('../pages/gradient/gradient.vue'),
    meta: {
      documentTitle: 'Gradient',
    }
  },
  {
    name: 'charge',
    path: '/charge',
    component: () => import('../pages/charge/charge.vue'),
    meta: {
      documentTitle: 'Charge',
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
// routes添加navTitle
routes.forEach(route => {
  if (routesNavMap[route?.name]) {
    route?.meta || (route.meta = {})
    routesNavMap[route.name].name && (route.meta.navTitle = routesNavMap[route.name].name)
  }
})

export default new VueRouter({
  mode: 'hash',
  routes
})