import Vue from 'vue'

new Vue({
  el: '#root',
  template: `<div>
    <p>{{this.fName + this.lName}}</p>
    <p>{{this.fullName}}</p>
    <p>{{this.getName()}}</p>
    <p>fName: <input v-model="fName"></input></p>
    <p>lName: <input v-model="lName"></input></p>
    <p>number测试缓存: <input v-model="number"></input></p>
    <p>name: <input v-model="name"></input></p>
    <p>obj.a: <input v-model="obj.a"></input></p>
    <p>obj.b: <input v-model="obj.b"></input></p>
  </div>`,
  data: {
    fName: 'Yvonne',
    lName: 'He',
    number: 0,
    obj: {
      a: 0,
      b: 0
    }
  },
  computed: {
    fullName () {
      console.log('new name')
      return `${this.fName} ${this.lName}`
    },
    name: {
      get () {
        console.log('new name')
        return `${this.fName} ${this.lName}`
      },
      set (newName) {
        const names = newName.split(' ')
        this.fName = names[0]
        this.lName = names[1]
      }
    }
  },
  watch: {
    // obj () {
    //   console.log('obj.a is change')
    // }
    'obj.a': {
      handler () {
        console.log('obj.a is change')
      },
      // 'obj.a'的形式就不用设置deep
      // deep: true,
      // 默认是false，第一次的值不会被调用
      immediate: true
    }
  },
  methods: {
    getName () {
      console.log('getName is invoked')
      return `${this.fName} ${this.lName}`
    }
  }
})
