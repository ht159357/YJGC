<template>
    <div class="shops-box">
      <div class="shops-box-box">
        <select class="select-reset" name="province" :value="province">
          <option value="1">江苏省</option>
          <option value="2">上海市</option>
          <option value="3">江西省</option>
        </select>
      </div>
      <div class="shops-box-box">
        <select class="select-reset" name="city">
          <option value="1">南京市</option>
          <option value="2">上海市</option>
          <option value="3">南昌市</option>
        </select>
      </div>
      <div class="shops-box-box">
        <select class="select-reset" name="city">
          <option value="1">南京店</option>
          <option value="2">上海店</option>
          <option value="1">南昌店</option>
        </select>
      </div>
    </div>
</template>
<script>
  export default {
      name:'index-main',
      data(){
          return {
              province:1,
          }
      },
      mounted(){
          console.log(this.province);
      }
  }
</script>
<style scoped>
  .shops-box{
    display: flex;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .shops-box-box{
    flex: 1;
    border-right: 1px solid #ccc;
  }
  .shops-box-box:last-child{
    border-right: none;
  }
  select::-ms-expand { display: none; }
  .select-reset{
    width: 100%;
    border: none;
    outline: none;
    height: 45px;
    line-height: 45px;
    padding-left: 14px;
    padding-right: 24px;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    position: relative;
    background-color: #fff;
    background-image: url(./../assets/select-down.png);
    background-repeat: no-repeat;
    background-position: calc(100% - 5px);
    color: #808080;
  }

</style>
