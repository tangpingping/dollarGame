import Vue from 'vue'
import Router from 'vue-router'
import {routers} from './routers'
Vue.use(Router)

let router = new Router({
  routes: routers
})

router.beforeEach((to, from, next) => {
  let routeName = to.meta.name || to.name
  window.document.title = (routeName ? routeName + ' - ' : '') + '一块抓娃娃'
  next()
})

export default router
