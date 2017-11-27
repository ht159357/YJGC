<template>
  <div class="report-box">
    <highcharts-component ref="simpleChart" :options="options" :styles="styles"></highcharts-component>
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
                  "type": "linear",
                  "categories": [
                    "君君",
                    "yoyo",
                    "玲玲",
                    "敏敏",
                    "安然"
                  ],
                  "title": {
                    "text": "",
                    "style": {
                      "fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
                      "color": "#fff",
                      "fontSize": "12px",
                      "fontWeight": "normal",
                      "fontStyle": "normal"
                    }
                  },
                  "index": 0,
                  "isX": true,
                  "opposite": false
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
                    1000
                  ],
                  "_colorIndex": 0,
                  "visible": true,
                  "type": "column",
                  "_symbolIndex": 0,
                  "colorByPoint": false
                },
                {
                  "name": "大众点评",
                  "data": [
                    650,
                    150,
                    947,
                    408,
                    500
                  ],
                  "_colorIndex": 1,
                  "visible": true
                },
                {
                  "name": "颜粉",
                  "data": [
                    1500,
                    200,
                    2004,
                    732,
                    300
                  ],
                  "_colorIndex": 2
                },
                {
                  "name": "体验卷",
                  "data": [
                    321,
                    23,
                    312,
                    123,
                    131
                  ],
                  "_colorIndex": 3
                },
                {
                  "name": "散客",
                  "data": [
                    0,
                    0,
                    0,
                    0,
                    0
                  ],
                  "_colorIndex": 4
                },
                {
                  "name": "2998",
                  "data": [
                    0,
                    0,
                    0,
                    0,
                    0
                  ],
                  "_colorIndex": 5
                },
                {
                  "name": "1520",
                  "data": [
                    0,
                    0,
                    0,
                    0,
                    0
                  ],
                  "_colorIndex": 6
                },
                {
                  "name": "1885",
                  "data": [
                    0,
                    0,
                    0,
                    0,
                    0
                  ],
                  "_colorIndex": 7
                }
              ],
              "yAxis": [
                {
                  "title": {
                    "text": "店铺销售报表（服务日期）",
                    "align": "high",
                    "style": "{ \"color\": \"#666666\" }"
                  },
                  "labels": {
                    "align": "center"
                  },
                  "index": 0,
                  "opposite": false,
                  "reversed": false,
                  "type": "linear"
                }
              ],
              "chart": {
                "style": {
                  "fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
                  "color": "#fff",
                  "fontSize": "12px",
                  "fontWeight": "normal",
                  "fontStyle": "normal"
                },
                "backgroundColor": "#333",
                "borderColor": "#707073",
                "plotBorderColor": "#707073",
                "type": "column",
                "inverted": true
              },
              "title": {
                "text": "匠师绩效统计图",
                "style": {
                  "fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
                  "color": "#fff",
                  "fontSize": "18px",
                  "fontWeight": "normal",
                  "fontStyle": "normal",
                  "fill": "#333333",
                  "width": "596px"
                }
              },
              "legend": {
                "align": "center",
                "itemStyle": {
                  "color": "#ffffff",
                  "fontSize": "12px",
                  "fontWeight": "bold",
                  "cursor": "pointer",
                  "fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
                  "fontStyle": "normal"
                },
                "itemHiddenStyle": {
                  "fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
                  "color": "#606063",
                  "fontSize": "12px",
                  "fontWeight": "normal",
                  "fontStyle": "normal"
                },
                "floating": false,
                "lineHeight": 8,
                "layout": "horizontal",
                "itemDistance": 10
              },
              "tooltip": {
                "shared": false,
                "split": false,
                "useHTML": false
              },
              "plotOptions": {
                "series": {
                  "pointWidth": 15,
                  "dataLabels": {
                    "style": {
                      "fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
                      "color": "contrast",
                      "fontSize": "14px",
                      "fontWeight": "bold",
                      "fontStyle": "normal",
                      "textOutline": "1px 1px contrast"
                    }
                  },
                  "stacking": "normal"
                },
                "area": {
                  "animation": false
                }
              },
              "credits": {
                "href": "",
                "text": ""
              },
              "navigation": {
                "buttonOptions": {
                  "height": 22,
                  "symbolFill": "#666666",
                  "symbolStroke": "#666666",
                  "enabled": true
                }
              }
            },
            styles: {
              width: "100%",
              height: 400
            }
          }
        },
        components: {
            HighchartsComponent
        },
        methods:{

        },
        mounted(){

        }
    }
</script>
<style>
  .container{
    width: 100%;
    height: 100px;
  }
</style>
