<template>
  <div class="business-box">
    <div class="time-box">
      <div class="ck-date-box" @click="openDatePicker('beginDate')">{{ beginDate | dateParse }}</div>
      至
      <div class="ck-date-box" @click="openDatePicker('endDate')">{{ endDate | dateParse }}</div>
      <div class="ck-btn-search" @click="searchData">
        查询
      </div>
    </div>
    <div class="total-money-back">
      <p class="total-money">13415.71</p>
      <p class="total-title">总营业额</p>
    </div>
    <div class="fenchen-box">
      <div class="fenchen-one">
        <p class="fenchen-money">10759.71</p>
        <p class="fenchen-title">公司分成</p>
      </div>
      <div class="fenchen-one">
        <p class="fenchen-money">2656</p>
        <p class="fenchen-title">匠师分成</p>
      </div>
    </div>
    <div class="business-table-box">
      <table class="business-table">
        <tr>
          <th>匠师</th>
          <th>项目</th>
          <th>服务次数</th>
          <th>总营业额</th>
          <th>匠师分成</th>
          <th>公司分成</th>
        </tr>
        <tr v-for="item in 6">
          <td>yoyo</td>
          <td>查看</td>
          <td>46</td>
          <td>3149.98</td>
          <td>628</td>
          <td>2521.98</td>
        </tr>
      </table>
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
    export default {
        name:"business-chart",
        data(){
            return {
                businessStyle:{

                },
                beginDate: "2017-07-01",
                endDate: "2017-11-24",
            }
        },
        methods:{
            searchData(){
                let beginDate = this.parseDate(this.beginDate);
                let endDate = this.parseDate(this.endDate);
                console.log(beginDate,endDate);
            },
            openDatePicker(ref) {
                this.$refs[ref].open();
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
            },
        },
    }
</script>
<style>
  .time-box{
    background: #fff;
    align-items: center;
    padding: 3% 3%;
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
  .total-money-back{
    background: url("./../assets/img/business-back.png") no-repeat center;
    background-size: cover;
    color: #fff;
  }
  .total-money{
    font-size: 40px;
    font-weight: bold;
    margin: 0 auto;
    padding: 25px 0 15px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .total-title{
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding: 0 0 20px;
  }
  .fenchen-box{
    background: #fff;
    display: flex;
    box-sizing: border-box;
    padding: 5px 0 10px;
  }
  .fenchen-one{
    width: 50%;
  }
  .fenchen-box .fenchen-one:first-child{
    border-right: 1px solid #ccc;
  }
  .fenchen-money{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #FF532A;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto 5px;
  }
  .fenchen-title{
    color: #5F6A6E;
    margin: 0;
  }
  .business-table-box{
    background: #fff;
    padding-bottom: 1%;
  }
  .business-table{
    background: #fff;
    border-collapse: collapse;
    width: 98%;
    font-size: 12px;
    margin: 0 auto;
    border: 1px solid #2C2C2C;
  }
  .business-table tr{
    border-bottom: 1px solid #808080;
  }
  .business-table td,.business-table th{
    border-right: 1px solid #808080;
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>
