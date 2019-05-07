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
      redirect: 'login',
      component: () => import('../views/Layout/index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/Home/home.vue')
        },
        {
          path: 'details',
          name: 'Detail',
          component: () => import('../views/Detail/detail.vue')
        },
        {
          path: 'order',
          name: 'OrderList',
          component: () => import('../views/Order/order.vue')
        },
        {
          path: 'list',
          name: 'List',
          component: () => import('../views/List/list.vue')
        },
        {
          path: 'aboutOurs',
          name: 'AboutOurs',
          component: () => import('../views/Aboutour/aboutours.vue')
        }
      ]
    }
  ]
})
