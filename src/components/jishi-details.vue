<template>
  <div class="jis-detail-box">
    <div class="jis-info-box">
      <div class="jis-header">
        <img class="jis-header-img" src="./../assets/img/js-2.jpg" alt="">
      </div>
      <div class="jis-info">
        <div class="jis-cell">
          <span class="jis-name">莉莉</span>
          <span class="jis-work">【美甲师、美容师】</span>
        </div>
        <div class="jis-cell">
          <!--星星-->
          <svg class="icon" aria-hidden="true" v-for="item in 5">
            <use xlink:href="#icon-star"></use>
          </svg>
          <!--奖杯-->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiangbei"></use>
          </svg>
          <span class="jis-work">卓越</span>
        </div>
        <div class="jis-cell">
          <span class="jis-ret">好评率：9.95</span>
        </div>
      </div>
      <div class="jis-foucs">
        <span class="jis-foucnum">关注数：999</span>
        <span class="jis-addfocus">
          <svg class="icon icon-like" aria-hidden="true">
            <use xlink:href="#icon-like"></use>
          </svg>关注
        </span>
      </div>
    </div>
    <div class="jis-tab-box">
      <div class="jis-tab-one">
1
      </div>
      <div class="jis-tab-one">
1
      </div>
      <div class="jis-tab-one">
1
      </div>
    </div>
  </div>
</template>

<script>
import store from './../store/store'

export default {
    name: 'jishi-detail',
    data () {
        return {
            pagename:"showJsDetails",
        }
    },
    store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jis-info-box{
    display: flex;
  }
  .jis-info-box{
    background: url("./../assets/img/sharecenter-heade-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    color: #fff;
    padding: 20px 0 10px;
  }
  .jis-header{
    flex: 0 0 25%;
    text-align: center;
  }
  .jis-info{
    flex: 0 0 45%;
    text-align: left;
    padding-right: 3%;
    background-image: url(./../assets/img/border-1.png);
    background-repeat: no-repeat;
    background-position: right center;
  }
  .jis-foucs{
    flex: 0 0 27%;
    padding: 10px 0;
  }
  .jis-header-img{
    width: 80%;
    border-radius: 50%;
    vertical-align: middle;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .jis-cell{
    display: inline-block;
    width: 100%;
    margin-bottom: 5px;
  }
  .jis-info .jis-cell:first-child{
    margin-bottom: 10px;
  }
  .jis-name{
    display: inline-block;
    font-size: 16px;
    font-weight: bolder;
  }
  .jis-work{
    display: inline-block;
    font-size: 12px;
  }
  .jis-ret{
    display: inline-block;
    font-size: 14px;
  }
  .jis-foucnum{
    width: 100%;
    display: inline-block;
    font-size: 12px;
  }
  .jis-addfocus{
    display: inline-block;
    border: 1px solid #fff;
    padding: 4px 15px;
    border-radius: 15px;
    margin-top: 10px;
    font-size: 12px;
  }
  .icon-like{
    font-size: 14px;
    margin-right: 5px;
    margin-left: -5px;
  }
  .jis-tab-box{
    display: flex;
  }
  .jis-tab-one{
    flex:;
  }
</style>
