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
</style>
