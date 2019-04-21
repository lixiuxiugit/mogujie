import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import store from '@/components/store/store'
import live from '@/components/live/live'
import mine from '@/components/mine/mine'
import clicksearch from '@/components/store/component/search/clicksearch'
// 首页
import attention from '@/components/home/component/attention/attention'
import discover from '@/components/home/component/discover/discover'
import fashion from '@/components/home/component/fashion/fashion'
import homepage from '@/components/home/component/homepage'
import rclothesNav from '@/components/home/component/rclothesNav'
// 分类
import classify from '@/components/classify/classify'
import Mint from 'mint-ui'
// 直播
import hot from '@/components/live/component/component/hot'
import makup from '@/components/live/component/component/makup'
import wear from '@/components/live/component/component/wear'
import zhibo from '@/components/live/component/component/zhibo'
import gwcart from '@/components/live/component/component/gwcart'

import guessyoulikedetail from '@/components/store/component/guessyoulikedetail/guessyoulikedetail'
import VueLazyload from 'vue-lazyload'
Vue.use(Mint)
Vue.use(Router)
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/home'
      // meta: { requiresAuth: true }
    },
    {
      path: '/home',
      component: home,
      redirect: '/home/attention',
      meta: { requiresAuth: true },
      children: [
        {
          name: 'attention',
          path: 'attention',
          component: attention,
          meta: { requiresAuth: true }
        },
        {
          path: 'discover',
          component: discover,
          meta: { requiresAuth: true }
        },
        {
          path: 'fashion',
          component: fashion,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/store',
      // name: 'store',
      component: store,
      meta: { requiresAuth: true }
    },
    {
      path: '/clicksearch',
      // name: 'store',
      component: clicksearch,
      meta: { requiresAuth: false }
    },
    {
      path: '/guessyoulikedetail',
      // name: 'store',
      component: guessyoulikedetail,
      meta: { requiresAuth: false }
    },
    {
      path: '/live',
      name: 'live',
      redirect: '/live/makup',
      component: live,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'hot',
          component: hot,
          meta: { requiresAuth: true }
        },
        {
          path: 'makup',
          component: makup,
          meta: { requiresAuth: true }
        },
        {
          path: 'wear',
          component: wear,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/mine',
      // name: 'mine',
      component: mine,
      meta: { requiresAuth: true }
    },
    {
      path: '/homepage/:id',
      name: 'homepage',
      component: homepage,
      meta: { requiresAuth: false }
    },
    {
      path: '/rclothesNav',
      name: 'rclothesNav',
      component: rclothesNav,
      meta: { requiresAuth: false }
    },
    {
      path: '/zhibo/:id',
      name: 'zhibo',
      component: zhibo,
      meta: { requiresAuth: false }
    },
    {
      path: '/zhibo/:id',
      name: 'gwcart',
      component: gwcart,
      meta: { requiresAuth: true }
    },
    {
      path: '/fenlei', // 路由动态传参
      name: 'fenlei',
      component: classify,
      meta: { requiresAuth: true }
    }
  ]
})
