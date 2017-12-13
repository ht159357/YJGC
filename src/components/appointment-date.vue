<template>
  <!--type:1 选时间 通过日期和具体时间选择匠师预约-->
  <div class="date-body">
    <div class="date-box">
      <date-component :date="date" @changedate="getDate"></date-component>
      <time-component :datetime="dateTime" @change-time="getTime"></time-component>
    </div>
    <date-jiangshi-component :jishiinfo="jishiinfo" @set-artisanId="setArtisanId"></date-jiangshi-component>
  </div>
</template>
<script>
    import dateComponent from "./date-component"
    import timeComponent from "./time-component"
    import dateJiangshiComponent from "./date-jiangshi-component"
    import axios from 'axios';

    export default {
        name:"appointment-date",
        components:{
            dateComponent,
            timeComponent,
            dateJiangshiComponent
        },
        props:["date"],
        data(){
            return{
                dateTime : null,//向子组件传的当日的时间
                datetimeFlag:0,//日期下标
                timeFlag: 0,//时间下标
                artisanId: null,
                jishiinfo: null,
                jishi:null,
            }
        },
        methods:{
            timePikerAtive(event){
                let self = event.currentTarget;
                this.timeFlag = self.getAttribute("time-flag");
            },
            getDate(dateTime){
                let self = this;
                self.datetimeFlag = dateTime.dateindex;
                self.dateTime = self.date[self.datetimeFlag];

                //选择日期需要清空技师，时间等信息
                self.timeFlag = null;
                self.jishiinfo = null;
                self.artisanId = null;
            },
            getTime(dateTime){
                let self = this;
                self.timeFlag =  dateTime.timeFlag;
                self.getJsInfo();
            },
            setArtisanId(data){
                let self = this;
                self.artisanId = data.artisanId;
                self.jishi = data.jishi;
            },
            getJsInfo(){//获取当前选择时间的技师信息
                let self = this;
                self.artisanId = null;
                let date = self.dateTime.req_date_day;
                let year=date.substring(0,4),
                    month=date.substring(4,6),
                    day=date.substring(6,8);
                date = year+"-"+month+"-"+day;
                let sendobj = {
                    storefrontId:self.$route.params.storefrontId,
                    rep_date_day:date,
                    time_num:self.$route.params.time,
                    time_n:self.dateTime.rep_dates[self.timeFlag].time_n
                };
                axios.post(httpStr+"/artisan/queryMbkArtisanByTime",sendobj).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.jishiinfo = data.list;
                    }
                })
            }
        },
        watch:{
            date(newval,oldval){//为了监听传值后的数据绑定
                let self = this;
                self.dateTime = self.date[self.datetimeFlag];
                return newval;
            },
            artisanId(newval,oldval){
                let self = this;
                self.$emit("set-info",{
                    artisanId: newval,
                    dateTime: self.dateTime,
                    timeFlag:self.timeFlag,
                    jishi:self.jishi,

                });
                return newval;
            }
        },
        created(){

        }
    }

</script>
<style>
  .date-box{
    background: #fff;
    text-align: left;
  }
</style>
