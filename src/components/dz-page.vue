<template>
  <div class="my-Page-box">
    <div class="my-header-box" :style="headerBackClass">
      <div class="my-header-icon">
        <img src="./../assets/img/header-icon.jpg">
      </div>
      <p class="my-name" :class="[
          {'level-color-1':userLevel==1},
          {'level-color-2':userLevel==2},
          {'level-color-3':userLevel==3},
          {'level-color-4':userLevel==4},
          {'level-color-5':userLevel==5},]">欧阳娜娜</p>
      <select class="select-reset dz-select">
        <option value="">江宁万达店</option>
      </select>
    </div>
    <div class="my-list-box">
      <div>
        <mt-cell to="/ckpm" class="my-cell-list" title="创客排名" isLink="">
          <img slot="icon" src="../assets/img/ckpm.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/shopOrder" class="my-cell-list" title="店铺订单" isLink="">
          <img slot="icon" src="../assets/img/dpdd.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/salesReport" class="my-cell-list" title="销售报表" isLink="">
          <img slot="icon" src="../assets/img/xsbb.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/workAttendance" class="my-cell-list" title="匠师考勤" isLink="">
          <img slot="icon" src="../assets/img/jskq.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/workerScheduling" class="my-cell-list" title="排班管理" isLink="">
          <img slot="icon" src="../assets/img/pbgl.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell to="/businessChart" class="my-cell-list" title="营业报表" isLink="">
          <img slot="icon" src="../assets/img/ryjbb.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div>
        <mt-cell class="my-cell-list" title="物料商城" isLink="">
          <img slot="icon" src="../assets/img/yjbb.png" class="my-cell-icon">
        </mt-cell>
      </div>
      <div  @click="goCenter(0)">
        <mt-cell to="/myPage" class="my-cell-list" title="个人中心" isLink="">
          <img slot="icon" src="../assets/img/dzzx.png" class="my-cell-icon">
        </mt-cell>
      </div>

    </div>
  </div>
</template>
<script>
    export default {
        name:"my-page",
        data(){
            return {
                userLevel: 1,
                userMaxExp: 1000,
                userExp: 800,
                userExpWidth:null,
                headerBackClass:{
                    "background": "url("+require('./../assets/img/sharecenter-heade-bg.png')+") no-repeat 50%",
                    "background-size": "100%"
                }
            }
        },
        methods:{
            goCenter(flag){
                this.$store.state.curMyCenter = flag;
                //0:颜粉端，1:匠师端，2:店长端
                this.$router.push({
                    path:this.$store.state.page[flag]
                });
            }
        },
        beforeMount(){
            this.userExpWidth = this.userExp / this.userMaxExp * 100;
        }
    }
</script>
<style scoped="">
</style>
<style>
  .my-Page-box{
    background: #fff;
  }
  .my-header-box{
    padding-bottom: 15px;
  }
  .my-header-icon{
    width: 90px;
    margin: 0 auto;
    padding-top: 10px;
    position: relative;
  }
  .my-header-icon:after{
    content: "";
    width: 20px;
    height: 20px;
    background: url("./../assets/img/v.png");
    background-size: 100%;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .my-header-icon img{
    width: 80px;
    border-radius: 50%;
    border: 5px solid #EC6F82;
  }
  .my-name{
    margin: 3px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  .my-jd-box{
    width: 80px;
    margin-left: 5px;
    height: 14px;
    line-height: 14px;
    color: #000;
    border: 1px solid #FFDBDB;
    border-radius: 15px;
    overflow: hidden;
  }
  .my-jd-inner{
    width: 0;
    float: left;
    font-size: 10px;
    height: 14px;
    line-height: 14px;
    border-radius: 15px;
    background: #FEABAB;
    text-align: center;
  }
  .my-jd-ch{
    padding-top: 5px;
    margin: 0;
    font-size: 12px;
    color: #fff;
  }
  .my-list-box{
    text-align: left;
  }
  .my-cell-list{
    color: #000;
    font-size: 14px;
    /*border-bottom: 1px solid #E5E5E5;*/
  }
  .my-cell-icon{
    width: 22px;
    height: 22px;
  }
  div.mint-cell-title{
    font-size: 14px;
  }
  .my-cell-yen{
    font-size: 14px;
  }
  .select-reset.dz-select{
    width: auto;
    padding: 6px 15px;
    height: auto;
    line-height: normal;
    background: #fff;
    border: 1px solid red !important;
    border-radius: 20px;
    margin-top: 15px;
  }
  .mint-cell .mint-cell-wrapper{
    background-image: none;
  }
  .mint-cell:last-child{
    background-image: none;
  }
  .my-list-box>div{
    border-bottom: 1px solid #ddd;
  }
  .mint-cell .mint-cell-wrapper{
    background-image: none;
  }
  .mint-cell:last-child{
    background-image: none;
  }
  .my-list-box>div{
    border-bottom: 1px solid #ddd;
    margin-left: 10px;
  }
  div.mint-cell-wrapper{
    padding-left: 2px;
  }
  </style>
