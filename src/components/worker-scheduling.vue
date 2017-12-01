<template>
  <div class="worker-box">
    <div class="worker-option-box">
      <div class="worker-select-box">
        <select class="worker-select select-reset-defult">
          <option value="君君">君君</option>
          <option value="萌萌">萌萌</option>
        </select>
      </div>
      <div class="worker-date-box">
        <div class="worker-date" @click="openDatePicker('date')">
          {{dateParse}}
        </div>
      </div>
    </div>

    <mt-datetime-picker
      ref="date"
      type="date"
      v-model="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format=" "
      @confirm="getData"
    >
    </mt-datetime-picker>
  </div>
</template>
<script>
    export default {
        name:"worker-scheduling",
        data(){
            return {
                date:"2017-11-01",
            }
        },
        methods:{
            openDatePicker(ref) {
                this.$refs[ref].open();
            },
            parseDate(value){
                let myDate = new Date(value);
                let year = myDate.getFullYear();
                let month = myDate.getMonth()+1;
                let day = myDate.getDate();
                if( month < 10 ){
                    month = "0"+month;
                }
                if( day < 10 ){
                    day = "0"+day;
                }
                return year + "-" + month;
            },
            getData(){
                let self = this;
                console.log(this.parseDate(self.date),self.curNav);
            }
        },
        computed: {
            dateParse: function () {
                let date = this.parseDate(this.date);
                return date;
            }
        },
    }
</script>
<style>
  .worker-option-box{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: #fff;
    color: #000;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  .worker-select-box{
    flex: 1;
    border-right: 1px solid #ddd;
  }
  .worker-select{
    width: auto;
    color: #000;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
  }
  .worker-date-box{
    flex: 1;
  }
  .worker-date{
    font-size: 14px;
  }
</style>
