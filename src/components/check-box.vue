<template>
  <div class="comp-check-box">
    <label class="comp-check-cell">
      <span class="comp-check-border">
        <transition name="fade">
          <span class="comp-check-checked" v-show="checked" transiton="fade"></span>
        </transition>
      </span>
      <input type="checkbox" v-model="checked" style="display: none;" :value="value">
      <span style="flex: 1;">{{title}}</span>
    </label>
  </div>
</template>
<script>
    export default {
        name: "check-box",
        props:["value","title","check","index"],
        data(){
            return {
                checked:this.check,
            }
        },
        watch:{
            checked(val,oldval){
                this.$emit("set-val",{
                    value:this.value,
                    title:this.title,
                    check:this.checked,
                    index:this.index
                })
                return val;
            }
        }
    }
</script>
<style scoped>
  .comp-check-box{
    display: inline-block;
  }
  .comp-check-cell{
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 0;
  }
  .comp-check-border{
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #FB3453;
    border-radius: 6px;
    position: relative;
    margin-right: 5px;
  }
  .comp-check-checked{
    transform: rotate(45deg);
    display: inline-block;
    width: 5px;
    height: 11px;
    border-right: 2px solid #FB3453;
    border-bottom: 2px solid #FB3453;
    position: absolute;
    top: -1px;
    left: 4px;
  }
  .comp-check-checked.fade-enter-active, .comp-check-checked.fade-leave-active {
    transition: opacity .3s
  }
  .comp-check-checked.fade-enter, .comp-check-checked.fade-leave-to {
    opacity: 0
  }
</style>
