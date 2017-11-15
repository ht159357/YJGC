import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  curPage:"showProjectDetails",
  pageList:["showJsDetails","showProjectDetails"],
  showIndexs: false,//显示首页
  showJsDetails: false,//显示技师详情
  showProjectDetails: true,//显示具体项目
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
