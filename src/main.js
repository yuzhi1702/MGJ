// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './views/Home'
import Category from './views/Category'
import Shopcar from './views/Shopcar'
import Mine from './views/Mine'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const routes=[
  {path:'/',component:Home},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/shopcar',component:Shopcar},
  {path:'/mine',component:Mine},
]


const router=new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
