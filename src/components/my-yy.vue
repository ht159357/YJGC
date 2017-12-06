<template>
  <div class="myyy-box">
    <!--无预约缺省-->
    <div class="no-yy-box" v-if="!hasData">
      <img class="no-yy-logo" src="./../assets/img/yjgc-logo.png">
      <p class="no-yy-title">美妆服务搬运工 | 美妆创业者孵化器</p>
      <img class="no-yy-data" src="./../assets/img/no-yy.png" alt="">
      <p class="no-yy-sorry">对不起！</p>
      <p class="no-yy-details">您尚未预约任何项目...</p>
    </div>

    <div class="myyy-one-box" v-for="item in 5">
      <div class="myyy-js-icon">
        <img src="./../assets/img/js-2.jpg">
      </div>
      <div class="myyy-info-box">
        <div class="myyy-top-box">
          <span class="myyy-box-left">河西万达店：生活妆</span>
          <span class="myyy-box-right">未支付</span>
        </div>
        <div class="myyy-bottom-box">赵娜娜</div>
      </div>
      <div class="myyy-options-box">
        <span class="myyy-time-box"><svg class="icon icon-yy-time" aria-hidden="true">
          <use xlink:href="#icon-time"></use>
        </svg>05-15 10:30</span>
        <div class="myyy-btn-box">
          <div class="myyy-btn myyy-btn-cancel">取消订单</div>
          <div v-if="0" class="myyy-btn myyy-btn-yes">付款</div>
          <!--杂项-->
          <div v-if="0" class="myyy-btn myyy-btn-cancel">取消订单</div>
          <div v-if="0" class="myyy-btn myyy-btn-yes">增项付费</div>

          <div v-if="0" class="myyy-btn myyy-btn-cancel">投诉售后</div>
          <router-link to="/commentBill" class="myyy-btn myyy-btn-yes router-link">评价</router-link>

          <div v-if="0" class="myyy-btn myyy-btn-cancel">投诉售后</div>
          <div v-if="0" class="myyy-btn myyy-btn-cancel">删除订单</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
    import axios from "axios";

    export default {
        name:"my-yy",
        data(){
            return {
                hasData:true,
            }
        },
        beforeCreate(){
            let self = this;
            axios.post(httpStr+"/artisan/selectByAppointment",{
                openId:openId
            }).then((ret)=>{
                let data = ret.data;
                console.log(data);
            })
        }
    }
</script>
<style>
  .myyy-box{

  }
  .no-yy-box{
    padding-top: 40px;
  }
  .no-yy-logo{
    width: 50%;
  }
  .no-yy-title{
    font-weight: bold;
  }
  .no-yy-data{
    width: 50%;
    margin-top: 50px;
  }
  .no-yy-sorry{
    font-size: 18px;
    color: #FB3453;
    font-weight: bold;
  }
  .myyy-one-box{
    background: #fff;
    margin: 5px;
    display: flex;
    padding: 5px;
    flex-wrap: wrap;
  }
  .myyy-box .myyy-one-box:first-child{
    margin-top: 54px;
  }
  .myyy-box .myyy-one-box{
    margin-top: 10px;
  }
  .myyy-js-icon{
    width: 70px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
  }
  .myyy-js-icon img{
    width: 60px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .myyy-info-box{
    flex: 1;
    text-align: left;
    /*padding-left: 5px;*/
    padding-bottom: 5px;
  }
  .myyy-top-box{
    height: 24px;
    line-height: 24px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
  }
  .myyy-box-left{
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
  }
  .myyy-box-right{
    display: inline-block;
    border: 1px solid #A9D0EF;
    background: #D6EAF9;
    color: #0087CB;
    border-radius: 4px;
    padding: 0 10px;
    margin-right: 4px;
    position: relative;
  }
  .myyy-box-right:before{
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: -4px;
    background: #fff;
    border-right: 1px solid #A9D0EF;
    border-bottom: 1px solid #A9D0EF;
    transform: rotate(-45deg);
  }
  .myyy-box-right:after{
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: -4px;
    background: #fff;
    border-left: 1px solid #A9D0EF;
    border-top: 1px solid #A9D0EF;
    transform: rotate(-45deg);
  }
  .myyy-bottom-box{
    height: 24px;
    line-height: 24px;
    padding: 5px 0;
    color: #384649;
  }
  .myyy-options-box{
    flex: 0 0 100%;
    text-align: left;
    padding: 10px 0 5px;
    border-top: 1px solid #F4F2F3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-yy-time{
    margin-right: 5px;
  }
  .myyy-time-box{
    color: #5A6466;
    width: 110px;

  }
  .myyy-btn-box{
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
  .myyy-btn-box .myyy-btn:first-child{
    margin-left: 0;
  }
  .myyy-btn{
    width: 80px;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    padding: 5px 5px;
    margin-left: 5px;
  }
  .myyy-btn-cancel{
    background: #B0B0B0;
  }
  .myyy-btn-yes{
    background: #E83951;
  }
</style>
