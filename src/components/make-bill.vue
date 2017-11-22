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
        v-model="billType"
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
      <div class="bill-box-value" style="flex: 1;background: #D9D9D9;">
        <input placeholder="服务" type="text" class="bill-input" style="background: #D9D9D9;text-indent: 10px;">
      </div>
    </div>

    <div class="bill-box-one bill-box-title">
      <div class="bill-cell-key bill-cell-key-money">
        发票金额
      </div>
      <div class="bill-box-value" style="flex: 1;background: #D9D9D9;">
        <input placeholder="58" type="text" class="bill-input" style="background: #D9D9D9;text-indent: 10px;">
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
                billType:"",
                optionsBillType : [{
                  label: '电子发票',
                  value: 'dz',
                  disabled: true
                },{
                  label: '纸质发票',
                  value: 'zz'
                }],
                headerType:"",
                optionsHeaderType : [{
                  label: '公司抬头',
                  value: 'gs',
                  disabled: true
                },{
                  label: '个人抬头',
                  value: 'gr'
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
  .mint-cell{
    display: flex;
    flex: 1;
    padding: 0;
  }
  .mint-radiolist{
    display: flex;
  }
  .mint-radiolist-title{
    display: none;
  }
  .mint-cell-wrapper{
    font-size: 12px;
  }
  .mint-radiolist-label{
    padding: 0;
  }
  .bill-input{
    border: none;
    outline: none;
  }
  .bill-cell-key-money{
    width: 70px;
  }
</style>
