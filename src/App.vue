<template>
  <div id="app">
    <header-nav></header-nav>
    <!--轮播-->
    <div class="mint-swipe-container">
      <mt-swipe :auto="0" :prevent="true">
        <mt-swipe-item class="mint-swipe-item">
          <img src="./assets/logo.png">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img src="./assets/logo.png">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img src="./assets/logo.png">
        </mt-swipe-item>
      </mt-swipe>
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
  html,body{
    margin: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .mint-swipe-container{
    margin-top: 46px;
    height: 170px;
  }
  .mint-swipe-item{
    background: #5a676f;
  }
  .header-icon-btn{
    width: 30px;
    border-radius: 50%;
  }
</style>
