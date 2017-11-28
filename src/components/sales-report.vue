<template>
  <div class="report-box">
    <div class="time-box">
      <div class="ck-date-box" @click="openDatePicker('beginDate')">{{ beginDate | dateParse }}</div>
      至
      <div class="ck-date-box" @click="openDatePicker('endDate')">{{ endDate | dateParse }}</div>
      <div class="ck-btn-search" @click="searchData">
        查询
      </div>
    </div>
    <highcharts-component ref="simpleChart" :options="options" :styles="styles"></highcharts-component>
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
    import Highcharts from 'highcharts/highstock';
    import HighchartsMore from 'highcharts/highcharts-more';
    import HighchartsComponent from "./hchart-component"

    HighchartsMore(Highcharts)
    export default {
        name:"sales-report",
        data(){
          return {
            chart: null,
            options: {
              "xAxis": [
                {
                  "categories": [
                    "君君",
                    "yoyo",
                    "玲玲",
                    "敏敏",
                    "安然",
                    "萌萌",
                    "莉莉"
                  ],
                }
              ],
              "series": [
                {
                  "name": "硬腿子",
                  "data": [
                    500,
                    600,
                    635,
                    203,
                    1000,
                    500,
                    300
                  ]
                },
                {
                  "name": "大众点评",
                  "data": [
                    650,
                    150,
                    947,
                    408,
                    500,
                    500,
                    300
                  ]
                },
                {
                  "name": "颜粉",
                  "data": [
                    1500,
                    200,
                    2004,
                    732,
                    300,
                    500,
                    300
                  ]
                },
                {
                  "name": "体验卷",
                  "data": [
                    321,
                    23,
                    312,
                    123,
                    131,
                    500,
                    300
                  ]
                },
                {
                  "name": "散客",
                  "data": [
                    321,
                    23,
                    312,
                    123,
                    131
                  ]
                },
                {
                  "name": "2998",
                  "data": [
                    321,
                    23,
                    312,
                    123,
                    131,
                    500,
                    300
                  ]
                },
                {
                  "name": "1520",
                  "data": [
                    321,
                    23,
                    312,
                    123,
                    131,
                    500,
                    300
                  ]
                },
                {
                  "name": "1885",
                  "data": [
                    321,
                    23,
                    312,
                    123,
                    131,
                    500,
                    300
                  ]
                }
              ],
              "yAxis": [
                {
                  "title": {
                    "text": "店铺销售报表（服务日期）",
                    "style": "{ \"color\": \"#666666\" }"
                  },
                }
              ],
              "chart": {
                "style": {
                  "color": "#fff",
                },
                "backgroundColor": "#333",
                "type": "column",
                "inverted": true
              },
              "title": {
                "text": "匠师绩效统计图",
                "style": {
                  "color": "#fff",
                }
              },
              "legend": {
                "itemStyle": {
                  "color": "#ffffff",
                },
                "itemHiddenStyle": {
                  "color": "#606063",
                },
                "lineHeight": 8,
              },
              "plotOptions": {
                "series": {
                  "pointWidth": 15,
                  "stacking": "normal"
                },
                "area": {
                  "animation": false
                }
              }
            },
            styles: {
              width: "100%",
              height: 400
            },
            beginDate: "2017-07-01",
            endDate: "2017-11-24",
          }
        },
        components: {
            HighchartsComponent
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
        mounted(){

        }
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
</style>
