<template>
  <div class="yy-ret-box">
    <div class="ret-top-box">
      <img src="./../assets/img/yy-success.png">
    </div>
    <p class="ret-title">恭喜您预约成功！</p>
    <p class="ret-name">尊敬的会员：许萌萌</p>
    <div class="ret-info-box">
      <div class="ret-goods-details">
        <div class="ret-detail-one">
          <span class="ret-val">款式美甲</span>
          <span class="ret-key">类型</span>
        </div>
        <div class="ret-detail-one">
          <span class="ret-val">&yen; 58</span>
          <span class="ret-key">价格</span>
        </div>
        <div class="ret-detail-one">
          <span class="ret-val">小凤</span>
          <span class="ret-key">匠师</span>
        </div>
      </div>
      <p class="ret-yy-time">预约时间：08月13日 10:00 - 11:00</p>
      <div class="ret-say-box">
        <p class="ret-say-title">
          <span class="dot-1"></span>
          <span class="dot-2"></span>
          <span class="dot-3"></span>
          <span class="dot-4"></span>
          退款说明
          <span class="dot-4"></span>
          <span class="dot-3"></span>
          <span class="dot-2"></span>
          <span class="dot-1"></span>
        </p>
        <p class="ret-say-p"><span class="import-color">5分钟</span>内取消不扣款</p>
        <p class="ret-say-p">4小时以内取消<span class="import-color">不退</span></p>
        <p class="ret-say-p">提前4小时取消退<span class="import-color">50%</span>到余额</p>
        <p class="ret-say-p">提前12小时取消退<span class="import-color">80%</span>到余额</p>
        <p class="ret-say-p">提前24小时取消退<span class="import-color">100%</span>到余额</p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name:'yy-success',

    }
</script>
<style>
  .yy-ret-box{
    background: #F7F5F5;
  }
  .ret-top-box{
    padding-top: 10px;
  }
  .ret-top-box img{
    width: 60%;
    max-width: 250px;
  }
  .ret-title{
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #E93243;
  }
  .ret-name{
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #83757F;
  }
  .ret-info-box{
    width: 80%;
    margin: 15px auto;
    background: #fff;
    border-radius: 5px;
    border: 2px solid #EBE9E9;
    padding: 15px 10px;
  }
  .ret-goods-details{
    display: flex;
  }
  .ret-detail-one{
    flex: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .ret-val{
    font-weight: bold;
    font-size: 16px;
    color: #FB3453;
  }
  .ret-key{
    font-size: 12px;
    color: #908F8F;
    margin-top: 6px;
  }
  .ret-yy-time{
    font-size: 14px;
    font-weight: bold;
    margin: 15px auto;
  }
  .ret-say-box{
    padding: 10px;
    background: #EAF1F8;
    border:1px solid #E1F0FA;
  }
  .ret-say-title{
    color: #3F8FCE;
    font-weight: bold;
    margin: 0;
  }
  .dot-1{
    display: inline-block;
    width: 3px;
    height: 3px;
    background: #BADBF3;
    vertical-align: middle;
    border-radius: 50%;
  }
  .dot-2{
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #81BBE7;
    vertical-align: middle;
    border-radius: 50%;
  }
  .dot-3{
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #55A1D9;
    vertical-align: middle;
    border-radius: 50%;
  }
  .dot-4{
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #3F8FCE;
    vertical-align: middle;
    border-radius: 50%;
  }
  .ret-say-p{
    margin: 5px auto;
    font-weight: bold;
  }
  .import-color{
    color: #3F8FCE;
  }
</style>
