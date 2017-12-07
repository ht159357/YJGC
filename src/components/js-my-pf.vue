<template>
  <div class="js-my-yy-box">
    <div class="js-myyy-list" style="background: #f1f1f1;">

      <div class="js-myyy-list-one" v-for="item in 10">
        <img src="./../assets/img/pf.png">
        <p class="js-myyy-list-title">2017-11-23</p>
        <div class="js-myyy-list-pf-box">
          <div class="js-myyy-list-price js-myyy-list-pf">5</div>
          服务分
        </div>
        <div class="js-myyy-list-pf-box">
          <div class="js-myyy-list-price js-myyy-list-pf">5</div>
          技能分
        </div>
      </div>

    </div>
  </div>
</template>
<script>
    export default {
        name: "js-my-yy",
        data(){
            return {

            }
        },
    }
</script>
<style scoped>
  .js-myyy-list-one{
    border-top: 1px solid transparent;
  }
</style>
<style>
  .js-my-search-box{
    box-sizing: border-box;
    background: #fff;
    padding: 10px;
    position: relative;
  }
  .js-my-search-box input{
    height: 40px;
    width: 100%;
    text-indent: 20px;
    outline: none;
    border: none;
    border-radius: 27px;
    background: #eee;
  }
  .js-my-search-img{
    position: absolute;
    right: 20px;
    top: 15px;
    width: 32px;
  }
  .js-my-target-box{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px;
    background: #fff;
  }
  .js-my-target{
    width: auto;
    font-size: 12px;
    padding: 11px 15px;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-right: 5px;
    font-weight: bold;
  }
  .js-my-target.active{
    color: #FB3453;
    background: #FDE3ED;
    border: 1px solid #FCBFC9;
  }
  .js-myyy-list{
    background: #fff;
  }
  .js-myyy-list-one{
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }
  .js-myyy-list .js-myyy-list-one:first-child{
    border-top: 1px solid #ccc;
  }
  .js-myyy-list-one img{
    width: 24px;
  }
  .js-myyy-list-title{
    text-align: left;
    margin: 5px;
    flex: 1;
  }
  .js-myyy-list-price{
    max-width: 100px;
    border: 1px solid #FC3353;
    color: #FC3353;
    padding: 5px 9px;
    background: #FDE3ED;
    border-radius: 20px;
  }
  .js-myyy-list-pf-box{
    font-size: 12px;
    margin-right: 20px;
  }
  .js-myyy-list-price.js-myyy-list-pf{
    background: #2B9DFE;
    border: none;
    color: #fff;
    border-radius: 3px;
    position: relative;
  }
  .js-myyy-list-price.js-myyy-list-pf:before{
    content: "";
    position: absolute;
    top: 7px;
    left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #f1f1f1;
  }
  .js-myyy-list-price.js-myyy-list-pf:after{
     content: "";
     position: absolute;
     top: 7px;
     right: -5px;
     width: 10px;
     height: 10px;
     border-radius: 50%;
     background: #f1f1f1;
   }
</style>
