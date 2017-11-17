<template>
  <!--头部-->
  <mt-header class="header-backcolor" style="height: 44px;" fixed title="颜匠工场">
    <mt-button slot="left" @click="showIndex()">
      <img style="width: 22px;" src="./../assets/img/indexicon.png">
    </mt-button>

    <mt-button slot="right" @click="showMyPage">
      <img class="header-icon-btn" src="./../assets/img/header-icon.jpg">
    </mt-button>
  </mt-header>
</template>
<script>
  import Vue from 'vue';
  import { Header } from 'mint-ui';
  import store from './../store/store'

  Vue.component(Header.name, Header);
  export default {
      name:"header-nav",
      data(){
          return {
              userid: 1
          }
      },
      store,
      methods:{
          showIndex(){
              let data = {

              };
              this.$emit("activepage",data);
          },
          showMyPage(){
              let pagename = "showMyPage";
              let data = store.state;
              console.log(data);
              data.curPage = pagename;
              data.showIndexs = false;
              data[pagename] = true;
              for(let i=0;i<data.pageList.length;i++){
                  if( data.pageList[i] !== pagename ){
                      data[data.pageList[i]] = false;
                  }
              }
          }
      }
  }
</script>
<style scoped>
.header-backcolor{
  background-color: #FB3453;
}
</style>
