<template>
  <!--type:2 选匠师 通过日期选择匠师的当天预约时间-->
  <div>
    <date-component :date="date" @changedate="setDateInfo"></date-component>
    <time-jiangshi-component :data="jishiInfo" @set-jsinfo="setJishiInfo"></time-jiangshi-component>
  </div>
</template>
<script>
    import dateComponent from './date-component.vue'
    import timeJiangshiComponent from './time-jiangshi-component'
    import axios from 'axios';

    export default {
        name:"appointment-js",
        components:{
          dateComponent,
          timeJiangshiComponent
        },
        props:["date"],
        data(){
            return {
                dateFlag:0,
                curDate:null,
                jishiInfo:null,
                getJishiInfo:null,
            }
        },
        methods:{
            setDateInfo(data){
                console.log(data);
                let self = this;
                self.dateFlag = data.dateindex;
                self.curDate = self.date[self.dateFlag];
                self.getJsInfo();
                self.getJishiInfo = null;
                this.$emit("set-jishi",this.getJishiInfo);
            },
            getJsInfo(){
                let self = this;
                let timeStr = self.curDate.req_date_day;
                timeStr = self.parseTime(timeStr);
                axios.post(httpStr+"/artisan/queryMbkArtisanTimeList",{
                    storefrontId:self.$route.params.storefrontId,
                    time_num: self.$route.params.time,
                    rep_date_day: timeStr
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.jishiInfo = null;
                        self.jishiInfo = data.list;
                    }
                })
            },
            setJishiInfo( data ){
                this.getJishiInfo = data;
                this.$emit("set-jishi",this.getJishiInfo);
            },
            parseTime(timeStr){
                timeStr = timeStr.substring(0,4)+"-"+timeStr.substring(4,6)+"-"+timeStr.substring(6,8);
                return timeStr;
            }
        },
        watch:{
            dateFlag(newval,oldval){
                if( newval !== null ){
                    this.curDate = this.date[this.dateFlag];
                }
                return newval;
            }
        },
        created(){

        }
    }
</script>
<style>

</style>
