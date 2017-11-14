<template>
  <div class="project-page">
    <!--轮播-->
    <div class="mint-swipe-container">
      <mt-swipe :auto="2000" :prevent="true" style="height: 250px;">
        <mt-swipe-item class="mint-swipe-item">
          <img class="swipe-img" src="http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-31/59a787d8c270c.jpg">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img class="swipe-img" src="http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-31/59a7d5b9d439b.jpg">
        </mt-swipe-item>
        <mt-swipe-item class="mint-swipe-item">
          <img class="swipe-img" src="http://wx.yanjianggongchang.com/Uploads/Picture/2017-08-31/59a778927ab79.jpg">
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
        2
      </div>
    </div>

    <div class="pro-details">
      --------------------------
    </div>
  </div>
</template>
<script>
    export default {
        name: 'project-detail',
        data(){
            return {

            }
        }
    }
</script>
<style>
  .project-page{
    background: #EFEEEE;
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
  .pro-details{
    background: #fff;
    margin-top: 10px;
  }
</style>
