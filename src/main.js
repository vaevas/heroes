import Vue from 'vue'
import router from './router.js'
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css"
import "./assets/css/index.css"

import axios from './assets/axios.js'
//配置axios的基地址,触发请求会自动拼接好地址
axios.defaults.baseURL = 'http://localhost:3000/'
//把axios挂载到vue的原型上
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
