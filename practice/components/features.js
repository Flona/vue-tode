import Vue from 'vue'

// 测试层级深的祖孙关系
const childComp = {
  template: `<div>this is child {{obj.value}}</div>`,
  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.yeye)
  },
  // inject: ['yeye', 'value']
  inject: ['yeye', 'obj']
}

const compoent = {
  name: 'CompOne',
  components: {
    ChildComp: childComp
  },
  data () {
    return {
      style: {
        height: '400px',
        width: '400px',
        border: '1px solid pink'
      },
      value: '456'
    }
  },
  template: `
    <div :style="style">
      <slot :value="value"></slot>
      <header>
        <slot name="header"></slot>
      </header>
      <div>
        <slot name="body"></slot>
      </div>
      <child-comp />
    </div>
  `
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
  // provide: {
  //   yeye: this
  // },
  // 默认不支持reactive
  // provide () {
  //   return {
  //     yeye: this,
  //     value: this.value
  //   }
  // },
  provide () {
    const obj = {}
    Object.defineProperty(obj, 'value', {
      get: () => {
        return this.value
      },
      enumerable: true
    })
    return {
      yeye: this,
      obj
    }
  },
  template: `
    <div>
      <comp-one>
        <span slot-scope="props">{{value}} {{props.value}}</span>
        <span slot="header">this is header</span>
        <span slot="body">this is body</span>
      </comp-one>
      <input type="text" v-model="value"></input>
    </div>
  `
})
