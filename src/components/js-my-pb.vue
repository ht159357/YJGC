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
    </div>
    <div class="js-mypb-list">
      <div class="js-mypb-one" v-for="item in 20">
        <span class="js-mypb-state">无</span>
        <span class="js-mypb-time">10:00</span>
      </div>
    </div>
    <div class="js-qd-box">
      <div class="js-sb-qd-btn">
        <img src="./../assets/img/day.png">&nbsp;
        上班签到
      </div>
      <div class="js-xb-qd-btn">
        <img src="./../assets/img/night.png">&nbsp;
        下班签到
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
    box-sizing: border-box;
  }
  .js-nav-yy-one.active{
    border-bottom: 3px solid #FB3453;
    color: #FB3453;
  }
  .js-mypb-list{
    padding-bottom: 40px;
  }
  .js-mypb-one{
    margin: 10px;
    text-align: left;
    background: #fff;
    padding: 5px 10px;
    border-radius: 3px;
  }
  .js-mypb-state{
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    display: inline-block;
    background: #888;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
  }
  .js-mypb-time{
    color: gray;
    display: inline-block;
    margin-left: 10px;
  }
  .js-qd-box{
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .js-qd-box img{
    width: 16px;
  }
  .js-qd-box>div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .js-sb-qd-btn{
    flex: 1;
    background: #000;
  }
  .js-xb-qd-btn{
    flex: 1;
    background: #FB3453;
  }
</style>
