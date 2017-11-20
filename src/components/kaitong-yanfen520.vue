<template>
  <div class="yf520-box">
    <span class="yf520-title">成为520颜粉</span>
    <div class="yf520-options-box">
      <div class="yf520-option" :class="[{'yf520-option-active':isActive}]" @click="showActive">
        <span>520</span><br>
        <span>元</span>
      </div>
    </div>

    <div class="tobe-yanfen520-box router-link">
      <div class="tobe-yanfen520" @click="checkYanfen">
        成为520颜粉
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  import { MessageBox } from 'mint-ui';

  export default {
      name:"ktYanfen",
      data(){
          return {
              isActive:false
          }
      },
      methods:{
          showActive(){
              this.isActive = !this.isActive;
          },
          checkYanfen(){
              if( this.isActive === false ){
                  Toast({
                      message: '请选择颜粉~',
                      duration: 2000,
                  });
              }else if( this.isActive === true ){
                  MessageBox.confirm('您确定支付520元购买颜币？').then(
                      action => {
                          //确认回调

                      }
                  );
              }
          }
      }
  }
</script>
<style>
  .yf520-box{
    text-align: left;
    padding: 10px;
  }
  .yf520-title{
    font-weight: bold;
  }
  .yf520-options-box{
    padding: 15px 0;
  }
  .yf520-option{
    text-align: center;
    display: inline-block;
    padding: 15px 30px;
    border: 1px solid #bbb;
    border-radius: 5px;
    font-weight: bold;
  }
  .yf520-option-active{
    color: rgb(251,52,83);
    border: 1px solid rgb(251,52,83);
  }
  .tobe-yanfen520-box{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .tobe-yanfen520{
    height: 35px;
    line-height: 35px;
    background: #FB3453;
    color: #fff;
    text-align: center;
    width: 90%;
    margin: 0 auto 10px;
    border-radius: 5px;
  }
</style>
