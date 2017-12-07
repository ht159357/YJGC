<template>
  <div class="js-my-yy-box">
    <div class="js-my-yy-header">
      <div class="js-nav-yy-one active">
        今天
      </div>
      <div class="js-nav-yy-one">
        明天
      </div>
      <div class="js-nav-yy-one">
        12.09
      </div>
      <div class="js-nav-yy-one">
        12.10
      </div>
      <div class="js-nav-yy-one">
        12.11
      </div>
      <div class="js-nav-yy-one">
        已取消
      </div>
    </div>
    <div>
      <div></div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "js-my-yy",
        data(){
            return {

            }
        },
    }
</script>
<style>
  .js-my-yy-header{
    display: flex;
    background: #fff;
  }
  .js-nav-yy-one{
    flex: 1;
    font-size: 14px;
    height: 36px;
    line-height: 36px;

  }
  .js-nav-yy-one.active{
    border-bottom: 3px solid #FB3453;
    color: #FB3453;
  }
</style>
