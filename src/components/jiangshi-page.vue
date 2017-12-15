<template>
  <div class="my-Page-box">
    <div class="my-header-box jishi-header-box" :style="headerBackClass">
      <div class="my-header-icon">
        <img src="./../assets/img/header-icon.jpg">
      </div>
      <p class="my-name" :class="[
          {'level-color-1':userLevel==1},
          {'level-color-2':userLevel==2},
          {'level-color-3':userLevel==3},
          {'level-color-4':userLevel==4},
          {'level-color-5':userLevel==5},]">欧阳娜娜</p>

    </div>
    <div class="my-Page-nav-box">
      <div class="jishi-page-nav-box">
        <div class="jishi-myorder-box">
          <img src="./../assets/img/myorder.png" alt="" style="width: 78px;height: 16px;">
          <p class="jishi-myorder-title">你已经有6个预约护理项目</p>
          <router-link class="jishi-myorder-btn router-link" to="jsMyYy">
            查看
          </router-link>
        </div>
        <router-link to="/jsMyFans" class="jishi-nav-one router-link">
          <img src="./../assets/img/vjb-nav-01.png" alt="">
          <p class="jishi-nav-title">我的颜粉</p>
        </router-link>
        <router-link to="/jsMyPb" class="jishi-nav-one router-link">
          <img src="./../assets/img/vjb-nav-02.png" alt="">
          <p class="jishi-nav-title router-link">我的排班</p>
        </router-link>
        <router-link to="/jsMyPf" class="jishi-nav-one router-link">
          <img src="./../assets/img/vjb-nav-03.png" alt="">
          <p class="jishi-nav-title router-link">我的评分</p>
        </router-link>
        <router-link to="/jsMyStyle" class="jishi-nav-one router-link">
          <img src="./../assets/img/vjb-nav-04.png" alt="">
          <p class="jishi-nav-title router-link">款式管理</p>
        </router-link>
      </div>
    </div>
    <div class="my-list-box">
      <div>
        <mt-cell to="/question" class="my-cell-list" title="常见问题" isLink="">
          <img slot="icon" src="../assets/img/problem.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/jsMyYbtx" class="my-cell-list" title="我要提现" isLink="">
          <img slot="icon" src="../assets/img/change_jiang.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell class="my-cell-list" title="装修店铺" isLink="">
          <img slot="icon" src="../assets/img/renovation.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/myYanbi" class="my-cell-list" title="我的颜币" isLink="">
          <img slot="icon" src="../assets/img/money.png" class="my-cell-icon">
          <span class="my-cell-yen">&yen;999</span>
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/jsBuyYhq" class="my-cell-list" title="购买优惠券" isLink="">
          <img slot="icon" src="../assets/img/yhq.jpg" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/jsMyKh" class="my-cell-list" title="我的客户" isLink="">
          <img slot="icon" src="../assets/img/mykh.jpg" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell class="my-cell-list" title="我的优惠券" isLink="">
          <img slot="icon" src="../assets/img/yhq.jpg" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell class="my-cell-list" title="我的收入" isLink="">
          <img slot="icon" src="../assets/img/mywage.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell class="my-cell-list" title="消息推送" isLink="">
          <img slot="icon" src="../assets/img/xxts.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell class="my-cell-list" title="教学直播" isLink="">
          <img slot="icon" src="../assets/img/20170720145927.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell class="my-cell-list" title="物料商城" isLink="">
          <img slot="icon" src="../assets/img/yjbb.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div @click="goCenter(0)">
        <mt-cell class="my-cell-list" title="个人中心" isLink="">
          <img slot="icon" src="../assets/img/yuyue.png" class="my-cell-icon">
        </mt-cell>
      </div>

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
        methods:{
            goCenter(flag){
                this.$store.state.curMyCenter = flag;
                //0:颜粉端，1:匠师端，2:店长端
                this.$router.push({
                    path:this.$store.state.page[flag]
                });
            }
        },
        beforeMount(){
            this.userExpWidth = this.userExp / this.userMaxExp * 100;
        }
    }
</script>
<style scoped>
  .my-Page-box{
    background: none;
  }
</style>
<style>
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
    background: #fff;
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
  .jishi-page-nav-box{
    display: flex;
    background: #fff;
    padding: 50px 5% 0;
    margin: 0 auto 15px;
    position: relative;
  }
  .jishi-myorder-box{
    position: absolute;
    top: -36px;
    left: 5%;
    width: 90%;
    box-sizing: border-box;
    border: 1px solid #F5EFEF;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 204, 204, .5);
    padding: 10px 15px;
    text-align: left;
  }
  .jishi-myorder-title{
    color: #BCBCBC;
    font-size: 12px;
    margin: 10px 0 5px;
  }
  .jishi-myorder-btn{
    border: 1px solid #FB3453;
    color: #FB3453;
    font-size: 14px;
    display: inline-block;
    padding: 4px 21px;
    border-radius: 3px;
    position: absolute;
    right: 15px;
    top: 20px;
  }
  .my-header-box.jishi-header-box{
    padding-bottom: 50px;
  }
  .jishi-nav-one{
    flex: 1;
  }
  .jishi-nav-one img{
    width: 70%;
    margin-top: 10px;
  }
  .jishi-nav-title{
    display: inline-block;
    font-size: 14px;
    margin: 5px 0 10px;
  }
  .my-Page-box .my-cell-list .mint-cell-wrapper{
    background-image: none;
  }
  .my-Page-box .my-cell-list.mint-cell:last-child{
    background-image: none;
  }
  .my-Page-box .my-list-box>div{
    border-bottom: 1px solid #ddd;
    margin-left: 10px;
  }
  .my-Page-box .my-cell-list div.mint-cell-wrapper{
    padding-left: 2px;
  }
  </style>
