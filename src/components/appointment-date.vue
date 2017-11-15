<template>
  <!--type:1 选时间 通过日期和具体时间选择匠师预约-->
  <div class="date-body">
    <div class="date-box">
      <date-component></date-component>
      <time-component></time-component>
    </div>
    <date-jiangshi-component></date-jiangshi-component>
    <!--支付-->
    <div class="yy-pay-btn">
      预约支付 &yen; 10
    </div>
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
  .date-body{
    margin-bottom: 44px;
  }
  .date-box{
    background: #fff;
    text-align: left;
  }
  .yy-pay-btn{
    width: 100%;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    height: 44px;
    line-height: 44px;
    background: #2C2C2C;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
