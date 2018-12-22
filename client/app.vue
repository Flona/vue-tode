<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
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
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
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


