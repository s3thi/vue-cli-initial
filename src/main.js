import Vue from 'vue'
import App from './App.vue'
import RouterView from './RouterView.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: App }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

const store = new Vuex.Store({ state: { } })

new Vue({
  render: h => h(RouterView),
  router,
  store
}).$mount('#app')
