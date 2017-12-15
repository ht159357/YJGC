<template>
  <div class="reg-box">
    <div class="reg-back" :style="regBackClass">
      <p class="reg-title">美甲师注册</p>
    </div>
    <div class="reg-info-box">

      <div class="reg-cell-boxone">
        <input class="reg-input" type="text" placeholder="请输入您的姓名（必填）" v-model.trim="name">
      </div>

      <div class="reg-cell-boxone">
        <input class="reg-input" type="text" placeholder="请输入您的手机号（必填）" v-model.trim="phone">
      </div>
      <div class="reg-cell-boxone">
        <input class="reg-input reg-sm-input" type="text" placeholder="验证码（必填）" id="yzm" v-model.trim="veriCode">
        <div class="reg-get-yzm" :class="[{'reg-get-yzm-dis':yzmState}]" @click="getYzm">
          获取验证码
          <span v-if="yzmState">({{yzmTime}})</span>
        </div>
      </div>
      <div class="reg-cell-boxone">
        <input class="reg-input" type="text" placeholder="请输入您的身份证号（必填）" v-model.trim="id_number">
      </div>
      <div class="reg-cell-boxone">
        <input class="reg-input" type="text" placeholder="备注" v-model.trim="remark">
      </div>
      <div class="reg-agreat">
        <label><input type="checkbox" class="reg-check" v-model="ireader">我已阅读并同意</label>
        <span class="reg-xy" @click="showOrHideModel"> 《颜匠工场美甲师注册协议》</span>
      </div>

    </div>
    <div class="reg-btn" @click="register">
      注册
    </div>

    <mt-popup class="reg-need-know"
      v-model="popupVisible" position="right" style="right: 5%;">
      <div class="modal-title">
        {{ notice.title }}
      </div>
      <div class="agree-book-box">
        <div class="agree-book">
          {{ notice.know_answer }}
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
  import { InfiniteScroll } from 'mint-ui';
  import { Popup } from 'mint-ui';
//  import wx from 'weixin-js-sdk';
  import axios from 'axios';
  import commjs from "./../assets/js/commFunction";
  import { Toast } from 'mint-ui';
  import { MessageBox } from 'mint-ui';

  Vue.component(Popup.name, Popup);
  Vue.component(Loadmore.name, Loadmore);
  Vue.use(InfiniteScroll);
  export default {
      name:"register-jms",
      data(){
          return {
              regBackClass:{
                  "background": "url(" + require('./../assets/img/yanfen_reg.png') +") no-repeat center",
                  "background-size": "100%",
                  "background-position-y": "90%"
              },
              popupVisible: false,
              yzmTime: 60,
              yzmState: false,
              code:null,
              ireader: false,
              cityList:[],
              openId: openId,
              name: "",
              id_number: "",
              phone: "",
              veriCode : "",
//              register_money: "",
//              outlets_num: "",
//              territory_id: "",
              remark: "",
              notice: {},
          }
      },
      methods:{
          showOrHideModel(){
              this.popupVisible = !this.popupVisible;
          },
          getYzm(){//获取验证码
            let self = this;
            let phoneNum = self.phone;
            if( phoneNum === "" || !(/^1[34578]\d{9}$/.test(phoneNum)) ){
              Toast("请输入正确手机号！");
              return;
            }
            axios({
              method: 'post',
              url: httpStr + "/wechat/register/getVeriCode?phone_num="+phoneNum,
            }).then(function(ret){
              if( ret.data.flag === 100 ){
                self.code = ret.data.code;
                self.yzmState = true;
                let timer = setInterval(function(){
                  self.yzmTime--;
                  if( self.yzmTime === 0 ){
                    clearInterval(timer);
                    self.yzmState = false;
                  }
                },1000)
              }else if( ret.data.flag === 104 ){
                Toast("手机号重复！");
              }
            });
          },
          register(){
              let self = this;
              if( !self.name || !self.id_number || !self.phone ){
                  Toast("请填写必填项！");
                  return;
              }else if( !(/^1[34578]\d{9}$/.test(self.phone)) ){
                  Toast("请输入正确的手机号！");
                  return;
              }else if( !(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(self.id_number)) ){
                  Toast("请输入正确的身份证号！");
                  return;
              }else if( !self.ireader ){
                  Toast("请阅读并同意注册协议！");
                  return;
              }else if( self.veriCode !== self.code || self.veriCode === "" ){
                  Toast("验证码不正确！");
                  return;
              }

              axios.post(httpStr+"",{

              }).then(function(ret){
                  console.log(ret.data);
                  if( ret.data.flag === 100 ){
                      MessageBox.alert('注册成功！').then(action => {
//                          self.$router.push("/index");
                      });
                  }else if( ret.data.flag === 104 ){
                      Toast("手机号已被注册！");
                  }else if( ret.data.flag === 103 ){
                      Toast("验证码超时，请重新获取！");
                  }else if( ret.data.flag === 104 ){
                     Toast("您的手机号已经注册！");
                  }else if( ret.data.flag === 102 ){
                     Toast("验证码错误！");
                  }
              })
          }
      },
      created(){
          let self = this;
//          axios({//检测是否已注册
//              method:"post",
//              url:httpStr + "/wechat/register/isAllianceBt",
//              data:{
//                  openId:openId
//              }
//          }).then(function(ret){
//              if(ret.data.has === 1){
//                  self.$router.push("/registed/1");
//              }
//          })
          axios({
              method: 'post',
              url: httpStr + "/wechat/register/getNotice?know_type="+2,
          }).then(function (ret) {
              console.log(ret);
              if( ret.data.flag === 105 ){
                  //Toast("没有获取到须知！");
              }else if( ret.data.flag === 100 ){
                  console.log(ret.data);
                  self.notice = ret.data.notice;
              }
          });
//          axios({//获取城市列表
//              method: 'post',
//              url: httpStr + "/wechat/register/allCity",
//          }).then(function (ret) {
//              if( ret.data.flag === 100 ){
//                  self.cityList = ret.data.list;
//                  self.territory_id = self.cityList[0].territory_id;
//              }
//          });
      }
  }
</script>
<style>
  .reg-back{
    height: 130px;
  }
  .reg-title{
    margin: 0;
    text-align: left;
    padding-top: 52px;
    text-indent: 20px;
    font-size: 20px;
    letter-spacing: 5px;
    color: #fff;
  }
  .reg-info-box{
    padding-top: 3%;
    padding-bottom: 3%;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
  .reg-cell-boxone{
    width: 90%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
  .reg-info-box .reg-input:first-child{
    margin-top: 0;
  }
  .reg-input{
    width: 100%;
    background: #F5F5F5;
    border: 1px solid #E9E8E8;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    text-indent: 15px;
    outline: none;
    appearance: none;
  }
  .reg-input>*{
    flex: 1;
  }
  .reg-phone-box{
    /*width: 90%;*/
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
    margin: 10px 0 0;
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
    height: 16px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }
  .agree-book-box{
    padding: 15px;
    height: calc( 100% - 55px - 52px - 30px );
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
    margin: 10px auto;
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
  .city-box .reg-input{
    flex: 0 0 50%;
    margin: 0;
    height: 34px;
    line-height: 34px;
    background: url("./../assets/img/select-down.png") no-repeat center right 5px,#F5F5F5;
  }
</style>
