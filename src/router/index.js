import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {

      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/login.vue')
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import('../views/Layout/index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/Home/home.vue')
        }
      ]
    }
  ]
})
