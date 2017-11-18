<template>
  <div class="jt-box">
    <!--单一匠师-->
    <div class="jt-box-one" v-for="(item3,jsindex) in 3">
      <div class="jt-left-box">
        <div class="jt-icon-box">
          <img class="jt-icon" v-lazy="require('./../assets/img/js-2.jpg')">
        </div>
        <span class="jt-name">莉莉</span>
      </div>
      <div class="jt-right-box">
        <!--轮播-->
        <div class="mint-swipe-container" style="height: 130px;">
          <mt-swipe :auto="0">
            <mt-swipe-item class="mint-swipe-item" v-for="(item2,swiperindex) in 3" :key="swiperindex">
              <div class="date-time-box">
                <div class="date-time-one" v-for="(item,index) in 9"
                     @click="timePikerAtive($event,jsindex,swiperindex)"
                     :time-flag="index">
                  <div class="date-date-time" :class="[{'date-date-time-active' : index == timeFlag && jsindex == jsFlag && swiperindex == swiperFlag }]">
                    10:00
                  </div>
                </div>
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'mint-ui';

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
        name:"time-jiangshi-component",
        data(){
            return{
                timeFlag: null,
                jsFlag: null,
                swiperFlag: null,
            }
        },
        methods:{
            timePikerAtive(event,jsflag,swiperflag){
                let self = event.currentTarget;
                this.timeFlag = self.getAttribute("time-flag");
                this.jsFlag = jsflag;
                this.swiperFlag = swiperflag;
            }
        }
    }
</script>
<style scoped>
  .mint-swipe-item{
    background: #fff;
  }
  .jt-icon[lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  .date-time-box{
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .date-time-one{
    color: #2C2D2D;
    font-weight: bold;
    align-items: center;
    flex: 0 0 33%;
    text-align: center;
    padding:5px 0;
  }
  .date-date-time{
    height: 20px;
    line-height: 20px;
    padding: 2px 8px;
    display: inline-block;
  }
  .date-date-time-active{
    background: #FD3353;
    color: #fff;
    border-radius: 14px;
  }
</style>
<style>
  .jt-box{
    background: #fff;
  }
  .jt-box-one{
    display: flex;
    border-bottom: 1px solid #D6D9DC;
  }
  .jt-left-box{
    flex: 0 0 30%;
    padding: 10px 0;
    border-right: 1px solid #D6D9DC;

  }
  .jt-icon{
    width: 75%;
    border-radius: 50%;
  }
  .jt-name{
    font-size: 14px;
    font-weight: bold;
  }
  .jt-right-box{
    flex: 0 0 69%;
  }
</style>
