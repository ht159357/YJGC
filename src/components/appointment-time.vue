<template>
  <!--type:3 已选匠师 通过匠师选择具体日期和时间-->
  <div class="time-body">
    <date-component :date="date" @changedate="getDateInfo"></date-component>
    <time-component :datetime="dateTime" @change-time="getTimeInfo"></time-component>

  </div>
</template>
<script>
    import dateComponent from "./date-component"
    import timeComponent from "./time-component"
    export default {
        name:"appointment-time",
        components:{
            dateComponent,
            timeComponent,
        },
        props:["date"],
        data(){
            return {
                dateTime:null,
                timeFlag:null,
            }
        },
        methods:{
            getDateInfo(data){
                let self = this;
                self.dateTime = self.date[data.dateindex];
            },
            getTimeInfo(data){
                let self = this;
                self.timeFlag = data.timeFlag;
                self.$emit("set-yytime",{
                    dateTime:self.dateTime,
                    timeFalg:self.timeFlag
                })
            }
        }
    }
</script>
<style>
  .time-body{
    background: #fff;
  }

</style>
