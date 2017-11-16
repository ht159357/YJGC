<template>
  <div class="project-page">
    <!--轮播-->
    <div class="mint-swipe-container">
      <mt-swipe :auto="0" :prevent="true" style="height: 250px;">
        <mt-swipe-item class="mint-swipe-item">
          <img class="swipe-img pro-swipe-img" v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-31/59a787d8c270c.jpg'">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img class="swipe-img pro-swipe-img" v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-31/59a7d5b9d439b.jpg'">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img class="swipe-img pro-swipe-img" v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-31/59a778927ab79.jpg'">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--价格-->
    <div class="pro-price-box">
      <div class="pro-price-left">
        <div class="pro-name">
          猫眼美甲
        </div>
        <div class="pro-time">
          <span class="pro-title">耗时</span>
          <span class="pro-value">60分</span>
          <span class="pro-title">保持</span>
          <span class="pro-value">20天</span>
        </div>
      </div>
      <div class="pro-price-right">
        <div class="pro-price">
          <div class="pro-price-num">&yen;39899.11</div>
          <div class="pro-price-title">价格</div>
        </div>
      </div>
    </div>

    <!--好评率-->
    <div class="goods-num-box">
      <mt-cell title="好评度 100.00%" style="color: rgb(185,116,87);font-weight: bold;">
        <span style="font-size: 12px;">共 100 个消费评价</span>
        <img slot="icon" src="./../assets/img/damuzhi.png" width="16">
      </mt-cell>
    </div>

    <div class="pro-options" v-for="item in 5">
      <div class="pro-options-title">
        是否卸甲服务 （简单30分钟0.01元，日系60分钟0.01元）
      </div>
      <div class="pro-options-box">
        <div @click="btnSwitch($event)" class="pro-options-btn options-btn-active">简单卸甲</div>
        <div @click="btnSwitch($event)" class="pro-options-btn">日系卸甲</div>
        <div @click="btnSwitch($event)" class="pro-options-btn">否</div>
      </div>
    </div>
    <div class="pro-details">
      <img class="pro-details-img" src="./../assets/img/attention.jpg" alt="">
    </div>
    <!--时间|匠师   shopType = 1-->
    <div class="pro-bottom-box" v-if="$store.state.shopType == 1">
      <div class="pro-choise-date" @click="showAppointmentPage(1)">
        <img src="./../assets/img/choise-date.png" alt="">
        选时间
      </div>
      <div class="pro-choise-jishi" @click="showAppointmentPage(2)">
        <img src="./../assets/img/choise-jishi.png" alt="">
        选匠师
      </div>
    </div>
    <!--款式|时间   shopType = 2-->
    <div class="pro-bottom-box" v-if="$store.state.shopType == 2">
      <div class="pro-choise-date online-type" @click="backJsDetails()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star1"></use>
        </svg>
        在线选款式
      </div>
      <div class="pro-choise-jishi online-date" @click="showAppointmentPage(3)">
        选时间
      </div>
    </div>
    <!--喜欢|店铺|时间   shopType = 3-->
    <div class="pro-bottom-box" v-if="$store.state.shopType == 3">
      <div class="pro-choise-date shop-like-box">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-like-shop"></use>
          </svg>
          喜欢
        </div>
        <div @click="backJsDetails()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shop"></use>
          </svg>
          店铺
        </div>
      </div>
      <div class="pro-choise-jishi online-date" @click="showAppointmentPage(3)">
        选时间
      </div>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue';
    import { Cell } from 'mint-ui';
    import store from "./../store/store";

    Vue.component(Cell.name, Cell);
    export default {
        name: 'project-detail',
        store,
        data(){
            return {

            }
        },
        methods:{
            btnSwitch(event){
                let self = event.target;
                let parentEle = event.target.parentNode;
                let childEles = parentEle.getElementsByClassName("pro-options-btn");
                for(let i=0;i<childEles.length;i++){
                    if( self == childEles[i] ){
                        childEles[i].classList.add("options-btn-active");
                    }else if( self !== childEles[i] ){
                      childEles[i].classList.remove("options-btn-active");
                    }
                }
            },
            //type:1 选时间 通过日期和具体时间选择匠师预约
            //type:2 选匠师 通过日期选择匠师的当天预约时间
            //type:3 已选匠师 通过匠师选择具体日期和时间
            showAppointmentPage( type ){
                store.state.yyType = type;
                var pagename = "showAppointment";
                store.state.curPage = pagename;
                store.state[pagename] = true;
                store.state.showIndexs = false;
                for( let i=0;i<store.state.pageList.length;i++ ){
                  if( store.state.pageList[i] != pagename ){
                    store.state[store.state.pageList[i]] = false;
                  }
                }
            },
            backJsDetails(){
                var pagename = "showJsDetails";
                store.state.curPage = pagename;
                store.state[pagename] = true;
                store.state.showIndexs = false;
                for( let i=0;i<store.state.pageList.length;i++ ){
                  if( store.state.pageList[i] != pagename ){
                    store.state[store.state.pageList[i]] = false;
                  }
                }
            }
        }
    }
</script>
<style scoped>
  [lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
</style>
<style>
  .project-page{
    background: #EFEEEE;
    padding-bottom: 50px;
  }
  .pro-price-box{
    margin: 10px;
    background: #fff;
    display: flex;
    text-align: left;
    border-radius: 5px;
    padding: 10px;
  }
  .pro-price-left{
    flex: 0 0 70%;
  }
  .pro-price-right{
    flex: 0 0 30%;
  }
  .pro-name{
    font-size: 18px;
    font-weight: bold;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .pro-time{
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
  }
  .pro-title{
    color: #fff;
    background: #4C9CFE;
    padding: 3px 5px;
    border-radius: 3px;
    margin-left: 10px;
  }
  .pro-value{
    color: #5791CD;
  }
  .pro-time .pro-title:first-child{
    margin-left: 0;
  }
  .pro-options{
    background: #fff;
    padding: 10px 10px 0;
  }
  .pro-price{
    width: 90%;
    max-width: 90px;
    margin: 0 auto;
    border: 1px solid #E71B4F;
    border-radius: 4px;
    text-align: center;
    position: relative;
  }
  .pro-price:before{
    content: '';
    width: 5px;
    height: 5px;
    background: #E71B4F;
    border-radius: 50%;
    position: absolute;
    top: 5%;
    left: 5%;
  }
  .pro-price:after{
    content: '';
    width: 5px;
    height: 5px;
    background: #E71B4F;
    border-radius: 50%;
    position: absolute;
    top: 5%;
    right: 5%;
  }
  .pro-price-num{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 4px;
    padding: 14px 0 8px;
    background: #FEE2E7;
    font-size: 16px;
    font-weight: bold;
    color: #E71B4F;
    border-bottom: 1px solid #E71B4F;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .pro-price-title{
    border-radius: 4px;
    padding: 2px 0;
    font-size: 16px;
    color: #E71B4F;
  }
  .pro-options-title{
    text-align: left;
    position: relative;
    font-size: 14px;
    text-indent: 20px;
  }
  .pro-options-title:before{
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 2px;
    left: 2px;
    border: 2px solid rgb(252,51,83);
    background: #fff;
    border-radius: 50%;
  }
  .pro-options-box{
    text-align: left;
  }
  .pro-options-btn{
    display: inline-block;
    color: #5D5C5C;
    height: 30px;
    margin: 10px 0 0 15px;
    line-height: 30px;
    text-align: center;
    width: 75px;
    border-radius: 5px;
    border: 1px solid #b1b1b1;
  }
  .options-btn-active{
    background: #FC3353;
    color: #fff;
    border: 1px solid rgb(252,51,83);
  }
  .pro-details{
    background: #fff;
    padding-top: 30px;
  }
  .pro-details-img{
    width: 100%;
  }
  .pro-bottom-box{
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #2C2C2C;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }
  .pro-bottom-box img{
    width: 18px;
    vertical-align: -4px;
  }
  .pro-choise-date{
    flex: 1;
    background: #2C2C2C;
    height: 48px;
    line-height: 48px;
  }
  .pro-choise-jishi{
    flex: 1;
    background: #FC3353;
    height: 48px;
    line-height: 48px;
  }
  .goods-num-box{
    text-align: left;
    margin-bottom: 10px;
  }
  .online-type,.online-date{
    font-size: 14px;
  }
  .shop-like-box{
    font-size: 14px;
    display: flex;
    background: #fff;
    color: #666;
  }
  .shop-like-box>div{
    flex: 0 0 50%;
  }
</style>
