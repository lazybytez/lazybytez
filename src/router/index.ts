import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "@/views/Home.vue"
import Gaming from "@/views/Gaming.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gaming",
    name: "Gaming",
    component: Gaming
  }
]

const router = new VueRouter({
  routes
})

export default router
