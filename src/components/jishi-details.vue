<template>
  <div class="jis-detail-box">
    <div class="jis-info-box" :style="jisinfobox">
      <div class="jis-header">
        <img class="jis-header-img" src="./../assets/img/js-2.jpg" alt="">
      </div>
      <div class="jis-info">
        <div class="jis-cell">
          <span class="jis-name">莉莉</span>
          <span class="jis-work">【美甲师、美容师】</span>
        </div>
        <div class="jis-cell">
          <!--星星-->
          <svg class="icon" aria-hidden="true" v-for="item in 5">
            <use xlink:href="#icon-star"></use>
          </svg>
          <!--奖杯-->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiangbei"></use>
          </svg>
          <span class="jis-work">卓越</span>
        </div>
        <div class="jis-cell">
          <span class="jis-ret">好评率：9.95</span>
        </div>
      </div>
      <div class="jis-foucs">
        <span class="jis-foucnum">关注数：999</span>
        <span class="jis-addfocus">
          <svg class="icon icon-like" aria-hidden="true">
            <use xlink:href="#icon-like"></use>
          </svg>关注
        </span>
      </div>
    </div>
    <div class="jis-tab-box">
      <div v-for="(item,index) in tabInfo" @click="tabActive(index)" ref="tab1" class="jis-tab-one" :class="[{ 'jis-tab-one-active' : item.active }]">
        <img class="tab-img" v-if="!item.active" :src="item.url">
        <img class="tab-img" v-else="item.active" :src="item.urlActive">
        <p class="tab-title">在线选款</p>
      </div>
    </div>
    <div class="jis-tab-page-box">
      <div class="jis-tab-page" v-show="tabpage==0">
        <div class="jis-filter-box">
          <div class="jis-filter jis-filter-active">
            热销
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
          </div>
          <div class="jis-filter">
            上新
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-down"></use>
            </svg>
          </div>
          <div class="jis-filter">
            价格
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
          </div>
        </div>

        <div class="jis-yy-box">
          <div class="jis-yy-tz">
            <svg class="icon icon-tz" aria-hidden="true">
              <use xlink:href="#icon-tongzhi"></use>
            </svg>
            <div class="jis-yy-tz-box">
              <div class="jis-yy-tz-con">
                <span v-for="item in 5" class="jis-yy-tz-detail">
                  本店开业啦！！！
                </span>
              </div>
            </div>
          </div>
          <div class="jis-yy-tm">
            <div class="jis-yy-time">
              <span class="jis-yy-title">可预约时间</span>
              <span>今日可约
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-rili"></use>
                </svg>
              </span>
            </div>
            <div class="jis-yy-map">
              <span class="jis-yy-title">服务店铺</span>
              <span>河西万达
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-map"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="jis-tab-page" v-show="tabpage==1">
        1
      </div>
      <div class="jis-tab-page" v-show="tabpage==2">
        2
      </div>
    </div>
  </div>
</template>

<script>
import store from './../store/store'

export default {
    name: 'jishi-detail',
    store,
    data () {
        return {
            pagename:"showJsDetails",
            tabInfo:[
              {title:"在线选款",url:require("./../assets/img/xuanku1.png"),urlActive:require("./../assets/img/xuanku.png"),active:true,activeNum:0},
              {title:"在线预约",url:require("./../assets/img/allp1.png"),urlActive:require("./../assets/img/allp.png"),active:false,activeNum:1},
              {title:"顾客评价",url:require("./../assets/img/comm1.png"),urlActive:require("./../assets/img/comm.png"),active:false,activeNum:2},
            ],
            tabpage: 0,
            jisinfobox:{
                backgroundImage: "url("+require('./../assets/img/sharecenter-heade-bg.png')+")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                color: "#fff",
                padding: "20px 0 10px"
            }
        }
    },
    methods:{
        tabActive(index){
            if( this.tabInfo[index].active == true ){
                return;
            }
            this.tabInfo[index].active = true;
            this.tabpage = this.tabInfo[index].activeNum;
            for(var i=0;i<this.tabInfo.length;i++){
                if( i != index ){
                  this.tabInfo[i].active = false;
                }
            }
        }
    }
}
</script>
<style>
  .jis-detail-box{
    background: #F7F7F7;
    padding-bottom: 10px;
  }
  .jis-info-box{
    display: flex;
  }
  .jis-header{
    flex: 0 0 25%;
    text-align: center;
  }
  .jis-info{
    flex: 0 0 45%;
    text-align: left;
    padding-right: 3%;
    background-image: url(./../assets/img/border-1.png);
    background-repeat: no-repeat;
    background-position: right center;
  }
  .jis-foucs{
    flex: 0 0 27%;
    padding: 10px 0;
  }
  .jis-header-img{
    width: 80%;
    border-radius: 50%;
    vertical-align: middle;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .jis-cell{
    display: inline-block;
    width: 100%;
    margin-bottom: 5px;
  }
  .jis-info .jis-cell:first-child{
    margin-bottom: 10px;
  }
  .jis-name{
    display: inline-block;
    font-size: 16px;
    font-weight: bolder;
  }
  .jis-work{
    display: inline-block;
    font-size: 12px;
  }
  .jis-ret{
    display: inline-block;
    font-size: 14px;
  }
  .jis-foucnum{
    width: 100%;
    display: inline-block;
    font-size: 12px;
  }
  .jis-addfocus{
    display: inline-block;
    border: 1px solid #fff;
    padding: 4px 15px;
    border-radius: 15px;
    margin-top: 10px;
    font-size: 12px;
  }
  .icon-like{
    font-size: 14px;
    margin-right: 5px;
    margin-left: -5px;
  }
  .icon-tz{
    width: 18px;
    float: left;
    height: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .jis-yy-tz-box{
    overflow-x: scroll;
    height: 40px;
    line-height: 40px;
    width: calc(100% - 58px);
  }
  .jis-yy-tz-con{
    display: inline-block;
    width: auto;
    height: 40px;
    line-height: 40px;
  }
  .jis-yy-tz-detail{
    margin-right: 50px;
  }
  .jis-tab-box{
    display: flex;
    background: #fff;
  }
  .jis-tab-one{
    flex: 1;
    padding: 10px 0 0;
  }
  .jis-tab-one-active{
    border-bottom: 2px solid #A88F5D;
  }
  .jis-tab-one-active p{
    color: #A88F5D;
  }
  .tab-img{
    width: 22px;
  }
  .tab-title{
    margin: 0 0 5px;
    color: #8C8E8E;
  }
  .jis-filter-box{
    display: flex;
  }
  .jis-filter{
    flex: 1;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .jis-yy-box{
    margin-top: 10px;
    background: #fff;
  }
  .jis-yy-tz{
    width: 100%;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #F7F7F7;
  }
  .jis-yy-tz-title{
    width: auto;
    display: inline-block;
    float: left;
    margin: 0 30px;
    text-align: left;
  }
  .jis-yy-tm{
    display: flex;
  }
  .jis-yy-time{
    flex: 1;
  }
  .jis-yy-map{
    flex: 1;
  }
  .jis-yy-title{
    display: inline-block;
    font-size: 12px;
    color: #9B9B9B;
  }
</style>
