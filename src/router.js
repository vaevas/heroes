import Vue from 'vue'
import VueRouter from'vue-router'
Vue.use(VueRouter)
import right from './views/heros/right.vue'
import wuqi from './views/wuqi/wuqi.vue'
import zhuangbei from './views/zhuangbei/zhuangbei.vue'
import Export from './components/Export.vue'
const router = new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {path:'/',redirect:'/list'},
    {path:'/list',component:right},
    {path:'/wuqi',component:wuqi},
    {path:'/zhuangbei',component:zhuangbei},
    {path:'/Export',component:Export}
  ]
})

export default router