import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/normalize.scss'
import './styles/initialize.scss'
import './styles/theme.scss'

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})