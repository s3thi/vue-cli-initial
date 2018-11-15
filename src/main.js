import Vue from 'vue'
import App from './App.vue'
import RouterView from './RouterView.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: App }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(RouterView),
  router
}).$mount('#app')
