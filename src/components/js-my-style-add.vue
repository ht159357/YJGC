<template>
  <div class="js-style-add-box">
    <div class="js-style-add-info">
      <mt-field label="标题" placeholder="写个吸引颜粉的标题吧" ></mt-field>
      <mt-field label="款式编号" placeholder="款式编号" ></mt-field>
      <div class="options-box">
        <label class="left-label" for="style">
          产品
        </label>
        <label class="style-options" for="style">
          <select class="select-reset-defult" id="style">
            <option>aaaa</option>
          </select>
        </label>
      </div>
      <div class="upload-box">
        <upload-img @set-img-list="getImgList"></upload-img>
      </div>
      <div class="btn fb-btn">确定发布</div>
    </div>
  </div>
</template>
<script>
    import Vue from "vue";
    import { Field } from 'mint-ui';
    import uploadImg from "./upload-img"

    Vue.component(Field.name, Field);
    export default {
        name: "js-my-style-add",
        data(){
            return {
                imgList:[],
            }
        },
        components:{
            uploadImg
        },
        methods:{
            getImgList(data){
                let self = this;
                self.imgList = data;
            }
        }
    }
</script>
<style>
  .js-style-add-box{
    padding: 10px;
  }
  .js-style-add-info{
    background: #fff;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    font-size: 14px;
  }
  .js-style-add-info div.mint-cell-wrapper{
    font-size: 12px;
  }
  .js-style-add-info div.mint-cell-wrapper div.mint-cell-title{
    width: 80px;
    text-align: left;
  }
  .options-box{
    display: flex;
    margin: 0 0 0 10px;
    min-height: 48px;
    line-height: 48px;
    background-position: top left;
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 120% 1px;
  }
  .options-box{
    display: flex;
    align-items: center;
  }
  .left-label{
    width: 80px;
    text-align: left;
  }
  .style-options{
    text-align: left;
    width: 100%;
    padding-left: 22px;
  }
  .style-options select{
    padding-left: 0;
  }
  .upload-box{
    background-position: top left;
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 120% 1px;
    margin: 0 0 0 10px;
  }
  .fb-btn{
    background: #FB3453;
    color: #fff;
    margin: 10px;
    padding: 10px 0;
    border-radius: 5px;
  }
</style>
