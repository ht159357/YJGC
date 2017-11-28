<template>
  <div class="reg-box">
    <div class="gxjms-box">
      <div class="select-box">
        <div class="select-box-one">
          地点
          <select class="reg-input" :style="selectBackClass"
            v-model="cityVal" @change="changeCity">
            <option :value="item.territory_id" v-for="item in cityList">{{item.territory_name}}</option>
          </select>
        </div>
        <div class="select-box-one">
          店铺
          <select v-model="shopVal" class="reg-input" :style="selectBackClass" @change="changeShop">
            <option :value="item.storefront_id" v-for="item in shopList">{{item.storefront_name}}</option>
          </select>
        </div>
      </div>
      <div class="gxjms-info-box">
        <div style="padding-left: 10px;">桌子</div>
        <div class="gxjms-tabel-box">

          <div v-if="tableList.length === 0">
            <img src="./../assets/img/table-2.png" style="width: 200px;height: 150px;">
            <p style="text-align: center;">暂时没有桌子哦~</p>
          </div>

          <!--one table-->
          <div class="gxjms-tabel-one" v-for="(item,index) in tableList" :table_id="item.table_id" @click="activeState(item.table_id,index)" :class="[{'table-active': activeStateId === item.table_id }]">
            <div class="cs-active" v-if="item.sell_status===1">
              <div class="active-content">售</div>
            </div>
            <div class="jz-active" v-if="item.sell_status===3">
              <div class="active-content">禁</div>
            </div>

            <img class="table-img" src="./../assets/img/table-1.png"  v-if="item.sell_status===1">
            <img class="table-img" src="./../assets/img/table-2.png" v-if="item.sell_status===2||item.sell_status===3">
            <p class="table-name" :class="[{'table-dis-name':item.sell_status===2||item.sell_status===3}]">{{item.table_name}}</p>
            <div class="table-info-box"  v-if="item.sell_status===1">
              <div class="table-title">价格</div>
              <div class="table-price">{{item.joinPrice}}</div>
            </div>
            <div class="table-info-box" v-else-if="item.sell_status===2">
              <div class="table-title-ys">已售</div>
            </div>
            <div class="table-info-box" v-else-if="item.sell_status===3">
              <div class="table-title-js">禁售商品</div>
            </div>
          </div>
        </div>

      </div>
      <!--<div class="table-remark-box">-->
        <!--<div class="table-remark">备注</div>-->
        <!--<textarea v-model="remarkVal" class="reg-input reg-remark"></textarea>-->
      <!--</div>-->
    </div>
    <div class="gxjms-btn-box">
      <div class="gxjms-btn gxjms-btn-cancel" @click="back">取消</div>
      <div class="gxjms-btn gxjms-btn-yes" @click="buyTable">确定</div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { Toast } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  export default {
      name:"register-gxjms",
      data(){
          return {
              selectBackClass:{
                  "background": 'url("'+ require('./../assets/img/select-down.png')+'") no-repeat right center',
                  "background-size": "12px"
              },
              cityList: [],
              cityVal: null,
              shopList: [],
              shopVal: null,
              tableList: [],
              tableVal: null,
              tableState:[],
              remarkVal: null,
              activeStateId: null,
          }
      },
      methods:{
          activeState(id,index){
              let self = this;
              if( self.tableList[index].sell_status === 1 ){
                  self.activeStateId = id;
              }
          },
          changeCity(fun){
              let self = this;
              axios({
                  method:"post",
                  url: httpStr+"/wechat/register/allStfront?territory_id="+self.cityVal
              }).then(function(ret) {
                  let data = ret.data;
                  if (data.flag === 100) {
                      self.shopList = data.list;
                      self.shopVal = self.shopList[0].storefront_id;
                      self.changeShop();
                  }
              })
          },
          changeShop(){
              let self = this;
              axios({
                  method:"post",
                  url:httpStr+"/wechat/register/allTable",
                  data:{
                      storefront_id: self.shopVal
                  }
              }).then(function(ret){
                  let data = ret.data;
                  if( data.flag === 100 ){
                      self.tableList = [];
                      for( let i=0;i<data.list.length;i++ ){
                          self.tableList.push({
                              table_id : data.list[i].table_id,
                              table_name : data.list[i].table_name,
                              table_code : data.list[i].table_code,
                              sell_status : data.list[i].sell_status,
                              joinPrice : data.list[i].joinPrice,
                          })
                      }
                  }
              })
          },
          buyTable(){
              let self = this;
              if( self.activeStateId === null ){
                  Toast("请选择桌子！");
                  return;
              }
              axios({
                  method:"post",
                  url:httpStr+"/order/addShareTableOrder",
                  data:{
//                      remark: self.remarkVal,
                      openId: openId,
                      tableId: self.activeStateId,
                  }
              }).then(function(ret){
                  let data = ret.data;
                  console.log(data);
                  if( data.flag === 100 ){
                      /*****************支付调用*****************/
                      //公众号支付
                      WeixinJSBridge.invoke('getBrandWCPayRequest',{
                          "appId": data.data.appId,      //公众号名称，由商户传入
                          "timeStamp": data.data.timeStamp,      //时间戳，自1970年以来的秒数
                          "nonceStr": data.data.nonceStr,        //随机串
                          "package": data.data.package,													                                        "signType": data.data.signType,      //微信签名方式：
                          "paySign": data.data.paySign       //微信签名
                      },function(res){
                          if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                              Toast("支付成功！");
                          }else{
                              Toast("支付失败！");
                          }
                        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                        //因此微信团队建议，当收到ok返回时，向商户后台询问是否收到交易成功的通知，若收到通知，前端展示交易成功的界面；若此时未收到通知，商户后台主动调用查询订单接口，查询订单的当前状态，并反馈给前端展示相应的界面。
                          WeixinJSBridge.log('yo~ ready.');
                      }, false)
                      /*******************支付调用****************/
                  }else{
                      Toast("订单创建失败！");
                  }
              })
          },
          back(){
              let self = this;
              self.$router.push("/registerGxjmsXy");
          }

      },
      created(){
          let self = this;
          axios({
              method: 'post',
              url: httpStr + "/wechat/register/allCity"
          }).then(function(ret){
              let data = ret.data;
              if( data.flag === 100 ){
                  self.cityList = data.list;
                  self.cityVal = self.cityList[0].territory_id;
                  self.changeCity(self.changeShop);
              }
          })
      }
  }
</script>
<style scoped>
  .reg-box{
    box-sizing: border-box;
    color: #000;
    font-size: 14px;
  }
  .reg-input{
    width: 80px;
    font-size: 14px;
    background: #F7F5F5;
    border: none;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    text-indent: 15px;
    outline: none;
    appearance: none;
    margin-left: 5%;
    color: #898989;
    padding-right: 15px;
  }
</style>
<style>
  .gxjms-box{
    padding-bottom: 55px;
  }
  .select-box{
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .select-box-one{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
  }
  .gxjms-info-box{
    text-align: left;
    padding: 0 5px 10px;
  }
  .gxjms-tabel-box{
    display: flex;
    justify-content: space-around;
    padding-top: 5%;
    flex-wrap: wrap;
  }
  .gxjms-tabel-one{
    box-sizing: border-box;
    margin-top: 15px;
    margin-left: 3px;
    background: #fff;
    border-radius: 5px;
    width: 100px;
    height: 140px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .table-remark-box{
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .table-remark{
    text-align: left;
    padding-left: 15px;
    width: 35px;
  }
  .reg-input.reg-remark{
    width: calc( 100% - 100px );
    margin-left: 0;
    height: 30px;
    border: 1px solid #ddd;
    resize: vertical;
  }
  .cs-active{
    font-weight: bold;
    width: 50px;
    height: 50px;
    line-height: 78px;
    color: #EDCB32;
    transform: rotate(45deg);
    background: #D64E5A;
    position: absolute;
    right: -25px;
    top: -25px;
  }
  .active-content{
    transform: rotate(-45deg);
  }
  .gxjms-tabel-one .jz-active{
    font-weight: bold;
    width: 50px;
    height: 50px;
    line-height: 78px;
    color: #fff;
    transform: rotate(45deg);
    background: #CCCCCC;
    position: absolute;
    right: -25px;
    top: -25px;
  }
  .table-img{
    width: 60%;
    margin-top: 25px;
  }
  .table-info-box{
    display: flex;
    height: 30px;
    line-height: 30px;
    background: #D64E5A;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    justify-content: space-around;
  }
  .table-title-ys{
     width: 100%;
     color: #D64E5A;
     background: #F4DADD;
  }
  .table-title-js{
    width: 100%;
    color: #fff;
    background: #CCC;
  }
  .table-name{
    box-sizing: border-box;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 5px;
    margin: 0;
    color: #D64E5A;
    font-weight: bold;
  }
  .table-dis-name{
    color: #ccc;
  }
  .gxjms-tabel-one.table-active:before{
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #D64E5A;
    border-radius: 50%;
    left: 5px;
    top: 5px;
  }
  .table-active:after{
    content: "";
    position: absolute;
    width: 5px;
    height: 10px;
    border-right: 2px solid #D64E5A;
    border-bottom: 2px solid #D64E5A;
    left: 10px;
    top: 6px;
    transform: rotate(45deg);
  }
  .gxjms-btn-box{
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .gxjms-btn{
    flex: 1;
    height: 44px;
    line-height: 44px;
    font-weight: bold;
  }
  .gxjms-btn-cancel{
    background: #B0B0B0;
    color: #fff;
  }
  .gxjms-btn-yes{
    background: #E83751;
    color: #fff;
  }
</style>
