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
import Payment from './views/MIN/Payment'
import One from './views/MIN/tuo/one'
import tuo from './views/MIN/tuo/tuo'
import three from './views/MIN/tuo/three'
import four from './views/MIN/tuo/four'
import five from './views/MIN/tuo/five'
import Fightgroups from './views/MIN/Fightgroups'
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const routes=[
  {path:'/',component:Home},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/shopcar',component:Shopcar},
  {path:'/mine',component:Mine},
  {path:'/Fightgroups',component:Fightgroups, children:[
		{path:'one',component:One},
		{path:'tuo',component:tuo},
		{path:'three',component:three},
		{path:'four',component:four},
		{path:'five',component:five},
  ] 
  },
 
  {path:'/Payment',component:Payment, children:[
		{path:'one',component:One},
		{path:'tuo',component:tuo},
		{path:'three',component:three},
		{path:'four',component:four},
		{path:'five',component:five},
  ]
  }
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
