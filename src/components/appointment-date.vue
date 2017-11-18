<template>
  <!--type:1 选时间 通过日期和具体时间选择匠师预约-->
  <div class="date-body">
    <div class="date-box">
      <date-component></date-component>
      <time-component></time-component>
    </div>
    <date-jiangshi-component></date-jiangshi-component>
  </div>
</template>
<script>
    import dateComponent from "./date-component"
    import timeComponent from "./time-component"
    import dateJiangshiComponent from "./date-jiangshi-component"

    export default {
        name:"appointment-date",
        components:{
            dateComponent,
            timeComponent,
            dateJiangshiComponent
        },
        data(){
            return{

            }
        },
        methods:{
            timePikerAtive(event){
                let self = event.currentTarget;
                this.timeFlag = self.getAttribute("time-flag");
            }
        }
    }

</script>
<style>
  .date-box{
    background: #fff;
    text-align: left;
  }
</style>
