<template>
  <div class="app-body">
      <div class="app-header">
        <div class="app-shop-title">
          店面：
        </div>
        <div class="app-shop-name mint-header-title">
          南昌万达店
        </div>
        <a class="app-shop-addr" @click.prevent="goBaiduMap">
          <svg class="icon app-icon-right-arr" aria-hidden="true" style="vertical-align: -0.1em;"><use xlink:href="#icon-position"></use></svg>
          具体位置
        </a>
        <router-link to="/" class="app-shop-index router-link">
          切换门店<svg class="icon icon-right-arr" aria-hidden="true"><use xlink:href="#icon-right-arr-red"></use></svg>
        </router-link>
      </div>
      <!--时间模块-->
      <appointment-date class="app-viwe" v-if="$route.params.yyType === '1'" :date="ifLoading ? dateTime : null" :jishiinfo="jishiInfo" @set-info="getJishiInfo"></appointment-date>
      <!--技师模块-->
      <appointment-js class="app-viwe" v-if="$route.params.yyType === '2'" :date="ifLoading ? dateTime : null" @set-jishi="setJishi"></appointment-js>
      <!--根据技师选时间-->
      <appointment-time class="app-viwe" :date="ifLoading ? dateTime : null" v-if="$route.params.yyType === '3'" @set-yytime="setTime"></appointment-time>
      <!--{{$store.state.showGoodDetails}}-->
      <!--商品信息-->
      <div class="goods-detals-box" v-if="$route.params.showGoods == 1 && goodsInfo !== null">
        <div class="goods-one">
          <div class="goods-one-left">
            <img src="./../assets/img/header-icon.jpg">
          </div>
          <div class="goods-one-right">
            <div class="goods-one-1">
              <span class="goods-name">{{goodsInfo.goodsName}}</span>
              <span class="goods-price">&yen;{{$route.params.price}}</span>
            </div>
            <div class="goods-one-1">
              <span class="goods-sellname">手艺人: {{$route.params.artName}}</span>
            </div>
          </div>
        </div>
      </div>

      <!--支付-->
      <div class="yy-pay-btn" v-if="$route.params.shopType == 1" @click="payIt()">
        预约支付 &yen; {{price}}
      </div>
      <!--选过匠师支付-->
      <div class="yy-pay-btn yy-pay-btn-2" v-if="$route.params.shopType == 2 || $route.params.shopType == 3" @click="payIt()">
        <div class="pay-btn-left">
          预约&yen;{{price}}（颜币：0.00）
        </div>
        <div class="pay-btn-right">
          提交订单
        </div>
      </div>

  </div>
</template>
<script>
    import appointmentDate from "./appointment-date";
    import appointmentJs from "./appointment-js";
    import appointmentTime from "./appointment-time";
    import store from './../store/store';
    import axios from 'axios';
    import { Toast } from 'mint-ui';

    export default {
        name:"make-appointment",
        components:{
            appointmentDate,
            appointmentJs,
            appointmentTime,
        },
        data(){
            return {
                goodsId : this.$route.params.goodsId,
                storefrontId : this.$route.params.storefrontId,
                price : this.$route.params.price,
                time : this.$route.params.time,
                dateTime: null,
                ifLoading: false,
                jishiInfo:null,
                payData:null,
                jishiInfo2:null,
                goodsInfo:null,
                jiangshiInfo:null,
                jishiInfo3:{
                    dateTime:null,
                    timeFalg:null
                }
            }
        },
        store,
        methods:{
            payIt(){
                let self = this;
                if( self.$route.params.yyType === "1" ){
                    if( self.payData === null || self.payData.artisanId === null ){
                        Toast('请选择匠师');
                        return;
                    }
                    //支付完成跳转
                    this.$router.push('/submitOrder');
                }else if( self.$route.params.yyType === "2" ){
                    if(!self.jishiInfo2 || !self.jishiInfo2){
                        Toast("请选择时间");
                        return
                    }
                    this.$router.push('/submitOrder');
                }else if( self.$route.params.yyType === "3" ){
                    if(!self.jishiInfo3 || self.jishiInfo3.timeFalg === null){
                        Toast("请选择时间");
                        return
                    }
                    this.$router.push('/submitOrder');
                }
//                this.$router.push('/yySuccess');
            },
            setJishi(data){
                this.jishiInfo2 = data;
            },
            getJishiInfo(data){
                let self = this;
                self.payData = data;
            },
            goBaiduMap(){
                let self = this;
                axios.post(httpStr+"/artisan/findStorefront",{
                    storefrontId: self.storefrontId
                }).then((ret)=>{
                    let  data = ret.data;
                    let addrs = "http://map.baidu.com/mobile/webapp/place/marker/qt=inf&vt=map&act=read_share&code=315/third_party=uri_api&point="+ data.data.longitude +"|"+ data.data.latitude +"1&title=颜匠工场&content=颜匠工场 "+ data.data.address +"=pcqq.c2c";
                    console.log(addrs);
                    window.location.href = addrs;
                })
            },
            queryByStyleId(fun){
                let self = this;
                axios.post(httpStr+'/artisan/selectByStyleId',{
                    styleId: self.$route.params.goodsId
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.goodsId = data.data.goodsId;
                        if( fun !== undefined ){
                            fun();
                        }
                    }
                });
            },
            queryByGoodsId(){
                let self = this;
                axios.post(httpStr+'/artisan/queryGoods',{
                    goodsId: self.goodsId
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.goodsInfo = data.data;
                    }
                });
            },
            queryByArtisanId(){
                let self = this;
                axios.post(httpStr+'/artisan/queryUserTimeStyle',{
                    artisanId: self.$route.params.artisanId,
                    openId: openId,
                    time: self.$route.params.time
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.jiangshiInfo = data.data;
                        self.dateTime = self.jiangshiInfo.userTime;
                        self.ifLoading = true;
                    }
                })
            },
            setTime(data){
                let self = this;
                self.jishiInfo3 = data;
            }
        },
        created(){
            let self = this;
            console.log(self.$route.params.shopType);
            if(self.$route.params.shopType==='1'){
                axios.post(httpStr+"/artisan/queryDayHoursList",{
                    storefrontId:self.storefrontId,
                    time:self.time
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.dateTime = data.list;
                        self.ifLoading = true;
                    }
                })
            }else if(self.$route.params.shopType==='2'){//根据styleId查数据
                self.queryByStyleId(self.queryByGoodsId);
                self.queryByArtisanId();
            }else if(self.$route.params.shopType==='3'){//直接查goodsId数据
                self.goodsId = self.$route.params.goodsId;
                self.queryByGoodsId();
                self.queryByArtisanId();
            }
        }
    }
</script>
<style>
  .app-body{
    background: #F7F5F4;
    padding-bottom: 44px;
  }
  .app-viwe{
    margin-top: 10px;
  }
  .app-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 12px;
  }
  .app-shop-title{
    flex: 0 0 55px;
    text-indent: 15px;
    color: #aaa;
  }
  .app-shop-name{
    flex: 0 0 30%;
    text-align: left;
  }
  .app-shop-addr{
    flex: 0 0 70px;
    color: #2C9EFE;
    text-decoration: none;
  }
  .app-shop-index{
    flex: 0 0 70px;
    color: #FB3453;
  }
  .yy-pay-btn{
    width: 100%;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    height: 44px;
    line-height: 44px;
    background: #2C2C2C;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .goods-detals-box{
    background: #fff;
    margin-top: 10px;
  }
  .goods-one{
    padding: 10px 0;
    display: flex;
  }
  .goods-one-left{
    flex: 0 0 80px;
  }
  .goods-one-left img{
    width: 80%;
  }
  .goods-one-right{
    flex: 0 0 70%;
    text-align: left;
    align-items: center;
  }
  .goods-name{
    font-size: 16px;
    font-weight: bold;
  }
  .goods-price{
    color: #FB3453;
    font-size: 16px;
    font-weight: bold;
  }
  .goods-one-1{
    display: flex;
    justify-content: space-between;
  }
  .goods-sellname{
    font-size: 16px;
    font-weight: bold;
    color: #999;
    margin-top: 20px;
  }
  .yy-pay-btn-2{
    display: flex;
    font-size: 14px;
  }
  .pay-btn-left{
    flex: 2;
    background: #000000;
  }
  .pay-btn-right{
    flex: 1;
    background: #FC3353;
  }
</style>
