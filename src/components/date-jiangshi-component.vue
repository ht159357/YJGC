<template>
  <div class="jiangshi-box">
    <div class="jiangshi-choies-alert">
      <img src="./../assets/img/keaijs.png">
      选择匠师
    </div>
    <!--匠师列表-->
    <!--没有匠师缺省-->
    <div class="jiangshi-no-data" v-if="1">
      该时段没有匠师可以约了(^_^)
    </div>
    <div class="jiangshi-list">
      <!--单个匠师-->
      <div class="jiangshi-one" v-for="(item,index) in 5">
        <div class="jiangshi-header">
          <img v-lazy="require('./../assets/img/js-2.jpg')" class="jiangshi-icon">
        </div>
        <div class="jiangshi-info">
          <div class="jiangshi-box-info">
            <span class="jiangshi-name">莉莉</span>
            <span class="jiangshi-choies" :data-jiangshi="index" :class="[{'jiangshi-choies-active': jiangshiFlag == index}]" @click="jsPikerAtive($event)">选择</span>
          </div>
          <div class="jiangshi-details mint-header-title">
            擅长的手艺:加时,加时,加时,加时,纯色美甲,纯色美甲体验,加时,加时,加时,加时,加时,猫眼美甲,线条款式,美钻款式,加时,加时,简易日系,经典日系,加时,新娘美甲,专属定制,纯色卸甲,美钻卸甲,日系卸甲,美足卸甲
          </div>
          <div class="jiangshi-level">
            <!--星星-->
            <svg class="icon" aria-hidden="true" v-for="item in 5">
              <use xlink:href="#icon-star"></use>
            </svg>
            <!--奖杯-->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiangbei"></use>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
    export default {
        name:"date-jiangshi-component",
        data(){
            return {
                jiangshiFlag: null
            }
        },
        methods:{
            jsPikerAtive(event){
                let self = event.currentTarget;
                let flag = self.getAttribute("data-jiangshi");
                if( this.jiangshiFlag == flag ){
                  this.jiangshiFlag = null;
                    return;
                }
                this.jiangshiFlag = flag;

            },
        }
    }
</script>
<style scoped>
  .jiangshi-icon[lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
</style>
<style>
  .jiangshi-box{
    margin-top: 10px;
    background: #fff;
    text-align: left;
  }
  .jiangshi-choies-alert{
    height: 20px;
    line-height: 20px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .jiangshi-choies-alert img{
    width: 20px;
    vertical-align: -5px;
  }
  .jiangshi-no-data{
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding: 40px 0;
    color: #ccc;
  }
  .jiangshi-list{
    width: 100%;
  }
  .jiangshi-one{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .jiangshi-header{
    flex: 0 0 20%;
    text-align: center;
    padding: 0 3%;
  }
  .jiangshi-icon{
    width: 100%;
    max-width: 80px;
    border-radius: 50%;
  }
  .jiangshi-info{
    flex: 0 0 70%;
    width: 70%;
  }
  .jiangshi-box-info{
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
  .jiangshi-name{
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }
  .jiangshi-choies{
    border:1px solid #FB3453;
    color: #FB3453;
    padding: 2px 15px;
    border-radius: 4px;
  }
  .jiangshi-details{
    margin-top: 5px;
  }
  .jiangshi-level{
    margin-top: 10px;
  }
  .jiangshi-choies-active{
    background: #FC3353;
    color: #fff;
  }
</style>
