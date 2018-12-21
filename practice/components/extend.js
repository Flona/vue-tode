// parent 尽量不要进行更改，仅是查看
import Vue from 'vue'

const compoent = {
  name: 'PropOne',
  template: `<div>
    {{text}}
    <p v-show="active">this is p active</p>
    <p @click="handleChange">{{propOne}}</p>
  </div>`,
  data () {
    return {
      text: 'this is component'
    }
  },
  props: {
    active: {
      type: Boolean
      // validator (value) {
      //   return typeof value === 'boolean'
      // }
    },
    propOne: String
  },
  mounted () {
    console.log('compoent is invoked')
  },
  methods: {
    handleChange () {
      this.$emit('change', 'changed')
    }
  }
}

// Vue.component('CompOne', compoent)

const parent = new Vue({
  name: 'parent'
})

const comp2 = {
  //  此处配置parent并不会生效，在new的地方配置才会生效
  parent: parent,
  extends: compoent,
  data () {
    return {
      text: 'this is comp2'
    }
  },
  mounted () {
    console.log('compoent2 is invoked')
    // 调用它的vue
    console.log(this.$parent.$options.name)
    this.$parent.text = 123
  }
}

new Vue({
  // 在new的地方配置才会生效
  parent: parent,
  name: 'root',
  el: '#root',
  components: {
    comp2
  },
  data () {
    return {
      text: 0
    }
  },
  template: `<div>
    <comp2 :active="true" />
    {{text}}
  </div>`,
  mounted () {
    console.log('Vue is invoked')
    console.log(this.$parent.$options.name)
  }
})

// const VueComp = Vue.extend(compoent)

// new VueComp({
//   el: '#root',
//   data: {
//     text: 'this is VueComp'
//   },
//   propsData: {
//     propOne: 'propOne'
//   },
//   mounted () {
//     console.log('VueComp is invoked')
//   }
// })
