<template>
  <div class="tx-box">
    <div class="tx-cell-one">
      <div class="tx-cell" @click="showPop('showBankPop')">
        <div class="tx-cell-left">
          <svg class="icon icon-bank" aria-hidden="true">
            <use xlink:href="#icon-yinhanglogo_gongshangyinhang"></use>
          </svg>
          <div class="bank-name">工商银行</div>
        </div>
        <div class="tx-cell-right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right-arr"></use>
          </svg>
        </div>
      </div>
      <div class="tx-cell">
        <div class="tx-cell-left">
          <span style="font-size: 30px;margin: 0 16px 0 6px;">&yen;</span>
          <input v-model="txMoney" type="number" class="tx-money">
          <!--<div class="tx-money">-->
            <!--{{txMoney}}-->
          <!--</div>-->
        </div>
        <div class="tx-cell-right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right-arr"></use>
          </svg>
        </div>
      </div>
      <div class="btn tx-btn-comf">
        确认申请提现
      </div>
      <p class="tx-tips tx-tips-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tips"></use>
        </svg>
        申请提现后，到账日为提出申请1天后，提现账户信息需真实准确。</p>
    </div>

    <mt-popup
      v-model="showBankPop"
      position="center"
      :closeOnClickModal="false" style="width: 100%;height: 100%;">
        <div class="yh-pop-box">
          <svg class="icon icon-right-arr" aria-hidden="true" @click="showPop('showBankPop')" style="float: left;margin-top: 3px;">
            <use xlink:href="#icon-left-arr-gary"></use>
          </svg>
          选择银行卡
        </div>

        <div class="tx-card-box">
          <div class="tx-card-one" v-for="item in 10">
            <span class="tx-card-name">工商银行</span>
            <span class="tx-card-name">尾号：1987</span>
          </div>
        </div>

    </mt-popup>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Popup } from 'mint-ui';
    import bankIcon from "./../assets/js/bankicon"

    Vue.component(Popup.name, Popup);
    export default {
        name:"js-ny-ybtx-tx",
        data(){
            return {
                txMoney:0,
                showBankPop:false
            }
        },
        methods:{
            showPop(str){
                this[str] = !this[str]
            }
        }
    }
</script>
<style>
  .tx-box{
    box-sizing: border-box;
    padding: 10px;
  }
  .tx-cell-one{
    padding: 0 10px;
    background: #fff;
    border-radius: 3px;
  }
  .tx-cell{
    display: flex;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #aaa;
  }
  .tx-cell-left{
    display: flex;
    align-items: center;
  }
  .tx-cell-right{

  }
  .bank-name{
    font-size: 18px;
    font-weight: bold;
  }
  .tx-money{
    box-sizing: border-box;
    height: 49px;
    outline: none;
    border: none;
    line-height: 50px;
    font-size: 16px;
  }
  .tx-btn-comf{
    background: #FB3453;
    color: #fff;
    padding: 8px;
    border-radius: 3px;
    margin-top: 20px;
  }
  .tx-tips-box{
    margin: 10px auto;
    padding-bottom: 10px;
    text-align: left;
    color: #aaa;
    font-size: 14px;
  }
  .yh-pop-box{
    text-align: center;
    margin: 10px;
  }
  .tx-card-one{
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    justify-content: space-between;
  }
  .tx-card-box .tx-card-one:first-child{
    border-top: 1px solid #ddd;
  }
</style>
