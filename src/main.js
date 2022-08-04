import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import {Menu,MenuItem,Submenu,Button,Input,Card,Carousel,CarouselItem} from "element-ui";
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Button)
Vue.use(Input)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
