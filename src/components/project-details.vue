<template>
  <div class="project-page">
    <!--轮播-->
    <div class="mint-swipe-container">
      <div style="height: 250px;"  v-if="shopType == '1'">
        <img class="swipe-img pro-swipe-img" v-lazy="ifLoading ? goodsInfo.marketPic : ''">
      </div>
      <mt-swipe :auto="0" :prevent="true" style="height: 250px;" v-else>
        <mt-swipe-item class="mint-swipe-item">
          <img class="swipe-img pro-swipe-img" v-lazy="'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg'">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--价格-->
    <div class="pro-price-box" v-cloak>
      <div class="pro-price-left">
        <div class="pro-name">
          {{ifLoading && goodsInfo.goodsName}}
        </div>
        <div class="pro-time">
          <span class="pro-title">耗时</span>
          <span class="pro-value">{{ifLoading && goodsInfo.elapsedTime}}分</span>
          <span class="pro-title">保持</span>
          <span class="pro-value">{{ifLoading && goodsInfo.storageTime}}天</span>
        </div>
      </div>
      <div class="pro-price-right">
        <div class="pro-price">
          <div class="pro-price-num">&yen;{{ifLoading && goodsInfo.marketPrice}}</div>
          <div class="pro-price-title">价格</div>
        </div>
      </div>
    </div>

    <!--好评率-->
    <div class="goods-num-box" v-if="0">
      <mt-cell title="好评度 100.00%" style="color: rgb(185,116,87);font-weight: bold;">
        <span style="font-size: 12px;">共 100 个消费评价</span>
        <img slot="icon" src="./../assets/img/damuzhi.png" width="16">
      </mt-cell>
    </div>

    <div class="pro-options" v-if="ifLoading && goodsInfo.rService === 1">
      <div class="pro-options-title">
        是否卸甲服务 （简单{{goodsInfo.rTime}}分钟{{goodsInfo.rPrice}}元，日系{{goodsInfo.rTime}}分钟{{goodsInfo.rPrice}}元）
      </div>
      <div class="pro-options-box">
        <div @click="btnSwitch(1)" class="pro-options-btn" :class="[{'options-btn-active' : rService === 1}]">简单卸甲</div>
        <div @click="btnSwitch(2)" class="pro-options-btn" :class="[{'options-btn-active' : rService === 2}]">日系卸甲</div>
        <div @click="btnSwitch(0)" class="pro-options-btn" :class="[{'options-btn-active' : rService === 0}]">否</div>
      </div>
    </div>
    <div class="pro-details">
      <img class="pro-details-img" src="./../assets/img/attention.jpg" alt="">
    </div>
    <!--时间|匠师   shopType = 1-->
    <!--/makeAppointment/:yyType/:shopType/:showGoods/:storefrontId/:goodsId/:time/:price-->
    <div class="pro-bottom-box" v-if="shopType == 1">
      <router-link :to="'/makeAppointment/1/1/0/'+ storefrontId +'/'+ goodsId+'/'+goodsInfo.elapsedTime+'/'+goodsInfo.marketPrice" class="pro-choise-date router-link" @click="showAppointmentPage(1)">
        <img src="./../assets/img/choise-date.png" alt="">
        选时间
      </router-link>
      <router-link :to="'/makeAppointment/2/1/0/'+ storefrontId +'/'+ goodsId+'/'+goodsInfo.elapsedTime+'/'+goodsInfo.marketPrice" class="pro-choise-jishi router-link" @click="showAppointmentPage(2)">
        <img src="./../assets/img/choise-jishi.png" alt="">
        选匠师
      </router-link>
    </div>
    <!--款式|时间   shopType = 2-->
    <div class="pro-bottom-box" v-if="footerType == 2">
      <div class="pro-choise-date online-type" @click="backJsDetails">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star1"></use>
        </svg>
        在线选款式
      </div>
      <!--/makeAppointment/:yyType/:shopType/:showGoods/:storefrontId/:goodsId/:time/:price-->
      <router-link :to="'/makeAppointment/3/2/1/'+storefrontId+'/'+styleId+'/'+goodsInfo.elapsedTime+'/'+goodsInfo.marketPrice+'/'+$route.params.artisanId+'/'+$route.params.artName" class="pro-choise-jishi online-date router-link" @click="showAppointmentPage(3)">
        选时间
      </router-link>
    </div>
    <!--喜欢|店铺|时间   shopType = 3-->
    <div class="pro-bottom-box" v-if="footerType == 3">
      <div class="pro-choise-date shop-like-box">
        <div @click="likeIt()">
          <svg class="icon" aria-hidden="true" v-if="liked">
            <use xlink:href="#icon-liked-shop"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-else>
            <use xlink:href="#icon-like-shop"></use>
          </svg>
          喜欢
        </div>
        <div @click="backJsDetails">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shop"></use>
          </svg>
          店铺
        </div>
      </div>
      <!--/makeAppointment/:yyType/:shopType/:showGoods/:storefrontId/:goodsId/:time/:price-->
      <router-link :to="'/makeAppointment/3/3/1/'+storefrontId+'/'+(goodsInfo?goodsInfo.goodsId:'')+'/'+(goodsInfo?goodsInfo.elapsedTime:'')+'/'+(goodsInfo?goodsInfo.marketPrice:'')+'/'+$route.params.artisanId+'/'+$route.params.artName"  class="pro-choise-jishi online-date router-link" @click="showAppointmentPage(3)">
        选时间
      </router-link>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue';
    import { Cell } from 'mint-ui';
    import store from "./../store/store";
    import axios from 'axios';
    import { Toast } from 'mint-ui';

    Vue.component(Cell.name, Cell);
    export default {
        name: 'project-detail',
        store,
        data(){
            return {
                shopType:this.$route.params.shopType,
                goodsId:this.$route.params.goodsId,
                storefrontId:this.$route.params.shopId,
                goodsInfo:null,
                ifLoading: false,
                rService: 0,
                oldTime: 0,
                oldPrice: 0,
                jishiGoodsInfo:null,
                footerType:null,
                styleId:this.$route.params.goodsId,
                liked:null,
            }
        },
        activated(){
            console.log(this.$route.params);
        },
        methods:{
            btnSwitch(rService){
                let self = this;
                self.rService = rService;
                if( self.rService === 1 || self.rService === 2 ){
                    self.goodsInfo.elapsedTime = self.goodsInfo.rTime + self.oldTime;
                    self.goodsInfo.marketPrice = self.goodsInfo.rPrice + self.oldPrice;
                }else if(self.rService === 0){
                    self.goodsInfo.elapsedTime = self.oldTime;
                    self.goodsInfo.marketPrice = self.oldPrice;
                }
            },
            //type:1 选时间 通过日期和具体时间选择匠师预约
            //type:2 选匠师 通过日期选择匠师的当天预约时间
            //type:3 已选匠师 通过匠师选择具体日期和时间
            showAppointmentPage( type ){

            },
            backJsDetails(){
                history.back();
            },
            getGoodsInfo(goodsId){
                axios.post(httpStr+"/artisan/queryGoods",{
                  goodsId:goodsId,
                }).then((ret)=>{
                    let self = this;
                    let data = ret.data
                    if( data.flag === 100 ){
                        self.goodsInfo = data.data;
                        self.oldTime = self.goodsInfo.elapsedTime;
                        self.oldPrice = self.goodsInfo.rPrice;
                        self.btnSwitch(0);
                        self.ifLoading = true;
                    }
                })
            },
            likeIt(){
                let self = this;
                if( !self.liked ){
                    axios.post(httpStr+"/artisan/addLike",{
                        styleId:self.styleId,
                        openId:openId
                    }).then((ret)=>{
                        let data = ret.data;
                        if( data.flag === 100 ){
                            Toast("添加喜欢成功！");
                            self.liked = true;
                        }else{
                            Toast("添加喜欢失败！");
                        }
                    })
                }else if(self.liked){
                    axios.post(httpStr+"/artisan/deleteMbkUserLike",{
                        styleId:self.styleId,
                        openId:openId
                    }).then((ret)=>{
                        let data = ret.data;
                        if( data.flag === 100 ){
                            Toast("取消喜欢成功！");
                            self.liked = false;
                        }else{
                            Toast("取消喜欢失败！");
                        }
                    })
                }
            },
            searchLiked(styleId){
                let self = this;
                console.log(self.styleId);
                axios.post(httpStr+"/artisan/selectMbkUserLike",{
                    styleId:styleId,
                    openId:openId
                }).then((ret)=>{
                    let data = ret.data;
                    console.log(data);
                    if( data.data !== null ){
                        self.liked = true;
                    }else{
                        self.liked = false;
                    }
                })
            }
        },
        created(){
            let self = this;
            if( this.$route.params.shopType === '1' ){
                axios.post(httpStr+"/artisan/queryGoods",{
                    goodsId:self.goodsId
                }).then((ret)=>{
                    console.log(ret.data);
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.goodsInfo = data.data;
                        self.oldTime = self.goodsInfo.elapsedTime;
                        self.oldPrice = self.goodsInfo.rPrice;
      //                    self.goodsInfo.rService = 0;
                        self.btnSwitch(0);
                        self.ifLoading = true;
                    }
                })
            }else if( this.$route.params.shopType === '2' ){//artisanId,goodsId查询
                axios.post(httpStr+"/artisan/selectByStyleInfo",{
                    artisanId:self.$route.params.artisanId,
                    goodsId:self.$route.params.goodsId
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        console.log(data.list);
                        self.getGoodsInfo(data.list[0].goodsId);
                        data.list.push({});
                        if( data.list.length > 1 ){
                            self.footerType = 2;
                            self.styleId = data.list[0].styleId;
                        }else{
                            self.footerType = 3;
                            self.searchLiked(data.list[0].styleId);
                        }
                    }
                })
            }else if( this.$route.params.shopType === '3' ){
                axios.post(httpStr+"/artisan/selectByStyleId",{
                    styleId:self.$route.params.goodsId
                }).then((ret)=>{
                    let data = ret.data;
                    if( data.flag === 100 ){
                        self.footerType = 3;
                        self.getGoodsInfo(data.data.goodsId);
                        self.searchLiked(data.data.styleId);
                        self.goodsId = data.data.goodsId;
                    }
                })
            }
        }
    }
</script>
<style scoped>
  [lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  [lazy=error]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/load-error.svg") no-repeat center #ddd;
    background-size: 120px;
  }
</style>
<style>
  [v-cloak]{
    display: none;
  }
  .project-page{
    background: #EFEEEE;
    padding-bottom: 50px;
  }
  .pro-price-box{
    margin: 10px;
    background: #fff;
    display: flex;
    text-align: left;
    border-radius: 5px;
    padding: 10px;
  }
  .pro-price-left{
    flex: 0 0 70%;
  }
  .pro-price-right{
    flex: 0 0 30%;
  }
  .pro-name{
    font-size: 18px;
    font-weight: bold;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .pro-time{
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 14px;
  }
  .pro-title{
    color: #fff;
    background: #4C9CFE;
    padding: 3px 5px;
    border-radius: 3px;
    margin-left: 10px;
  }
  .pro-value{
    color: #5791CD;
  }
  .pro-time .pro-title:first-child{
    margin-left: 0;
  }
  .pro-options{
    background: #fff;
    padding: 10px 10px 0;
  }
  .pro-price{
    width: 90%;
    max-width: 90px;
    margin: 0 auto;
    border: 1px solid #E71B4F;
    border-radius: 4px;
    text-align: center;
    position: relative;
  }
  .pro-price:before{
    content: '';
    width: 5px;
    height: 5px;
    background: #E71B4F;
    border-radius: 50%;
    position: absolute;
    top: 5%;
    left: 5%;
  }
  .pro-price:after{
    content: '';
    width: 5px;
    height: 5px;
    background: #E71B4F;
    border-radius: 50%;
    position: absolute;
    top: 5%;
    right: 5%;
  }
  .pro-price-num{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 4px;
    padding: 14px 0 8px;
    background: #FEE2E7;
    font-size: 16px;
    font-weight: bold;
    color: #E71B4F;
    border-bottom: 1px solid #E71B4F;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .pro-price-title{
    border-radius: 4px;
    padding: 2px 0;
    font-size: 16px;
    color: #E71B4F;
  }
  .pro-options-title{
    text-align: left;
    position: relative;
    font-size: 14px;
    text-indent: 20px;
  }
  .pro-options-title:before{
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 2px;
    left: 2px;
    border: 2px solid rgb(252,51,83);
    background: #fff;
    border-radius: 50%;
  }
  .pro-options-box{
    text-align: left;
  }
  .pro-options-btn{
    display: inline-block;
    color: #5D5C5C;
    height: 30px;
    margin: 10px 0 0 15px;
    line-height: 30px;
    text-align: center;
    width: 75px;
    border-radius: 5px;
    border: 1px solid #b1b1b1;
  }
  .options-btn-active{
    background: #FC3353;
    color: #fff;
    border: 1px solid rgb(252,51,83);
  }
  .pro-details{
    background: #fff;
    padding-top: 30px;
  }
  .pro-details-img{
    width: 100%;
  }
  .pro-bottom-box{
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #2C2C2C;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border-top: 1px solid #e5e5e5;
  }
  .pro-bottom-box img{
    width: 18px;
    vertical-align: -4px;
  }
  .pro-choise-date{
    flex: 1;
    background: #2C2C2C;
    height: 48px;
    line-height: 48px;
  }
  .pro-choise-jishi{
    flex: 1;
    background: #FC3353;
    height: 48px;
    line-height: 48px;
  }
  .goods-num-box{
    text-align: left;
    margin-bottom: 10px;
  }
  .online-type,.online-date{
    font-size: 14px;
  }
  .shop-like-box{
    font-size: 14px;
    display: flex;
    background: #fff;
    color: #666;
  }
  .shop-like-box>div{
    flex: 0 0 50%;
  }
</style>
