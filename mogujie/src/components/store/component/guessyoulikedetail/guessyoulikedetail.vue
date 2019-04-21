<template>
  <div class="guessyoulikedetail">
    <div class="products">
      <div class="picture">
        <swiper :options="swiperOption" class="pictures">
          <swiper-slide
            v-for="(slide, index) in swiperSlides[0][0]"
            :key="index"
            id="picitem"
          ><img :src="slide" alt=""></swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </div>
      <div class="detail">
        <div class="top">
          <span>￥</span>
          <span>63~139</span>
          <span>
            <i>￥90</i>
            <i>优惠价</i>
          </span>
        </div>
        <div class="midd">春季新款韩版宽松钉珠星星短款牛仔外套女+鱼尾裙中长款V领碎花雪纺吊带裙套装两件套</div>
        <div class="bott">
          <span>免邮费</span>
          <span>福建</span>
        </div>
      </div>
    </div>
    <div class="discounts">
      <div class="dis-top">
        <div class="dis-left">
          <span>优惠</span>
          <span>店铺优惠券</span>
          <span>满99减3</span>
          <span>满199减5</span>
        </div>
        <div class="dis-right">
          <span>领券></span>
          <img src alt>
        </div>
      </div>

      <div class="dis-botto">
        <span>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_60x60.webp"
            alt
          >
          <i>72小时发货</i>
        </span>
        <span>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_60x60.webp"
            alt
          >
          <i>7天无理由退货</i>
        </span>
        <span>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_60x60.webp"
            alt
          >
          <i>延误必赔</i>
        </span>
      </div>

    </div>
    <div class="selcolor">
      <span class="sel-left">请选择：颜色 尺码</span>
      <span class="sel-right">></span>
    </div>
    <div class="evalute">
      <div class="evalute-top">
        <div class="eva-title">买家评论51|销量156</div>
        <div class="eva-cont">
          <span>有图片(2)</span>
          <span>款式好(31)</span>
          <span>料子很不错(29)</span>
          <span>质量很好(13)</span>
          <span>做工不错(9)</span>
          <span>尺寸无偏差(8)</span>
        </div>
      </div>
      <div class="evalute-bott">
        <ul>
          <li>
            <div class="eva-top">
              <span>
                <img src="https://s11.mogucdn.com/mlcdn/5abf39/171020_6fhe97a6145e614a2j693hgk9dlke_960x960.jpg_48x48.webp" alt>
              </span>
              <span>半***7</span>
            </div>
            <div class="eva-mid">衣服已收到，很漂亮，穿着舒适。做工很细致。价格实惠，物流也快。</div>
            <div class="eva-bot">2019-3-28</div>
          </li>
           <li>
            <div class="eva-top">
              <span>
                <img src="https://s3.mogucdn.com/mlcdn/5abf39/190226_6jciaihgj2321b403ali0b329la0g_132x132.jpg_48x48.webp" alt>
              </span>
              <span>半***7</span>
            </div>
            <div class="eva-mid">收到了挺好的，妹妹见好看，也要买一条，挺好看的，外面搭针织衫，牛仔衣都很好看呢，人家也瘦，穿出来效果了，不错质量也很好的小碎花</div>
            <div class="eva-bot">2018-3-19</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="entry">
      <div class="ent-top">
        <div class="ent-top-l">
          <span>
            <img src='https://s11.mogucdn.com/p1/160205/1xebxb_ifrtaytggq3wknzygyzdambqhayde_200x200.jpg_100x100.webp' alt>
          </span>
          <span>
            <p>永不low</p>
            <img
              src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"
              alt
            >
            <img
              src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"
              alt
            >
            <img
              src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"
              alt
            >
            <img
              src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"
              alt
            >
            <img
              src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png"
              alt
            >
          </span>
        </div>
        <div class="ent-top-r">
          <span>进店></span>
        </div>
      </div>
      <div class="ent-bot">
        <div class="ent-bot-l">
          <p>31898</p>
          <p>总销量</p>
        </div>
        <div class="ent-bot-m">
          <p>868</p>
          <p>收藏数</p>
        </div>
        <div class="ent-bot-r">
          <p>描述相符
            <i>4.73</i>
          </p>
          <p>质量满意
            <i>4.73</i>
          </p>
        </div>
      </div>
    </div>
    <div class="ineffect">
      <div class="inef-title">
        <div class="tit-top">
          <span>图文详情</span>
          <span>商品参数</span>
          <span>热卖推存</span>
        </div>
        <div class="tit-mid">默认发：韵达快递</div>
        <div class="tit-bot">穿着效果</div>
      </div>
      <div class="inef-img">
        <ul>
          <li v-for="(item,index) in swiperSlides[0][2]" :key="index">
            <img :src='item' alt>
          </li>
        </ul>
        <div class="price-explain">
          <div class="explain-top">
            <img src='https://s11.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_468x468.webp' alt>
          </div>
          <div class="explain-bot">
            <div class="explain-bot-t">
               <p><span>尺码</span><span>胸围</span><span>裙长</span><span>袖长</span><span>肩宽</span><span>衣长</span></p>
               <p><span>S</span><span>92</span><span>87</span><span>56</span><span>45</span><span>48</span></p>
               <p><span>M</span><span>96</span><span>88</span><span>57</span><span>46</span><span>49</span></p>
               <p><span>L</span><span>100</span><span>89</span><span>58</span><span>47</span><span>50</span></p>
               <p><span>XL</span><span>104</span><span>90</span><span>59</span><span>48</span><span>51</span></p>
            </div>
            <div class="explain-bot-b">
              <p><span>图案</span><span>碎花</span></p>
              <p><span>厚薄</span><span>普通</span></p>
              <p><span>颜色</span><span>单件牛仔外套</span></p>
              <p><span>袖型</span><span>补袖衫</span></p>
              <p><span>尺码</span><span>S,XL,L,M</span></p>
              <p><span>衣长</span><span>短款(41-50cm)</span></p>
              <p><span>季节</span><span>春季</span></p>
              <p><span>材质</span><span>牛仔布</span></p>
              <p><span>领型</span><span>立领</span></p>
              <p><span>元素</span><span>钉珠</span></p>
              <p><span>袖长</span><span>长袖</span></p>
              <p><span>款式</span><span>衣裙套装</span></p>
              <p><span>风格</span><span>轻熟</span></p>
              <p><span>潮流</span><span>韩系</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='product-lists'>
      <ul>
        <li v-for='(item2,index2) in swiperSlides[0][3]' :key='index2'>
          <img :src="item2.imgurl" alt="">
          <p>
            <i>{{item2.describe}}</i>
            <i>{{item2.price}}</i>
          </p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class='bott-left'><span><img src="../../simg/dianpu.png" alt=""><i>店铺</i></span><span><img src="../../simg/kefu.png" alt=""><i>店铺</i></span><span><img src="../../simg/shoucang.png" alt=""><i>店铺</i></span></div>
      <div class='bott-right'><span>加入购物车</span><span>立即购买</span></div>
    </div>
  </div>
</template>
<script>
import { getstore } from '@/api/index'
export default {
  // 自己写的向右滑动
  //   mounted () {
  //     // 操作dom元素放到mounted
  //     this.calcWidth()
  //   },
  //   methods: {
  //     calcWidth () {
  //       this.$refs.piccontent.style.width =
  //         this.$refs.pics[0].offsetWidth * 6 + 'px';
  //     }
  //   }
  // 轮播插件
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: ''
    }
  },
  created () {
    getstore().then(result => {
      this.swiperSlides = result[4]
      console.log(result[4])
      console.log(result[4][0][3])
    })

    // console.log(this.lefttime)
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  }
}
</script>
<style scoped lang='less'>
.guessyoulikedetail {
  background: #eaeaea;
  z-index: 999;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .products {
    width: 100%;
    height: 1150px;
    // background: orange;
    .picture {
      width: 100%;
      height: 900px;
      background: blue;
      .pictures {
        width: 100%;
        height: 900px;
      }
    }
    .detail {
      width: 100%;
      height: 250px;
      background: #fff;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .top {
        width: 686px;
        height: 90px;
        // background: #d621c3;
        span {
          display: inline-block;
        }
        span:nth-child(1) {
          vertical-align: top;
          padding-top: 10px;
          color: #333;
        }
        span:nth-child(2) {
          font-size: 72px;
          color: #333;
        }
        span:nth-child(3) {
          vertical-align: top;
          i {
            display: block;
            font-style: normal;
            text-align: center;
            // background: yellow;
            margin-left: 20px;
          }
          i:nth-child(1) {
            font-size: 24px;
            padding-top: 14px;
            // color: #b8b8b8;
            text-decoration: line-through;
          }
          i:nth-child(2) {
            width: 76px;
            height: 32px;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 32px;
            border-radius: 5px;
            background: #ffe8ee;
            color: #ff2255;
          }
        }
      }
      .midd {
        width: 686px;
        height: 80px;
        // background: #7691c8;
        font-size: 32px;
        // line-height: 72px;
        white-space: pre-wrap;

        /* 文字固定显示两行超出显示省略号 */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .bott {
        width: 686px;
        height: 68px;
        line-height: 68px;
        // background: #e45015;
        display: flex;
        font-size: 22px;
        color: #999;
        justify-content: space-between;
        span {
          display: block;
          width: 300px;
          height: 64px;
          //   background: #1b8a15;
        }
        span:nth-child(2) {
          text-align: right;
        }
      }
    }
  }
  .discounts {
    width: 100%;
    height: 160px;
    background: #fff;
    z-index: 999;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .dis-top {
      width: 96%;
      height: 86px;
      //   background: #d62b5b;
      display: flex;
      justify-content: space-between;
      line-height: 86px;
      .dis-left {
        width: 70%;
        height: 86px;
        // background: #4a8109;
        span:nth-child(1) {
          font-size: 28px;
          color: #999;
        }
        span:nth-child(2) {
          width: 146px;
          height: 40px;
          font-size: 24px;
          color: #ff5777;
          background: #ffeef3;
          border-radius: 30px;
          padding: 4px 16px;
        }
        span:nth-child(3),
        span:nth-child(4) {
          width: 132px;
          height: 36px;
          //   border: solid 2px #ff5777;
          padding: 4px 8px;
        }
      }
      .dis-right {
        width: 30%;
        height: 86px;
        text-align: right;
        font-size: 26px;
        color: #999;
      }
    }
    .dis-botto {
      width: 96%;
      height: 82px;
      //   background: blue;
      margin-top: -12px;
      display: flex;
      justify-content: space-evenly;
      span {
        display: block;
        width: 30%;
        height: 82px;
        // background: #4a8109;
        line-height: 82px;
        display: flex;
        align-items: center;
        img {
          display: block;
          width: 34px;
          height: 34px;
        }
        i {
          display: block;
          width: 160px;
          height: 34px;
          line-height: 34px;
          font-style: normal;
          //   background: #d62b5b;
          color: #666;
        }
      }
    }
  }
  .selcolor {
    width: 100%;
    height: 98px;
    background:#fff;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .sel-right{
      text-align: right;
      padding-right: 20px;
      box-sizing: border-box;
      color:#666;
    }
    span {
      display: block;
      width: 30%;
      height: 98px;
      line-height: 98px;
      // background: #ff5777;
      font-size: 26px;
      color: #666;
      padding-left: 15px;
    }
  }
  .evalute {
    width: 100%;
    height: 942px;
    background:#fff;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .evalute-top {
      width: 94%;
      height: 268px;
      // background: chocolate;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .eva-title {
        width: 94%;
        height: 130px;
        // background: green;
        font-size: 26px;
        color: #999;
        line-height: 130px;
      }
      .eva-cont {
        width: 94%;
        height: 126px;

        // background: blue;
        display: flex;
        flex-wrap: wrap;
        span {
          display: block;
          height: 26px;
          line-height: 26px;
          font-size: 26px;
          color: #ff2255;
          background: #ffe8ee;
          border-radius: 5px;
          padding: 10px 8px;
          margin-right: 8px;
        }
      }
    }
    .evalute-bott {
      width: 94%;
      height: 674px;
      background: #fff;
      ul {
        width: 100%;
        height: 674px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
          width: 100%;
          height: 280px;
          background:#fff;
          .eva-top {
            width: 100%;
            height: 100px;
            background: #fff;
            display: flex;
            align-items: center;
            span {
              display: block;
            }
            span:nth-child(1) {
              width: 70px;
              height: 70px;
              // background: #1e238d;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            span:nth-child(2) {
              width: 60%;
              height: 70px;
              // background: #a3ad36;
              font-size: 32px;
              color: #424242;
              line-height: 70px;
              padding-left: 20px;
            }
          }
          .eva-mid {
            font-size: 30px;
            color: #727272;
            padding: 20px 0px;
            box-sizing: border-box;
            // background: #a3ad36;
          }
          .eva-bot {
            height: 60px;
            line-height: 60px;
            // background: #1e238d;
            color: #999;
            font-size: 26px;
          }
        }
      }
    }
  }
  .entry {
    width: 100%;
    height: 280px;
    // background: #ff2255;
    margin-top: 20px;
    .ent-top {
      width: 100%;
      height: 130px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      .ent-top-l {
        width: 60%;
        height: 130px;
        // background: #315ab6;
        display: flex;
        align-items: center;
        span {
          display: block;
        }
        span:nth-child(1) {
          width: 100px;
          height: 100px;
          // background: #38a533;
          margin-left: 36px;
          box-sizing: border-box;
          img{
            width: 100%;
            height: 100%;
          }
        }
        span:nth-child(2) {
          width: 60%;
          height: 100px;
          // background: #d1b143;
          padding-top: 14px;
          box-sizing: border-box;
          padding-left: 20px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .ent-top-r {
        width: 30%;
        height: 130px;
        // background: #1e238d;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
          display: block;
          width: 116px;
          height: 62px;
          border: solid 1px #ff5777;
          margin-right: 30px;
          font-size: 26px;
          color: #ff5777;
          text-align: center;
          line-height: 62px;
        }
      }
    }
    .ent-bot {
      width: 100%;
      height: 148px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      .ent-bot-l,
      .ent-bot-m {
        p {
          width: 100%;
          height: 44px;
          line-height: 44px;
          // background: #315ab6;
          text-align: center;
        }
        p:nth-child(1) {
          font-size: 32px;
          color: #333;
        }
        p:nth-child(2) {
          font-size: 24px;
          color: #999;
        }
      }
      .ent-bot-r {
        p {
          width: 100%;
          height: 44px;
          line-height: 44px;
          // background: #315ab6;
          text-align: center;
          color: #999;
        }
        i {
          font-style: normal;
          font-size: 26px;
          color: #ff5777;
          padding-left: 10px;
        }
      }
      div {
        width: 240px;
        height: 88px;
        // background: #333;
      }
    }
  }
  .ineffect {
    width: 100%;
    height: auto;
    // background: red;
    margin-top: 20px;
    .inef-title {
      width: 100%;
      height: 320px;
      background: #fff;
      .tit-top {
        width: 100%;
        height: 92px;
        // background: #8f7719;
        display: flex;
        span {
          display: block;
          width: calc(100% / 3);
          height: 92px;
          line-height: 92px;
          // background: #315ab6;
          color: #333;
          font-size: 32px;
          text-align: center;
          border-bottom: #ededed solid 1px;
        }
        span:nth-child(1) {
          color: #ff5777;
          border-bottom: #ff5777 solid 1px;
        }
      }
      .tit-mid {
        width: 100%;
        height: 140px;
        line-height: 140px;
        // background: #315ab6;
        color: #727272;
        font-size: 30px;
        padding-left: 40px;
        box-sizing: border-box;
      }
      .tit-bot {
        width: 100%;
        height: 60px;
        // background: red;
        font-size: 32px;
        color: #303030;
        padding-left: 40px;
        box-sizing: border-box;
      }
    }
    .inef-img {
      background: #fff;
      ul {
        width: 100%;
        height: auto;
        background: #fff;
        li {
          width: 100%;
          height: 822px;
          // background: #38a533;
          margin-bottom: 20px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .price-explain {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .explain-top {
          width: 100%;
          height: 180px;
          // background: #315ab6;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .explain-bot {
          width: 92%;
          height: auto;
          font-size: 30px;
          .explain-bot-t {
            width: 100%;
            height: auto;
            // background: #3aa415;
            p:nth-child(1){
              color:#727272;
            }
            p span:nth-child(1){
              color:#727272;
              width: 27%;
            }
            p{
              width: 100%;
              height: 84px;
              line-height: 84px;
              // background: #9c0ecb;
              color:#e84868;
              span{
                display: inline-block;
                width: 12%;
                height: 84px;
                // background: #8f7719;
              }
            }
          }
          .explain-bot-b{
             width: 100%;
             height: auto;
            //  background: #3aa415;
              p{
                width: 100%;
                height: 80px;
                color:#e84868;
                // background: #9c0ecb;
                span:nth-child(1){
                  width: 27%;
                  color:#727272;
                }
                span:nth-child(2){
                  width: 70%;
                }
                span{
                  display: inline-block;
                  width: calc(100%/2);
                  height: 80px;
                  // background: #8f7719;
              }
            }
          }
        }
      }
    }
  }
  .product-lists{
  width: 100%;
  height: auto;
  background: #fff;
  ul{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li{
     width: 217px;
     height: 380px;
    //  background: #1e238d;
     border-radius: 5px;
     margin-top: 20px;
     img{
       display:block;
       width:100%;
       height: 80%;
      //  background: #295c06;
     }
     p{
       width: 100%;
       height: 20%;
      //  background: #bab80c;
       i{
         font-style: normal;
         color:#5e5e5e;
         font-size: 26px;
         display: block;
         white-space: pre-wrap;

         /* 文字固定显示两行超出显示省略号 */
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
       }
     }
    }
  }
  }
  .bottom {
    width: 100%;
    height: 104px;
    background: purple;
    position: fixed;
    bottom: 0px;
    z-index: 999;
    display:flex;
    border:solid 0.5px #dfdfe1;
    .bott-left{
      width: 49%;
      height: 104px;
      // background: #e84868;
      display:flex;
      span{
        display: block;
        width:calc(100%/3);
        height: 104px;
        background: #fff;
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 20px;
        box-sizing: border-box;
        img{
          width: 34%;
          height: 40%;
          display:block;

        }
        span:nth-child(2){
           border-left:solid 1px #dfdfe1;
           border-right:solid 1px #dfdfe1;
        }
        i{
          padding-top: 10px;
          box-sizing: border-box;
          display:block;
          width: 100%;
          height: 60%;
          line-height: 60%;
          font-style: normal;
          text-align: center;
          font-size: 20px;
          color:#666;
        }
      }
    }
    .bott-right{
      width: 51%;
      height: 104px;
      background: #09b97d;
      display:flex;
      span{
        display:block;
        width:calc(100%/2);
        height: 104px;
        line-height: 104px;
        font-size: 30px;
        color:#fff;
        text-align: center;
      }
      span:nth-child(1){
        color:#ff5777;
        background: #ffe6e8;

      }
       span:nth-child(2){
        background: #ff547b;
      }
    }
  }
}
</style>
