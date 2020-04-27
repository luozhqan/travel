/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'

// 直接引入组件使用
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/DEtail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    // component: Home
    // 改为异步引入组件
    component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    // component: City
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id', // 携带参数id
    name: 'Detail',
    // component: Detail
    component: () => import('@/pages/detail/Detail')
  }]
})