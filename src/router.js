import Vue from 'vue'
import VueRouter from'vue-router'
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

export default router