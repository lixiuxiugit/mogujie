// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vuex from 'vuex'
import store from './store/cart'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(Vuex)

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {

// })
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
