<template>
  <!--头部-->
  <mt-header class="header-backcolor" style="height: 44px;" fixed :title="title">
    <mt-button slot="left">
      <router-link to="/yjgcIndex">
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
  .yj-btn{
    display: inline-block;
    border-radius: 3px;
    padding: 4px 12px;
    font-size: 14px;
  }
  img[lazy=loading] {
    width: 100%;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
    background-size: 50%;
  }
  p,img{
    margin: 0;
  }
  svg.icon.icon-bank{
    font-size: 30px;
    margin-right: 10px;
  }
  div.yh-pop-box{
    text-align: center;
    margin: 10px;
  }
  div.full-model{
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  div.yjgc-cell-one{
    display: flex;
    align-items: center;
  }
  div.yjgc-cell-header{
    width: 60px;
    box-sizing: border-box;
    padding: 10px;
  }
  div.yjgc-cell-header>img{
    width: 100%;
  }
  div.yjgc-cell-info{
    flex: 1;
    text-align: left;
    box-sizing: border-box;
  }
  div.yjgc-cell-info .yjgc-cell-detail{
    font-weight: bold;
  }
  div.yjgc-cell-info .yjgc-cell-time{
    font-size: 14px;
  }
  div.yjgc-cell-last{
    width: 100px;
    box-sizing: border-box;
    text-align: right;
    padding-right: 10px;
  }
</style>
