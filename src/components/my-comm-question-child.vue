<template>
  <div class="que-con">
    <div class="que-box">

      <router-link :to="'/answer/'+item" class="que-box-title router-link" v-for="item in 3">
        <div class="que-box-left">
          <img class="que-box-title-img" src="./../assets/img/que-wenhao.png"><span class="que-name">常见问题</span>
        </div>
        <svg style="margin-right: 10px;" class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-arr"></use>
        </svg>
      </router-link>

    </div>
  </div>
</template>
<script>
    export default {
        name:"my-comm-question-child",

    }
</script>
<style>
  .que-con{
    margin-top: 54px;
    text-align: left;
    box-sizing: border-box;
  }
  .que-title{
    width: 93%;
    padding: 10px 0;
    margin: 0 auto;
    color: #aaa;
    text-indent: 10px;
  }
  .que-box{
    width: 93%;
    box-sizing: border-box;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    background: #fff;
    padding: 0 0 0 15px;
    color: #06181B;
    border: .05rem solid rgba(0,0,0,.1);
    box-shadow: rgba(0,0,0,.05) 0 0.05rem 0.2rem, rgba(0,0,0,.12) 0 0.05rem 0.1rem;
  }
  .que-box-title{
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #E3E2E2;
    justify-content: space-between;
  }
  .que-box-title-img{
    width: 30px;
    margin-right: 10px;
  }
  .que-name{
    font-size: 14px;
  }
  .que-box-left{
    display: flex;
    align-items: center;
  }
  .content-kefu-box{
    background: #fff;
    box-sizing: border-box;
    border: .05rem solid rgba(0,0,0,.1);
    width: 93%;
    margin: 0 auto;
    padding: 0 0 0 15px;
  }
  .que-needmore{
    border: 1px solid #888;
  }
  .que-needmore-img{
    width: 12px;
  }
  .no-border{
    border: none;
  }
  .lx-kf{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #888;
    padding: 10px 15px;
    margin: 10px auto 20px;
    margin-right: 15px;
    border-radius: 4px;
    color: #888;
  }
</style>
