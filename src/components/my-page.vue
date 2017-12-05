<template>
  <div class="my-Page-box">
    <div class="my-header-box" :style="headerBackClass">
      <div class="my-header-icon">
        <img v-lazy="ifload ? userinfo.headUrl : null">
      </div>
      <p class="my-name" :class="[
          {'level-color-1':ifload ? userinfo.beautyFans.vipType===0 : 0},
          {'level-color-2':ifload ? userinfo.beautyFans.vipType===1 : 0},
          {'level-color-3':ifload ? userinfo.beautyFans.vipType===2 : 0},
          {'level-color-4':ifload ? userinfo.beautyFans.vipType===3 : 0},
          {'level-color-5':ifload ? userinfo.beautyFans.vipType===4 : 0},]">{{ userinfo.nickname }}</p>
      <div class="my-level-box" :class="[
          {'level-1':ifload ? userinfo.beautyFans.vipType===0 : 0},
          {'level-2':ifload ? userinfo.beautyFans.vipType===1 : 0},
          {'level-3':ifload ? userinfo.beautyFans.vipType===2 : 0},
          {'level-4':ifload ? userinfo.beautyFans.vipType===3 : 0},
          {'level-5':ifload ? userinfo.beautyFans.vipType===4 : 0},]">
        <div class="my-jd-box">
          <div class="my-jd-inner" :style="{width : userExpWidth + '%'}">{{userExp}}/{{userMaxExp}}</div>
        </div>
      </div>
      <p class="my-jd-ch" :class="[
          {'level-color-1':userLevel==1},
          {'level-color-2':userLevel==2},
          {'level-color-3':userLevel==3},
          {'level-color-4':userLevel==4},
          {'level-color-5':userLevel==5},]">颜粉</p>
    </div>
    <div class="my-list-box">

      <mt-cell to="/myYanbi" class="my-cell-list" title="我的颜币" isLink="">
        <img slot="icon" src="../assets/img/money.png" class="my-cell-icon">
        <span class="my-cell-yen">&yen;{{ifload ? userinfo.beautyFans.fansNum : null}}</span>
      </mt-cell>
      <mt-cell class="my-cell-list" title="我的卡券" isLink="">
        <img slot="icon" src="../assets/img/myfans.jpg" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="myYy" class="my-cell-list" title="我的预约" isLink="">
        <img slot="icon" src="../assets/img/yuyue.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell class="my-cell-list" title="我的优惠券" isLink="">
        <img slot="icon" src="../assets/img/yhq.jpg" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/makeOrder" class="my-cell-list" title="开具发票" isLink="">
        <img slot="icon" src="../assets/img/invo.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell class="my-cell-list" title="我的消息" isLink="">
        <img slot="icon" src="../assets/img/message.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="myLike" class="my-cell-list" title="我的喜欢" isLink="">
        <img slot="icon" src="../assets/img/renovation.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/myJiangshi" class="my-cell-list" title="我的匠师" isLink="">
        <img slot="icon" src="../assets/img/change_jiang.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/question" class="my-cell-list" title="常见问题" isLink="">
        <img slot="icon" src="../assets/img/problem.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/dzPage" class="my-cell-list" title="店主中心" isLink="">
        <img slot="icon" src="../assets/img/dzzx.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/myShare" class="my-cell-list" title="我要分享" isLink="">
        <img slot="icon" src="../assets/img/share.png" class="my-cell-icon">
      </mt-cell>

    </div>
  </div>
</template>
<script>
    import axios from "axios";
    export default {
        name:"my-page",
        props:["userinfo"],
        data(){
            return {
                userData:null,
                ifload:false,
                userLevel: 2,
                userMaxExp: 1000,//满经验
                userExp: 800,//当前经验
                userExpWidth:null,
                headerBackClass:{
                    "background": "url("+require('./../assets/img/sharecenter-heade-bg.png')+") no-repeat 50%",
                    "background-size": "100%"
                }
            }
        },
        watch:{
            userinfo(nval,oval){
                this.ifload = true;
                return nval;
            }
        },
        beforeMount(){
            this.userExpWidth = this.userExp / this.userMaxExp * 100;
        }
    }
</script>
<style scoped>
  .my-header-icon img[lazy=loading]{
    width: 80px;
    background:url("./../assets/img/loading.svg") no-repeat center,#ddd;
    background-size: 32px;
  }
  .my-header-icon img[lazy=error]{
    width: 80px;
    background:url("./../assets/img/load-error.svg") no-repeat center,#ddd;
    background-size: 32px;
  }
</style>
<style>
  .my-Page-box{
    background: #fff;
  }
  .my-header-box{
    padding-bottom: 15px;
  }
  .my-header-icon{
    width: 90px;
    margin: 0 auto;
    padding-top: 10px;
    position: relative;
  }
  .my-header-icon:after{
    content: "";
    width: 20px;
    height: 20px;
    background: url("./../assets/img/v.png");
    background-size: 100%;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .my-header-icon img{
    width: 80px;
    border-radius: 50%;
    border: 5px solid #EC6F82;
  }
  .my-name{
    margin: 3px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  .my-level-box{
    width: 100px;
    height: 24px;
    line-height: 24px;
    margin: 0 auto;
    color: #fff;
    background-repeat: no-repeat;
    background-size: 24px;
    padding-left: 24px;
    display: flex;
    align-items: center;
  }
  .level-1{
    background: url("./../assets/img/level-1.png");
    background-repeat: no-repeat;
    background-size: 24px;
  }
  .level-color-1{
    color: #FFDBDB!important;
  }
  .level-2{
    background: url("./../assets/img/level-2.png");
    background-repeat: no-repeat;
    background-size: 24px;
  }
  .level-2 .my-jd-box{
    border: 1px solid #E0DFDF;
  }
  .level-2 .my-jd-inner{
    background: #F7F5F5;
  }
  .level-color-2{
    color: #F7F5F5!important;
  }
  .level-3{
    background: url("./../assets/img/level-3.png");
    background-repeat: no-repeat;
    background-size: 24px;
  }
  .level-3 .my-jd-box{
    border: 1px solid #FFCB67;
  }
  .level-3 .my-jd-inner{
    background: #FFAD39;
  }
  .level-color-3{
    color: #FFAD39!important;
  }
  .level-5{
    background: url("./../assets/img/level-4.png");
    background-repeat: no-repeat;
    background-size: 24px;
  }
  .level-5 .my-jd-box{
    border: 1px solid #8019C3;
  }
  .level-5 .my-jd-inner{
    background: #8019C3;
    color: #fff;
  }
  .level-color-5{
    color: #8019C3!important;
  }
  .level-4{
    background: url("./../assets/img/level-5.png") #FB3453;
    background-repeat: no-repeat;
    background-size: 24px;
  }
  .level-4 .my-jd-box{
    border: 1px solid #484748;
  }
  .level-4 .my-jd-inner{
    background: #1B1B1B;
    color: #fff;
  }
  .level-color-4{
    color: #1B1B1B!important;
  }
  .my-jd-box{
    width: 80px;
    margin-left: 5px;
    height: 14px;
    line-height: 14px;
    color: #000;
    border: 1px solid #FFDBDB;
    border-radius: 15px;
    overflow: hidden;
  }
  .my-jd-inner{
    width: 0;
    float: left;
    font-size: 10px;
    height: 14px;
    line-height: 14px;
    border-radius: 15px;
    background: #FEABAB;
    text-align: center;
  }
  .my-jd-ch{
    padding-top: 5px;
    margin: 0;
    font-size: 12px;
    color: #fff;
  }
  .my-list-box{
    text-align: left;
  }
  .my-cell-list{
    color: #000;
    font-size: 14px;
    /*border-bottom: 1px solid #E5E5E5;*/
  }
  .my-cell-icon{
    width: 22px;
    height: 22px;
  }
  div.mint-cell-title{
    font-size: 14px;
  }
  .my-cell-yen{
    font-size: 14px;
  }
  </style>
