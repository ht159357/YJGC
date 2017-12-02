<template>
  <div class="jis-detail-box">
    <div class="jis-info-box" :style="jisinfobox">
      <div class="jis-header">
        <img class="jis-header-img" v-lazy="require('./../assets/img/js-2.jpg')" alt="">
      </div>
      <div class="jis-info">
        <div class="jis-cell">
          <span class="jis-name">{{jishiInfo.stageName}}</span>
          <span class="jis-work">【{{jishiInfo.work_types}}】</span>
        </div>
        <div class="jis-cell jishi-star-eva">
          <!--星星-->
          <!--<svg class="icon" aria-hidden="true" v-for="item in 5">-->
            <!--<use xlink:href="#icon-star"></use>-->
          <!--</svg>-->
          <!--奖杯-->
          <!--<svg class="icon" aria-hidden="true">-->
            <!--<use xlink:href="#icon-jiangbei"></use>-->
          <!--</svg>-->
          <!--<span class="jis-work">卓越</span>-->
          <el-rate v-model="jishiInfo.evaluate / 2" disabled disabled-void-color="#ccc" show-text></el-rate>
        </div>
        <div class="jis-cell">
          <span class="jis-ret">好评率：{{jishiInfo.evaluate}}</span>
        </div>
      </div>
      <div class="jis-foucs">
        <span class="jis-foucnum">关注数：{{jishiInfo.concerns}}</span>
        <span class="jis-addfocus" v-if="jishiInfo.isFans === 0">
          <svg class="icon icon-like" aria-hidden="true">
            <use xlink:href="#icon-like"></use>
          </svg>关注
        </span>
        <span class="jis-addfocus" v-if="jishiInfo.isFans === 1">
          <svg class="icon icon-like" aria-hidden="true">
            <use xlink:href="#icon-like"></use>
          </svg>已关注
        </span>
      </div>
    </div>
    <div class="jis-tab-box">
      <div v-for="(item,index) in tabInfo" @click="tabActive(index)" ref="tab1" class="jis-tab-one" :class="[{ 'jis-tab-one-active' : item.active }]">
        <img class="tab-img" v-if="!item.active" :src="item.url">
        <img class="tab-img" v-else="item.active" :src="item.urlActive">
        <p class="tab-title">{{item.title}}</p>
      </div>
    </div>
    <div class="jis-tab-page-box">
      <div class="jis-tab-page" v-show="tabpage==0">
        <div class="jis-filter-box">
          <div class="jis-filter jis-filter-active">
            热销
            <svg class="icon icon-arr" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
          </div>
          <div class="jis-filter">
            上新
            <svg class="icon icon-arr" aria-hidden="true">
              <use xlink:href="#icon-down"></use>
            </svg>
          </div>
          <div class="jis-filter">
            价格
            <svg class="icon icon-arr" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
          </div>
        </div>

        <div class="jis-yy-box">
          <div class="jis-yy-tz">
            <svg class="icon icon-tz" aria-hidden="true">
              <use xlink:href="#icon-tongzhi"></use>
            </svg>
            <div class="jis-yy-tz-box">
              <!--通知-->
              <div id="jis-yy-tz-box-in">
                <div id="jis-yy-tz-box-in1">
                  <a v-for="item in 100">测试文字{{item}}</a>
                </div>
                <div id="jis-yy-tz-box-in2"></div>
              </div>
            </div>
          </div>
          <div class="jis-yy-tm">
            <div class="jis-yy-time" @click="openPop">
              <span class="jis-yy-title">可预约时间</span>
              <span class="jis-yy-bottom">
                <span v-if="jishiInfo.appointment !== 0">今日可约</span>
                <span v-else>明日可约</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-rili"></use>
                </svg>
              </span>
            </div>
            <div class="jis-yy-map">
              <span class="jis-yy-title">服务店铺</span>
              <a href="http://map.baidu.com/mobile/webapp/place/marker/qt=inf&vt=map&act=read_share&code=315/third_party=uri_api&point=118.742609|32.038532&title=河西万达店&content=江东中路98号万达广场A座205=pcqq.c2c" class="jis-yy-bottom">河西万达
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-map"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!--预约-->
        <div class="jis-pop-box">
          <div class="jis-pop-time-title">
            <div class="jis-pop-time-left">可预约时间</div>
            <div class="jis-pop-time-right">
              <span class="jis-pop-time-green"></span>
              <span class="jis-pop-time-name">可约</span>
              <span class="jis-pop-time-gary"></span>
              <span class="jis-pop-time-name">不可约</span>
              <span class="jis-pop-show-more" @click="openPop">
                查看30天
                <svg class="icon icon-right-arr" aria-hidden="true">
                  <use xlink:href="#icon-right-arr"></use>
                </svg>
              </span>
            </div>
          </div>
          <div class="jis-pop-time-box">
            <div class="jis-pop-title">
              时段
            </div>
            <div class="jis-pop-time-img">
              <div v-for="(item,index) in intervalTimeArr" :class="[{'border-bottom-transparent': intervalTimeArr.length-1 === index }]">
                <div class="yy-time-position" v-if="index%2 === 0">{{ item }}</div>
              </div>
            </div>
          </div>
          <div class="jis-pop-time-box" v-for="(date,index) in shopTime" v-if="index < 3">
            <div class="jis-pop-title">
              <span v-if="index === 0">今天</span>
              <span v-if="index === 1">明天</span>
              <span v-if="index === 2">后天</span>
            </div>
            <div class="jis-pop-time">
              <span v-for="item in date.data" :class="[{'jis-pop-green' : item.yy }]"></span>
              <span style="background: #fff;"></span>
            </div>
          </div>
        </div>
        <!--项目-->

        <div class="jis-pro-box">
          <!--单一-->
          <ul class="jis-pro-ul"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" style="width: 100%;">
            <li class="jis-pro-li" v-for="(item,index) in jishiInfo.goodsList">
              <router-link :to="'/project/'+item.goodsId+'/'+3" class="router-link">
                <div class="jis-pro-one">
                  <div class="jis-pro-img-box">
                    <img class="jis-pro-img" v-lazy="item.marketPic">
                    <div class="jis-pro-info">
                      <span class="jis-pro-name">{{item.goodsName}}</span>
                      <span class="jis-pro-price">&yen;{{item.marketPrice}}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="jis-loadmore" v-show="0">
            <mt-spinner color="#FB3453" type="triple-bounce"></mt-spinner>
          </div>
        </div>

      </div>
      <div class="jis-tab-page" style="background: #fff;" v-show="tabpage==1">

        <div class="xm-one-box">
          <router-link :to="'/project/'+ item +'/'+ 2" class="xm-info" v-for="item in 10">
            <img class="jis-yy-img" v-lazy='require("./../assets/img/nav-"+ item +".jpg")'>
          </router-link>
        </div>

      </div>
      <div class="jis-tab-page" style="background: #fff;" v-show="tabpage==2">
        <div class="jis-context-box">
          <!--单一评论-->
          <a class="index-js-info" v-for="item in 5">
            <!--头像-->
            <div class="index-img-box">
              <img class="index-js-img" src="./../assets/img/header-icon.jpg" alt="">
            </div>
            <div class="index-info-box">
              <div class="yj-cell yj-cell-name">
                <span class="yj-name yj-elic">*王花花</span>
                <div class="yj-time">2017/11/12 19:13:39</div>
              </div>
              <div class="yj-cell">
                <span class="yj-workd yj-y">技术：5分</span>
                <span>
                  好好好好好好好好好好好好
                </span>
              </div>
              <div class="yj-cell">
                <span class="yj-workd yj-g">服务：5分</span>
                <span>
                  好好好好好好好好好好好好
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!------------------module层---------------------->
    <mt-popup v-model="popupVisible" position="bottom" style="width: 100%;height: 45%;overflow-y: scroll;">
      <yy-time></yy-time>
    </mt-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import store from './../store/store';
import { Popup } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Spinner } from 'mint-ui';
import yyTime from './yytime-component'
import { Rate } from 'element-ui';

Vue.component(Spinner.name, Spinner);
Vue.component(Popup.name, Popup);
Vue.use(InfiniteScroll);
Vue.use(Rate);

export default {
    name: 'jishi-detail',
    store,
    data () {
        return {
            tabInfo:[
              {title:"在线选款",url:require("./../assets/img/xuanku1.png"),urlActive:require("./../assets/img/xuanku.png"),active:true,activeNum:0},
              {title:"在线预约",url:require("./../assets/img/allp1.png"),urlActive:require("./../assets/img/allp.png"),active:false,activeNum:1},
              {title:"顾客评价",url:require("./../assets/img/comm1.png"),urlActive:require("./../assets/img/comm.png"),active:false,activeNum:2},
            ],
            tabpage: 0,
            jisinfobox:{
                backgroundImage: "url("+require('./../assets/img/sharecenter-heade-bg.png')+")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                color: "#fff",
                padding: "20px 0 10px"
            },
            popupVisible : false,
            loading: false,
            artisanId:null,
            jishiInfo:null,
            userTime:null,
            intervalTime:null,
            intervalTimeArr:[],
            shopTime:[],
        }
    },
    components:{
        yyTime
    },
    methods:{
        tabActive(index){
            if( this.tabInfo[index].active == true ){
                return;
            }
            this.tabInfo[index].active = true;
            this.tabpage = this.tabInfo[index].activeNum;
            for(var i=0;i<this.tabInfo.length;i++){
                if( i != index ){
                  this.tabInfo[i].active = false;
                }
            }
        },
        openPop(){
          this.popupVisible = true;
        },
        loadMore() {
            this.loading = true;
            setTimeout(() => {

                this.loading = false;
            }, 2000);
        },
        scrollLeft(){
            var speed = 20;
            var tab = document.getElementById('jis-yy-tz-box-in');
            var tab1 = document.getElementById('jis-yy-tz-box-in1');
            var tab2 = document.getElementById('jis-yy-tz-box-in2');
            tab2.innerHTML = tab1.innerHTML;
            function Marquee(){
                if(tab2.offsetWidth - tab.scrollLeft <=0) {
                    tab.scrollLeft = 0;
                }else{
                    tab.scrollLeft ++;
                }

            }
            var timer = setInterval(Marquee,speed);
        },
        setWorkInterval(start,end){
            let self = this;
            let startStr = start.toString().substr(-2,1);
            let endStr = end.toString().substr(-2,1);
            if(startStr === "3"){
                start = parseInt(start) + 20;
            }
            if(endStr === "3"){
                end = parseInt(end) + 20;
            }
            let intervalTime = (end-start)/100*2;
            self.intervalTime = intervalTime;
            for( let i=0;i<=intervalTime;i++ ){
                startStr = start.toString().substr(-2,1);
                if( startStr === "0" ){
                    self.intervalTimeArr.push(parseInt(start)/100);
                    start = parseInt(start) + 50;
                }else{
                    self.intervalTimeArr.push(parseInt(start)/100);
                    start = parseInt(start) + 50;
                }
            }
        }
    },
    beforeCreate(){
        console.log("beforeCreate");
        let self = this;
        self.artisanId = self.$route.params.id;
        axios.post(httpStr+"/artisan/queryArtisan",{
            artisanId: self.artisanId,
            openId:openId
        }).then((ret) => {
            if( ret.data.flag === 100 ){
                self.jishiInfo = ret.data.data;
                self.userTime = self.jishiInfo.userTime;
                for( let i=0;i<20;i++ ){
//                    self.jishiInfo.goodsList.push(self.jishiInfo.goodsList[0]);
                }
                self.setWorkInterval(self.jishiInfo.strorFront.businessStart,self.jishiInfo.strorFront.businessEnd);
//                遍历对比数据
                for( let a=0;a<self.userTime.length;a++ ){
                    self.shopTime[a] = {week:null,date:null,data:[]};
                    let flag = 0;
                    console.log(a);
                    for( let j=0;j<self.intervalTimeArr.length;j++ ){
                        console.log("-------"+j);
                        if( flag >= self.userTime[a].rep_dates.length ){
                            break;
                        }
                        let start = self.intervalTimeArr[j]*100;
                        let userTime = self.userTime[a].rep_dates[flag].time_n;
                        self.shopTime[a].week = self.userTime[a].req_week_day;
                        self.shopTime[a].date = self.userTime[a].rep_date;
                        if( userTime.toString().substr(-2,1) === "3" ){
                            userTime = parseInt(userTime) + 20;
                        }
//                        debugger
                        if( start !== userTime ){
                            self.shopTime[a].data.push({yy:false,time:start/100});
                        }else{
                            self.shopTime[a].data.push({yy:true,time:start/100});
                            flag ++;
                        }
                        console.log(self.shopTime);
                        console.log(flag);
                    }

                }
            }
        })
    },
    mounted(){
        console.log("mounted");
        this.scrollLeft();
    },
    activated(){
        console.log("activated");
        this.scrollLeft();
    }
}
</script>
<style scoped>
  .index-js-img[lazy=loading],.jis-yy-img[lazy=loading]{
    width: 100%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  .jis-header-img[lazy=loading]{
    width: 80%;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  span i.el-rate__icon{
    font-size: 12px;
  }
</style>
<style>
  .jis-detail-box{
    background: #F7F7F7;
  }
  .jis-info-box{
    display: flex;
  }
  .jis-header{
    flex: 0 0 25%;
    text-align: center;
  }
  .jis-info{
    flex: 0 0 47%;
    text-align: left;
    padding-right: 0%;
    background-image: url(./../assets/img/border-1.png);
    background-repeat: no-repeat;
    background-position: right center;
  }
  .jis-foucs{
    flex: 0 0 27%;
    padding: 10px 0;
  }
  .jis-header-img{
    width: 80%;
    border-radius: 50%;
    vertical-align: middle;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .icon.icon-arr{
    font-size: 12px;
  }
  .jis-cell{
    display: inline-block;
    width: 100%;
    margin-bottom: 5px;
  }
  .jis-info .jis-cell:first-child{
    margin-bottom: 10px;
  }
  .jis-name{
    display: inline-block;
    font-size: 16px;
    font-weight: bolder;
  }
  .jis-work{
    display: inline-block;
    font-size: 12px;
  }
  .jis-ret{
    display: inline-block;
    font-size: 14px;
  }
  .jis-foucnum{
    width: 100%;
    display: inline-block;
    font-size: 12px;
  }
  .jis-addfocus{
    display: inline-block;
    border: 1px solid #fff;
    padding: 4px 15px;
    border-radius: 15px;
    margin-top: 10px;
    font-size: 12px;
  }
  .icon.icon-like{
    font-size: 14px;
    margin-right: 5px;
    margin-left: -5px;
  }
  .icon.icon-tz{
    width: 18px;
    float: left;
    height: 40px;
    margin-left: 20px;
    margin-right: 10px;
  }
  .jis-yy-tz-box{
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    width: calc(100% - 48px);
    position: relative;
    font-size:14px;
    font-weight:bold;
    margin: 0 auto;
  }
  #jis-yy-tz-box-in{
    width: 100%;
    height: 30px;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
  }
  .jis-yy-tz-box #jis-yy-tz-box-in1,
  .jis-yy-tz-box #jis-yy-tz-box-in2{
    display: inline;
  }
  .jis-yy-tz-box #jis-yy-tz-box-in1 a,
  .jis-yy-tz-box #jis-yy-tz-box-in2 a{
    text-decoration: none;
    color: #2C3D41;
    margin-right: 100px;
  }


  .jis-tab-box{
    display: flex;
    background: #fff;
  }
  .jis-tab-one{
    flex: 1;
    padding: 10px 0 0;
  }
  .jis-tab-one-active{
    border-bottom: 2px solid #A88F5D;
  }
  .jis-tab-one-active p{
    color: #A88F5D;
  }
  .tab-img{
    width: 22px;
  }
  .tab-title{
    margin: 0 0 5px;
    color: #8C8E8E;
  }
  .jis-filter-box{
    display: flex;
  }
  .jis-filter{
    flex: 1;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .jis-yy-box{
    margin-top: 10px;
    background: #fff;
  }
  .jis-yy-tz{
    width: 100%;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #F7F7F7;
  }
  .jis-yy-tz-title{
    width: auto;
    display: inline-block;
    float: left;
    margin: 0 30px;
    text-align: left;
  }
  .jis-yy-tm{
    display: flex;
    padding: 20px 0;
  }
  .jis-yy-time{
    flex: 1;
    border-right: 1px solid #E0E0DF;
  }
  .jis-yy-map{
    flex: 1;
  }
  .jis-yy-title{
    display: inline-block;
    font-size: 12px;
    color: #9B9B9B;
    width: 100%;
  }
  .jis-yy-bottom{
    display: inline-block;
    margin-top: 5px;
    text-indent: 10px;
    text-decoration: none;
    color: #2C3D41;
    font-weight: bold;
  }



  .jis-pop-box{
    background: #fff;
    margin-top: 10px;
  }
  .jis-pop-time-title{
    display: flex;
    align-items: center;
    padding: 10px 0;
    font-size: 14px;
  }
  .jis-pop-time-left{
    flex: 0 0 25%;
    font-weight: bold;
    height: 21px;
    line-height: 21px;
  }
  .jis-pop-time-right{
    flex: 1;
    overflow: hidden;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .jis-pop-time-right-module{
    justify-content: flex-start;
  }
  .jis-pop-time-green,.jis-pop-time-gary{
    display: inline-block;
    width: 15px;
    height: 15px;
    float: left;
  }
  .jis-pop-time-green{
    background: #C1E0B5;
  }
  .jis-pop-time-gary{
    background: #F0EFEF;
    margin-left: 5px;
  }
  .jis-pop-time-name{
    margin-left: 5px;
    display: inline-block;
    height: 21px;
    line-height: 21px;
    vertical-align: middle;
    float: left;
  }
  .jis-pop-time-box{
    display: flex;
    padding: 5px 0;
  }
  .jis-pop-title{
    flex: 0 0 20%;
    font-size: 12px;
  }
  .jis-pop-time-img{
    flex: 0 0 72%;
    display: flex;
    box-sizing: border-box;
    align-items: flex-end;
  }
  .jis-pop-time-img>div{
    flex: 1;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .jis-pop-time-img>div .yy-time-position{
    font-size: 12px;
    width: 12px;
    position: absolute;
    text-align: center;
    top: -15px;
    left: -6px;
    transform: scale(0.8);
    color: #7E7E7E;
  }
  .jis-pop-time-img>div:nth-child(odd){
    border-left: 1px solid #7E7E7E;
    height: 7px;
  }
  .jis-pop-time-img>div:nth-child(even){
    border-left: 1px solid #BABABA;
    height: 4px;
  }
  .jis-pop-time{
    flex: 0 0 72%;
    display: flex;
  }
  .jis-pop-time span{
    flex: 1;
    display: inline-block;
    height: 14px;
    background: #F0EFEF;
  }
  .jis-pop-time .jis-pop-green{
    background: #C1E0B5;
  }
  .jis-pop-time-img img{
    width: 100%;
  }


  .jis-pop-show-more{
    margin-right: 10px;
    display: inline-block;
    height: 21px;
    line-height: 21px;
    float: right;
    font-weight: normal;
  }
  .icon.icon-right-arr{
    vertical-align: -1px;
  }
  .jis-pro-box{
    background: #fff;
    display: flex;
    padding: 10px 0;
    flex-wrap: wrap;
  }
  .jis-pro-one{
    flex: 0 0 50%;
  }
  .jis-pro-img-box{
    width: 100%;
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
  }
  .jis-pro-img{
    width: 90%;
    height: 150px;
    margin: 0 auto;
  }
  .jis-pro-info{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .jis-pro-name,.jis-pro-price{
    text-align: left;
    text-indent: 10%;
    display: block;
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .jis-pro-name{
    color: #bbb;
    font-size: 14px;
  }
  .jis-pro-price{
    color: rgb(251,52,83);
    font-weight: bold;
    font-size: 18px;
  }
  .jis-pro-ul{
    display: flex;
    flex-wrap: wrap;
  }
  .jis-pro-li{
    flex: 0 0 50%;
  }
  .jis-loadmore{
    text-align: center;
    width: 100%;
    padding: 10px 0;
  }
  .jis-context-box{

  }
  /**在线预约样式**/
  .xm-one-box{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
  .xm-info{
    box-sizing: border-box;
    flex: 0 0 25%;
    border: 1px solid #F7F6F7;
    border-top: none;
    background: #fff;
  }
  .xm-one-box .xm-info:nth-child(1){
    border-left: none;
  }
  .xm-one-box .xm-info:nth-child(n+1){
    border-right: none;
  }
  .xm-one-box .xm-info:nth-child(5n){
    border-left: none;
  }
  .xm-one-box .xm-info:nth-child(4n){
    border-right: none;
  }
  .xm-info img{
    width: 100%;
  }
</style>
<style scoped>
  .index-js-info{
    display: flex;
    padding: 10px 0;
    text-decoration: none;color: inherit;
    border-bottom: 1px solid #eee;
    align-items: flex-start;
  }
  .index-img-box{
    display: inline-block;
    width: 15%;
    text-align: center;
    margin: 0 2.5%;
  }
  .index-info-box{
    display: inline-block;
    width: 70%;
    padding-left: 5px;
    text-align: left;
  }

  .index-js-img{
    width: 100%;
    max-width: 90px;
    max-height: 90px;
    border-radius: 50%;
  }
  .yj-cell{
    width: 100%;
    padding-bottom: 3px;
    display: inline-block;
  }
  .yj-cell-name{
    display: inline-block;
  }
  .yj-name,.yj-time{
    display: inline-block;
    font-weight: bolder;
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    color: #3280fc;
    float: left;
    width: 100px;
    text-align: left;
  }
  .yj-time{
    float: right;
    color: #777;
    width: 120px;
    text-align: right;
  }
  .yj-workd{
    display: inline;
    color: #888;
  }
  .yj-elic{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .yj-comm{
    color: #888;
    text-align: left;
  }
  .yj-y{
    border:1px solid #ffdea2;
    background: #fff0d5;
  }
  .yj-g{
    border:1px solid #b6e8bb;
    background: #DDF4DF;
  }
  .jis-pro-img[lazy=loading] {
    width: 90%;
    height: 150px;
    margin: 0 auto;
    background: url("./../assets/img/loading.svg") no-repeat center #ddd;
  }
  div.border-bottom-transparent{
    border-bottom: 1px solid transparent;
  }
</style>
