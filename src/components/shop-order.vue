<template>
  <div class="shop-box">
    <div class="type-box">
      <div class="type-option" @click="changeType(0)">
        匠师
        <img v-show="arrState[0]===false" src="./../assets/img/arr-bottom.png" class="arr-type">
        <img v-show="arrState[0]===true" src="./../assets/img/arr-top.png" class="arr-type">
      </div>
      <div class="type-option" @click="changeType(1)">
        是否支付
        <img v-show="arrState[1]===false" src="./../assets/img/arr-bottom.png" class="arr-type">
        <img v-show="arrState[1]===true" src="./../assets/img/arr-top.png" class="arr-type">
      </div>
      <div class="type-option" @click="changeType(2)">
        时间段
        <img v-show="arrState[2]===false" src="./../assets/img/arr-bottom.png" class="arr-type">
        <img v-show="arrState[2]===true" src="./../assets/img/arr-top.png" class="arr-type">
      </div>
      <div class="type-option" @click="changeType(3)">
        客户类型
        <img v-show="arrState[3]===false" src="./../assets/img/arr-bottom.png" class="arr-type">
        <img v-show="arrState[3]===true" src="./../assets/img/arr-top.png" class="arr-type">
      </div>
    </div>
    <!--类型-->
    <div class="type-options-box">
      <div class="option-box-list" v-show="arrState[0]===true">
        <div class="type-option-info active">全部</div>
        <div class="type-option-info">萌萌</div>
        <div class="type-option-info">莉莉</div>
        <div class="type-option-info">花花</div>
      </div>
      <div class="option-box-list" v-show="arrState[1]===true">
        <div class="type-option-info active">全部</div>
        <div class="type-option-info">是</div>
        <div class="type-option-info">否</div>
      </div>
      <div class="option-box-list" v-show="arrState[2]===true">
        <div class="time-box">
          <div class="time-box-left">
            <div class="time-left-top">
              <div class="time-date" @click="openPicker('beginDate')">{{ beginDate | dateParse }}</div>
              <div class="time-date time-time" @click="openPicker('beginTime')">{{beginTime}}</div>
            </div>
            <div class="time-left-bottom">
              <div class="time-date" @click="openPicker('endDate')">{{ endDate | dateParse }}</div>
              <div class="time-date time-time" @click="openPicker('endTime')">{{endTime}}</div>
            </div>
          </div>
          <div class="time-box-right">
            <div class="time-box-btn" @click="searchTime()">
              确定
            </div>
          </div>
        </div>
      </div>
      <div class="option-box-list" v-show="arrState[3]===true">
        <div class="type-option-info active">全部</div>
        <div class="type-option-info">会员</div>
        <div class="type-option-info">散客</div>
      </div>
    </div>
    <!--订单-->
    <div class="order-box-list">
      <!--one-->
      <div class="order-one-box" v-for="item in 2">
        <div class="order-box-top">
          <div class="order-top-left">
            <img src="./../assets/img/shoucang-order.png" class="sc-order">
            王*
            <div class="order-target">
              猫眼美甲
            </div>
          </div>
          <div class="order-top-right">
            &yen;88.00
            <div class="order-state">
              已支付
            </div>
          </div>
        </div>
        <div class="order-box-bottom">
          <div class="order-bottom-left">
            <img src="./../assets/img/header-icon.jpg" class="order-header-icon">
            <span class="order-user-name">yoyo</span>
          </div>
          <div class="order-bottom-right">
            2017-11-27 11:00~2017-11-27 11:30
          </div>
       </div>
      </div>
    </div>

    <mt-datetime-picker
      ref="beginDate"
      type="date"
      v-model="beginDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
    >
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="endDate"
      type="date"
      v-model="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="beginTime"
      type="time"
      v-model="beginTime">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="endTime"
      type="time"
      v-model="endTime">
    </mt-datetime-picker>
  </div>
</template>
<script>
    import Vue from 'vue';
    import { DatetimePicker } from 'mint-ui';

    Vue.component(DatetimePicker.name, DatetimePicker);
    export default {
        name: "shop-order",
        data(){
            return {
                arrState:[false,false,false,false],
                beginDate: "2017-07-01",
                endDate: "2017-11-24",
                beginTime: null,
                endTime: null,
            }
        },
        methods:{
            changeType(index){
                let self = this;
//                箭头状态更新
                self.$set(self.arrState,index,!self.arrState[index]);
                self.arrState.forEach(function(item,i){
                    if( i !== index ){
                        self.$set(self.arrState,i,false);
                    }
                })
//                切换类型页面

            },
            openPicker(ref) {
                this.$refs[ref].open();
            },
            searchTime(){
                let self = this;
                console.log(self.parseDate(self.beginDate));
                console.log(self.parseDate(self.endDate))
                console.log(self.beginTime);
                console.log(self.endTime);
            },
            parseDate(value){
                let myDate = new Date(value);
                let year = myDate.getFullYear();
                let month = myDate.getMonth()+1;
                let day = myDate.getDate();
                if( month < 10 ){
                  month = "0"+month;
                }
                if( day < 10 ){
                  day = "0"+day;
                }
                return year + "-" + month + "-" + day;
            }
        },
        filters: {
            dateParse: function(value) {
                let myDate = new Date(value);
                let year = myDate.getFullYear();
                let month = myDate.getMonth()+1;
                let day = myDate.getDate();
                if( month < 10 ){
                    month = "0"+month;
                }
                if( day < 10 ){
                    day = "0"+day;
                }
                return year + "-" + month + "-" + day;
            }
        },
    }
</script>
<style>
  .shop-box{
    background: #CCCCCC;
    font-size: 12px;
  }
  .type-box{
    background: #fff;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .type-option{
    flex: 1;
    height: 24px;
    line-height: 24px;
    border-right: 1px solid #ddd;
  }
  .type-box .type-option:last-child{
    border-right: none;
  }
  .type-options-box{
    background: #fff;
  }
  .arr-type{
    width: 12px;
  }
  .order-box-list{
    box-sizing: border-box;
    padding-bottom: 5px;
    background: #ccc;
  }
  .order-one-box{
    box-sizing: border-box;
    background: #fff;
    width: 97%;
    border-radius: 4px;
    margin: 5px auto 0;
    padding: 5px;
  }
  .order-box-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .order-top-left{
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .order-top-right{
    display: flex;
    color: #FB3453;
    font-weight: bold;
    align-items: center;
  }
  .sc-order{
    width: 26px;
  }
  .order-target{
    padding:2px 5px;
    border-radius: 3px;
    background: #FB3353;
    color: #fff;
    font-weight: normal;
    margin-left: 10px;
  }
  .order-state{
    padding:2px 5px;
    border-radius: 3px;
    background: #EEA236;
    color: #fff;
    font-weight: normal;
    margin-left: 5px;
  }
  .order-box-bottom{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: #eee;
    border-radius: 3px;
    margin-top: 10px;
    padding: 5px;
    justify-content: space-between;
  }
  .order-header-icon{
    width: 24px;
    margin-right: 5px;
    border-radius: 50%;
  }
  .order-user-name{
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .order-bottom-left{
    display: flex;
    align-items: center;
  }
  .option-box-list{
    width: 90%;
    margin: 0 auto;
    padding-bottom: 10px;

  }
  .type-option-info{
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #000;
  }
  .type-option-info.active{
    color: #FB3453;
    border-bottom: 2px solid #FB3453;
  }
  .time-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .time-box-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .time-box-right{
    display: flex;
    align-items: center;
  }
  .time-left-top,.time-left-bottom{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    font-size: 14px;
  }
  .time-left-bottom{
    margin-top: 2px;
  }
  .time-date{
    width: 80px;
    margin-left: 5px;
    border-bottom: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
  }
  .time-time{
    width: 50px;
  }
  .time-min,.time-hour{
    width: 40px;
    font-weight: normal;
    appearance: none;
    text-align: center;
    border: none;
    text-indent: 5px;
    outline: none;
    height: 30px;
    font-size: 14px;
    margin-left: 5px;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    background: #fff;
  }
  .time-box-btn{
    padding: 5px 20px;
    color: #fff;
    background: #FB3453;
    border-radius: 4px;
  }
</style>
