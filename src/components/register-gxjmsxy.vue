<template>
  <div class="reg-box">
    <div class="modal-title">
      注册须知
      </div>
    <div class="agree-book-box">
      <div class="agree-book">
        注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知注册须知
      </div>
    </div>
    <div class="reg-agreat">
      <label><input type="checkbox" class="reg-check" v-model="ireader">我已阅读并同意</label>
    </div>
    <div class="i-readed" @click="nextStep">
      我已阅读，并同意
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { Toast } from 'mint-ui';

  export default {
      name:"register-gxjmsxy",
      data(){
          return {
              ireader : false
          }
      },
      methods:{
          nextStep(){
              if( !this.ireader ){
                  Toast('请阅读并同意注册协议！');
              }else{
                  this.$router.push("/registerGxjms");
              }
          }
      },
      beforeCreate(){
          let self = this;
          axios({
              method:"post",
              url:httpStr + "/wechat/register/isShareFranchBt",
              data:{
                wechat_id:openId
              }
          }).then(function(ret){
              if( ret.data.flag === 100 ){
                  if(ret.data.has === 1){
                      self.$router.push("/registed/2");
                  }
              }
          })
          self.$store.state.showHeader = false;
      }
  }
</script>
<style scoped>
  .reg-box{
    padding: 0 2%;
  }
</style>
<style>
  .modal-title{
    padding: 15px;
    font-weight: bold;
    height: 16px;
    font-size: 16px;
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
  .i-readed{
     width: 90%;
     height: 35px;
     line-height: 35px;
     background: #FB6FAE;
     color: #fff;
     margin: 15px auto;
     border-radius: 5px;
  }
  .reg-agreat{
    width: 90%;;
    text-align: left;
    margin: 10px 0 0;
    text-indent: 5%;
    font-size: 14px;
  }
  .reg-check{
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
</style>
