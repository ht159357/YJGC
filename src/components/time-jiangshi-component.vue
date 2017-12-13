<template>
  <div class="jt-box">
    <div class="jiangshi-no-data" v-if="!data">
      该时段没有匠师可以约了(^_^)
    </div>
    <!--单一匠师-->
    <div class="jt-box-one" v-if="data" v-for="(item3,jsindex) in data">
      <div class="jt-left-box">
        <div class="jt-icon-box">
          <img class="jt-icon" v-lazy="item3.artisanImg">
        </div>
        <span class="jt-name">{{item3.stageName}}</span>
      </div>
      <div class="jt-right-box">
        <!--轮播-->
        <div class="mint-swipe-container" style="height: 130px;">
          <mt-swipe :auto="0">
            <!--轮播页一-->
            <mt-swipe-item class="mint-swipe-item" v-for="(item2,swiperIndex) in item3.userTime">
              <div class="date-time-box">
                <div class="date-time-one" v-for="(item,index) in item2.rep_dates"
                     @click="timePikerAtive($event,item2.req_date_day+'-'+item.time+'-'+item3.artisanId,jsindex)"
                     :time-flag="item2.req_date_day+'-'+item.time+'-'+item3.artisanId"
                      v-if="index < 9">
                  <div class="date-date-time" :class="[{'date-date-time-active' : timeFlag === item2.req_date_day+'-'+item.time+'-'+item3.artisanId }]">
                    {{item.time}}
                  </div>
                </div>
              </div>
            </mt-swipe-item>
            <!--轮播页二-->
            <mt-swipe-item class="mint-swipe-item" v-for="(item2,swiperIndex) in item3.userTime" v-if="item2.rep_dates.length > 9">
              <div class="date-time-box">
                <div class="date-time-one" v-for="(item,index) in item2.rep_dates"
                     @click="timePikerAtive($event,item2.req_date_day+'-'+item.time+'-'+item3.artisanId,jsindex)"
                     :time-flag="item2.req_date_day+'-'+item.time+'-'+item3.artisanId"
                     v-if="index >= 9 && index < 18">
                  <div class="date-date-time" :class="[{'date-date-time-active' : timeFlag === item2.req_date_day+'-'+item.time+'-'+item3.artisanId }]">
                    {{item.time}}
                  </div>
                </div>
              </div>
            </mt-swipe-item>
            <!--轮播页三-->
            <mt-swipe-item class="mint-swipe-item" v-for="(item2,swiperIndex) in item3.userTime" v-if="item2.rep_dates.length > 18">
              <div class="date-time-box">
                <div class="date-time-one" v-for="(item,index) in item2.rep_dates"
                     @click="timePikerAtive($event,item2.req_date_day+'-'+item.time+'-'+item3.artisanId,jsindex)"
                     :time-flag="item2.req_date_day+'-'+item.time+'-'+item3.artisanId"
                     v-if="index >= 18 && index < 27">
                  <div class="date-date-time" :class="[{'date-date-time-active' : timeFlag === item2.req_date_day+'-'+item.time+'-'+item3.artisanId }]">
                    {{item.time}}
                  </div>
                </div>
              </div>
            </mt-swipe-item>
            <!--轮播页四-->
            <mt-swipe-item class="mint-swipe-item" v-for="(item2,swiperIndex) in item3.userTime"  v-if="item2.rep_dates.length > 27">
              <div class="date-time-box">
                <div class="date-time-one" v-for="(item,index) in item2.rep_dates"
                     @click="timePikerAtive($event,item2.req_date_day+'-'+item.time+'-'+item3.artisanId,jsindex)"
                     :time-flag="item2.req_date_day+'-'+item.time+'-'+item3.artisanId"
                     v-if="index >= 27">
                  <div class="date-date-time" :class="[{'date-date-time-active' : timeFlag === item2.req_date_day+'-'+item.time+'-'+item3.artisanId }]">
                    {{item.time}}
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
        props:['data'],
        data(){
            return{
                timeFlag: null,
                jsFlag: null,
                swiperFlag: null,
                date:null,
                time:null,
                artisanId:null,
            }
        },
        methods:{
            timePikerAtive(event,flag,index){
                let selfEvent = event.currentTarget;
                let self = this;
                self.timeFlag = selfEvent.getAttribute("time-flag");
                flag = flag.split("-");
                self.date = self.parseTime(flag[0]);
                self.time = flag[1];
                self.artisanId = flag[2];
                self.$emit("set-jsinfo",{
                    date:flag[0],
                    time:self.time,
                    artisanId:self.artisanId,
                    jishi:self.data[index]
                })
            },
            parseTime(timeStr){
              timeStr = timeStr.substring(0,4)+"-"+timeStr.substring(4,6)+"-"+timeStr.substring(6,8);
              return timeStr;
            }
        },
        watch:{
            data(newval,oldval){
                this.$set(this,'timeFlag',null);
                return newval;
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
  .jt-icon[lazy=loading] {
    width: 75%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  .jt-icon[lazy=error] {
    width: 75%;
    margin: 0 auto;
    background: url("./../assets/img/load-error.svg") no-repeat center #ddd;
  }
</style>
<style>
  .jt-box{
    background: #fff;
    margin-top: 10px;
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
  .jiangshi-no-data{
    /*border-bottom: 1px solid #ccc;*/
    text-align: center;
    padding: 40px 0;
    color: #ccc;
  }
</style>
