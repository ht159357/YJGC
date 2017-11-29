<template>
  <div class="star-box">
    <el-rate v-model="starVal" :texts="starText" show-text></el-rate>
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
              starText:['极差', '失望', '一般', '满意', '惊喜']
          }
      }
  }
</script>
<style>

</style>
