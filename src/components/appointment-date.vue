<template>
  <!--type:1 选时间 通过日期和具体时间选择匠师预约-->
  <div class="date-body">
    <div class="date-box">
      <div class="date-date-box">
        <!--单一日期-->
        <div class="date-date-one" v-for="(item,index) in thirtyDays" :class="[{'date-date-one-active' : index == 0 }]">
          <span>{{item.date}}</span><br>
          <span v-if="index == 0">今天</span>
          <span v-else-if="index == 1">明天</span>
          <span v-else>周{{ item.week }}</span>
        </div>
      </div>
      <div class="date-time-box">
        <div class="date-time-one" v-for="(item,index) in 25">
          <div class="date-date-time" :class="[{'date-date-time-active' : index == 0 }]">
            10:00
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import getThirtyDays from "./../assets/js/commFunction"

    export default {
        name:"appointment-date",
        data(){
            return{
                thirtyDays:[]
            }
        },
        methods:{
            datePikerAtive(){

            }
        },
        beforeMount(){
            this.thirtyDays = getThirtyDays.getThirtyDays();
        }
    }

</script>
<style scoped>
  .date-body{
    background: #fff;
    text-align: left;
  }
  .date-date-box{
    display: flex;
    padding:10px 0 0;
    border-top:1px solid #EDEBEC;
    border-bottom:1px solid #EDEBEC;
    width: 100%;
    overflow-x: scroll;
  }
  .date-date-box .date-date-one:first-child{
    margin-left: 10px;
  }
  .date-date-one{
    color: #2C2D2D;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    flex: 0 0 50px;
    padding: 5px 0 10px;
  }
  .date-date-one-active{
    color: #FB3453;
    border-bottom: 3px solid #E71849;
  }
  .date-time-box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .date-time-one{
    color: #2C2D2D;
    align-items: center;
    flex: 0 0 20%;
    text-align: center;
    padding:10px 0;
  }
  .date-date-time{
    height: 20px;
    line-height: 20px;
    padding: 2px 8px;
    display: inline-block;
  }
  .date-date-time-active{
    background: #FD3353;
    color: #fff;
    border-radius: 14px;
  }
</style>
