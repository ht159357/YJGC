<template>
  <div class="js-tx-jl-box">
    <div class="js-jl-one">
      <div class="js-jl-icon">
        <svg class="icon icon-bank" aria-hidden="true">
          <use xlink:href="#icon-yinhanglogo_gongshangyinhang"></use>
        </svg>
      </div>
      <div class="js-jl-info">
        <span class="js-jl-name">工商银行(7891)</span>
        <span class="js-jl-time">2017-06-28 10:00:00</span>
      </div>
      <div class="js-jl-money">&yen;1999</div>
    </div>
  </div>
</template>
<script>
    export default {
        name:"js-ny-ybtx-jl",
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style>
  .js-jl-one{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background: #fff;
  }
  .js-jl-icon{
    width: 80px;
    text-align: center;
  }
  .js-jl-info{
    text-align: left;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .js-jl-name{
    font-weight: bold;
    margin: 5px 0;
  }
  .js-jl-time{
    font-size: 14px;
    color: #a5a5a5;
    margin: 5px 0;
  }
  .js-jl-money{
    width: 100px;
    text-align: right;
    margin-right: 10px;
    font-size: 14px;
    font-weight: bold;
  }
</style>
