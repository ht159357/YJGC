<template>
  <div class="yb-app">
    <!--<div class="yb-top-title">-->
      <!--<span class="yb-top-time">2017-09</span>-->
      <!--<span class="yb-top-money">消费&yen;0</span>-->
    <!--</div>-->
    <!--<mt-loadmore :top-method="loadTop" ref="loadmore" class="yb-list">-->
      <!--<ul v-infinite-scroll="loadMore"-->
          <!--infinite-scroll-disabled="loading"-->
          <!--infinite-scroll-distance="20">-->
        <!--<li v-for="item in list">-->
          <!--<div class="yb-one-list" v-for="item in 3">-->
            <!--<div class="yb-img">-->
              <!--<img src="./../assets/img/yb-add.png">-->
            <!--</div>-->
            <!--<div class="yb-detail">-->
              <!--<span class="yb-detail-title">充值</span><br>-->
              <!--<span class="yb-detail-time">09/29 17:51</span>-->
            <!--</div>-->
            <!--<div class="yb-money">-->
              <!--+6699-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->

          <!--<div class="jis-loadmore" v-show="loading">-->
            <!--<mt-spinner color="#FB3453" type="triple-bounce"></mt-spinner>-->
          <!--</div>-->
    <!--</mt-loadmore>-->
    <div>
      <div class="yb-top-title">
        <span class="yb-top-time">2017-09</span>
        <span class="yb-top-money">消费&yen;0</span>
      </div>

      <div class="yb-one-list" v-for="item in 3">
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
    </div>

    <!--暂时不用-->
    <!--<router-link to="/yanfen520" class="tobe-yanfen520-box router-link">-->
      <!--<div class="tobe-yanfen520">-->
        <!--成为520颜粉-->
      <!--</div>-->
    <!--</router-link>-->
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Loadmore } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';

  Vue.component(Loadmore.name, Loadmore);
  Vue.use(InfiniteScroll);
  export default {
      name:"my-yanbi",
      data(){
          return {
              list:[1,2,3,4,5,6,7,8,9,10],
              loading: false
          }
      },
      methods:{
          loadTop(){
              let refersh= this.$refs.loadmore;
              setTimeout(function(){
                  // 加载更多数据
                  refersh.onTopLoaded();
              },1000)
          },
          loadMore(){
              this.loading = true;
              setTimeout(() => {
                  let last = this.list[this.list.length - 1];
                  for (let i = 1; i <= 10; i++) {
                      this.list.push( i );
                  }
                  this.loading = false;
              }, 100000);
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
  .jis-loadmore{
    text-align: center;
    width: 100%;
    padding: 10px 0;
  }
  .tobe-yanfen520-box{
    position: fixed;
    left: 0;
    background: #fff;
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
    margin: 10px auto;
    border-radius: 5px;
  }
  .yb-list{
    margin-bottom: 45px;
  }
  .yb-top-title{
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #888;
    justify-content: space-between;
  }
</style>
