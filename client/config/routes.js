// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/index.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    // path: '/app',
    path: '/app/:id',
    props: true,
    // props: {
    //   id: 'obj-id'
    // },
    // props (route) {
    //   return {
    //     id: route.params.id
    //   }
    // },
    meta: {
      title: 'title from routes'
    },
    components: {
      default: () => import('../views/todo/todo.vue'),
      test: () => import('../views/login/index.vue')
    },
    beforeEnter (to, from, next) {
      console.log('invoked in routes')
      next()
    }
  },
  {
    name: 'login',
    path: '/login',
    components: {
      default: () => import('../views/login/index.vue')
    }
  }
]
