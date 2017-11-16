<template>
  <!--type:3 已选匠师 通过匠师选择具体日期和时间-->
  <div class="time-body">
    <date-component></date-component>
    <time-component></time-component>
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
    }
</script>
<style>
  .time-body{
    background: #fff;
  }

</style>
