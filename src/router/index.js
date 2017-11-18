import Vue from 'vue'
import Router from 'vue-router'
import indexMian from "./../components/index-main";
import jishiDetail from "./../components/jishi-details";
import projectDetail from "./../components/project-details";
import makeAppointment from "./../components/make-appointment";
import yySuccess from "./../components/yy-success";
import myPage from "./../components/my-page";
import myYanbi from "./../components/my-yanbi";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // history:false,
  base: "/YJGC/dist", //基路径
  redirect:'/',
  routes: [
    {
      path: '/',
      component: indexMian
    },{
      path: '/jiangshi/:id',
      component: jishiDetail
    },{
      path: '/project/:goodsId/:shopType',
      component: projectDetail
    },{
      path: '/makeAppointment/:yyType/:shopType/:showGoods',
      component: makeAppointment
    },{
      path: '/yySuccess',
      component: yySuccess
    },{
      path: '/myPage',
      component: myPage
    },{
      path: '/myYanbi',
      component: myYanbi
    }
  ]
})
