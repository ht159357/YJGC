import Vue from 'vue'
import Router from 'vue-router'
// import indexMian from "@/components/index-main"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:"/", //基路径
  routes: [
    // {
    //   path: '/',
    //   component: indexMian
    // }
  ]
})
