<template>
  <div class="que-con">
    <p class="que-title">常见问题</p>
    <div class="que-box">

      <router-link class="que-box-title router-link" v-for="item in 3" :to="'/question/'+item">
        <div class="que-box-left">
          <img class="que-box-title-img" src="./../assets/img/que-wenhao.png"><span class="que-name">常见问题</span>
        </div>
        <svg style="margin-right: 10px;" class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-arr"></use>
        </svg>
      </router-link>

    </div>
    <div class="content-kefu-box">
      <div class="que-box-title no-border">
        <div class="que-box-left">
          <img class="que-box-title-img" src="./../assets/img/que-zixun.png"><span class="que-name">还需要更多帮助？</span>
        </div>
      </div>
      <a class="lx-kf" href="tel:400-025-8808">
        <img class="que-needmore-img" style="margin-right: 10px;" src="./../assets/img/phone.png">联系客服
      </a>
    </div>
  </div>
</template>
<script>
    export default {
        name:"my-comm-question",

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
    text-decoration: none;
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
