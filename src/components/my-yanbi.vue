<template>
  <div class="yb-app">
    <mt-cell class="yb-top-title" :title="'2017-09'" :value="'说明文字'"></mt-cell>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" class="yb-list">

      <div class="yb-one-list" v-for="item in 10">
        <div class="yb-img">
          <img src="./../assets/img/yb-add.png">
        </div>
        <div class="yb-detail">
          <span class="yb-detail-title">充值</span><br>
          <span class="yb-detail-time">09/29 17:51</span>
        </div>
        <div class="yb-money">
          +6699
        </div>
      </div>

    </mt-loadmore>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Loadmore } from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);
  export default {
      name:"my-yanbi",
      data(){
          return {
              allLoaded:false,
          }
      },
      methods:{
          loadTop(){
              setTimeout(function(){
                  // 加载更多数据
                  this.$refs.loadmore.onTopLoaded();
              },1000)
          },
          loadBottom(){

            // 加载更多数据
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
          }
      }
  }
</script>
<style>
  .yb-app{
    text-align: left;
    background: #fff;
  }
  .yb-top-title{
    border-bottom: 1px solid #EEE;
  }
  .mint-cell-text{
    font-size: 14px;
  }
  .mint-cell-value{
    font-size: 14px;
  }
  .yb-one-list{
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #EEE;
  }
  .yb-img{
    flex: 0 0 25%;
    text-align: center;
  }
  .yb-img img{
    max-width: 40px;
  }
  .yb-detail{
    flex: 0 0 50%;
  }
  .yb-detail-title{
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
  }
  .yb-detail-time{
    display: inline-block;
    font-size: 14px;
    color: #aaa;
    margin-top: 10px;
  }
  .yb-money{
    flex: 0 0 25%;
    font-size: 16px;
    font-weight: bold;
  }
</style>
