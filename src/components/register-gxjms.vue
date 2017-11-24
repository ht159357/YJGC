<template>
  <div class="reg-box">
    <div class="gxjms-box">
      <div class="select-box">
        <div class="select-box-one">
          地点
          <select class="reg-input" :style="selectBackClass">
            <option>南京市</option>
          </select>
        </div>
        <div class="select-box-one">
          店铺
          <select class="reg-input" :style="selectBackClass">
            <option>万达店</option>
          </select>
        </div>
      </div>
      <div class="gxjms-info-box">
        <div>桌子</div>
        <div class="gxjms-tabel-box">
          <div class="gxjms-tabel-one" v-for="(item,index) in 11">
            <div class="cs-active" v-if="index%2 === 1 ">
              <div class="active-content">售</div>
            </div>
            <div class="jz-active" v-else>
              <div class="active-content">禁</div>
            </div>

            <img class="table-img" src="./../assets/img/table-2.png"  v-if="index%3 === 0 ">
            <img class="table-img" src="./../assets/img/table-1.png" v-else>

            <div class="table-info-box" v-if="index%3 === 0">
              <div class="table-title-js">禁售商品</div>
            </div>
            <div class="table-info-box"  v-else-if="index%3 === 1">
              <div class="table-title">价格</div>
              <div class="table-price">3000元</div>
            </div>
            <div class="table-info-box" v-else>
              <div class="table-title-ys">已售</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      name:"register-gxjms",
      data(){
          return {
              selectBackClass:{
                  "background": 'url("'+ require('./../assets/img/select-down.png')+'") no-repeat right center',
                  "background-size": "12px"
              }
          }
      },
      methods:{

      },
      created(){

      }
  }
</script>
<style scoped>
  .reg-box{
    box-sizing: border-box;
    color: #000;
    font-size: 14px;
  }
  .reg-input{
    width: 80px;
    font-size: 14px;
    background: #F7F5F5;
    border: none;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    text-indent: 15px;
    outline: none;
    appearance: none;
    margin-left: 5%;
    color: #898989;
  }
</style>
<style>
  .select-box{
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .select-box-one{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5%;
  }
  .gxjms-info-box{
    text-align: left;
    padding: 0 5px;
  }
  .gxjms-tabel-box{
    display: flex;
    justify-content: space-around;
    padding-top: 5%;
    flex-wrap: wrap;
  }
  .gxjms-tabel-one{
    margin-top: 15px;
    margin-left: 3px;
    background: #fff;
    border-radius: 5px;
    width: 100px;
    height: 120px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .cs-active{
    font-weight: bold;
    width: 50px;
    height: 50px;
    line-height: 78px;
    color: #EDCB32;
    transform: rotate(45deg);
    background: #D64E5A;
    position: absolute;
    right: -25px;
    top: -25px;
  }
  .active-content{
    transform: rotate(-45deg);
  }
  .gxjms-tabel-one .jz-active{
    font-weight: bold;
    width: 50px;
    height: 50px;
    line-height: 78px;
    color: #fff;
    transform: rotate(45deg);
    background: #CCCCCC;
    position: absolute;
    right: -25px;
    top: -25px;
  }
  .gxjms-tabel-one.jz{

  }
  .table-img{
    width: 60%;
    margin-top: 25px;
  }
  .table-info-box{
    display: flex;
    height: 30px;
    line-height: 30px;
    background: #D64E5A;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    justify-content: space-around;
  }
  .table-title-ys{
     width: 100%;
     color: #D64E5A;
     background: #F4DADD;
  }
  .table-title-js{
    width: 100%;
    color: #fff;
    background: #CCC;
  }
</style>
