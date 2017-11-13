<template>
  <div class="index-main-nav">
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
        <a class="index-js-info" v-for="item in 5" @click="showJishiDetails(item)">
          <!--头像-->
          <div class="index-img-box">
            <img class="index-js-img" src="./../assets/img/js-1.jpg" alt="">
          </div>
          <!--技师信息-->
          <div class="index-info-box">
            <div class="yj-cell">
              <span class="yj-name">桂玲</span>
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
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tongzhi"></use>
                </svg>
                今天可预约
              </span>
              <span class="yj-state">
                店铺优惠卷
              </span>
            </div>
          </div>
        </a>
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
            <div class="xm-info" v-for="item in 8">
              <img :src='"./../assets/img/nav-"+ item +".jpg"' alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Lazyload } from 'mint-ui';

  Vue.use(Lazyload);
  export default {
      name:'index-main',
      data(){
          return {
              curNav: 1
          }
      },
      methods:{
          activePage(event){//切换page
              var self = event.currentTarget;
              this.curNav = self.getAttribute("data-nav");
          },
          showJishiDetails( id ){
              let data = {
                  showPage:true,
                  jishiId:id
              }
              this.$emit("jsevent",data);
          }
      },
      mounted(){

      }
  }
</script>
<style>
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .index-main-nav{
    background: #eee;
    padding-top: 10px;
  }
  .index-nav-box{
    display: flex;
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
