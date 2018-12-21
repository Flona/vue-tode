import Vue from 'vue'

const comp = {
  // template: `
  //   <input type="text" :value="value" @input="handleInput"></input>
  // `,
  template: `
    <input type="text" :value="value1" @change="handleInput"></input>
  `,
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  // props: ['value'],
  methods: {
    // handleInput (e) {
    //   this.$emit('input', e.target.value)
    // }
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  name: 'root',
  components: {
    Comp: comp
  },
  data () {
    return {
      value: 'yvonne'
    }
  },
  // template: `
  //   <comp :value="value" @input="value = arguments[0]"/>
  // `
  template: `
    <comp v-model="value"/>
  `
})
