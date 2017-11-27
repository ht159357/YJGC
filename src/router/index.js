import Vue from 'vue'
import Router from 'vue-router'
import indexMian from "./../components/index-main";
import jishiDetail from "./../components/jishi-details";
import projectDetail from "./../components/project-details";
import makeAppointment from "./../components/make-appointment";
import yySuccess from "./../components/yy-success";
import myPage from "./../components/my-page";
import myYanbi from "./../components/my-yanbi";
import register from "./../components/register"
import registerJms from "./../components/register-jms"
import registerGxjms from "./../components/register-gxjms"
import registerGxjmsXy from "../components/register-gxjmsxy"
import yanfen520 from "./../components/kaitong-yanfen520"
import myYy from "./../components/my-yy"
import makeBill from "./../components/make-bill"
import makeOrder from "./../components/make-order"
import myLike from "./../components/my-like"
import myJiangshi from "./../components/my-jiangshi"
import question from "./../components/my-comm-question"
import questionChild from "./../components/my-comm-question-child"
import answer from "./../components/my-comm-question-answer"
import myShare from "./../components/my-share"
import dzPage from "./../components/dz-page"
import ckpm from "./../components/ckpm"
import shopOrder from "./../components/shop-order"
import salesReport from "./../components/sales-report"


Vue.use(Router);

export default new Router({
  // mode: 'history',
  // history:false,
  base: "/YJGC/dist", //基路径
  redirect:'/index',
  routes: [
    {
      path: '/index',
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
    },{
      path:"/register",
      component: register
    },{
      path:"/yanfen520",
      component: yanfen520
    },{
      path:"/myYy",
      component: myYy
    },{
      path:"/makeBill",
      component: makeBill
    },{
      path:"/makeOrder",
      component: makeOrder
    },{
      path:"/myLike",
      component: myLike
    },{
      path:"/myJiangshi",
      component: myJiangshi
    },{
      path:"/question",
      component: question
    },{
      path:"/question/:qid",
      component: questionChild
    },{
      path:"/answer/:qid",
      component: answer
    },{
      path:"/registerJms",
      component: registerJms
    },{
      path:"/myShare",
      component: myShare
    },{
      path:"/dzPage",
      component: dzPage
    },{
      path:"/ckpm",
      component: ckpm
    },{
      path:"/registerGxjmsXy",
      component: registerGxjmsXy
    },{
      path:"/registerGxjms",
      component: registerGxjms
    },{
      path:"/shopOrder",
      component: shopOrder
    },{
      path:"/salesReport",
      component: salesReport
    }
  ]
})
