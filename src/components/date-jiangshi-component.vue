<template>
  <div class="jiangshi-box">
    <div class="jiangshi-choies-alert">
      <img src="./../assets/img/keaijs.png">
      选择匠师
    </div>
    <!--匠师列表-->
    <!--没有匠师缺省-->
    <div class="jiangshi-no-data" v-if="!jishiinfo">
      该时段没有匠师可以约了(^_^)
    </div>
    <div class="jiangshi-list" v-if="jishiinfo">
      <!--单个匠师-->
      <div class="jiangshi-one" v-for="(item,index) in jishiinfo">
        <div class="jiangshi-header">
          <img v-lazy="item.artisanImg" class="jiangshi-icon">
        </div>
        <div class="jiangshi-info">
          <div class="jiangshi-box-info">
            <span class="jiangshi-name">{{item.stageName}}</span>
            <span class="jiangshi-choies" :data-jiangshi="index" :class="[{'jiangshi-choies-active': item.artisanId === artisanId}]" @click="jsPikerAtive($event,item.artisanId)">选择</span>
          </div>
          <div class="jiangshi-details mint-header-title">
            擅长的手艺:{{item.work_types}}
          </div>
          <div class="jiangshi-level">
            <el-rate v-model="item.evaluate / 2" disabled disabled-void-color="#ccc" show-text></el-rate>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Rate } from 'element-ui';

    Vue.use(Rate);
    export default {
        name:"date-jiangshi-component",
        data(){
            return {
                jiangshiFlag: null,
                artisanId : null
            }
        },
        props:["jishiinfo"],
        methods:{
            jsPikerAtive(event,id){
                let self = event.currentTarget;
                let flag = self.getAttribute("data-jiangshi");
                if( this.jiangshiFlag === flag ){
                    this.jiangshiFlag = null;
                    this.artisanId = null;
                    return;
                }
                this.jiangshiFlag = flag;
                this.artisanId = id;
            },
        },
        watch:{
            jishiinfo(newval,oldval){
                let self = this;
                if( !newval ){
                    self.artisanId = null;
                }
                return newval;
            },
            artisanId(newval,oldval){
                let self = this;
                this.$emit("set-artisanId",{
                    artisanId:this.artisanId
                })
            }
        }
    }
</script>
<style scoped>
  .jiangshi-icon[lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  .jiangshi-icon[lazy=error]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/load-error.svg") no-repeat center #ddd;
  }
</style>
<style>
  .jiangshi-box{
    margin-top: 10px;
    background: #fff;
    text-align: left;
  }
  .jiangshi-choies-alert{
    height: 20px;
    line-height: 20px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .jiangshi-choies-alert img{
    width: 20px;
    vertical-align: -5px;
  }
  .jiangshi-no-data{
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding: 40px 0;
    color: #ccc;
  }
  .jiangshi-list{
    width: 100%;
  }
  .jiangshi-one{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .jiangshi-header{
    flex: 0 0 20%;
    text-align: center;
    padding: 0 3%;
  }
  .jiangshi-icon{
    width: 100%;
    max-width: 80px;
    border-radius: 50%;
  }
  .jiangshi-info{
    flex: 0 0 70%;
    width: 70%;
  }
  .jiangshi-box-info{
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
  .jiangshi-name{
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
  .jiangshi-choies{
    border:1px solid #FB3453;
    color: #FB3453;
    padding: 2px 15px;
    border-radius: 4px;
  }
  .jiangshi-details{
    font-size: 14px;
    margin-top: 5px;
  }
  .jiangshi-level{
    margin-top: 10px;
  }
  .jiangshi-choies-active{
    background: #FC3353;
    color: #fff;
  }
</style>
