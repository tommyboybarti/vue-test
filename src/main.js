import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

// create a new instance of vueRouter and pass an object with registered routes
const router = new VueRouter({
  // place the importet routes
  routes: Routes,
  // get rid of hash routing and move to history, so index.html will be loaded each time and vue.js takes it from there. 
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // using the const router in this Vue instance.. 
  router: router
}).$mount('#app')
