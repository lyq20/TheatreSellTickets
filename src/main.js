import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/element.js'
import './plugins/style.scss'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$request = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
