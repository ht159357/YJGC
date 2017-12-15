<template>
  <mt-popup
    v-model="showPop"
    position="center"
    :closeOnClickModal="false" style="background: transparent;">
    <mt-spinner type="double-bounce" color="#FB3453"></mt-spinner>
  </mt-popup>
</template>
<script>
    /**********
     * 全屏loading组件
     * :showPop true为显示，false为隐藏
     * *************/
    import Vue from "vue";
    import { Popup } from 'mint-ui';

    Vue.component(Popup.name, Popup);
    export default {
        name:"full-screen-loading",
        props:["showPop"]
    }
</script>
<style scoped>

</style>
