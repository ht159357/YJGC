import Vue from 'vue';
import Vuex from 'vuex';

let localData = localStorage;

Vue.use(Vuex);

const state = {
  // curPage:"",//当前页(need change)
  // pageList:["showJsDetails","showProjectDetails","showAppointment","showYySuccess","showMyPage"],
  // showIndexs: true,//显示首页(need change)
  // showJsDetails: false,//显示技师详情(need change)
  // showProjectDetails: false,//显示具体项目(need change)
  // showAppointment: false,//显示预约界面(need change)
  // showYySuccess: false,//显示预约成功(need change)
  // showMyPage: false,//显示个人中心(need change)
  // yyType: 1,//预约类型
  // shopType: 1,//店铺类型 1首页进入，2匠师进入，选款式按钮，3匠师进入，有喜欢按钮
  // showGoodDetails:false,//预约时时候显示商品信息

};

const mutations= {
  curPageName(state,pagename){
    this.state.curPage = pagename;
  }
}





export default new Vuex.Store({
  state,
  mutations
});
