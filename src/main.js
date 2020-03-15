import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import Index from './components/index'
import About from './components/about'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

const router=new VueRouter({
  routes:[
    {path:'/',component:Index},
    {path:'/about',component:About},
  ],
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
