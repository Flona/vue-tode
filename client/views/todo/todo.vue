<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    >
    <item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  props: ['id'],
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  mounted () {
    console.log(this.id)
    console.log(this.$route.params)
    console.log(this.$route.query)
    console.log(this.$route.meta)
  },
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter', this)
    // 拿到当前this=vm，可做数据获取塞进去
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // todo/:id切换，组件仅是更新，可拿数据重新获取，mounted是不会再次执行的，routes中beforeEnter不调用
    // watch方式比较麻烦，性能开销
    console.log('todo before update', this)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo before leave', this)
    // 离开前问题询问
    next()
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>


