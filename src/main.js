// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
  })

// import {Header, Swipe, SwipeItem,Button} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

import Mintui from 'mint-ui'
import "mint-ui/lib/style.css"
Vue.use(Mintui)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateJSON=true

import app from './App.vue'
import router from './router.js'

var vm=new Vue({
    el:"#app",
    render: c => c(app),
    router
})
