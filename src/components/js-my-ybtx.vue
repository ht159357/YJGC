<template>
  <div class="tx-box">
    <div class="tx-sy-box">
      <img src="./../assets/img/tixian-yanbi.png" alt="">
      <p class="tx-title">可兑换收益</p>
      <p class="tx-money"><span class="tx-money-icon">&yen;</span> 0.00</p>
    </div>
    <div class="tx-ye-box">
      <p class="tx-title">账户余额</p>
      <p class="tx-money"><span class="tx-money-icon">&yen;</span> 0.00</p>
    </div>
    <div class="tx-btn txsy-btn-dis" :class="[{'txsy-btn': canTx }]">
      收益提现
    </div>
    <div class="tx-btn txjl-btn">
      提现记录
    </div>
    <p class="tx-tips">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tips"></use>
      </svg>
      温馨提示每月10日当日可提现，本月提上月收益额</p>
  </div>
</template>
<script>
    export default {
        name:"js-ny-ybtx",
        data(){
            return {
                canTx:false,
            }
        },
        methods:{

        }
    }
</script>
<style>
  .tx-box{
    padding: 0 10px;
  }
  .tx-sy-box{
    padding-top: 20px;
    border-bottom: 1px solid #ccc;
  }
  .tx-sy-box img{
    width: 70px;
  }
  .tx-title{
    font-size: 14px;
    font-weight: bold;
    color: #aaa;
    margin: 15px auto;
  }
  .tx-money{
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
  }
  .tx-money-icon{
    font-size: 16px;
  }
  .tx-btn{
    border-radius: 3px;
    padding: 9px 0;
    margin-bottom: 20px;
    font-size: 14px;
  }
  .tx-btn.txsy-btn{
    background: #FB3453;
  }
  .txsy-btn-dis{
    background: #ccc;
    color: #fff;
    border: 1px solid transparent;
  }
  .txjl-btn{
    background: #fff;
    color: #FB3453;
    border: 1px solid #FB3453;
  }
  .tx-tips{
    color: #aaa;
    font-size: 14px;
    text-align: left;
  }
</style>
