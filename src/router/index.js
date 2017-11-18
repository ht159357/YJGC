import Vue from 'vue'
import Router from 'vue-router'
import indexMian from "./../components/index-main";
import jishiDetail from "./../components/jishi-details";
import projectDetail from "./../components/project-details";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: "/YJGC/dist/", //基路径
  redirect:'/',
  routes: [
    {
      path: '/',
      component: indexMian
    },{
      path: '/jiangshi:id',
      component: jishiDetail
    },{
      path: '/project/:goodsId/:shopType',
      component: projectDetail
    }
  ]
})
