import Vue from 'vue'
import App from './App.vue'
import router from './views/Router/router.js'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
