import VueRouter from 'vue-router'

import Home from './components/HomeContainer.vue'
import ShopContainer from './components/ShopContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import NewsContainer from './components/news/NewsContainer.vue'
import NewsInfoContainer from './components/news/newsInfo/NewsInfoContainer.vue'
import Comment from './components/common/commentContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
      {path:'/',redirect:"/home"},
      {path:'/home',component:Home},
      {path:'/shopcar',component:ShopContainer},
      {path:'/member',component:MemberContainer},
      {path:'/search',component:SearchContainer},
      {path:'/home/news',component:NewsContainer},
      {path:'/home/news/:id',component:NewsInfoContainer},

  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router