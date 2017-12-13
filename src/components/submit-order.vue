<template>
  <div class="make-order-box">
    <div class="order-good-one">
      <div class="order-img-box">
        <img alt="" v-lazy="ifload?data.marketPic:''">
      </div>
      <div class="order-info-box">
        <span class="order-info-title">{{ifload?data.goodsName:''}}</span>
        <span class="order-info-time">时间：{{ifload?date+' '+time:''}}</span>
        <span class="order-info-name">匠师：{{ifload?data.stageName:''}}</span>
      </div>
      <div class="order-price-box">
        &yen;{{ifload?data.price:''}}
      </div>
    </div>
    <div class="yh-box" @click="popUp('yhPop')">
      <div class="yh-title">优惠券：</div>
      <div class="yh-info">
        满100减10
        <svg class="icon icon-right-arr" aria-hidden="true">
          <use xlink:href="#icon-right-arr-gary"></use>
        </svg>
      </div>
    </div>
    <div class="yh-box" @click="popUp('tyPop')">
      <div class="yh-title">体验卡：</div>
      <div class="yh-info">
        无可用
        <svg class="icon icon-right-arr" aria-hidden="true">
          <use xlink:href="#icon-right-arr-gary"></use>
        </svg>
      </div>
    </div>

    <div class="yh-box" style="margin-top: 10px;">
      <div class="yh-title">已有颜币：</div>
      <div class="yh-info yh-info-money">
        <span class="yh-yb">{{ifload?userData.beautyFans.fansNum:''}}</span>
        <!--<svg class="icon icon-right-arr" aria-hidden="true">-->
          <!--<use xlink:href="#icon-right-arr-gary"></use>-->
        <!--</svg>-->
      </div>
    </div>

    <div class="yh-box">
      <div class="yh-title">共计金额：</div>
      <div class="yh-info yh-info-money">
        <span class="yh-yb">&yen;{{ifload?data.price:''}}</span>
        <!--<svg class="icon icon-right-arr" aria-hidden="true">-->
          <!--<use xlink:href="#icon-right-arr-gary"></use>-->
        <!--</svg>-->
      </div>
    </div>

    <div class="yh-btn-box">
      <div class="yh-btn-cancel">取消</div>
      <div class="yh-btn-pay" @click="payIt()">支付</div>
    </div>

    <mt-popup v-model="yhPop" position="right" style="width: 100%;height: 100%;overflow-y: scroll;text-align: left;">
      <div class="yh-pop-box">
        <svg class="icon icon-right-arr" aria-hidden="true" @click="popUp('yhPop')" style="float: left;margin-top: 3px;">
          <use xlink:href="#icon-left-arr-gary"></use>
        </svg>
        优惠券
      </div>
      <div class="card-box">
        <!--单一-->
        <div class="card-one" v-for="item in 5">
          <div class="card-money-box">
            <div class="card-money">&yen;10</div>
            <div class="card-condition">满100减10</div>
          </div>
          <div class="card-title-box">
            <div class="card-title">xxx专享</div>
          </div>
          <div class="card-use-box">
            <div class="card-use" @click="userCard('yhPop')">使用</div>
          </div>
          <div class="card-top-border">
            <div class="card-time">限 2017-12-08 00:00 前使用</div>
          </div>
        </div>

      </div>
    </mt-popup>

    <mt-popup v-model="tyPop" position="right" style="width: 100%;height: 100%;overflow-y: scroll;text-align: left;">
      <div class="yh-pop-box">
        <svg class="icon icon-right-arr" aria-hidden="true" @click="popUp('tyPop')" style="float: left;margin-top: 3px;">
          <use xlink:href="#icon-left-arr-gary"></use>
        </svg>
        体验卡
      </div>
      <div class="card-box">
        <!--单一-->
        <div class="card-one" v-for="item in 5">
          <div class="card-money-title-box">
            <div class="card-money-title">体验卡</div>
          </div>
          <div class="card-title-box">
            <div class="card-title">xxx专享</div>
          </div>
          <div class="card-use-box">
            <div class="card-use" @click="userCard('tyPop')">使用</div>
          </div>
          <div class="card-top-border">
            <div class="card-time">限 2017-12-08 00:00 前使用</div>
          </div>
        </div>

      </div>
    </mt-popup>
  </div>
</template>
<script>
    import Vue from 'vue';
    import axios from "axios";
    import Toast from "mint-ui";
    import { Popup } from 'mint-ui';

    Vue.component(Popup.name, Popup);

    export default {
        name:"submit-order",
        data(){
            return {
                data:null,
                date:null,
                time:null,
                ifload:false,
                userData:null,
                yhPop:false,
                tyPop:false,
            }
        },
        beforeMount(){//实例被初始化
            let self = this;
            self.data = self.$route.query;
            self.parseTime(self.data.date);
            axios.post(httpStr+'/artisan/findUserInfo',{
                openId:openId
            }).then((ret)=>{//查询用户颜币等信息
                let data = ret.data;
                if( data.flag === 100 ){
                    self.userData = data.data;
                    self.ifload = true;//请求是异步操作，等到请求完成数据loading完成
                }
            });
            if( self.data.needQueryGoods ){
                self.queryGoods(self.data.goodsId);
            }
        },
        methods:{
            parseTime(dateStr){//格式化时间，用于展示
                dateStr = dateStr.split('_');
                let timeStr = dateStr[1].split(':');
                this.date = dateStr[0].substring(0,4)+"-"+dateStr[0].substring(4,6)+'-'+dateStr[0].substring(6,8);
                this.time = timeStr[0]+":"+timeStr[1];
            },
            popUp(str){
                this[str] = !this[str];
            },
            userCard(str){
                let self = this;
                if( str === 'yhPop' ){//优惠券
                    alert('选择了优惠券');
                    self.popUp(str);
                }else if( str === 'tyPop' ){//体验卷
                    alert('选择了体验券');
                    self.popUp(str);
                }
            },
            payIt(){
                alert('支付！');
            },
            queryGoods(goodsId){
                let my = this;
                axios.post(httpStr+"/artisan/queryGoods",{
                    goodsId:goodsId
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        console.log(data.data);
                        my.$set(my.data,"goodsName",data.data.goodsName);
                        my.$set(my.data,"marketPic",data.data.marketPic);
                    }
                })
            }
        }
    }
</script>
<style scoped>
  img[lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  img[lazy=error]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/load-error.svg") no-repeat center #ddd;
    background-size: 32px;
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
  .yh-pop-box{
    text-align: center;
    margin: 10px;
  }
  .card-one{
    box-sizing: border-box;
    width: 95%;
    margin: 5px auto;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px 0 40px;
    border-radius: 3px;
    position: relative;
  }
  .card-one:after{
    content: '';
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    left: -4px;
    width: 10px;
    height: 10px;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #fff;
    transform: rotate(-45deg);
  }
  .card-one:before{
    content: '';
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    right: -4px;
    width: 10px;
    height: 10px;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    background: #fff;
    transform: rotate(-45deg);
  }
  .card-top-border{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-top: 1px dashed #ddd;
    text-align: left;
    text-indent: 15px;
  }
  .card-money-box{
    width: 90px;
  }
  .card-title-box{
    flex: 1;
    text-align: left;
  }
  .card-use-box{
    width: 60px;
  }
  .card-money{
    color: red;
    font-size: 24px;
    font-weight: bold;
  }
  .card-condition{
    font-size: 12px;
    color: #bbb;
  }
  .card-title{
    font-size: 20px;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card-time{
    font-size: 12px;
    color: #bbb;
  }
  .card-use{
    width: 50px;
    margin: 0 auto;
    background: red;
    color: #fff;
    border-radius: 5px;
    padding: 5px 0;
  }
  .card-money-title-box{
    width: 60px;
  }
  .card-money-title{
    font-size: 12px;
    width: 50px;
    margin: 0 auto;
    color: #fff;
    background: #FB3453;
    padding: 5px 0;
    border-radius: 20px;
    position: absolute;
    top: 12px;
    left: 5px;
  }
</style>
