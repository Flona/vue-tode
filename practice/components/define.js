// 全局Vue.component({})
// 局部compenents中声明
import Vue from 'vue'

const compoent = {
  name: 'PropOne',
  template: `<div>
    {{text}}
    <p v-show="active">this is p active</p>
    <p @click="handleChange">{{propOne}}</p>
    <p>{{obj.a}}</p>
  </div>`,
  data () {
    return {
      text: 'this is component'
    }
  },
  props: {
    active: {
      // type: Boolean,
      validator (value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String,
    obj: {
      type: Object,
      default () {
        return {a: 0}
      }
    }
  },
  methods: {
    handleChange () {
      this.$emit('change', 'changed')
    }
  }
}

// Vue.component('CompOne', compoent)

new Vue({
  el: '#root',
  components: {
    CompOne: compoent
  },
  data: {
    propOne: 'propOne'
  },
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="propOne" @change="onChange" />
      <comp-one :active="false" :obj="{a: 2}"/>
    </div>
  `,
  mounted () {
    console.log(this.$refs.comp1)
  },
  methods: {
    onChange (value) {
      this.propOne = value
      console.log('change')
    }
  }
})
