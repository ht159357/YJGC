<template>
  <div class="kh-box">
    <div class="kh-header-box">
      <div class="kh-nav-one">
        <span class="kh-nav-one-title active">
          美甲
        </span>
      </div>
      <div class="kh-nav-one">
        <span class="kh-nav-one-title">
          美足
        </span>
      </div>
      <div class="kh-nav-one">
        <span class="kh-nav-one-title">
          美瞳
        </span>
      </div>
      <div class="kh-nav-one">
        <span class="kh-nav-one-title">
          美容
        </span>
      </div>
    </div>
    <!--搜索-->
    <div class="js-my-search-box">
      <input type="text" placeholder="请输入姓名/手机号搜索">
      <img class="js-my-search-img" src="./../assets/img/vjb-search.png">
    </div>
    <p class="kh-title">距离上次消费时间</p>
    <!--列表-->
    <div class="js-myyy-list">

      <div class="js-myyy-list-one" v-for="item in 10">
        <img src="./../assets/img/phone-order.png">
        <p class="js-myyy-list-title js-myyy-name">锐*</p>
        <div class="js-myyy-list-date">20Day</div>
        <p class="js-myyy-list-title">猫眼美甲</p>
        <div class="js-myyy-list-price" @click="tsxxPop">推送消息</div>
      </div>

    </div>

    <mt-popup
      v-model="tsxx"
      position="right" style="width: 100%;height: 100%;overflow-y: scroll;">
      <div class="yh-pop-box">
        <svg class="icon icon-right-arr" aria-hidden="true" @click="togolePop()" style="float: left;margin-top: 3px;">
          <use xlink:href="#icon-left-arr-gary"></use>
        </svg>
        消息推送
      </div>
      <div class="ts-box-pop">
        <div class="btn btn-send">发送</div>
        <input type="text" class="ts-send-title" placeholder="请输入消息标题">
        <textarea class="ts-send-info" placeholder="请填写您要发送的信息"></textarea>
        <div class="ts-bottom-box">
          <div class="ts-bottom-left-box">
            <div class="ts-search-box">
              <input type="text" placeholder="搜索颜粉">
            </div>
            <div class="ts-search-list" style="margin-top: 5px">
              <check-box v-for="(item,index) in list" :value="item.value" :title="item.name" :check="item.check" :index="index" @set-val="getValue" style="display: block;"></check-box>
            </div>
          </div>
          <div class="ts-bottom-right-box">
            <div class="ts-search-list">
              <div class="ts-list" v-for="item in list" v-if="item.check">
                <span class="ts-list-left">{{item.name}}</span>
                <span class="ts-list-right">发优惠券</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Popup } from 'mint-ui';
    import checkBox from "./check-box"

    Vue.component(Popup.name, Popup);
    export default {
        name: "js-my-kh",
        data(){
            return {
                tsxx: true,
                list:[
                    {value:1,name:"萌萌",check:true},
                    {value:2,name:"丽丽",check:false},
                    {value:3,name:"嘟嘟",check:false},
                    {value:4,name:"珍珍",check:false},
                ]
            }
        },
        components:{
            checkBox
        },
        methods:{
            tsxxPop(id){//推送消息弹层
                let self = this;
                self.togolePop();

            },
            togolePop(){
                this.tsxx = !this.tsxx;
            },
            getValue(data){
                this.list[data.index].check = data.check;
            }
        }
    }
</script>
<style>
  .kh-header-box{
    display: flex;
    box-sizing: border-box;
    background: #fff;
    padding: 10px 0;
  }
  .kh-nav-one{
    flex: 1;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .kh-header-box .kh-nav-one:last-child{
    border-right: none;
  }
  .kh-nav-one-title{
    border-bottom: 3px solid transparent;
    padding-bottom: 7px;
    font-weight: bold;
  }
  .kh-nav-one-title.active{
    border-bottom: 3px solid #FB3453;
    color: #FB3453;
  }
  .js-my-search-box{
    box-sizing: border-box;
    background: #fff;
    padding: 10px;
    position: relative;
  }
  .js-my-search-box input{
    height: 40px;
    width: 100%;
    text-indent: 20px;
    outline: none;
    border: none;
    border-radius: 27px;
    background: #eee;
  }
  .js-my-search-img{
    position: absolute;
    right: 20px;
    top: 15px;
    width: 32px;
  }.js-my-target-box{
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 0 0 10px;
     background: #fff;
   }
  .js-my-target{
    width: auto;
    font-size: 12px;
    padding: 11px 15px;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-right: 5px;
    font-weight: bold;
  }
  .js-my-target.active{
    color: #FB3453;
    background: #FDE3ED;
    border: 1px solid #FCBFC9;
  }
  .js-myyy-list{
    background: #fff;
  }
  .js-myyy-list-one{
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }
  .js-myyy-list .js-myyy-list-one:first-child{
    border-top: 1px solid #ccc;
  }
  .js-myyy-list-one img{
    width: 24px;
  }
  .js-myyy-list-title{
    text-align: center;
    margin: 5px;
    flex: 1;
  }
  .js-myyy-list-title.js-myyy-name{
      max-width: 36px;
  }
  .js-myyy-list-price{
    max-width: 100px;
    border: 1px solid #FC3353;
    color: #FC3353;
    padding: 5px 9px;
    background: #FDE3ED;
    border-radius: 20px;
  }
  .js-myyy-list-date{
    display: inline-block;
    border: 1px solid #FC3353;
    color: #FC3353;
    padding: 3px 3px;
    background: #FDE3ED;
  }
  .kh-title{
    background: #fff;
    margin: 0;
    padding: 0 0 15px;
    font-weight: bold;
  }

  .yh-pop-box{
    text-align: center;
    margin: 10px;
  }
  .btn-send{
    background: #FB3453;
    color: #fff;
    border-radius: 3px;
    padding: 8px 0;
  }
  .ts-box-pop{
    padding: 10px;
    box-sizing: border-box;
  }
  .ts-send-title,.ts-send-info{
    width: 100%;
    margin: 5px auto;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 3px;
    text-indent: 5px;
    font-size: 14px;
    color: #333;
    padding: 3px;
  }
  .ts-send-title{
    height: 26px;
  }
  .ts-send-info{
    height: 78px;
    margin: 0 auto;
  }
  .ts-bottom-box{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 10px;
  }
  .ts-bottom-left-box{
    width: 50%;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
  }
  .ts-search-list{
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    text-align: left;
  }
  .ts-bottom-right-box{
    width: 50%;
    font-size: 14px;
    box-sizing: border-box;
  }
  .ts-search-box input{
    width: 90%;
    outline: none;
    border-radius: 20px;
    height: 24px;
    text-indent: 10px;
    border: 1px solid #ddd;
  }
  .ts-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px auto;
  }
  .ts-list-right{
    background: #FB3453;
    color: #fff;
    padding: 3px 5px;
    border-radius: 3px;
  }
</style>
