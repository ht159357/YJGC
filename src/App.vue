<template>
  <div id="app" v-cloak>
    <header-nav></header-nav>
    <router-view class="margin-top-header"></router-view>
    <!--<jishi-detail class="margin-top-header" v-if="$store.state.showJsDetails"></jishi-detail>-->
    <!--<project-detail class="margin-top-header" v-if="$store.state.showProjectDetails"></project-detail>-->
    <!--<make-appointment class="margin-top-header" v-if="$store.state.showAppointment"></make-appointment>-->
    <!--<yy-success class="margin-top-header" v-if="$store.state.showYySuccess"></yy-success>-->
    <!--<my-page class="margin-top-header" v-if="$store.state.showMyPage"></my-page>-->
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from './store/store'
  import {Swipe, SwipeItem} from 'mint-ui';
  import headerNav from "./components/header";

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
      name: 'app',
      components:{
          headerNav
      },
      store,
      data(){
          return {
              loadingImg:require("./assets/img/ball-loading.png")
          }
      },
      methods: {

      }
  }
</script>

<style>
  @import "./assets/css/style.css";
  html,body{
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    background: #F7F5F5;
  }
  [v-cloak] {
    display: none;
  }
  .router-link{
    text-decoration: none;
    color: inherit;
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
  .icon{
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
