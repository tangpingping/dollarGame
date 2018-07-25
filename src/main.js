// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import pwa from 'pageswitch-animate'
import * as util from './config/util'
import 'pageswitch-animate/css/animate.css'
Vue.use(pwa)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$util = util
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
