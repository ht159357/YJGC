<template>
  <div class="js-style-box">
    <div class="js-style-list">
      <div class="js-style-one" v-for="item in 10">
        <div class="js-style-img">
          <img v-lazy="require('./../assets/img/goods-1.png')">
        </div>
        <div class="js-style-info">
          <p class="js-style-title">款式美甲</p>
          <p class="js-style-id">款式美甲（222）</p>
        </div>
        <div class="js-style-query">
          <span class="js-style-del">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu"></use>
            </svg> 删除
          </span>
          <router-link to="/jsMyStyleEdit" class="js-style-eidt router-link">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bianji"></use>
            </svg> 编辑
          </router-link>
        </div>
      </div>
    </div>
    <div class="js-style-btn-box">
      <router-link to="/jsMyStyleAdd" class="yj-btn js-style-add router-link">
        发布新款
      </router-link>
    </div>
  </div>
</template>
<script>
    export default {
        name: "js-my-style",
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style>
  .js-style-list{
    padding: 10px 10px 60px;
  }
  .js-style-one{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    background: #fff;
    padding: 7px;
    border-bottom: 1px solid #ddd;
  }
  .js-style-img{
    width: 60px;
    margin-bottom: -4px;
  }
  .js-style-img img{
    width: 100%;
  }
  .js-style-info{
    padding-left: 10px;
    flex: 1;
    height: 60px;
    font-size: 16px;
    text-align: left;
  }
  .js-style-id{
    font-weight: bold;
  }
  .js-style-query{
    width: 100%;
    text-align: right;
    color: #aaa;
    font-size: 14px;
  }
  .js-style-del{
    margin-right: 5px;
  }
  .js-style-btn-box{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .js-style-add{
    box-sizing: border-box;
    width: 90%;
    margin-top: 6px;
    background: #FB3453;
    color: #fff;
    padding: 10px 0;
  }
</style>
