<template>
  <!--头部-->
  <mt-header style="height: 46px" fixed title="">
    <router-link to="#" slot="left">
      <img style="width: 22px" src="./../assets/indexicon.png" alt="">
    </router-link>

    <mt-button slot="right">
      <img class="header-icon-btn" src="./../assets/header-icon.jpg" alt="">
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
      }
  }
</script>
<style scoped>

</style>
