<template>
  <div class="ans-box">
    <div class="ans-box-title">
      <img src="./../assets/img/answer.png" alt="">顾客迟到如何处理
    </div>
    <div class="ans-body">
      顾客如迟到，婉转跟顾客解释，一定要准时到，站在顾客的角度为顾客想问题。建议如果下面时间没有预约，给顾客做；如果已经有预约，可请其他匠师帮忙做；如果都没时间，预估下是否可以完成，如果完成不了和顾客协商。避免让顾客白跑一趟。
    </div>
    <div class="ans-btn-box">
      <div class="ans-btn"><img src="./../assets/img/zan.png">有帮助</div>
      <div class="ans-btn"><img src="./../assets/img/cai.png">没帮助</div>
    </div>
  </div>
</template>
<script>
    export default {
        name:"my-comm-question",

    }
</script>
<style>
  .ans-box{
    box-sizing: border-box;
    margin: 0 auto;
    padding: 15px;
    text-align: left;
    margin-top: 54px;
    background: #fff;
    width: 93%;
  }
  .ans-box-title{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
  }
  .ans-box-title img{
    width: 18px;
    margin-right: 5px;
  }
  .ans-body{
    padding: 15px;
    color: #aaa;
    border-bottom: 1px solid #bbb;
  }
  .ans-btn-box{
    display: flex;
    align-items: center;
  }
  .ans-btn-box .ans-btn:first-child{
    border-right: 1px solid #bbb;
  }
  .ans-btn{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px 0;
    color: #aaa;
  }
  .ans-btn img{
    width: 20px;
  }
</style>
