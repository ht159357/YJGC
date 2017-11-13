<template>
  <!--头部-->
  <mt-header class="header-backcolor" style="height: 44px;" fixed title="">
    <mt-button slot="left" @click="showIndex()">
      <img style="width: 22px;" src="./../assets/img/indexicon.png">
    </mt-button>

    <mt-button slot="right">
      <img class="header-icon-btn" src="./../assets/img/header-icon.jpg">
    </mt-button>
  </mt-header>
</template>
<script>
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
      name:"header-nav",
      data(){
          return {
              userid: 1
          }
      },
      methods:{
          showIndex(){
              let data = {

              };
              this.$emit("activepage",data);
          }
      }
  }
</script>
<style scoped>
.header-backcolor{
  background-color: #FB3453;
}
</style>
