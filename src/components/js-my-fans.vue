<template>
  <div class="js-my-yy-box">
    <div class="js-my-search-box">
      <input type="text" placeholder="请输入姓名/手机号搜索">
      <img class="js-my-search-img" src="./../assets/img/vjb-search.png">
    </div>
    <div class="js-my-target-box">
      <div class="js-my-target active">消费最多</div>
      <div class="js-my-target">活跃颜粉</div>
      <div class="js-my-target">僵尸粉</div>
    </div>
    <div class="js-myyy-list">

      <div class="js-myyy-list-one" v-for="item in 10">
        <img src="./../assets/img/phone-order.png">
        <p class="js-myyy-list-title">锐萌萌(22次)</p>
        <div class="js-myyy-list-price" @click="showPop('id')">&yen;2101.03</div>
      </div>

    </div>
    <!--悬浮按钮-->
    <div class="tsxx" @click="showTsPop">
      推送消息
    </div>
    <!--推送消息弹层-->
    <mt-popup style="width: 100%;max-height: 80%;overflow-y: auto;box-sizing: border-box;"
              v-model="tsPop"
              position="top">
      <div class="ts-btn">
        消息推送
      </div>
      <input type="text" class="xxts-title" placeholder="请输入消息标题">
      <input type="text" class="xxts-title" placeholder="不发留空">
      <textarea style="min-height: 64px;" class="xxts-title" placeholder="请填写您要发送的信息"></textarea>
      <div class="xxts-bottom-box">
        <span class="ts-btn">提交</span>
        <span class="my-yue">我的余额：100</span>
      </div>
    </mt-popup>
    <!--查询消费明细弹层-->
    <mt-popup style="width: 70%;max-height: 80%;overflow-y: auto;"
      v-model="xfDetailsPop"
      position="center"
      popup-transition="popup-fade">
      <div class="xf-header">消费明细</div>
      <div class="xf-info-box" v-for="item in 10">
        <div class="xf-img-box">
          <img src="./../assets/img/yhq.jpg">
        </div>
        <div class="xf-info">
          <p>水貂美睫</p>
          <p>2017-04-06</p>
        </div>
        <div class="xf-money">
          &yen;0
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
    import Vue from 'vue';
    import { Popup } from 'mint-ui';
    import { Button } from 'mint-ui';

    Vue.component(Button.name, Button);
    Vue.component(Popup.name, Popup);
    export default {
        name: "js-my-yy",
        data(){
            return {
                xfDetailsPop: false,
                tsPop: false,
            }
        },
        methods:{
            showPop(id){
                let self = this;
                console.log(id);
                self.xfDetailsPop = !self.xfDetailsPop;
            },
            showTsPop(){
                let self = this;
                self.tsPop = !self.tsPop;

            }
        }
    }
</script>
<style>
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
  }
  .js-my-target-box{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px;
    background: #fff;
  }
  .js-my-target{
    width: auto;
    font-size: 12px;
    padding: 5px 15px;
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
    padding: 10px 10px 10px 20px;
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
    text-align: left;
    margin: 5px;
    flex: 1;
  }
  .js-myyy-list-price{
    max-width: 100px;
    border: 1px solid #FC3353;
    color: #FC3353;
    padding: 3px 10px;
    background: #FDE3ED;
    border-radius: 4px;
  }
  .tsxx{
    width: 18px;
    border-radius: 3px;
    padding: 0 2px;
    font-size: 14px;
    background: #ddd;
    color: #fff;
    position: fixed;
    left:0;
    top: 50%;
  }
  .xf-header{
    font-size: 14px;
    padding: 10px 0;
    font-weight: bold;
    background: #FB3453;
    color: #fff;
  }
  .xf-info-box{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
  .xf-img-box{
    width: 20px;
    padding: 5px 0;
    margin-left: 10px;
  }
  .xf-img-box img{
    width: 100%;
  }
  .xf-info{
    text-align: left;
    flex: 1;
    font-size: 12px;
    padding-left: 10px;
  }
  .xf-info p{
    margin: 2px auto;
  }
  .xf-money{
    width: 50px;
    font-size: 12px;
    text-align: right;
    margin-right: 10px;
  }
  .ts-btn{
    background: #FB3453;
    color: #fff;
    display: inline-block;
    border-radius: 4px;
    padding: 3px 10px;
    font-size: 14px;
    margin: 10px auto;
  }
  .xxts-title{
    display: block;
    width: 90%;
    margin: 10px auto;
    outline: none;
    border-radius: 3px;
    border:1px solid #ddd;
    padding: 10px 10px;
    box-sizing: border-box;
  }
  .xxts-bottom-box{
    width: 90%;
    margin: 0 auto;
    text-align: left;
  }
  .my-yue{
    background: #FB3453;
    color: #fff;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 12px;
  }
  .xxts-bottom-box .ts-btn{
    margin: 0 auto 10px;
  }
</style>
