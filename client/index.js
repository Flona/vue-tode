import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)
const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  // 校验（登录等）
  // next({name:'login'})
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
