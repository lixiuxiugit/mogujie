<template>
  <div class="contextbox">
    <div class="collection-tips">
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/180830_64jc99ae7241iikh45he6ebeh617f_88x88.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>消息</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/180830_8021c9de4b3fhigk152bj44a7356e_88x88.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>收藏</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap-last">
        <div class="blank"></div>
      </div>
    </div>

    <div class="collection-tips">
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/180830_3b8hjl8a44g1ce5g6ehe721j39ec1_88x88.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>购物车</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/180830_13f05akli0hibg1jek8a84f3h8l78_88x88.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>我的订单</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/180830_48dke48gg44j5kj735e04360k1fid_88x88.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>卡券红包</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap-last">
        <div class="blank"></div>
      </div>
    </div>

    <div class="collection-tips">
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/180830_8a12la84be7150gh4fah2h7l8el7k_88x88.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>我的钱包</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/181009_22fecib58jkc5kf8d7322a0a29866_44x44.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>收货地址</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap">
        <a href class="item-link">
          <div class="item-txt">
            <p class="item-icon">
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/180830_62kkcladdid2b32a6jkbae20j2ke7_88x88.png"
                alt
              >
            </p>
            <div class="item-main">
              <span>客服</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
        </a>
      </div>
      <div class="item-wrap-last">
        <div class="blank"></div>
      </div>
    </div>
    <div class="out-content">
      <a href class="logout">退出登录</a>
    </div>
  </div>
</template>
<script>
import '../resource/fontIcon.css'
export default {}
</script>
<style scoped lang='less'>
.contextbox {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 120px;
  .collection-tips {
    width: 100%;
    height: auto;
    .item-wrap {
      width: 100%;
      height: 112px;
      margin-left: 40px;
      overflow: hidden;
      box-sizing: content-box;
      line-height: 112px;
      border-bottom: 1px solid #e5e5e5;
      .item-link {
        width: 100%;
        display: block;
        .item-txt {
          display: flex;
          .item-icon {
            width: 44px;
            height: 44px;
            padding-top: 15px;
            img {
              width: 100%;
              height: 100%;
              display: inline-block;
            }
          }
          .item-main {
            width: 80%;
            display: flex;
            justify-content: space-between;
            padding: 0px 30px;
            font-size: 32px;
            color: #333;
            .iconfont{
                font-size: 25px;
                color: #666;
            }
          }
        }
      }
    }
    .item-wrap-last {
      background: #f6f6f6;
      .blank {
        height: 20px;
      }
    }
  }
  .out-content {
    width: 100%;
    margin-top: 30px;
    .logout {
      display: block;
      width: 660px;
      height: 80px;
      line-height: 80px;
      color: #fff;
      background-color: #ff5777;
      font-size: 30px;
      margin: 0 auto;
      border-radius: 4px;
      text-align: center;
    }
  }
}
</style>
