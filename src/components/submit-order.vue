<template>
  <div class="make-order-box">
    <div class="order-good-one">
      <div class="order-img-box">
        <img src="./../assets/img/js-2.jpg" alt="">
      </div>
      <div class="order-info-box">
        <span class="order-info-title">时尚风柳钉高跟鞋款美甲</span>
        <span class="order-info-time">时间：2017-11-26 12:30</span>
        <span class="order-info-name">匠师：萌萌</span>
      </div>
      <div class="order-price-box">
        &yen;128.00
      </div>
    </div>
    <div class="yh-box">
      <div class="yh-title">优惠券：</div>
      <div class="yh-info">
        满100减10
        <svg class="icon icon-right-arr" aria-hidden="true">
          <use xlink:href="#icon-right-arr-gary"></use>
        </svg>
      </div>
    </div>
    <div class="yh-box">
      <div class="yh-title">体验卡：</div>
      <div class="yh-info">
        无可用
        <svg class="icon icon-right-arr" aria-hidden="true">
          <use xlink:href="#icon-right-arr-gary"></use>
        </svg>
      </div>
    </div>

    <div class="yh-box" style="margin-top: 10px;">
      <div class="yh-title">共计金额：</div>
      <div class="yh-info yh-info-money">
        <span class="yh-yb">颜币:127</span><span class="yh-rmb"> + &yen;1.00</span>
        <svg class="icon icon-right-arr" aria-hidden="true">
          <use xlink:href="#icon-right-arr-gary"></use>
        </svg>
      </div>
    </div>

    <div class="yh-btn-box">
      <div class="yh-btn-cancel">取消</div>
      <div class="yh-btn-pay">支付</div>
    </div>
  </div>
</template>
<script>
    export default {}
</script>
<style scoped>
  img[lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  .icon-right-arr{
    fill: #9b9b9b;
  }
</style>
<style>
  .order-good-one{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: #fff;
    padding: 7px;
    border-bottom: 1px solid #EFEFEF;
  }
  .order-img-box{
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
  .order-img-box img{
    width: 100%;
  }
  .order-info-box{
    flex: 4;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .order-price-box{
    flex: 1;
    font-size: 14px;
    text-align: left;
    color: #FB3453;
    font-weight: bold;
  }
  .order-info-title{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .order-info-time{
    font-size: 12px;
    color: #9B9B9B;
    margin-bottom: 5px;
  }
  .order-info-name{
    font-size: 12px;
    color: #9B9B9B;
  }
  .yh-box{
    display: flex;
    align-items: center;
    background: #fff;
    padding: 10px 7px;
    font-size: 14px;
    border-bottom: 1px solid #EFEFEF;
    justify-content: space-between;
  }
  .yh-info-money{
    color: #FB3453;
    font-weight: bold;
  }
  .yh-yb{
    font-size: 14px;
  }
  .yh-rmb{
    font-size: 14px;
  }
  .yh-btn-box{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
  }
  .yh-btn-cancel{
    display: inline-block;
    width: 50%;
    background: #AFAFAF;
    padding:10px 0;
  }
  .yh-btn-pay{
    display: inline-block;
    width: 50%;
    padding:10px 0;
    background: #E83751;
  }
</style>
