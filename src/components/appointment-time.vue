<template>
  <!--type:3 已选匠师 通过匠师选择具体日期和时间-->
  <div class="time-body">
    <date-component :date="date" @changedate="getDateInfo"></date-component>
    <time-component :datetime="dateTime"></time-component>

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
            }
        },
        methods:{
            getDateInfo(data){
                let self = this;
                console.log(data);
                console.log(self.date);
                self.dateTime = self.date[data.dateindex];
            }
        }
    }
</script>
<style>
  .time-body{
    background: #fff;
  }

</style>
