<template>
  <div id="app">
    <img :src="loadingImg" v-show="false">
    <header-nav @activepage="showIndexActive"></header-nav>
    <div id="index-app" v-if="!showJsDetails && showIndexs ">
      <!--轮播-->
      <div class="mint-swipe-container margin-top-header" style="height: 200px;">
        <mt-swipe :auto="2000" :prevent="true">
          <mt-swipe-item class="mint-swipe-item">
            <img class="swipe-img" src="http://wx.yanjianggongchang.com/Uploads/Picture/2017-09-04/59acc55fac9ea.jpg">
          </mt-swipe-item>
          <mt-swipe-item class="mint-swipe-item">
            <img class="swipe-img" src="http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-18/5996b33598248.jpg">
          </mt-swipe-item>
          <mt-swipe-item class="mint-swipe-item">
            <img class="swipe-img" src="http://wx.yanjianggongchang.com/Uploads/Picture/2017-09-05/59ae079009e5d.jpg">
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <div class="shops-box">
        <div class="shops-box-box">
          <select class="select-reset" name="province">
            <option value="1">江苏省</option>
            <option value="2">上海市</option>
            <option value="3">江西省</option>
          </select>
        </div>
        <div class="shops-box-box">
          <select class="select-reset" name="city">
            <option value="1">南京市</option>
            <option value="2">上海市</option>
            <option value="3">南昌市</option>
          </select>
        </div>
        <div class="shops-box-box">
          <select class="select-reset" name="city">
            <option value="1">南京店</option>
            <option value="2">上海店</option>
            <option value="1">南昌万达店</option>
          </select>
        </div>
      </div>

      <index-main @jsevent="jishiEvent"></index-main>
    </div>

    <jishi-detail class="margin-top-header" v-if="showJsDetails"></jishi-detail>
    <project-detail class="margin-top-header" v-if="showProjectDetails"></project-detail>
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from './store/store'
  import { Swipe, SwipeItem } from 'mint-ui';
  import headerNav from "./components/header";
  import indexMain from './components/index-main';
  import jishiDetail from "./components/jishi-details";
  import projectDetail from "./components/project-details"


  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
      name: 'app',
      components:{
          indexMain,
          headerNav,
          jishiDetail,
          projectDetail
      },
      store,
      data(){
          return {
              pageList:["showJsDetails","showProjectDetails"],
              showIndexs: false,//显示首页
              showJsDetails: false,//显示技师详情
              showProjectDetails: true,//显示具体项目
              loadingImg:require("./assets/img/ball-loading.png")
          }
      },
      methods: {
          showIndexActive(data){
              if( this.showIndexs ){
                return;
              }
              console.log(data);

              this.showIndexs = true;
              this[store.state.curPage] = false;
          },
          jishiEvent(data){
              console.log(data);
              this.showIndexs = false;
              this[data.pageName] = data.showPage;
              store.state.curPage = data.pageName;
          },

      }
  }
</script>

<style>
  @import "./assets/css/style.css";
  html,body{
    margin: 0;
    -webkit-tap-highlight-color: transparent;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .mint-swipe-item{
    background: #5a676f;
  }
  .header-icon-btn{
    width: 30px;
    border-radius: 50%;
  }
  .swipe-img{
    width: 100%;
    height: 100%;
  }
  .shops-box{
    display: flex;
    /*border-top: 1px solid #ccc;*/
    /*border-bottom: 1px solid #ccc;*/
  }
  .shops-box-box{
    flex: 1;
    /*border-right: 1px solid #ccc;*/
  }
  .shops-box-box:last-child{
    border-right: none;
  }
  select::-ms-expand { display: none; }
  .select-reset{
    width: 100%;
    border: none;
    outline: none;
    height: 44px;
    line-height: 44px;
    padding-left: 14px;
    padding-right: 26px;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    position: relative;
    background-color: #fff;
    background-image: url(./assets/img/select-down.png);
    background-repeat: no-repeat;
    background-position: calc(100% - 10px);
    background-size: 12px;
    color: #808080;
  }
  .margin-top-header{
    margin-top: 44px;
  }
</style>
