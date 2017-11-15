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
        <div class="pro-price">
          <div class="pro-price-num">&yen;398999.1</div>
          <div class="pro-price-title">价格</div>
        </div>
      </div>
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
  </div>
</template>
<script>
    export default {
        name: 'project-detail',
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
    font-size: 18px;
    font-weight: bold;
    color: #E71B4F;
    border-bottom: 1px solid #E71B4F;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .pro-price-title{
    border-radius: 4px;
    padding: 2px 0;
    font-size: 18px;
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
    margin-left: 35px;
    height: 30px;
    margin: 10px 0 0 35px;
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
</style>
