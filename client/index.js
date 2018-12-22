import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import createRouter from './config/router'
import createStore from './store/store'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

// store.unregisterModule('c')

// store.watch((state) => state.count + 1, (newValue) => {
//   console.log('subscribe: ', newValue)
// })

// state是全部的state,包括module中的
// store.subscribe((mutation, state) => {
//   console.log(state)
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

// state是全部的state,包括module中的
store.subscribeAction((action, state) => {
  console.log(state)
  console.log(action.type)
  console.log(action.payload)
})

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
  store,
  render: (h) => h(App)
}).$mount('#root')
