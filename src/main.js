import Vue from 'vue'
import App from './App.vue'
import router from './router'

router.beforeEach((to, from, next) => {
  console.log('global guard')
  next()
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})