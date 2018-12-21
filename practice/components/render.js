// jsx
// render
// template

import Vue from 'vue'

const compoent = {
  name: 'CompOne',
  data () {
    return {
      style: {
        height: '400px',
        width: '400px',
        border: '1px solid pink'
      }
    }
  },
  props: ['prop1'],
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  // v-node 虚拟dom
  render (createElement) {
    return createElement(
      'div',
      {
        style: this.style
        // on: {
        //   click: () => {
        //     this.$emit('click')
        //   }
        // }
      },
      [
        // this.$slots.default,
        this.$slots.header,
        this.prop1
      ]
    )
  }
}

new Vue({
  name: 'root',
  el: '#root',
  components: {
    CompOne: compoent
  },
  data: {
    value: '123'
  },
  // template: `
  //   <div>
  //     <comp-one>
  //       <span>{{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          prop1: 'prop1'
        },
        // on: {
        //   click: this.handleClick
        // }
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement('span', {
          ref: 'span',
          slot: 'header',
          attrs: {
            id: 'id'
          },
          // 会导致后面的this.value无效
          domProps: {
            innerHTML: '<span>245 </span>'
          }
        }, this.value)
      ]
    )
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  }
})
