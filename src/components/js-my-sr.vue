<template>
  <div class="js-sr-box">
    <div class="sr-nav-box">
      <div class="sr-nav active">今天(&yen;0)</div>
      <div class="sr-nav">本月(&yen;0)</div>
    </div>
    <div class="sr-page-box">
      <div class="yjgc-cell-one">
        <div class="yjgc-cell-header">
          <img v-lazy="require('./../assets/img/yb-red.png')">
        </div>
        <div class="yjgc-cell-info">
          <p class="yjgc-cell-detail">绝色美甲体验</p>
          <p class="yjgc-cell-time">2017-07-10 18：00</p>
        </div>
        <div class="yjgc-cell-last">
          <div class="yjgc-cell-money">
            &yen;199
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name:"js-my-sr",
        data(){
            return {

            }
        }
    }
</script>
<style>
  .js-sr-box{
    background: #fff;
  }
  .sr-nav-box{
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 14px;
  }
  .sr-nav{
    flex: 1;
    padding: 10px 0;
  }
  .sr-nav.active{
    border-bottom: 3px solid #FB3453;
  }
</style>
