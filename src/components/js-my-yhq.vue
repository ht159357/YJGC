<template>
  <div class="js-my-yhq-box">
    <div class="js-my-yhq-one" v-for="item in 10">
      <div class="js-my-yhq-header">
        <img v-lazy="require('./../assets/img/js-2.jpg')">
      </div>
      <div class="js-my-yhq-info">
        <p class="js-my-yhq-title">10元优惠券</p>
        <p class="js-my-yhq-money">小凤专属</p>
      </div>
      <div class="js-my-yhq-query">
        <span class="js-my-yhq-btn" @click="togglePop('showJlPop')">查看记录</span>
      </div>
    </div>
    <mt-popup v-model="showJlPop" position="center" style="width: 80%;height: 60%;overflow-y: auto;">
      <div class="yh-pop-box">
        50元优惠券
      </div>
      <div class="yhq-jl-one" v-for="item in 10">
        购买优惠券(2017-09-07 09:57:13)
      </div>
    </mt-popup>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Popup } from 'mint-ui';

    Vue.component(Popup.name, Popup);
    export default {
        name:"js-my-yhq",
        data(){
           return {
              showJlPop:true
           }
        },
        methods:{
            togglePop(str){
                this[str] = !this[str];
            }
        },
        watch:{
            showJlPop(val,old){
                if( val ){
                    document.body.style.cssText = "overflow-y: hidden";
                }else{
                    document.body.style.cssText = "overflow-y: auto";
                }
            }
        }
    }
</script>
<style>
  .js-my-yhq-box{
    padding: 10px;
  }
  .js-my-yhq-one{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 5px;
  }
  .js-my-yhq-header{
    width: 50px;
  }
  .js-my-yhq-header img{
    width: 100%;
    border-radius: 50%;
  }
  .js-my-yhq-info{
    flex: 1;
    box-sizing: border-box;
    padding-left: 10px;
    text-align: left;
  }
  .js-my-yhq-query{
    width: 100px;
    text-align: right;
  }
  .js-my-yhq-title{
    font-weight: bold;
  }
  .js-my-yhq-money{
    font-size: 14px;
    color: #333;
  }
  .js-my-yhq-btn{
    font-size: 14px;
    display: inline-block;
    background: #FB3453;
    color: #fff;
    border-radius: 4px;
    padding: 8px 10px;
  }
  .yhq-jl-one{
    font-size: 14px;
    background: #f5f5f5;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
</style>
