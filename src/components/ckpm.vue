<template>
  <div class="ck-box">
    <div class="time-box">
      <div class="ck-date-box" @click="openBeginDate">{{ beginDate | dateParseBegin }}</div>
      至
      <div class="ck-date-box" @click="openEndDate">{{ endDate | dateParseEnd }}</div>
      <div class="ck-btn-search" @click="searchData">
        查询
      </div>
    </div>
    <div class="ck-nav-box">
      <div class="ck-nav" :class="[{'active' : curNav === 0 }]"
      @click="tabNav">
        <div class="nav-name">
          业绩
        </div>
      </div>
      <div class="ck-nav" :class="[{'active' : curNav === 1 }]"
      @click="tabNav">
        <div class="nav-name">
          好评
        </div>
      </div>
    </div>
    <div class="ck-page-box">
      <!--  page   1  -->
      <div class="ck-page" v-show="curNav === 0">
        <div class="ck-list-one" v-for="(item,index) in 4">
          <!--只有前三才有奖章-->
          <div class="ck-jz" v-if="index < 3"><img :src='"./../assets/img/jz-"+ (index+1) +".png"' alt=""></div>
          <div class="ck-jz" v-else>{{ index+1 }}</div>
          <div class="ck-header">
            <img src="./../assets/img/js-2.jpg" alt="">
          </div>
          <div class="ck-info">
            <div class="ck-name">莉莉</div>
            <div class="ck-dm">万达店</div>
          </div>
          <div class="ck-money">&yen;{{10621.35}}</div>
        </div>
      </div>
      <!--  page   2  -->
      <div class="ck-page" v-show="curNav === 1">
        <div class="ck-list-one" v-for="(item,index) in 4">
          <!--只有前三才有奖章-->
          <div class="ck-jz" v-if="index < 3"><img :src='"./../assets/img/jz-"+ (index+1) +".png"' alt=""></div>
          <div class="ck-jz" v-else>{{ index+1 }}</div>
          <div class="ck-header">
            <img src="./../assets/img/js-2.jpg" alt="">
          </div>
          <div class="ck-info">
            <div class="ck-name">莉莉</div>
            <div class="ck-dm">万达店</div>
          </div>
          <div class="ck-money">{{0}}分</div>
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
  </div>
</template>
<script>
    import Vue from 'vue';
    import { DatetimePicker } from 'mint-ui';

    Vue.component(DatetimePicker.name, DatetimePicker);
    export default {
        name: "",
        data(){
            return {
                beginDate: "2017-07-01",
                endDate: "2017-11-24",
                curNav: 0,
            }
        },
        methods:{
            searchData(){
                let beginDate = this.beginDate.toLocaleDateString().replace(/\//g,"-");
                console.log(beginDate);
            },
            openBeginDate() {
                this.$refs.beginDate.open();
            },
            openEndDate() {
                this.$refs.endDate.open();
            },
            tabNav(){
                if( this.curNav === 1 ){
                    this.curNav = 0;
                }else{
                    this.curNav = 1;
                }
            }
        },
        filters: {
            dateParseBegin: function(value) {
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
//                this.beginDate = year + "-" + month + "-" + day;
                return year + "-" + month + "-" + day;
            },
            dateParseEnd: function(value) {
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
//                this.endDate = year + "-" + month + "-" + day;
                return year + "-" + month + "-" + day;
            }
        },
        created(){

        }
    }
</script>
<style scoped>
  .ck-box{
    box-sizing: border-box;
  }
  .time-box{
    background: #fff;
    align-items: center;
    padding: 5% 3%;
    text-align: left;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ddd;
  }
  .ck-date-box{
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  .ck-zhi{
    width: auto;
  }
  .ck-btn-search{
    width: 40px;
    color: #fff;
    background: #FF0000;
    padding: 5px 10px;
    border-radius: 4px;
    text-align: center;
  }
  .ck-nav-box{
    display: flex;
    background: #fff;
  }
  .ck-nav{
    flex: 1;
    height: 30px;
    line-height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #999;
  }
  .ck-nav.active{
    border-bottom: 3px solid #FB3453;
    color: #FB3453;
  }
  .ck-page-box{
    background: #fff;
    margin-top: 15px;
  }
  .ck-list-one{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2%;
  }
  .ck-jz{
    width: 20px;
  }
  .ck-jz img{
    width: 100%;
  }
  .ck-header{
    width: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .ck-header img{
    width: 100%;
    border-radius: 50%;
  }
  .ck-info{
    flex: 1;
    text-align: left;
  }
  .ck-money{
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #EB0000;
    text-align: right;
    font-weight: bold;
  }
  .ck-name{
    color: #333;
  }
  .ck-dm{
    color: #5F6A6E;
  }
</style>
