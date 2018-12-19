import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: `<div>{{text}}</div>`,
  data: {
    text: 1
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  // render (h) {
  //   throw new TypeError('render error')
  //   console.log('render function invoked')
  //   return h('div', {}, 'this is contant')
  // },
  // 仅测试环境会使用，子组件不冒泡
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  // 正式环境也可以用，可冒泡
  errorCaptured () {

  }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000)

setTimeout(() => {
  app.$destroy()
}, 3000)
