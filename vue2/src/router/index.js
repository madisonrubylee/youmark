import Vue from "vue"
import VueRouter from "vue-router"
import MainPage from '../components/MainPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
      { path: "/", redirect: '/home' },
      { path: '/home', component: MainPage},
      { path: "*", component: () => import('../components/PageNotFound') },
    ],
  })
  
  export default router