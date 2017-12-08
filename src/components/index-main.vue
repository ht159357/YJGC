<template>
  <div class="index-main-nav">
    <!--轮播-->
    <div class="mint-swipe-container" style="height: 200px;">
      <mt-swipe :auto="0" :prevent="true">
        <mt-swipe-item class="mint-swipe-item">
          <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-09-04/59acc55fac9ea.jpg'" class="swipe-img index-swipe-img">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-18/5996b33598248.jpg'" class="swipe-img index-swipe-img">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img v-lazy="'http://wx.yanjianggongchang.com/Uploads/Picture/2017-09-05/59ae079009e5d.jpg'" class="swipe-img index-swipe-img">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--省市店-->
    <!--
    <div class="shops-box">
      <div class="shops-box-box">
        <select class="select-reset" v-model="provinceIndex" name="province" @change="setCity">
          <option :value="index" v-for="(item,index) in provinceList">{{item.name}}</option>
        </select>
      </div>
      <div class="shops-box-box">
        <select class="select-reset" name="city" v-model="cityId" @change="setShop">
          <option :value="item.id" v-for="item in cityList">{{item.name}}</option>
        </select>
      </div>
      <div class="shops-box-box">
        <select class="select-reset" name="city" v-model="shopId" @change="setShopInfo">
          <option :value="item.storefrontId" v-for="item in shopList">{{item.storefrontName}}</option>
        </select>
      </div>
    </div>
    -->

    <div class="index-nav-box">
      <div class="index-nav-tab" data-nav="1" @click="activePage($event)" :class="[{ 'index-nav-tab-active index-nav-tab-active1': curNav == 1 } ]">
        <span class="index-nav-tab-title">
          按匠师
        </span>
      </div>
      <div class="index-nav-tab" data-nav="2" @click="activePage($event)" :class="[{ 'index-nav-tab-active index-nav-tab-active2': curNav == 2 } ]">
        <span class="index-nav-tab-title">按项目</span>
      </div>
    </div>
    <div class="index-nav-page" v-show="curNav==1" v-loading="mLoading"
         element-loading-text="加载中...">
      <div class="index-page-box">
        <div class="no-data-index" v-if="ifloading && shopInfo.artisanList.length === 0 && !mLoading">
          <img src="./../assets/img/no-data.png" alt="">
        </div>
        <!--单一技师-->
        <router-link :to="'/jiangshi/'+item.artisanId" class="index-js-info"
                     v-if="ifloading"
                     v-for="(item,index) in shopInfo.artisanList"
                     @click="showJishiDetails(item,'showJsDetails')"
                     v-show="!mLoading">
          <!--头像-->
          <!--测试时头像文件-->
          <div class="index-img-box">
            <img class="index-js-img" v-lazy="ifloading ? shopInfo.artisanImg : ''" alt="">
          </div>
          <!--正式的头像为网络路径-->
          <!--<div class="index-img-box">-->
            <!--<img class="index-js-img" v-lazy="item.artisanImg" alt="">-->
          <!--</div>-->
          <!--技师信息-->
          <div class="index-info-box">
            <div class="yj-cell">
              <span class="yj-name">{{item.stageName}}</span>
              <span class="yj-work">{{item.work_types}}</span>
            </div>
            <div class="yj-cell">
              <span class="yj-workd yj-elic">{{item.work_goods}}</span>
            </div>
            <div class="yj-cell yj-star-box">
              <!--&lt;!&ndash;星星&ndash;&gt;-->
              <!--<svg class="icon" aria-hidden="true" v-for="item in 5">-->
                <!--<use xlink:href="#icon-star"></use>-->
              <!--</svg>-->
              <!--&lt;!&ndash;奖杯&ndash;&gt;-->
              <!--<svg class="icon" aria-hidden="true">-->
                <!--<use xlink:href="#icon-jiangbei"></use>-->
              <!--</svg>-->
              <el-rate v-model="item.evaluate / 2" disabled disabled-void-color="#ccc" show-text></el-rate>
            </div>
            <!--状态-->
            <div class="yj-cell">
              <span class="yj-state" v-if="item.appointment === 0">
                今天可约
              </span>
              <span class="yj-state" v-else>
                明日可约
              </span>
              <!--<span class="yj-state">-->
                <!--店铺优惠卷-->
              <!--</span>-->
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="index-nav-page" v-show="curNav==2" v-loading="mLoading"
         element-loading-text="加载中...">
      <div class="index-page-box">
        <div class="no-data-index" v-if="shopInfo.goodsList.length === 0 && !mLoading">
          <img src="./../assets/img/no-data.png" alt="">
        </div>
        <!--单个类型项目-->
        <div class="xm-box" v-for="item in shopInfo.goodsList">
          <div class="xm-header">
            <div class="xm-header-border">
              <span class="xm-title">{{ item.classifyName }}</span>
            </div>
          </div>
          <div class="xm-one-box">
            <!--'/project/:shopId/:goodsId/:shopType'-->
            <router-link v-for="goodinfo in item.goods" :to="'/project/'+ goodinfo.storefrontId +'/'+goodinfo.goodsId+'/'+1" class="xm-info">
              <!--<img v-lazy='require("./../assets/img/nav-1.jpg")'>-->
              <img class="xm-info-img" v-lazy='goodinfo.marketPrice'>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import store from './../store/store';
  import Vue from 'vue';
  import { Rate } from 'element-ui';
  import { Loading } from 'element-ui';

  Vue.use(Rate);
  Vue.use(Loading);
  export default {
      name:'index-main',
      data(){
          return {
              mLoading: false,
              curNav: 1,
              provinceList:null,
              cityList:null,
              provinceIndex:0,
              cityId:null,
              shopList:null,
              shopId:this.$route.query.shopId,
              shopInfo:{
                  advertisementList:[],
                  artisanList:[],
                  goodsList:[]
              },
              ifloading:false,
          }
      },
      store,
      methods:{
          activePage(event){//切换page
              var self = event.currentTarget;
              this.curNav = self.getAttribute("data-nav");
          },
//          setCity(){//获取市列表
//              let self = this;
//              self.cityList = self.provinceList[self.provinceIndex].citys;
//              self.cityId = self.provinceList[self.provinceIndex].citys[0].id;
//              self.setShop();
//          },
//          setShop(){//获取店铺列表
//              let self = this;
//              axios.post(httpStr+"/artisan/queryStorefrontByRegion",{
//                  territoryId: self.cityId
//              }).then(function(ret){
//                  let data = ret.data;
//                  if( data.flag === 100 ){
//                      self.shopList = data.data;
//                      self.shopId = self.shopList[0].storefrontId;
//                      self.setShopInfo();
//                  }
//              })
//          },
          setShopInfo(){//获取店铺信息
              let self = this;
              self.mLoading = true;
              axios.post(httpStr+"/artisan/queryStorefrontInfo",{
                  storefrontId: self.shopId
              }).then(function(ret){
                  let data = ret.data;
                  if( data.flag === 100 ){
                      self.shopInfo = data.data;
                      setTimeout(function(){
                          self.mLoading = false;
                      },100)
                  }
              })
          },
      },
      mounted(){

      },
      created(){
          let self = this;
          axios({
              method:"post",
              url: httpStr + "/artisan/queryRegion"
          }).then(function(ret){
              if( ret.data.flag === 100 ){
                  self.provinceList = ret.data.data;
//                  self.setCity();
                  self.setShopInfo();
                  self.ifloading = true;
              }
          })
      }
  }
</script>
<style scoped>
  [lazy=loading] {
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  [lazy=error] {
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/load-error.svg") no-repeat center #ddd;
  }
  .xm-info-img[lazy=error] {
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/load-error.svg") no-repeat center #ddd;
    background-size: 32px;
  }
  .index-js-img[lazy=error] {
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/load-error.svg") no-repeat center #ddd;
    background-size: 32px;
  }
</style>
<style>
  .index-main-nav{
    background: #eee;
  }
  .index-nav-box{
    display: flex;
    margin-top: 10px;
  }
  .index-nav-tab{
    flex: 1;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .index-nav-tab-active1:after{
    content: "";
    width: 15px;
    height: 40px;
    background: #fff;
    position: absolute;
    top: 2px;
    right: -5px;
    transform: rotate(-15deg);
  }
  .index-nav-tab-active2:after{
    content: "";
    width: 15px;
    height: 40px;
    background: #fff;
    position: absolute;
    top: 2px;
    left: -5px;
    transform: rotate(15deg);
  }

  .index-nav-tab-active{
    background-color: #fff;
  }
  .index-nav-tab-title{
    display: inline-block;
    height: 21px;
    line-height: 21px;
    color: #666;
  }
  .index-nav-tab-active .index-nav-tab-title{
    color: rgb(252,51,83);
    font-weight: bold;
    border-bottom: 3px solid rgb(252,51,83);;
  }
  .index-nav-page{
    background: #fff;
    text-align: justify;
    min-height: 120px;
  }
  .index-page-box{
    padding: 10px 5px 0;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .index-js-info{
    display: flex;
    padding: 8px 0;
    align-items: center;
    text-decoration: none;color: inherit;
    border-bottom: 1px solid #eee;
  }
  .index-img-box{
    display: inline-block;
    width: 30%;
    text-align: center;
  }
  .index-info-box{
    display: inline-block;
    width: 66%;
    padding-left: 5px;
  }
  .index-js-img{
    width: 100%;
    max-width: 90px;
    max-height: 90px;
    border-radius: 50%;
  }
  .yj-cell{
    width: 100%;
    display: flex;
    padding-bottom: 5px;
  }
  .yj-name{
    display: inline-block;
    font-weight: bolder;
    font-size: 18px;
    height: 20px;
    line-height: 20px;
  }
  .yj-work{
    display: inline-block;
    color: #aaa;
    margin-left: 8px;
    height: 20px;
    line-height: 20px;
  }
  .yj-workd{
    display: inline-block;
    color: #aaa;
  }
  .yj-state{
    display: inline-block;
    font-size: 12px;
    color: #fff;
    background: #FC3353;
    height: 18px;
    line-height: 18px;
    padding: 1px 5px;
    border-radius: 10px;
    float: left;
    margin-left: 10px;
  }
  .yj-cell .yj-state:first-child{
    margin-left: 0;
  }
  .xm-header{
    width: 100%;
    text-align: center;
    color: #E7274B;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #F6F4F5;
    margin: 10px 0 0;
  }
  .xm-header-border{
    margin: 0 auto;
    width: 140px;
    border-bottom: 1px solid #F7BCB4;
    height: 30px;
    line-height: 30px;
  }
  .xm-title{
    display: inline-block;
    border-bottom: 2px solid #E60645;
    margin-top: 1px;
    line-height: 28px;
  }
  .xm-one-box{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    box-sizing: border-box;
  }
  .xm-info{
    box-sizing: border-box;
    flex: 0 0 25%;
    border: 1px solid transparent;
    border-top: none;
    background: #fff;
  }
  /*.xm-one-box .xm-info:nth-child(1){*/
    /*border-left: none;*/
  /*}*/
  /*.xm-one-box .xm-info:nth-child(n+1){*/
    /*border-right: none;*/
  /*}*/
  /*.xm-one-box .xm-info:nth-child(5n){*/
    /*border-left: none;*/
  /*}*/
  /*.xm-one-box .xm-info:nth-child(4n){*/
    /*border-right: none;*/
  /*}*/
  .xm-info img{
    width: 100%;
  }
  .yj-elic{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .el-loading-spinner circle.path{
    stroke: #FB3453;
  }
  .el-loading-spinner p.el-loading-text{
    color: #FB3453;
  }
  .no-data-index{
    text-align: center;
    padding: 50px 0;
  }
  .no-data-index img{
    width: 128px;
  }
</style>
