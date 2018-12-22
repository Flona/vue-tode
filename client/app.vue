<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{counter}} {{fullName}}</p>
    <p>module: {{a}} {{b}} {{c}} textPlus: {{textPlus}}</p>
    <!-- <todo></todo> -->
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link :to="{name: 'login'}">login</router-link>
    <!-- <router-link to="/login/active">login-active</router-link> -->
    <router-view></router-view>
    <Footer></Footer>
    <!-- 署名 -->
    <!-- <router-view name="test"></router-view> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    console.log(this.$store)
    let i = 0
    setInterval(() => {
      // this.$store.state.count = i++
      // this.$store.commit('updateCount', i++)
      this.updateCount(i++)
    }, 1000)
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 3000
    // })
    // this.updateCountAsync({
    //   num: 6,
    //   time: 2000
    // })

    // this.$store.commit('updateA', 3)
    // this['updateA'](4)
    this['a/updateA'](5)

    console.log('a/textPlus: ', this['a/textPlus'])
    this['a/updateAAsync']({num: 10, time: 4000})
  },
  computed: {
    // a () {
    //   return this.$store.state.a.text
    // },
    b () {
      return this.$store.state.b.text
    },
    ...mapState({
      counter: 'count',
      // counter: (state) => state.count
      a: (state) => state.a.text,
      c: (state) => state.c.text
    }),
    // ...mapState(['count']),
    // ...mapGetters(['fullName', 'a/textPlus'])
    ...mapGetters({
      'fullName': 'fullName',
      textPlus: 'a/textPlus'
    })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/updateAAsync']),
    // ...mapMutations(['updateCount', 'updateA'])
    ...mapMutations(['updateCount', 'a/updateA'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


