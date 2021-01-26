import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/normalize.scss'

router.beforeEach((to, from, next) => {
  console.log('global guard')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})