<template>
  <div>
    <div class="upload-box-com">
      <div class="upload-show-com" v-for="(item,index) in imgFile">
        <img v-lazy="item">
        <i class="el-icon-circle-close upload-del-btn-com" @click="delUploadImg(index)"></i>
      </div>
      <div class="upload-img-com">
        <i class="el-icon-plus addup-com"></i>
        <input type="file" @change="update($event)">
      </div>
    </div>

    <screen-loading :show-pop="upLoadPop"></screen-loading>

  </div>
</template>
<script>
    /**********
     * 图片上传组件
     * @set-img-list参数 获取返回图片url列表
     * *************/
    import axios from 'axios';
    import screenLoading from "./full-screen-loading";

    export default {
        name:"upload-img",
        data(){
            return {
                imgFile:[],
                upLoadPop:false
            }
        },
        components:{
            screenLoading
        },
        methods:{
            update (e) {   // 上传照片
                var self = this;
                let file = e.target.files[0];
                /* eslint-disable no-undef */
                let param = new FormData()  // 创建form对象
                param.append('file', file, file.name)  // 通过append向form对象添加数据
                param.append('chunk', '0') // 添加form表单中其他数据
                console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                }


                // 添加请求拦截器(before)
                axios.interceptors.request.use(function (config) {
                    // 在发送请求之前做些什么
                    self.upLoadPop = true;
                    return config;
                }, function (error) {
                    // 对请求错误做些什么
                    return Promise.reject(error);
                });

                // 添加响应拦截器(complate)
                axios.interceptors.response.use(function (response) {
                    // 对响应数据做点什么
                    self.upLoadPop = false;
                    return response;
                }, function (error) {
                    // 对响应错误做点什么
                    return Promise.reject(error);
                });

                // 添加请求头
                axios.post('https://jsonplaceholder.typicode.com/posts/', param, config)
                    .then(ret => {
                        self.imgFile.push("https://www.baidu.com/img/baidu_jgylogo3.gif")
                  })
            },
            delUploadImg(index){
              let self = this;
              self.imgFile.splice(index, 1);
            },
        },
        watch:{
            imgFile(val,oldval){
                this.$emit("set-img-list",val);
                return val;
            }
        }
    }
</script>
<style scoped>
  .upload-box-com{
    display: flex;
    align-items: center;
    padding: 10px 0;
    flex-wrap: wrap;
  }
  .upload-show-com{
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
  .upload-show-com .upload-del-btn-com{
    position: absolute;
    right: -5px;
    top: -5px;
    font-size: 20px;
    color: red;
  }
  .upload-show-com img{
    width: 100%;
  }
  .upload-img-com{
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin-top: 5px;
    position: relative;
    border: 1px dashed #ddd;
    border-radius: 5px;
  }
  .upload-img-com input{
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .addup-com{
    font-size: 20px;
  }
</style>
