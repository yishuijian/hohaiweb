import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import news from "@/views/news";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: news
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
