<template>
  <div class="order-box">
    <div class="order-say"><span>开票金额说明</span> | <span>开票历史</span></div>
    <div class="order-list-box">
      <!--单一个-->
      <div class="order-list-one" v-for="(item,index) in orderList">
        <div class="order-check-box" :class="[{'active':item.active}]" @click="checkSelf(index)"></div>
        <div class="order-info-box">
          <p class="order-name">{{ item.name }}</p>
          <p class="order-time">{{ item.date }}</p>
        </div>
        <div class="order-money">
          {{ item.money }}
        </div>
      </div>

    </div>
    <div class="bottom-box">
      <div class="bottom-box-check">
        <div class="order-check-box" @click="checkAll" :class="[{'active': checkedAll}]"></div>
         全选
      </div>
      <p class="bottom-box-p">
        0个订单 共0元
      </p>
      <div class="next-btn" @click="nextStep">
        下一步
      </div>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue';
//    import { Checklist } from 'mint-ui';
    import axios from "axios";
    import { Toast } from 'mint-ui';

//    Vue.component(Checklist.name, Checklist);
    export default {
        name:"make-order",
        data(){
            return {
                checkedAll: false,
                orderList:[
                    {
                        name: "绝色美足",
                        date: "2017/07/11 10:30",
                        money: "58",
                        active: false,
                    },{
                        name: "绝色美足1",
                        date: "2017/07/11 10:30",
                        money: "98",
                        active: false,
                    },{
                        name: "绝色美足2",
                        date: "2017/07/11 10:30",
                        money: "498",
                        active: false,
                    },{
                        name: "绝色美足3",
                        date: "2017/07/11 10:30",
                        money: "998",
                        active: false,
                    },{
                        name: "绝色美足4",
                        date: "2017/07/11 10:30",
                        money: "198",
                        active: false,
                    },
                ],
                checkList:[],
            }
        },
        methods:{
            dataHandle( data ){
                data.forEach(function(item,index){
                    data[index].active = false;
                })
            },
            checkSelf(index){
                let self = this;
                var val = !this.orderList[index].active;
                this.$set(this.orderList[index],"active",val);
                if( !val ){
                    self.checkedAll = false;
                }
            },
            checkAll(){
                let self = this;
                if( self.checkedAll ){
                    this.orderList.forEach(function(item,index){
                        self.$set(self.orderList[index],"active",false);
                    })
                }else{
                    this.orderList.forEach(function(item,index){
                        self.$set(self.orderList[index],"active",true);
                    })
                }
                self.checkedAll = !self.checkedAll;
            },
            nextStep(){
                let self = this;
                this.checkList = [];
                this.orderList.forEach(function(item,index){
                    if( item.active === true){
                        self.checkList.push( index );
                    }
                });
                console.log( this.checkList );
                //code

//                self.$router.push("/makeBill");
            }
        },
        created(){
            let self = this;
            this.dataHandle(this.orderList);
            console.log(this.orderList);

            axios.post(httpStr+"/artisan/queryAppointmentByInvoiceId",{
                openId:openId
            }).then((ret)=>{
                let data = ret.data;
                console.log(data);
            })
        },

    }
</script>
<style>
  .order-box{
    text-align: left;
    background: #fff;
  }
  .order-say{
    text-align: right;
    padding:5px 10px;
  }
  .order-list-box{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }
  .order-list-one{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F4F2F3;
    padding: 5px;
  }
  .order-info-box{
    flex: 3;
    padding-left: 10px;
  }
  .order-name{
    font-weight: bold;
    font-size: 16px;
    margin: 5px 0 10px;
  }
  .order-time{
    color: #5A6466;;
    margin: 5px 0;
  }
  .order-money{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }
  .bottom-box{
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 15px;
  }
  .bottom-box-p{
    display: inline-block;
    width: 100%;
    margin: 10px auto 0;
  }
  .bottom-box-check{
    height: 20px;
    line-height: 20px;
    width: 100%;
    display: inline-block;
  }
  .order-check-box{
    width: 20px;
    height: 20px;
    border: 2px solid #FB3453;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    box-sizing: border-box;
  }
  .order-check-box.active:before{
    content: "";
    width: 70%;
    height: 30%;
    border-left: 2px solid #FB3453;
    border-bottom: 2px solid #FB3453;
    position: absolute;
    top: 3px;
    right: 2px;
    transform: rotate(-45deg);
  }
  .next-btn{
    position: absolute;
    right: 5%;
    top: 20px;
    border-radius: 5px;
    background: #FB3453;
    color: #fff;
    padding: 5px 10px;
  }
</style>
