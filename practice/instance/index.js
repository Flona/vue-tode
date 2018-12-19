import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: `<div ref='div'>{{text}} {{obj.a}}</div>`,
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newValue, oldValue) {
  //     console.log(`${newValue} : ${oldValue}`)
  //   }
  // }
})

app.$mount('#root')

console.log(app.$el)
console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

console.log(app.$data)
console.log(app.text)

let i = 0
setInterval(() => {
  // app.text += 1
  // app.$data.text += 1
  // app.$options.data += 1
  // app.obj.a = app.text
  // app.$forceUpdate()
  i++
  app.$set(app.obj, 'a', i)
}, 1000)

console.log(app.$props)
console.log(app.$parent)
console.log(app.$children)
console.log(app.$root === app)
console.log(app.$refs)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$isServer)

const unWatch = app.$watch('text', (newValue, oldValue) => {
  console.log(`${newValue} : ${oldValue}`)
})
setTimeout(() => {
  unWatch()
}, 2000)

app.$on('test', (a, b) => {
  console.log(`is $emited ${a} ${b}`)
})

app.$emit('test', 1, 2)

app.$once('testOnce', () => {
  console.log('is testOnce')
})

setInterval(() => {
  app.$emit('testOnce')
}, 1000)
