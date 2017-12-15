<template>
  <div class="buy-yhq-box">
    <div class="buy-search-box">
      <div class="buy-search-bottom-border">
        <div class="buy-search-left-box">
          <img src="./../assets/img/telphone.png">
        </div>
        <div class="buy-search-center-box">
          <input type="tel" placeholder="请输入绑定手机号">
        </div>
        <div class="buy-search-right-box">
          <span>手机校验</span>
        </div>
        <div class="buy-js-list">
          <span class="buy-js-name">萌萌匠师</span>
        </div>
      </div>
    </div>
    <div class="buy-info-box">
      <p class="buy-title">购买优惠券</p>
      <div class="buy-tag-box">
        <div class="buy-tag" v-for="item in 10" @click="showPop(item)">
          <p class="buy-tag-title">10元优惠券</p>
          <p class="buy-tag-money">10元</p>
        </div>
      </div>
    </div>


    <mt-popup
      v-model="showBuyPop"
      position="center" style="width: 80%;height: 250px;border-radius: 3px;">
      <p class="buy-pay-money"><span style="font-size: 20px;">&yen;</span>0.01</p>
      <p class="buy-info">
        <span class="buy-info-key">订单信息</span>
        <span class="buy-info-val">10元优惠券</span>
      </p>
      <p class="buy-info">
        <span class="buy-info-key">订单价格</span>
        <span class="buy-info-val">&yen;0.01</span>
      </p>
      <p class="buy-info">
        <span class="buy-info-key">支付方式</span>
        <span class="buy-info-val">微信支付</span>
      </p>
      <span class="buy-pay-btn">立即支付</span>
    </mt-popup>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Popup } from 'mint-ui';

    Vue.component(Popup.name, Popup);
    export default {
        name: "js-buy-yhq",
        data(){
            return {
                showBuyPop:false
            }
        },
        methods:{
            showPop(id){
                let self = this;
                self.showBuyPop = true;
            }
        }
    }
</script>
<style>
  .buy-search-box{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }
  .buy-search-bottom-border{
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-bottom: 5px;
    flex-wrap: wrap;
  }
  .buy-search-left-box{
    width: 30px;
  }
  .buy-search-center-box input{
    outline: none;
    border: none;
    height: 30px;
    background: #f5f5f5;
    line-height: 30px;
  }
  .buy-search-left-box img{
    width: 70%;
  }
  .buy-search-right-box{
    padding: 3px 10px;
    background: #FB3453;
    color: #fff;
    border-radius: 3px;
  }
  .buy-info-box{
    padding: 0 10px;
  }
  .buy-title{
    font-size: 14px;
    text-align: left;
    font-weight: bold;
  }
  .buy-tag-box{
    box-sizing: border-box;
    text-align: left;
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*align-items: center;*/
  }
  .buy-tag{
    display: inline-block;
    width: 30%;
    border: 1px solid #FB3453;
    padding: 10px;
    margin: 5px;
    box-sizing: border-box;
    border-radius: 3px;
    color: #FB3453;
    text-align: center;
  }
  .buy-tag-title{
    font-size: 12px;
    font-weight: bold;
  }
  .buy-tag-money{
    font-size: 12px;
  }
  .buy-js-list{
    width: 100%;
    padding: 5px 0;
    text-align: left;
  }
  .buy-js-name{
    padding: 3px;
    background: #337AB7;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
  }
  .buy-pay-money{
    padding: 10px 0;
    color: #FB3355;
    font-size: 50px;
  }
  .buy-info{
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
  }
  .buy-pay-btn{
    display: inline-block;
    background: #FB3355;
    color: #fff;
    margin-top: 30px;
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 5px;
  }
</style>
