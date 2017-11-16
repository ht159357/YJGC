<template>
  <div class="app-body">
    <div class="app-header">
      <div class="app-shop-title">
        店面：
      </div>
      <div class="app-shop-name mint-header-title">
        南昌万达店
      </div>
      <a href="http://map.baidu.com/mobile/webapp/place/marker/qt=inf&vt=map&act=read_share&code=315/third_party=uri_api&point=118.791511|32.04711&title=颜匠工场&content=颜匠工场 新百店=pcqq.c2c" class="app-shop-addr">
        <svg class="icon app-icon-right-arr" aria-hidden="true" style="vertical-align: -0.1em;"><use xlink:href="#icon-position"></use></svg>
        具体位置
      </a>
      <div class="app-shop-index">
        切换门店<svg class="icon icon-right-arr" aria-hidden="true"><use xlink:href="#icon-right-arr-red"></use></svg>
      </div>
    </div>
    <appointment-date class="app-viwe" v-if="$store.state.yyType == 1"></appointment-date>
    <appointment-js class="app-viwe" v-if="$store.state.yyType == 2"></appointment-js>
    <appointment-time class="app-viwe" v-if="$store.state.yyType == 3"></appointment-time>
    <!--{{$store.state.showGoodDetails}}-->
    <!--商品信息-->
    <div class="goods-detals-box">
      <div class="goods-one">
        <div class="goods-one-left">
          <img src="./../assets/img/header-icon.jpg">
        </div>
        <div class="goods-one-right">
          <div class="goods-one-1">
            <span class="goods-name">低调的华丽</span>
            <span class="goods-price">&yen;198</span>
          </div>
          <div class="goods-one-1">
            <span class="goods-sellname">手艺人: 萌萌</span>
          </div>
        </div>
      </div>
    </div>
    <!--支付-->
    <div class="yy-pay-btn" v-if="$store.state.shopType == 1">
      预约支付 &yen; 10
    </div>
    <!--选过匠师支付-->
    <div class="yy-pay-btn yy-pay-btn-2" v-if="$store.state.shopType == 2 || $store.state.shopType == 3">
      <div class="pay-btn-left">
        预约&yen;158（颜币：0.00）
      </div>
      <div class="pay-btn-right">
        提交订单
      </div>
    </div>
  </div>
</template>
<script>
    import appointmentDate from "./appointment-date";
    import appointmentJs from "./appointment-js";
    import appointmentTime from "./appointment-time";

    export default {
        name:"make-appointment",
        components:{
            appointmentDate,
            appointmentJs,
            appointmentTime
        },
        data(){
            return {

            }
        }
    }
</script>
<style>
  .app-body{
    background: #F0EFEF;
    padding-bottom: 44px;
  }
  .app-viwe{
    margin-top: 10px;
  }
  .app-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 12px;
  }
  .app-shop-title{
    flex: 0 0 55px;
    text-indent: 15px;
    color: #aaa;
  }
  .app-shop-name{
    flex: 0 0 30%;
    text-align: left;
  }
  .app-shop-addr{
    flex: 0 0 70px;
    color: #2C9EFE;
    text-decoration: none;
  }
  .app-shop-index{
    flex: 0 0 70px;
    color: #FB3453;
  }
  .yy-pay-btn{
    width: 100%;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    height: 44px;
    line-height: 44px;
    background: #2C2C2C;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .goods-detals-box{
    background: #fff;
    margin-top: 10px;
  }
  .goods-one{
    padding: 10px 0;
    display: flex;
  }
  .goods-one-left{
    flex: 0 0 80px;
  }
  .goods-one-left img{
    width: 80%;
  }
  .goods-one-right{
    flex: 0 0 70%;
    text-align: left;
    align-items: center;
  }
  .goods-name{
    font-size: 16px;
    font-weight: bold;
  }
  .goods-price{
    color: #FB3453;
    font-size: 16px;
    font-weight: bold;
  }
  .goods-one-1{
    display: flex;
    justify-content: space-between;
  }
  .goods-sellname{
    font-size: 16px;
    font-weight: bold;
    color: #999;
    margin-top: 20px;
  }
  .yy-pay-btn-2{
    display: flex;
    font-size: 14px;
  }
  .pay-btn-left{
    flex: 2;
    background: #000000;
  }
  .pay-btn-right{
    flex: 1;
    background: #FC3353;
  }
</style>
