<template>
  <!--头部-->
  <mt-header class="header-backcolor" style="height: 44px;" fixed :title="title">
    <mt-button slot="left">
      <router-link to="/index">
        <img style="width: 22px;" src="./../assets/img/indexicon.png">
      </router-link>
    </mt-button>

    <mt-button slot="right">
      <router-link to="/myPage">
        <img class="header-icon-btn" src="./../assets/img/header-icon.jpg">
      </router-link>

    </mt-button>
  </mt-header>
</template>
<script>
  import Vue from 'vue';
  import { Header } from 'mint-ui';
  import store from './../store/store'

  Vue.component(Header.name, Header);
  export default {
      name:"header-nav",
      data(){
          return {
              userid: 1,
              title: "颜匠工场"
          }
      },
      store,
      methods:{

      }
  }
</script>
<style>
  .header-backcolor{
    background-color: #FB3453;
  }
  .router-link {
    text-decoration: none;
    color: inherit;
  }
  input.mint-radio-input:checked + .mint-radio-core {
    background-color: #fb3453;
    border-color: #fb3453;
  }
</style>
