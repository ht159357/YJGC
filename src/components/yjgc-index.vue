<template>
  <div class="yjgc-index-box">
    <div class="header-banner-box" :style="bannerStyle">
      <div class="header-option-box">
        <div class="header-position-box" @click="openAdrrPop">
          <img src="./../assets/img/index-position.png">
          <span class="header-address">上海市</span>
        </div>
        <div class="header-search-box">
          <input type="text" @keyup.enter="search" placeholder="请输入搜索内容" v-model="searchInfo">
        </div>
      </div>
      <!--轮播-->
      <mt-swipe :auto="3000" :prevent="true">
        <mt-swipe-item class="mint-swipe-item">
          <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-18/5996b33598248.jpg'" class="swipe-img index-swipe-img">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-09-05/59ae079009e5d.jpg'" class="swipe-img index-swipe-img">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--门店-->
    <div class="shop-nav">
      <mt-swipe :auto="0" :style="shopStyle,shopHeight" :continuous="false">
        <!--一页十个-->
        <mt-swipe-item class="mint-swipe-item">
          <div class="index-shop-box">
            <router-link to="/index?shopId=14" class="index-shop router-link" v-for="(item,index) in 10">
              <img v-lazy="require('./../assets/img/shop-'+ (index+1) +'.png')"><br>
              河西万达店
            </router-link>
          </div>
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <div class="index-shop-box">
            <div class="index-shop" v-for="(item,index) in 10">
              <img v-lazy="require('./../assets/img/shop-'+ (index+1) +'.png')"><br>
              河西万达店
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="yhk-box">
      <div class="yhk-one">
        <img v-lazy="require('./../assets/img/czyhk-1.png')">
      </div>
      <div class="yhk-one">
        <img v-lazy="require('./../assets/img/czyhk-1.png')">
      </div>
    </div>

    <div class="gd-box">
      <div class="gd-one" v-for="item in 10">
        <img v-lazy="require('./../assets/img/goods-1.png')">
        <p>高端大气上档次美甲</p>
        <span class="gd-money">&yen;268</span>
      </div>
    </div>


    <mt-popup
      v-model="addPop"
      popup-transition="popup-fade" style="width: 100%;height: 100%;overflow-y: scroll">
      <div class="index-back-box">
        <svg class="icon icon-right-arr" aria-hidden="true" style="float: left;margin-top: 3px;" @click="openAdrrPop">
          <use xlink:href="#icon-left-arr-gary"></use>
        </svg>
        选择地址
      </div>
      <div class="index-addr-title">
        当前定位地址
      </div>
      <div class="cur-addr-box">
        <span>上海市</span>
        <span style="color: #808080;">
          <svg class="icon icon-right-arr" aria-hidden="true">
          <use xlink:href="#icon-local"></use>
        </svg>重新定位
</span>
      </div>
      <div class="index-addr-title">
        已开通服务城市
      </div>
      <div class="city-list-box">
        <span class="city-one" v-for="item in 30" @click="choiesAdrr">上海市</span>
      </div>
    </mt-popup>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Swipe, SwipeItem } from 'mint-ui';
    import { Popup } from 'mint-ui';

    Vue.component(Popup.name, Popup);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
        name:"yjgc-index",
        data(){
            return {
                bannerStyle:{
                    "width":"100%",
                    "height":null,
                },
                shopStyle:{
                    "width":"100%",
                },
                searchInfo:null,
                addPop:false,
            }
        },
        methods:{
            search(){
                let self = this;
                alert(self.searchInfo);
            },
            openAdrrPop(){
                this.addPop = !this.addPop;
            },
            choiesAdrr(){
                this.addPop = !this.addPop;
            }
        },
        computed:{
            shopHeight(){
                let clientW = document.documentElement.clientWidth;
                let height = (clientW/5+12)*2+15;
                console.log( height )
                return 'height:'+ height +'px;';
            }
        },
        created(){
            //轮播图宽高为16:9
            let clientW = document.documentElement.clientWidth;
            this.bannerStyle.height = clientW/16*9+"px";
        }
    }
</script>
<style>
  .yjgc-index-box{
    position: relative;
  }
  .header-option-box{
    width: 100%;
    position: absolute;
    top: 6px;
    left: 0;
    z-index: 1;
    color: #fff;
    display: flex;
    align-items: center;
  }
  .header-position-box{
    width: 80px;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;
  }
  .header-address{
    width: 60px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 2px;
  }
  .header-position-box img{
    width: 12px;
    margin-left: 5px;
  }
  .header-search-box{
    flex: 1;
    text-align: left;
  }
  .header-search-box input{
    width: 90%;
    height: 24px;
    line-height: 24px;
    outline: none;
    border: none;
    border-radius: 20px;
    text-indent: 35px;
    background: url("./../assets/img/index-search.png") no-repeat left 15px center,#fff;
    background-size: 12px;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #b6b6b6;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #b6b6b6;
  }
  input:-ms-input-placeholder{
    color: #b6b6b6;
  }
  input::-webkit-input-placeholder{
    color: #b6b6b6;
  }
  .index-shop-box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    background: #fff;
    font-size: 12px;
    justify-content: space-around;
  }
  .index-shop{
    width: 20%;
    transform: scale(0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .index-shop img{
    width: 80%;
  }
  .shop-nav{
    margin-top: 6px;
    background: #fff;
  }
  .shop-nav .mint-swipe-item{
    background: #fff;
  }
  .shop-nav .mint-swipe-indicators{
    bottom: 5px;
  }
  .yhk-box{
    box-sizing: border-box;
    display: flex;
    margin-top: 6px;
    padding-left: 6px;
    padding-right: 6px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .yhk-one{
    width: 49%;
  }
  .yhk-box .yhk-one:first-child{
    margin-right: 6px;
  }
  .yhk-one img{
    width: 100%;
  }
  .gd-box{
    box-sizing: border-box;
    display: flex;
    margin-top: 2px;
    padding-left: 6px;
    padding-right: 6px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .gd-one{
    width: 49%;
    margin-bottom: 10px;
  }
  .gd-box .gd-one:nth-child(odd){
    margin-right: 6px;
  }
  .gd-one img{
    width: 100%;
  }
  .gd-one p{
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    margin: 0 auto 4px;
    text-align: left;
    font-weight: bold;
  }
  .gd-one .gd-money{
    display: inline-block;
    color: #e83751;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    font-weight: bold;
  }
  .index-back-box{
    padding: 10px;
  }
  .index-addr-title{
    text-align: left;
    background: #f5f5f5;
    font-size: 14px;
    padding: 4px 10px;
  }
  .cur-addr-box{
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
  }
  .city-list-box{
    text-align: left;
  }
  .city-one{
    width: 100%;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    display: inline-block;
    padding: 15px 10px;
  }
</style>
