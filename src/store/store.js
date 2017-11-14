import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  curPage:"showProjectDetails"
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
