import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  curPage:"showAppointment",//当前页
  pageList:["showJsDetails","showProjectDetails","showAppointment"],
  showIndexs: false,//显示首页
  showJsDetails: false,//显示技师详情
  showProjectDetails: false,//显示具体项目
  showAppointment:true,//显示预约界面
  yyType:2,
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
