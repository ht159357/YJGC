<template>
  <div class="share-box">
    <div class="share-back" :style="sharebackStyle"></div>
    <div class="share-title">
      <div class="share-title-top">
        <img src="./../assets/img/share.png" alt="">
        分享规则
      </div>
      <div class="share-title-bottom">
        分享本页至朋友圈或者好友
      </div>
    </div>
    <div class="share-info">
      <div class="share-title-top">
        <img src="./../assets/img/1080-1920_03-03.png" alt="">
        收益规则
      </div>
      <!--row1-->
      <div class="share-row">
        <div class="share-line-title">
          <img src="./../assets/img/1080-1920_20.png" alt="">
          收益 1
        </div>
        <div class="share-line-detail">
          好友首次做好服务（并评价）后给分享者得到10元颜币收益
        </div>
      </div>
      <!--row1-->
      <div class="share-row">
        <div class="share-line-title">
          <img src="./../assets/img/1080-1920_20.png" alt="">
          收益 2
        </div>
        <div class="share-line-detail">
          好友成为颜粉后每个项目结束（并评价）后分成10%~15%颜币提成
        </div>
      </div>
      <div class="share-import">
        规则：所获得的颜币可以用于消费
      </div>
    </div>
    <div class="share-btn-box">
      <div class="share-btn" @click="showShare">
        立即分享
      </div>
    </div>
    <div class="share-cover" v-show="showShareModul" @click="showShare">
      <img src="./../assets/img/cover1.png" alt="">
    </div>
  </div>
</template>
<script>
    export default {
        name: "my-share",
        data(){
            return {
                sharebackStyle:{
                    "background": 'url('+ require("./../assets/img/share1.png") + ')',
                    'background-size': '100% 100%'
                },
                showShareModul : false,
            }
        },
        methods:{
            showShare(){
                this.showShareModul = !this.showShareModul;
            }
        }
    }
</script>
<style>
  .share-box{
    color: #333;
  }
  .share-back{
    height: 200px;
  }
  .share-title{
    background: #fff;
  }
  .share-info{
    background: #fff;
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .share-title-top{
    display: flex;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    height: 46px;
    line-height: 46px;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
  }
  .share-title-bottom{
    height: 46px;
    line-height: 46px;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
    color: #bbb;
    font-weight: bold;
    text-align: left;
    text-indent: 34px;
  }
  .share-title-top img{
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  .share-info .share-row:first-child{
    padding-top: 10px;
  }
  .share-row{
    display: flex;
    align-items: flex-start;
  }
  .share-line-title{
    width: 80px;
    color: #333;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 10px;
    border-left: 2px dotted #aaa;
    min-height: 50px;
    padding-left: 10px;
    position: relative;
  }
  .share-line-title img{
    width: 18px;
    position: absolute;
    left: -10px;
    top: 0;
  }
  .share-line-detail{
    color: #bbb;
    font-weight: bold;
    text-align: left;
  }
  .share-import{
    box-sizing: border-box;
    width: 90%;
    margin-left: 15px;
    padding: 10px 5px;
    color: rgb(22,147,253);
    border: 1px dashed rgb(22,147,253);
    margin-top: 10px;
  }
  .share-btn-box{
    width: 100%;
    margin-top: 10px;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
  }
  .share-btn{
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    background: #FB3453;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
  }
  .share-cover{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 2;
  }
  .share-cover img{
    width: 100%;
    height: 100%;
  }
</style>
