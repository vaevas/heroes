import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import right from './views/heros/right.vue'
import wuqi from './views/wuqi/wuqi.vue'
import zhuangbei from './views/zhuangbei/zhuangbei.vue'
import Export from './components/Export.vue'
import add from './views/heros/addlist.vue'
import edit from './views/heros/edit.vue'
import addwuqi from './views/wuqi/addwuqi.vue'
import addzhuangbei from './views/zhuangbei/addzhuangbei.vue'
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/list' },
    { name: 'hero', path: '/list', component: right },
    { name: 'wuqi', path: '/wuqi', component: wuqi },
    { name: 'addwuqi', path: '/wuqi/addwuqi', component: addwuqi },
    { name: 'zhuangbei', path: '/zhuangbei', component: zhuangbei },
    { name: 'addzhuangbei', path: '/zhuangbei/addzhuangbei', component: addzhuangbei },
    { path: '/Export', component: Export },
    {name:'add',path:'/list/add',component:add},
    {name:'edit',path:'/list/edit/:id',component:edit,props:true},
  ]
})

export default router