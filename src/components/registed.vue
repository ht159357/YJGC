<template>
  <div class="yzc-page-box">
    <img src="./../assets/img/registed.png">
    <p>{{title}}已注册！</p>
  </div>
</template>
<script>
    export default {
        name:"registed",
        data(){
            return {
                title:""
            }
        },
        created(){
            if( this.$route.params.type === '1' ){//1:加盟商
                this.title = "加盟商";
            }else if( this.$route.params.type === '2' ){//2:共享加盟商
                this.title = "共享加盟商";
            }
        }
    }
</script>
<style>
  .yzc-page-box{
    padding-top: 100px;
  }
  .yzc-page-box img{
    width: 50%;
  }
  .yzc-page-box p{
    color: #E93950;
    font-weight: bold;
    font-size: 20px;
    margin-top: 50px;
  }
</style>
