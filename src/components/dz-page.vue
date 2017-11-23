<template>
  <div class="my-Page-box">
    <div class="my-header-box" :style="headerBackClass">
      <div class="my-header-icon">
        <img src="./../assets/img/header-icon.jpg">
      </div>
      <p class="my-name" :class="[
          {'level-color-1':userLevel==1},
          {'level-color-2':userLevel==2},
          {'level-color-3':userLevel==3},
          {'level-color-4':userLevel==4},
          {'level-color-5':userLevel==5},]">欧阳娜娜</p>
      <select class="select-reset dz-select">
        <option value="">江宁万达店</option>
      </select>
    </div>
    <div class="my-list-box">

      <mt-cell class="my-cell-list" title="创客排名" isLink="">
        <img slot="icon" src="../assets/img/money.png" class="my-cell-icon">
        <span class="my-cell-yen">&yen;1.6</span>
      </mt-cell>
      <mt-cell class="my-cell-list" title="店铺订单" isLink="">
        <img slot="icon" src="../assets/img/myfans.jpg" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="myYy" class="my-cell-list" title="我的预约">
        <img slot="icon" src="../assets/img/yuyue.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell class="my-cell-list" title="我的优惠券" isLink="">
        <img slot="icon" src="../assets/img/yhq.jpg" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/makeOrder" class="my-cell-list" title="开具发票">
        <img slot="icon" src="../assets/img/invo.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell class="my-cell-list" title="我的消息" isLink="">
        <img slot="icon" src="../assets/img/message.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="myLike" class="my-cell-list" title="我的喜欢">
        <img slot="icon" src="../assets/img/renovation.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/myJiangshi" class="my-cell-list" title="我的匠师">
        <img slot="icon" src="../assets/img/change_jiang.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/question" class="my-cell-list" title="常见问题">
        <img slot="icon" src="../assets/img/problem.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="" class="my-cell-list" title="店主中心">
        <img slot="icon" src="../assets/img/dzzx.png" class="my-cell-icon">
      </mt-cell>
      <mt-cell to="/myShare" class="my-cell-list" title="我要分享">
        <img slot="icon" src="../assets/img/share.png" class="my-cell-icon">
      </mt-cell>

    </div>
  </div>
</template>
<script>
    export default {
        name:"my-page",
        data(){
            return {
                userLevel: 1,
                userMaxExp: 1000,
                userExp: 800,
                userExpWidth:null,
                headerBackClass:{
                    "background": "url("+require('./../assets/img/sharecenter-heade-bg.png')+") no-repeat 50%",
                    "background-size": "100%"
                }
            }
        },
        beforeMount(){
            this.userExpWidth = this.userExp / this.userMaxExp * 100;
        }
    }
</script>
<style scoped="">
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
  .select-reset.dz-select{
    width: auto;
    padding: 6px 15px;
    height: auto;
    line-height: normal;
    background: #fff;
    border: 1px solid red !important;
    border-radius: 20px;
    margin-top: 15px;
  }
  </style>
