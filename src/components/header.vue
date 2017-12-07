<template>
  <!--头部-->
  <mt-header class="header-backcolor" style="height: 44px;" fixed :title="title">
    <mt-button slot="left">
      <router-link to="/index">
        <img style="width: 22px;" src="./../assets/img/indexicon.png">
      </router-link>
    </mt-button>

    <mt-button slot="right">
      <router-link :to="$store.state.page[$store.state.curMyCenter]">
        <img class="header-icon-btn" v-lazy="userData.headUrl">
      </router-link>
    </mt-button>
  </mt-header>
</template>
<script>
  import Vue from 'vue';
  import { Header } from 'mint-ui';
  import store from './../store/store'
  import axios from 'axios';

  Vue.component(Header.name, Header);
  export default {
      name:"header-nav",
      data(){
          return {
              userid: 1,
              title: "颜匠工场",
              userData:{
                 headUrl:null,
              },
              ifload:false,
          }
      },
      store,
      methods:{

      },
      beforeCreate(){
          let self = this;
          axios.post(httpStr+"/artisan/findUserInfo",{
              openId:openId
          }).then((ret)=>{
              let data = ret.data;
              if( data.flag === 100 ){
                  self.userData = data.data;
                  self.ifload = true;
                  self.$emit("user-info",self.userData);
              }
          });
      }
  }
</script>
<style scoped>
  .header-icon-btn[lazy=loading] {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
    background-size: 50%;
  }
  /*.header-icon-btn[lazy=error] {*/
    /*width: 30px;*/
    /*height: 30px;*/
    /*margin: 0 auto;*/
    /*background: url("./../assets/img/load-error.svg") no-repeat center #ddd;*/
  /*}*/
</style>
<style>
  header.header-backcolor{
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
  select::-ms-expand { display: none; }
  .select-reset-defult{
    width: 100%;
    border: none;
    outline: none;
    height: 44px;
    border-radius: 0;
    line-height: 44px;
    padding-left: 14px;
    padding-right: 26px;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    position: relative;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: calc(100% - 10px);
    background-size: 12px;
    color: #808080;
  }
</style>
