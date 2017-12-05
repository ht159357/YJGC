<template>
  <div class="date-date-box">
    <!--单一日期-->
    <div class="date-date-one" v-if="date" v-for="(item,index) in date" :class="[{'date-date-one-active' : index === parseInt(dateFlag)}]"
         @click="datePikerAtive($event)"
         :date-flag="index">
      <span>{{item.rep_date}}</span><br>
      <span v-if="index === 0">今天</span>
      <span v-else-if="index === 1">明天</span>
      <span v-else-if="index === 2">后天</span>
      <span v-else>{{item.req_week_day}}</span>
    </div>
  </div>
</template>
<script>
    import getThirtyDays from "./../assets/js/commFunction";

    export default {
        name:"date-component",
        props:['date'],
        data(){
            return{
                thirtyDays: [],
                dateFlag : 0,
            }
        },
        methods:{
            datePikerAtive(event){
                let selfEvent = event.currentTarget;
                let self = this;
                this.dateFlag = selfEvent.getAttribute("date-flag");
                this.$emit('changedate',{
                    dateindex: self.dateFlag,
                });
            },
        },
        watch:{
            dateFlag(newval,oldval){
                return newval;
            }
        },
        created(){
            let self = this;
            if( self.$route.params.yyType === "2" || self.$route.params.yyType === "3"){
                self.dateFlag = null;
            }
            this.thirtyDays = getThirtyDays.getThirtyDays();
        }
    }
</script>
<style>
  .date-date-box{
    display: flex;
    background: #fff;
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
</style>
