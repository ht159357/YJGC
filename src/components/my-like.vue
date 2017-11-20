<template>
  <div class="like-shop-box">
    <!--项目-->
    <div class="jis-pro-box">
      <!--单一-->
      <ul class="jis-pro-ul"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10" style="width: 100%;">
        <li class="jis-pro-li" v-for="(item,index) in list">
          <router-link :to="'/project/'+index+'/'+3" class="router-link">
            <div class="jis-pro-one">
              <div class="jis-pro-img-box">
                <img class="jis-pro-img" v-lazy="item">
                <div class="jis-pro-info">
                  <span class="jis-pro-name">自然款{{index}}</span>
                  <span class="jis-pro-price">&yen;258</span>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="jis-loadmore" v-show="loading">
        <mt-spinner color="#FB3453" type="triple-bounce"></mt-spinner>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name:'my-like',
        data(){
            return {
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
                }, 2000);
            }
        }
    }
</script>
<style>
  .like-shop-box{

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
</style>
