import Vue from 'vue';
import Vuex from 'vuex';

let localData = localStorage;

Vue.use(Vuex);

const state = {
  // yyType: 1,//预约类型
  // shopType: 1,//店铺类型 1首页进入，2匠师进入，选款式按钮，3匠师进入，有喜欢按钮
  showHeader:true,
  page:['/myPage',"/jiangshiPage","/dzPage"],
  curMyCenter:0,//0:颜粉端，1:匠师端，2:店长端
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
