import Vue from 'vue'
import router from './router.js'
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css"
import "./assets/css/index.css"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
