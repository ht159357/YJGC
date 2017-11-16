<template>
  <div class="jis-detail-box">
    <div class="jis-info-box" :style="jisinfobox">
      <div class="jis-header">
        <img class="jis-header-img" v-lazy="require('./../assets/img/js-2.jpg')" alt="">
      </div>
      <div class="jis-info">
        <div class="jis-cell">
          <span class="jis-name">莉莉</span>
          <span class="jis-work">【美甲师、美容师】</span>
        </div>
        <div class="jis-cell">
          <!--星星-->
          <svg class="icon" aria-hidden="true" v-for="item in 5">
            <use xlink:href="#icon-star"></use>
          </svg>
          <!--奖杯-->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiangbei"></use>
          </svg>
          <span class="jis-work">卓越</span>
        </div>
        <div class="jis-cell">
          <span class="jis-ret">好评率：9.95</span>
        </div>
      </div>
      <div class="jis-foucs">
        <span class="jis-foucnum">关注数：999</span>
        <span class="jis-addfocus">
          <svg class="icon icon-like" aria-hidden="true">
            <use xlink:href="#icon-like"></use>
          </svg>关注
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
              <span class="jis-yy-bottom">今日可约
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
              <img src="./../assets/img/timeline.png" alt="">
            </div>
          </div>
          <div class="jis-pop-time-box" v-for="date in 30" v-if="date <= 5">
            <div class="jis-pop-title">
              今天
            </div>
            <div class="jis-pop-time">
              <span v-for="item in 23" :class="[{'jis-pop-green' : item%2 == 1 }]"></span>
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
            <li class="jis-pro-li" v-for="(item,index) in list"
                @click="showProjectPage(3,true)">
              <div class="jis-pro-one">
                <div class="jis-pro-img-box">
                  <img class="jis-pro-img" v-lazy="item">
                  <div class="jis-pro-info">
                    <span class="jis-pro-name">自然款{{index}}</span>
                    <span class="jis-pro-price">&yen;258</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="jis-loadmore" v-show="loading">
            <mt-spinner color="#FB3453" type="triple-bounce"></mt-spinner>
          </div>

        </div>
      </div>
      <div class="jis-tab-page" style="background: #fff;" v-show="tabpage==1">

        <div class="xm-one-box">
          <div @click="showProjectPage(2,false)" class="xm-info" v-for="item in 10">
            <img class="jis-yy-img" v-lazy='require("./../assets/img/nav-"+ item +".jpg")'>
          </div>
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
      <div class="jis-pop-box">

        <div class="jis-pop-time-title">
          <div class="jis-pop-time-left">可预约时间</div>
          <div class="jis-pop-time-right">
            <span class="jis-pop-time-green"></span>
            <span class="jis-pop-time-name">可约</span>
            <span class="jis-pop-time-gary"></span>
            <span class="jis-pop-time-name">不可约</span>
          </div>
        </div>
        <div class="jis-pop-time-box">
          <div class="jis-pop-title">
            时段
          </div>
          <div class="jis-pop-time-img">
            <img src="./../assets/img/timeline.png" alt="">
          </div>
        </div>
        <div class="jis-pop-time-box" v-for="date in 30">
          <div class="jis-pop-title">
            今天
          </div>
          <div class="jis-pop-time">
            <span v-for="item in 23" :class="[{'jis-pop-green' : item%2 == 1 }]"></span>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import store from './../store/store';
import { Popup } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);
Vue.component(Popup.name, Popup);
Vue.use(InfiniteScroll);

export default {
    name: 'jishi-detail',
    store,
    data () {
        return {
            pagename:"showJsDetails",
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
            list:[
                'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
                'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
                'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
                'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
            ],
            loading: false,
        }
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
              this.list.push('http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
                'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
                'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
                'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg');
                this.loading = false;
            }, 3000);
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
        showProjectPage(shoptype,showgood){
            var pagename = "showProjectDetails";
            store.state.curPage = pagename;
            store.state[pagename] = true;
            store.state.showIndexs = false;
            for( let i=0;i<store.state.pageList.length;i++ ){
                if( store.state.pageList[i] != pagename ){
                  store.state[store.state.pageList[i]] = false;
                }
            }
            store.state.shopType = shoptype;
            if(showgood){
                store.state.showGoodDetails = true;
            }else{
              store.state.showGoodDetails = false;
            }
        }
    },
    mounted(){
        console.log(1);
        this.scrollLeft();
    }
    ,activated(){
        console.log(2);
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
    padding: 10px 0;
  }
  .jis-pop-time-left{
    flex: 0 0 25%;
    font-weight: bold;
  }
  .jis-pop-time-right{
    flex: 0 0 75%;
    overflow: hidden;
    font-weight: bold;
  }
  .jis-pop-time-green,.jis-pop-time-gary{
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
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
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    float: left;
  }
  .jis-pop-time-box{
    display: flex;
    padding: 5px 0;
  }
  .jis-pop-title{
    flex: 0 0 20%;
  }
  .jis-pop-time-img{
    flex: 0 0 72%;
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
    margin-right: 5px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
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
</style>
