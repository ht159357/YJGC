<template>
  <div class="star-box">
    <el-rate v-model="item.point / 2" disabled :texts="starText" show-text v-for="item in starArr"></el-rate>
    <br>
    <el-rate v-model="starVal" disabled disabled-void-color="#ccc" show-text></el-rate>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Rate } from 'element-ui';

  Vue.use(Rate);

  export default{
      name:"stra",
      data(){
          return {
              starVal: 5,
              starText:['极差', '失望', '一般', '满意', '惊喜'],
              starArr:[
                  {point:9.5},
                  {point:9.6},
                  {point:9.7},
                  {point:9.8},
                  {point:9.9},
                  {point:10},
                  {point:6.5},
                  {point:7.7},
                  {point:8.8},
                  {point:5.6},
                  {point:1.3},
              ]
          }
      }
  }
</script>
<style>

</style>
