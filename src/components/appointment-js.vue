<template>
  <!--type:2 选匠师 通过日期选择匠师的当天预约时间-->
  <div>
    <date-component></date-component>
    <time-jiangshi-component></time-jiangshi-component>
  </div>
</template>
<script>
    import dateComponent from './date-component.vue'
    import timeJiangshiComponent from './time-jiangshi-component'
    export default {
        name:"appointment-js",
        components:{
          dateComponent,
          timeJiangshiComponent
        },
        date(){
            return {

            }
        }
    }
</script>
<style scoped>

</style>
