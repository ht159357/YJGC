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
      <div class="upload-box">
        <div class="upload-show" v-for="(item,index) in imgFile">
          <img v-lazy="item">
          <i class="el-icon-circle-close upload-del-btn" @click="delUploadImg(index)"></i>
        </div>
        <div class="upload-img">
          <i class="el-icon-plus addup"></i>
          <input type="file" @change="update($event)">
        </div>
      </div>
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
        methods:{
            update (e) {   // 上传照片
                var self = this;
                let file = e.target.files[0]
                /* eslint-disable no-undef */
                let param = new FormData()  // 创建form对象
                param.append('file', file, file.name)  // 通过append向form对象添加数据
                param.append('chunk', '0') // 添加form表单中其他数据
                console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                }
                // 添加请求头
                axios.post('https://jsonplaceholder.typicode.com/posts/', param, config)
                .then(ret => {
                    console.log(ret.data);
                    self.imgFile.push("https://www.baidu.com/img/baidu_jgylogo3.gif")
                })
            },
            delUploadImg(index){
                let self = this;
                self.imgFile.splice(index, 1);
                console.log(index);
            },
            submitTs(){
                let self = this;
                console.log(self.imgFile);
                console.log(self.tsTypeVal);
                console.log(self.tsTextVal);
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
  div.mint-radiolist{
    display: flex;
  }
  div.mint-cell-wrapper{
    background: none;
    padding: 0;
    font-size: 12px;
  }
  a.mint-cell{
    background: none!important;
  }
  label.mint-radiolist-title{
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
  .upload-box{
    display: flex;
    align-items: center;
    padding: 10px 0;
    flex-wrap: wrap;
  }
  .upload-show{
    width: 60px;
    height: 60px;
    margin-right: 5px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;
  }
  .upload-show .upload-del-btn{
    position: absolute;
    right: -5px;
    top: -5px;
    font-size: 20px;
    color: red;
  }
  .upload-show img{
    width: 100%;
  }
  .upload-img{
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin-top: 5px;
    position: relative;
    border: 1px dashed #ddd;
    border-radius: 5px;
  }
  .upload-img input{
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .addup{
    font-size: 20px;
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
