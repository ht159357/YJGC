import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  curPage:"showYySuccess",//当前页
  pageList:["showJsDetails","showProjectDetails","showAppointment","showYySuccess"],
  showIndexs: false,//显示首页
  showJsDetails: false,//显示技师详情
  showProjectDetails: false,//显示具体
  showAppointment: false,//显示预约界面
  showYySuccess: true,
  yyType: 1,//预约类型
  shopType: 1,//店铺类型 1首页进入，2匠师进入，选款式按钮，3匠师进入，有喜欢按钮
  showGoodDetails:false,//预约时时候显示商品信息

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
