<template>
  <div id="app">
    <header-nav></header-nav>
    <!--轮播-->
    <div class="mint-swipe-container">
      <mt-swipe :auto="0" :prevent="true">
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

    <index-main></index-main>
    <div class="main-body">

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';
  import headerNav from "./components/header"
  import indexMain from './components/index-main';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
      name: 'app',
      components:{
          indexMain,
          headerNav
      },
      methods: {

      }
  }
</script>

<style>
  @import "./assets/css/style.css";
  html,body{
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .mint-swipe-container{
    margin-top: 44px;
    height: 200px;
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
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .shops-box-box{
    flex: 1;
    border-right: 1px solid #ccc;
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
</style>
