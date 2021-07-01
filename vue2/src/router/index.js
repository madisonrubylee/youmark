import Vue from "vue"
import VueRouter from "vue-router"
import Main from '../components/Main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
      { path: "/", redirect: '/home' },
      { path: '/home', component: Main},
      { path: "*", component: () => import('../components/PageNotFound') },
    ],
  })
  
  export default router