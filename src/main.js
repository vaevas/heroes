import Vue from 'vue'
import VueRouter from'../node_modules/vue-router/dist/vue-router'
Vue.use(VueRouter)
import right from './components/right.vue'
import addlist from './components/addlist.vue'
import edit from './components/edit.vue'
import Export from './components/Export.vue'
const router = new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {path:'/',redirect:'/list'},
    {path:'/list',component:right},
    {path:'/add',component:addlist},
    {path:'/edit',component:edit},
    {path:'/Export',component:Export}
  ]
})
import App from './App.vue'

import "./assets/bootstrap/css/bootstrap.css"
import "./assets/css/index.css"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
