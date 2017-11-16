<template>
  <!--type:2 选匠师 通过日期选择匠师的当天预约时间-->
  <div>
    <date-component></date-component>
  </div>
</template>
<script>
    import dateComponent from './date-component.vue'
    export default {
        name:"appointment-js",
        components:{
          dateComponent
        }
    }
</script>
<style scoped>

</style>
