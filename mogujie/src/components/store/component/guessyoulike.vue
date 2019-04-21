<template>
  <div class="guessyoulike">
    <div class="title">
      <img :src='youlikes[0].imgurl' alt>
    </div>
    <ul>
      <router-link tag='li' to='/guessyoulikedetail'  v-for="(item,index) in youlikes[1]" :key="index">
        <div class="top">
          <img v-lazy='item.imgurl' alt>
          <p>已售{{item.buyed}}件</p>
        </div>
        <div class="bottom">
          <p>{{item.discribe}}</p>
          <p>
            <span>￥{{item.price}}</span>
            <span>{{item.start}}<i><img src="../simg/star.png" alt=""></i></span>
          </p>
          <span>立即购买</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { getstore } from '@/api/index'
export default {
  filter: {
    webp ({ src }) {
      const isCDN = /qiniudn.com/
      if (isCDN.test(src)) {
        src += '?imageView2/2/format/webp'
      }
      return src
    },
    someProcess ({ el, src }) {
      if (el.getAttribute('large')) {
        src += '?large'
      }
      return src
    }
  },

  data () {
    return {
      youlikes: ''
    }
  },
  created () {
    getstore().then(result => {
      this.youlikes = result[3]
    //   console.log(result[3])
    })

    // console.log(this.lefttime)
  },
  components: {
    // guessyoulikedetail
  }
}
</script>
<style scoped lang='less'>
.guessyoulike {
  width: 100%;
  height: auto;
  background:#efefef;
  padding-bottom: 20px;
  .title {
    width: 100%;
    height: 90px;
    // background: blue;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: 76px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    li {
      width: 350px;
      height: 600px;
    //   background: blue;
      border-radius: 5px;
      margin-top: 20px;
      .top {
        width: 100%;
        height: 450px;
        // background: orange;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        p {
          width: 180px;
          height: 46px;
          line-height: 46px;
          color:#fff;
        //   background: orchid;
          position: absolute;
          bottom: 18px;
          background: linear-gradient(left, #000, #c8c8c8);
          opacity: 0.6;
          text-align: center;
        }
      }
      .bottom {
        width: 100%;
        height: 148px;
        background:#fff;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 24px;
        color: #333;
        p {
          width: 94%;
          height: 40px;
          line-height: 40px;
        //   background: #06c814;
          white-space: pre-wrap;

          //显示一行超出省略
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        p:nth-child(2) {
          display: flex;
          justify-content: space-between;
          span {
            display: block;
            width: 130px;
            height: 40px;
            line-height: 40px;
            background:#fff;
          }
          span:nth-child(1){
              text-align: left;
              color:#333;
          }
          span:nth-child(2){
              text-align: right;
              color:#666;
              font-size: 24px;
              i{
                width:40px;
                height: 40px;
                display:inline-block;
                img{
                    width: 60%;
                    height: 60%;
                }
              }
          }
        }
        span {
          display: block;
          width: 94%;
          height: 50px;
          background: #ff5777;
          border-radius: 6px;
          text-align: center;
          line-height: 50px;
          font-size: 26px;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
}
</style>
