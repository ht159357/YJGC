<template>
  <div id="app">
    <header-nav @activepage="showIndexActive"></header-nav>
    <div id="index-app" v-if="!$store.state.showJsDetails && $store.state.showIndexs ">
      <!--轮播-->
      <div class="mint-swipe-container margin-top-header" style="height: 200px;">
        <mt-swipe :auto="2000" :prevent="true">
          <mt-swipe-item class="mint-swipe-item">
            <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-09-04/59acc55fac9ea.jpg'" class="swipe-img index-swipe-img">
          </mt-swipe-item>
          <mt-swipe-item class="mint-swipe-item">
            <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-18/5996b33598248.jpg'" class="swipe-img index-swipe-img">
          </mt-swipe-item>
          <mt-swipe-item class="mint-swipe-item">
            <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-09-05/59ae079009e5d.jpg'" class="swipe-img index-swipe-img">
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

    <jishi-detail class="margin-top-header" v-if="$store.state.showJsDetails"></jishi-detail>
    <project-detail class="margin-top-header" v-if="$store.state.showProjectDetails"></project-detail>
    <make-appointment class="margin-top-header" v-if="$store.state.showAppointment"></make-appointment>
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from './store/store'
  import {Swipe, SwipeItem} from 'mint-ui';
  import headerNav from "./components/header";
  import indexMain from './components/index-main';
  import jishiDetail from "./components/jishi-details";
  import projectDetail from "./components/project-details";
  import makeAppointment from "./components/make-appointment";

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
      name: 'app',
      components:{
          indexMain,
          headerNav,
          jishiDetail,
          projectDetail,
          makeAppointment
      },
      store,
      data(){
          return {
              loadingImg:require("./assets/img/ball-loading.png")
          }
      },
      methods: {
          showIndexActive(data){
              if( store.state.showIndexs ){
                  return;
              }
              store.state.showIndexs = true;
              store.state[store.state.curPage] = false;
              store.state.curPage = "";
              console.log(store.state);
          },
          jishiEvent(data){
              console.log(data);
              store.state.showIndexs = false;
              store.state[data.pageName] = data.showPage;
              store.state.curPage = data.pageName;
              console.log(store.state);
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
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .index-swipe-img[lazy=loading] {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    background: url("./assets/img/loading.svg") no-repeat center #ddd;
  }
</style>
