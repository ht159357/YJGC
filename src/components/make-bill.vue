<template>
  <div class="bill-box">
    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key">
        选择发票类型
      </div>
      <mt-radio
        v-model="billType"
        :options="optionsBillType">
      </mt-radio>
    </div>
    <p style="text-indent: 10px">
      发票详情
    </p>
    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key">
        抬头类型
      </div>
      <mt-radio
        v-model="headerType"
        :options="optionsHeaderType">
      </mt-radio>
    </div>

    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key">
        发票抬头
      </div>
      <div class="bill-box-value">
        <input placeholder="输入发票抬头" type="text" class="bill-input">
      </div>
    </div>

    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key">
        纳税人识别号
      </div>
      <div class="bill-box-value">
        <input placeholder="请输入纳税人识别号" type="text" class="bill-input">
      </div>
    </div>

    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key bill-cell-key-money">
        发票内容
      </div>
      <div class="bill-box-value" style="flex: 1;">
        <input placeholder="服务" type="text" class="bill-input bill-disable" style="background: #D9D9D9;text-indent: 10px;" disabled>
      </div>
    </div>

    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key bill-cell-key-money">
        发票金额
      </div>
      <div class="bill-box-value" style="flex: 1;">
        <input placeholder="58" type="text" class="bill-input bill-disable" style="background: #D9D9D9;text-indent: 10px;" disabled>
      </div>
    </div>

    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key">
        备注说明
      </div>
      <div class="bill-box-value">
        <input placeholder="请输入备注说明" type="text" class="bill-input">
      </div>
    </div>

  </div>
</template>
<script>
    import Vue from 'vue';
    import { Radio } from 'mint-ui';

    Vue.component(Radio.name, Radio);
    export default {
        name:"makeBill",
        data(){
            return {
                billType:"zzfp",
                optionsBillType : [{
                  label: '电子发票',
                  value: 'dzfp',
                  disabled: true
                },{
                  label: '纸质发票',
                  value: 'zzfp'
                }],
                headerType:"grfp",
                optionsHeaderType : [{
                  label: '个人抬头',
                  value: 'grfp'
                },{
                  label: '公司抬头',
                  value: 'gsfp'
                }],
            }
        }
    }
</script>
<style>
  .bill-box{
    text-align: left;
    font-size: 12px;
  }
  .bill-box-title{
    border-bottom: 1px solid #E5E5E5;
  }
  .bill-box-one{
    display: flex;
    background: #fff;
    height: 52px;
    line-height: 52px;
  }
  .bill-cell-key{
    display: inline-block;
    height: 52px;
    line-height: 52px;
    padding: 0 10px;
  }
  .bill-box-title .mint-cell-wrapper{
    background: none;
  }
  .bill-box-title .mint-cell{
    background: none;
  }
  a.mint-cell{
    display: flex;
    flex: 1;
    padding: 0;
  }
  div.mint-radiolist{
    display: flex;
  }
  label.mint-radiolist-title{
    display: none;
  }
  div.mint-cell-wrapper{
    font-size: 12px;
  }
  label.mint-radiolist-label{
    padding: 0;
  }
  .bill-input{
    border: none;
    outline: none;
    height: 75%;
    text-indent: 10px;
  }
  .bill-cell-key-money{
    width: 70px;
  }
  .bill-disable{
    width: 95%;
  }
  input.mint-radio-input:checked + .mint-radio-core {
    background-color: #fb3453;
    border-color: #fb3453;
  }
</style>
