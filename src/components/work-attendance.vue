<template>
  <div class="att-box">
    <div class="att-time-box" @click="openDatePicker('date')">
      {{dateParse}}
    </div>
    <div class="att-type-box">
      <div class="att-type" :class="[{'active':curNav === 1}]" @click="changeNav(1)">今日上班</div>
      <div class="att-type" :class="[{'active':curNav === 2}]" @click="changeNav(2)">今日下班</div>
      <div class="att-type" :class="[{'active':curNav === 3}]" @click="changeNav(3)">考勤详细</div>
    </div>
    <div class="att-info-box">
      <table class="att-table">
        <tr>
          <th>姓名</th>
          <th>类型</th>
          <th>时间</th>
          <th>店长结果</th>
          <th>考勤结果</th>
        </tr>
        <tr v-for="item in 5">
          <td>萌萌</td>
          <td>...</td>
          <td>2017-11-28</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </table>
    </div>
    <mt-datetime-picker
      ref="date"
      type="date"
      v-model="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="getData"
    >
    </mt-datetime-picker>
  </div>
</template>
<script>
    export default {
        name:"attendance",
        data(){
            return {
                date:"2017-11-01",
                curNav: 1,
            }
        },
        methods:{
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
            },
            changeNav(nav){
                this.curNav = nav;
                this.getData();
            },
            getData(){
                let self = this;
                console.log(this.parseDate(self.date),self.curNav);
            }
        },
        computed: {
            dateParse: function () {
                let date = this.parseDate(this.date);
                return date;
            }
        },
    }
</script>
<style>
  .att-time-box{
    height: 45px;
    line-height: 45px;
    background: #fff;
    border-bottom: 1px solid #ddd;
  }
  .att-type-box{
    margin-top: 10px;
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    background: #fff;
  }
  .att-type{
    flex: 1;
    font-weight: bold;
  }
  .att-type.active{
    color: #EE0000;
  }
  .att-table{
    width: 100%;
    border-collapse: collapse;
  }
  .att-table th{
    background: #ccc;
    height: 30px;
    color: #777777;
  }
  .att-table td{
    height: 30px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
