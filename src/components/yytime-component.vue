<template>
  <div class="jis-pop-box">

    <div class="jis-pop-time-title">
      <div class="jis-pop-time-left">可预约时间</div>
      <div class="jis-pop-time-right jis-pop-time-right-module">
        <span class="jis-pop-time-green"></span>
        <span class="jis-pop-time-name">可约</span>
        <span class="jis-pop-time-gary"></span>
        <span class="jis-pop-time-name">不可约</span>
      </div>
    </div>
    <div class="jis-pop-time-box">
      <div class="jis-pop-title">
        时段
      </div>
      <div class="jis-pop-time-img">
        <!--<img src="./../assets/img/timeline.png" alt="">-->
        <div v-for="(item,index) in 23">
          <div class="yy-time-position" v-if="index%2 != 1">{{index}}</div>
        </div>
      </div>
    </div>
    <div class="jis-pop-time-box" v-for="date in 30">
      <div class="jis-pop-title">
        今天
      </div>
      <div class="jis-pop-time">
        <span v-for="item in 23" :class="[{'jis-pop-green' : item%2 == 1 }]"></span>
      </div>
    </div>

  </div>
</template>
<script>
    export default {}
</script>
<style>

</style>
