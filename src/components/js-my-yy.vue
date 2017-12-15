<template>
  <div class="js-my-yy-box">
    <div class="js-my-yy-header">
      <div class="js-nav-yy-one active">
        今天
      </div>
      <div class="js-nav-yy-one">
        明天
      </div>
      <div class="js-nav-yy-one">
        12.09
      </div>
      <div class="js-nav-yy-one">
        12.10
      </div>
      <div class="js-nav-yy-one">
        12.11
      </div>
      <div class="js-nav-yy-one">
        已取消
      </div>
    </div>
    <div class="js-yy-detail-box">
      <div class="js-my-yy-one" v-for="item in 10">
        <p class="js-my-yy-title"><img src="./../assets/img/shoucang-order.png">
          纯色美足
          <span class="js-my-yy-target">简易卸甲</span>
        </p>
        <p class="js-yy-info-box">
          <span class="js-left-box">
            <img class="js-yy-header" v-lazy="require('./../assets/img/js-2.jpg')" />
          萌萌
          </span>
          <span class="js-right-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-time"></use>
            </svg>
            16:00-17:00
          </span>
        </p>
        <div class="btn-list">
          <span class="yj-btn yy-btn-start">开始</span>
          <span class="yj-btn yy-btn-end">结束</span>
        </div>
        <div class="js-yy-call-box">
          <div>
            <img src="./../assets/img/call.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "js-my-yy",
        data(){
            return {

            }
        },
    }
</script>
<style>
  .js-my-yy-header{
    display: flex;
    background: #fff;
  }
  .js-nav-yy-one{
    flex: 1;
    font-size: 14px;
    height: 36px;
    line-height: 36px;

  }
  .js-nav-yy-one.active{
    border-bottom: 3px solid #FB3453;
    color: #FB3453;
  }
  .js-yy-detail-box{
    box-sizing: border-box;
    padding: 8px;
  }
  .js-my-yy-one{
    background: #fff;
    position: relative;
    padding: 5px;
    border-radius: 3px;
    margin: 10px auto 20px;
  }
  .js-my-yy-one .js-my-yy-title{
    margin: 0;
    text-align: left;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }
  .js-my-yy-title img{
    width: 22px;
    margin-right: 5px;
  }
  .js-my-yy-target{
    margin-left: 5px;
    font-size: 12px;
    background: #FB3453;
    color: #fff;
    padding: 1px 3px;
  }
  .js-yy-info-box{
    text-align: left;
    margin: 10px auto;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    border-radius: 3px;
    justify-content: space-between;
  }
  .js-yy-info-box .js-left-box{
    display: flex;
    align-items: center;
  }
  .js-yy-info-box .js-yy-header{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 5px 10px;
  }
  .js-yy-info-box .js-right-box{
    font-size: 12px;
    padding-right: 5px;
    color: #aaa;
  }
  .js-my-yy-one .js-yy-call-box{
    width: 35px;
    height: 35px;
    position: absolute;
    right: 20px;
    top: -10px;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .js-yy-call-box div{
    width: 25px;
    height: 25px;
    background: #4B9BFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .js-yy-call-box img{
    width: 70%;
  }
  .btn-list{
    text-align: right;
  }
  .yy-btn-start{
    background: #5CB85C;
    color: #fff;
  }
  .yy-btn-end{
    background: #FB3453;
    color: #fff;
  }
</style>
