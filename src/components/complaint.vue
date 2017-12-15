<template>
  <div class="complaint-box">
    <div class="ts-box">
      <div class="ts-type-box">
        <div class="ts-type-key">投诉类型</div>
        <div>
          <mt-radio
            v-model="tsTypeVal"
            :options="tsType">
          </mt-radio>
        </div>
      </div>
      <div class="ts-type-box" style="flex-direction: column;
    text-align: left;">
        <div class="ts-type-key" style="width: 100%;margin-top: 10px;">投诉原因</div>
        <div class="ts-type-val">
          <textarea class="ts-type-text" v-model="tsTextVal"></textarea>
        </div>
      </div>
      <upload-img @set-img-list="getImgList"></upload-img>
      <div>
        <div class="com-submit-btn" @click="submitTs">
          确定提交
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Radio } from 'mint-ui';
    import axios from 'axios';
    import uploadImg from "./upload-img"

    Vue.component(Radio.name, Radio);

    export default {
        name:"complaint",
        data(){
            return {
                tsType : [
                    {
                        label: '质量问题',
                        value: '1'
                    },
                    {
                        label: '其他问题',
                        value: '2'
                    }
                ],
                tsTypeVal: null,
                imgFile:[],
                tsTextVal: null,
            };
        },
        components:{
            uploadImg
        },
        methods:{
            submitTs(){
                let self = this;
                console.log(self.imgFile);
                console.log(self.tsTypeVal);
                console.log(self.tsTextVal);
            },
            getImgList(data){
                console.log(data);
            }
        }
    }
</script>
<style scoped>
  .upload-show img[lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
</style>
<style>
  .ts-box{
    width: 95%;
    margin: 54px auto 0;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    font-size: 14px;
  }
  .ts-type-box{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
  .ts-type-key{
    width: 80px;
    text-align: left;
    text-indent: 10px;
  }
  .complaint-box div.mint-radiolist{
    display: flex;
  }
  .complaint-box div.mint-cell-wrapper{
    background: none;
    padding: 0;
    font-size: 12px;
  }
  .complaint-box a.mint-cell{
    background: none!important;
  }
  .complaint-box label.mint-radiolist-title{
    margin: 0;
  }
  .ts-type-val{
    width: 100%;
  }
  .ts-type-text{
    width: 98%;
    resize: none;
    margin: 10px auto 5px;
    outline: none;
    height: 60px;
    border: 1px solid #ddd;
  }
  .com-submit-btn{
    box-sizing: border-box;
    width: 100%;
    background: #FB3453;
    color: #fff;
    padding: 10px 0;
    border-radius: 5px;
  }
</style>
