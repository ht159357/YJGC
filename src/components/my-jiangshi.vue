<template>
  <div>
    <!--单一技师-->
    <router-link :to="'/jiangshi/'+item" class="index-js-info" v-for="item in 5" @click="showJishiDetails(item,'showJsDetails')">
      <!--头像-->
      <div class="index-img-box">
        <img class="index-js-img" v-lazy="require('./../assets/img/js-2.jpg')" alt="">
      </div>
      <!--技师信息-->
      <div class="index-info-box">
        <div class="yj-cell">
          <span class="yj-name">莉莉</span>
          <span class="yj-work">美甲师</span>
        </div>
        <div class="yj-cell">
          <span class="yj-workd yj-elic">手部护理,美足护理,美钻款式</span>
        </div>
        <div class="yj-cell yj-star-box">
          <!--星星-->
          <svg class="icon" aria-hidden="true" v-for="item in 5">
            <use xlink:href="#icon-star"></use>
          </svg>
          <!--奖杯-->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiangbei"></use>
          </svg>
        </div>
        <!--状态-->
        <div class="yj-cell">
              <span class="yj-state">
                今天可预约
              </span>
          <span class="yj-state">
                店铺优惠卷
              </span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name:"my-jiangshi",
        data(){
            return {

            }
        },
        beforeCreate(){
            axios.post(httpStr+"/artisan/selectFansByUserId",{
                openId:openId
            }).then((ret)=>{
                let data = ret.data;
                console.log(data);
            })
        }
    }
</script>
<style>
  .index-js-info{
    display: flex;
    padding: 8px 0;
    align-items: center;
    text-decoration: none;color: inherit;
    border-bottom: 1px solid #eee;
  }
  .index-img-box{
    display: inline-block;
    width: 30%;
    text-align: center;
  }
  .index-info-box{
    display: inline-block;
    width: 66%;
    padding-left: 5px;
  }
  .index-js-img{
    width: 100%;
    max-width: 90px;
    max-height: 90px;
    border-radius: 50%;
  }
  .yj-cell{
    width: 100%;
    display: flex;
    padding-bottom: 5px;
  }
  .yj-name{
    display: inline-block;
    font-weight: bolder;
    font-size: 18px;
    height: 20px;
    line-height: 20px;
  }
  .yj-work{
    display: inline-block;
    color: #aaa;
    margin-left: 8px;
    height: 20px;
    line-height: 20px;
  }
  .yj-workd{
    display: inline-block;
    color: #aaa;
  }
  .yj-state{
    display: inline-block;
    font-size: 12px;
    color: #fff;
    background: #FC3353;
    height: 18px;
    line-height: 18px;
    padding: 1px 5px;
    border-radius: 10px;
    float: left;
    margin-left: 10px;
  }
  .yj-cell .yj-state:first-child{
    margin-left: 0;
  }
</style>
