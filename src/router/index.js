import Vue from 'vue'
import Router from 'vue-router'
import indexMian from "./../components/index-main";
import yjgcIndex from "./../components/yjgc-index";
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
import workAttendance from "./../components/work-attendance"
import registed from "./../components/registed"
import workerScheduling from "./../components/worker-scheduling"
import businessChart from "./../components/business-chart"
import commentBill from "./../components/comment-bill"
import complaint from "./../components/complaint"
import submitOrder from "./../components/submit-order"
import star from "./../components/star"
import jiangshiPage from "./../components/jiangshi-page"
import jsMyYy from "./../components/js-my-yy"
import jsMyFans from "./../components/js-my-fans"
import jsMyPb from "./../components/js-my-pb"
import jsMyPf from "./../components/js-my-pf"
import jsMyYbtx from "./../components/js-my-ybtx"
import jsMyKh from "./../components/js-my-kh"


Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: "/YJGC/dist", //基路径
  redirect:'/index',
  routes: [
    {//定向首页
      path: '/',
      redirect:'/yjgcIndex',
      component: yjgcIndex
    },{//首页
      path: '/',
      redirect:'/yjgcIndex',
      component: yjgcIndex
    },{//预约店铺首页
      path: '/index',
      component: indexMian
    },{//匠师详情
      path: '/jiangshi/:id',
      component: jishiDetail
    },{//项目详情（首页进入）
      path: '/project/:shopId/:goodsId/:shopType',
      component: projectDetail
    },{//项目详情（匠师页进入）
      path: '/project/:shopId/:goodsId/:shopType/:artisanId/:artName',
      component: projectDetail
    },{//预约(首页)
      path: '/makeAppointment/:yyType/:shopType/:showGoods/:storefrontId/:goodsId/:time/:price',
      component: makeAppointment
    },{//预约（匠师）
      path: '/makeAppointment/:yyType/:shopType/:showGoods/:storefrontId/:goodsId/:time/:price/:artisanId/:artName',
      component: makeAppointment
    },{//预约成功
      path: '/yySuccess',
      component: yySuccess
    },{//个人中心
      path: '/myPage',
      component: myPage
    },{//我的颜币
      path: '/myYanbi',
      component: myYanbi
    },{//颜粉注册
      path:"/register",
      component: register
    },{//开通颜粉520
      path:"/yanfen520",
      component: yanfen520
    },{//我的预约
      path:"/myYy",
      component: myYy
    },{//开具发票2
      path:"/makeBill",
      component: makeBill
    },{//选择开具发票订单页
      path:"/makeOrder",
      component: makeOrder
    },{//我喜欢的商品
      path:"/myLike",
      component: myLike
    },{//我喜欢的匠师
      path:"/myJiangshi",
      component: myJiangshi
    },{//常见问题
      path:"/question",
      component: question
    },{//问题 id
      path:"/question/:qid",
      component: questionChild
    },{//问题答案 id
      path:"/answer/:qid",
      component: answer
    },{//注册加盟商
      path:"/registerJms",
      component: registerJms
    },{//我的分享
      path:"/myShare",
      component: myShare
    },{//店主中心
      path:"/dzPage",
      component: dzPage
    },{//创客排名
      path:"/ckpm",
      component: ckpm
    },{//注册共享加盟商协议
      path:"/registerGxjmsXy",
      component: registerGxjmsXy
    },{//注册共享加盟商
      path:"/registerGxjms",
      component: registerGxjms
    },{//店铺订单
      path:"/shopOrder",
      component: shopOrder
    },{//销售报表
      path:"/salesReport",
      component: salesReport
    },{//匠师考勤
      path:"/workAttendance",
      component: workAttendance
    },{//加盟商已注册页面
      //type:1（加盟商）
      //type:2（共享加盟商）
      path:"/registed/:type",
      component: registed
    },{//排班
      path:"/workerScheduling",
      component: workerScheduling
    },{//营业报表
      path:"/businessChart",
      component: businessChart
    },{//评论订单
      path:"/commentBill",
      component: commentBill
    },{//投诉订单
      path:"/complaint",
      component: complaint
    },{//提交订单
      path:"/submitOrder",
      component: submitOrder
    },{//星星------------------------测试
      path:"/star",
      component: star
    },{//匠师页
      path:"/jiangshiPage",
      component:jiangshiPage
    },{//匠师：我的预约
      path:"/jsMyYy",
      component:jsMyYy
    },{//匠师：我的颜粉
      path:"/jsMyFans",
      component:jsMyFans
    },{//匠师：我的排班
      path:"/jsMyPb",
      component:jsMyPb
    },{//匠师：我的评分
      path:"/jsMyPf",
      component:jsMyPf
    },{//匠师：我要提现
      path:"/jsMyYbtx",
      component:jsMyYbtx
    },{//匠师：我要提现
      path:"/jsMyKh",
      component:jsMyKh
    }
  ]
})
