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

    <div class="shops-box">
      <div class="shops-box-box">
        <!--省-->
        <select class="select-reset" v-model="provinceIndex" name="province" @change="setCity">
          <option :value="index" v-for="(item,index) in provinceList">{{item.name}}</option>
        </select>
      </div>
      <div class="shops-box-box">
        <!--市-->
        <select class="select-reset" name="city" v-model="cityId" @change="setShop">
          <option :value="item.id" v-for="item in cityList">{{item.name}}</option>
        </select>
      </div>
      <div class="shops-box-box">
        <!--店铺-->
        <select class="select-reset" name="city" v-model="shopId" @change="setShopInfo">
          <option :value="item.storefrontId" v-for="item in shopList">{{item.storefrontName}}</option>
        </select>
      </div>
    </div>
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
    <div class="index-nav-page" v-show="curNav==1">
      <div class="index-page-box">
        <!--单一技师-->
        <router-link :to="'/jiangshi/'+item" class="index-js-info" v-for="(item,index) in shopInfo.artisanList" @click="showJishiDetails(item,'showJsDetails')">
          <!--头像-->
          <div class="index-img-box">
            <img class="index-js-img" v-lazy="require('./../assets/img/js-2.jpg')" alt="">
          </div>
          <!--技师信息-->
          <div class="index-info-box">
            <div class="yj-cell">
              <span class="yj-name">莉莉</span>
              <span class="yj-work">美甲师</span>
            </div>
            <div class="yj-cell">
              <span class="yj-workd yj-elic">手部护理,美足护理,美钻款式</span>
            </div>
            <div class="yj-cell yj-star-box">
              <!--星星-->
              <svg class="icon" aria-hidden="true" v-for="item in 5">
                <use xlink:href="#icon-star"></use>
              </svg>
              <!--奖杯-->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiangbei"></use>
              </svg>
            </div>
            <!--状态-->
            <div class="yj-cell">
              <span class="yj-state">
                今天可预约
              </span>
              <span class="yj-state">
                店铺优惠卷
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="index-nav-page" v-show="curNav==2">
      <div class="index-page-box" style="padding: 10px 0">
        <!--单个类型项目-->
        <div class="xm-box" v-for="item in 4">
          <div class="xm-header">
            <div class="xm-header-border">
              <span class="xm-title">卸甲服务</span>
            </div>
          </div>
          <div class="xm-one-box">
            <router-link :to="'/project/'+item+'/'+1" class="xm-info" v-for="item in 8">
              <img v-lazy='require("./../assets/img/nav-"+ item +".jpg")'>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import store from './../store/store'
  export default {
      name:'index-main',
      data(){
          return {
              curNav: 1,
              provinceList:null,
              cityList:null,
              provinceIndex:0,
              cityId:null,
              shopList:null,
              shopId:null,
              shopInfo:null
          }
      },
      store,
      methods:{
          activePage(event){//切换page
              var self = event.currentTarget;
              this.curNav = self.getAttribute("data-nav");
          },
          setCity(){//获取市列表
              let self = this;
              self.cityList = self.provinceList[self.provinceIndex].citys;
              self.cityId = self.provinceList[self.provinceIndex].citys[0].id;
              self.setShop();
          },
          setShop(){//获取店铺列表
              let self = this;
              axios.post(httpStr+"/artisan/queryStorefrontByRegion",{
                  territoryId: self.cityId
              }).then(function(ret){
                  let data = ret.data;
                  if( data.flag === 100 ){
                      self.shopList = data.data;
                      self.shopId = self.shopList[0].storefrontId;
                      self.setShopInfo();
                  }
              })
          },
          setShopInfo(){//获取店铺信息
              let self = this;
              axios.post(httpStr+"/artisan/queryStorefrontInfo",{
                  storefrontId: self.shopId
              }).then(function(ret){
                  let data = ret.data;
                  if( data.flag === 100 ){
                      console.log(data);
                      self.shopInfo = data.data;
                  }
              })
          }
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
                  self.setCity();
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
  }
  .index-page-box{
    padding: 10px 5px;
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
  }
  .xm-info{
    box-sizing: border-box;
    flex: 0 0 25%;
    border: 1px solid #F7F6F7;
    border-top: none;
    background: #fff;
  }
  .xm-one-box .xm-info:nth-child(1){
    border-left: none;
  }
  .xm-one-box .xm-info:nth-child(n+1){
    border-right: none;
  }
  .xm-one-box .xm-info:nth-child(5n){
    border-left: none;
  }
  .xm-one-box .xm-info:nth-child(4n){
    border-right: none;
  }
  .xm-info img{
    width: 100%;
  }
  .yj-elic{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
