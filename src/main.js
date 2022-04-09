import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

import router from '@/router'

import store from '@/store'

import '@/mock/serve'
import "swiper/css/swiper.css"
Vue.config.productionTip = false

import {reqGetSearchInfo} from '@/api'
console.log(reqGetSearchInfo({}))
// 向服务器发送请求
// import {reqCategoryList} from '@/api' 
// reqCategoryList();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
