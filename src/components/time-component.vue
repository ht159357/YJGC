<template>
  <div class="date-time-box">
    <div class="date-time-one" v-if="datetime" v-for="(item,index) in datetime.rep_dates"
         @click="timePikerAtive($event)"
         :time-flag="index">
      <div class="date-date-time" :class="[{'date-date-time-active' : index === timeFlag }]">
        {{item.time}}
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name:"time-component",
        props:["datetime"],
        data(){
            return{
                timeFlag: null,
            }
        },
        methods:{
            timePikerAtive(event){
                let self = event.currentTarget;
                this.timeFlag = parseInt(self.getAttribute("time-flag"));
            }
        },
        watch:{
            timeFlag(newval,oldval){
                let self = this;
                self.$emit("change-time",{
                    timeFlag:self.timeFlag
                })
            },
            datetime(newval,oldval){
                let self = this;
                self.timeFlag = null;
                return newval;
            }
        }
    }
</script>
<style>
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
