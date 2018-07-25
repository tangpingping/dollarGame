import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/content/dynamic'
Vue.use(Router)
let indexRoute = [
  {
    path: '/',
    name: 'index',
    meta: {name: '首页'},
    component: resolve => require(['../components/index'], resolve)
  },
  {
    path: '/dynamic',
    title: '动态中心',
    component: Main,
    name: '动态中心',
    meta: {name: '动态中心'},
    children: [
      {path: 'data', title: '文章列表', name: '文章列表', component: resolve => require(['../components/content/dynamicData'], resolve)},
      {path: 'content', title: '文章内容', name: '文章内容', component: resolve => require(['../components/content/article'], resolve)}
    ]
  }
]

export const routers = [
  ...indexRoute
]
