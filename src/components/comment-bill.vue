<template>
  <div class="com-box">
    <div class="com-box-com">
      <div class="dot-box">
        <p class="ret-say-title">
          <span class="dot-1"></span>
          <span class="dot-2"></span>
          <span class="dot-3"></span>
          <span class="dot-4"></span>
          技术评分
          <span class="dot-4"></span>
          <span class="dot-3"></span>
          <span class="dot-2"></span>
          <span class="dot-1"></span>
        </p>
      </div>
      <!--评分-->
      <div class="star-box">
        <el-rate class="jishu-star" v-model="jishuStarVal" :texts="starText" ></el-rate>
      </div>
      <!--标签-->
      <div class="reason-tag">
        <div class="reason-tag-one" v-for="item in 6"><span class="reason-tag-title">技法不专业</span></div>
      </div>
      <!--输入评论-->
      <div class="com-box-text">
        <textarea v-model="comText" placeholder="对这次的手艺说点什么吧"></textarea>
      </div>
      <div class="pingfen-box">

        <div class="pingfen-box-one">
          <div class="pingfen-title">店铺评分</div>
          <div class="pingfen-star-box">
            <el-rate class="pingfen-star" v-model="shopStarVal" :texts="starText" ></el-rate>
          </div>
        </div>

        <div class="pingfen-box-one">
          <div class="pingfen-title">店铺评分</div>
          <div class="pingfen-star-box">
            <el-rate class="pingfen-star" v-model="fuwuStarVal" :texts="starText" ></el-rate>
          </div>
        </div>

      </div>
    </div>


    <div class="com-submit-btn">
      提交
    </div>
    <router-link class="router-link sm-font-size" to="/complaint">一键投诉</router-link>
  </div>
</template>
<script>
    import Vue from 'vue';
    import { Rate } from 'element-ui';

    Vue.use(Rate);

    export default {
        name:"comment-bill",
        data(){
            return {
                jishuStarVal: 10,
                starText:['极差', '失望', '一般', '满意', '惊喜'],
                comText:"",
                shopStarVal: 10,
                fuwuStarVal: 10,
            }
        }
    }
</script>
<style>
  .com-box-com{
    background: #fff;
    padding: 20px 0;
  }
  .ret-say-title{
    color: #3F8FCE;
    font-weight: bold;
    margin: 0;
  }
  .dot-1{
    display: inline-block;
    width: 3px;
    height: 3px;
    background: #BADBF3;
    vertical-align: middle;
    border-radius: 50%;
  }
  .dot-2{
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #81BBE7;
    vertical-align: middle;
    border-radius: 50%;
  }
  .dot-3{
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #55A1D9;
    vertical-align: middle;
    border-radius: 50%;
  }
  .dot-4{
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #3F8FCE;
    vertical-align: middle;
    border-radius: 50%;
  }
  .star-box{
    margin: 20px auto;
  }
  .jishu-star i.el-rate__icon{/**评分组件大小**/
    font-size: 30px;
  }
  .pingfen-star i.el-rate__icon{/**评分组件大小**/
    font-size: 20px;
  }
  .reason-tag{
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: center;
    font-size: 14px;
    justify-content: space-between;
  }
  .reason-tag-one{
    flex: 0 0 50%;
  }
  .reason-tag-title{
    display: inline-block;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 3px 10px;
    margin: 2px auto;
  }
  .com-box-text{
    display: flex;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .com-box-text textarea{
    width: 100%;
    outline: none;
    height: 80px;
    border: none;
    background: #ddd;
    resize: none;
    padding: 10px;
  }
  .pingfen-box{
    padding: 10px 0;
  }
  .pingfen-box-one{
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .pingfen-title{
    width: 120px;
  }
  .com-submit-btn{
    width: 80%;
    margin: 10px auto;
    background: #FB3453;
    color: #fff;
    padding: 6px 0;
    border-radius: 5px;
  }
  .sm-font-size{
    font-size: 12px;
  }
</style>
