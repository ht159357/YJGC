<template>
  <div class="reg-box">
    <div class="reg-back">
      <p class="reg-title">颜粉注册</p>
    </div>
    <div class="reg-info-box">
      <input class="reg-input" type="text" placeholder="请输入您的姓名（必填）">
      <input class="reg-input" type="text" placeholder="请输入您的手机号（必填）">
      <div class="reg-phone-box">
        <input class="reg-input reg-sm-input" type="text" placeholder="验证码（必填）">
        <div class="reg-get-yzm" :class="[{'reg-get-yzm-dis':yzmState}]" @click="getYzm">
          获取验证码
          <span v-if="yzmState">({{yzmTime}})</span>
        </div>
      </div>
      <select class="reg-input">
        <option>新百店</option>
        <option>南京店</option>
        <option>上海店</option>
      </select>
      <select class="reg-input">
        <option>会员</option>
        <option>颜粉</option>
      </select>
      <div class="reg-agreat">
        <label><input type="checkbox" class="reg-check">我已阅读并同意</label>
        <span class="reg-xy" @click="showOrHideModel"> 《颜匠工场注册协议》</span>
      </div>
    </div>
    <div class="reg-btn">
      颜粉注册
    </div>

    <mt-popup class="reg-need-know"
      v-model="popupVisible" position="right">
      <div class="modal-title">
        颜匠工场注册协议
      </div>
      <div class="agree-book-box">
        <div class="agree-book">
          <h4 style="text-align: center;color:#000;">用户注册协议</h4>
          <h5>一、总则</h5>
          1.1 颜匠工场微信预约平台的所有权和运营权归南京我秀我妆网络科技有限公司所有。<br>
          1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与颜匠工场微信预约平台之间自动形成协议关系，用户应当受本协议的约束。
          <h5>二、服务内容</h5>
          2.1 注册成功的用户，可在颜匠工场微信预约平台对想要体验的服务项目进行预约。
          <h5>三、使用规则</h5>
          3.1颜粉卡有效期限为一年，一人一卡，不可转借他人使用。<br>
          3.2 注册成功的用户，在颜匠工场微信预约平台进行预约时，请准时到达。若不能准时到达，则预约名额只保留10分钟。10分钟一过，则需要排队等位或者重新预约新的时间。<br>
          3.3 若一年之内出现三次迟到，并且未提前告知的情况，则颜匠工场可单方面解除其会员资格。<br>
          3.4 用户在预约成功后，在服务开始72小时-24小时前取消预约可退还50%的预约项目款项，24小时内取消的预约，相应款项不予退还。
          <h5>四、隐私保护</h5>
          4.1 本平台不对外公开或向第三方提供单个用户的注册资料及用户在使用预约服务时存储在本平台的非公开内容，但下列情况除外：<br>
          (1) 事先获得用户的明确授权；<br>
          (2) 根据有关的法律法规要求；<br>
          (3) 按照相关政府主管部门的要求；<br>
          (4) 为维护社会公众的利益。<br>
          4.2 在不透露单个用户隐私资料的前提下，本平台有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。<br>
          <h5>五、附则</h5>
          5.1 本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。<br>
          5.2 本协议解释权及修订权归南京我秀我妆网络科技有限公司所有。
        </div>
      </div>
      <div class="i-readed" @click="showOrHideModel">
        我已阅读
      </div>
    </mt-popup>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Loadmore } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';import { Popup } from 'mint-ui';

  Vue.component(Popup.name, Popup);
  Vue.component(Loadmore.name, Loadmore);
  Vue.use(InfiniteScroll);
  export default {
      name:"register",
      data(){
          return {
              popupVisible: false,
              yzmTime: 60,
              yzmState: false,
          }
      },
      methods:{
          showOrHideModel(){
              this.popupVisible = !this.popupVisible;
          },
          getYzm(){
              this.yzmState = true;
              let self = this;
              let timer = setInterval(function(){
                  self.yzmTime--;
                  if( self.yzmTime == 0 ){
                      clearInterval(timer);
                      self.yzmState = false;
                  }
              },1000)
          }
      }
  }
</script>
<style>
  .reg-back{
    height: 130px;
    background: url("./../assets/img/yanfen_reg.png") no-repeat center;
    background-size: 100%;
    background-position-y: -50px;
  }
  .reg-title{
    margin: 0;
    text-align: left;
    padding-top: 50px;
    text-indent: 20px;
    font-size: 20px;
    letter-spacing: 5px;
    color: #fff;
  }
  .reg-info-box{
    padding-top: 20px;
    padding-bottom: 20px;
    background: #fff;
  }
  .reg-info-box .reg-input:first-child{
    margin-top: 0;
  }
  .reg-input{
    width: 90%;
    background: #F5F5F5;
    border: 1px solid #E9E8E8;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    text-indent: 15px;
    margin-top: 10px;
    outline: none;
  }
  .reg-phone-box{
    width: 90%;
    margin: 10px auto 0;
    display: flex;
    justify-content: space-between;
  }
  .reg-sm-input{
    flex: 0 0 50%;
  }
  .reg-get-yzm{
    background: #F680B0;
    color: #fff;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    padding: 2px 10px;
    font-size: 14px;
  }
  .reg-agreat{
    width: 90%;
    text-align: left;
    margin: 10px auto 0;
    font-size: 14px;
  }
  .reg-check{
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  .reg-xy{
    color: #F680B0;
  }
  .reg-need-know{
    width: 90%;
    height: 70%;
    right: 5%;
    border-radius: 8px;
  }
  .modal-title{
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }
  .agree-book-box{
    padding: 15px;
    height: 65%;
    overflow: scroll;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
  }
  .agree-book{
    font-size: 14px;
    overflow-y: scroll;
    height: 100%;
  }
  .agree-book-box h1,.agree-book-box h2,.agree-book-box h3,.agree-book-box h4,.agree-book-box h6{
    margin: 0;
  }
  .agree-book-box h4{
    font-size: 18px;
    font-weight: normal;
  }
  .agree-book-box h5{
    margin: 10px 0;
    font-size: 16px;
    font-weight: normal;
  }
  .i-readed{
    width: 90%;
    height: 35px;
    line-height: 35px;
    background: #FB6FAE;
    color: #fff;
    margin: 10px auto 0;
    border-radius: 5px;
  }
  .reg-btn{
    background: #E83951;
    width: 90%;
    height: 40px;
    line-height: 40px;
    margin: 10px auto;
    color: #fff;
    border-radius: 5px;
  }
  .reg-get-yzm-dis{
    background: #D4D4D4;
  }
</style>
