<template>
  <div class="gun">
    <div class="nav" ref="TabNav">
      <!-- :scol="guding" :class="{guding:isgun}" -->
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">综合</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">销量</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">新品</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <a class="gouitem" v-for="(n,index)  in  zonghe" title="tab-container 1" :key="index">
            <div class="imgg">
              <img :src="n.imgurl">
            </div>
            <div class="getinfo">
              <p class="good_name">{{n.goods_name}}</p>
              <span class="zuo">{{n.p_price | monty}}</span>
              <span class="bo_pv">{{n.bo_pv | num}}</span>
              <span class="you">
                {{n.p_feed}}
                <i class="iconfont icon-wujiaoxingkong"></i>
              </span>
            </div>
          </a>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container2">
          <a class="gouitem" v-for="(n,index)  in  xiaoliang" title="tab-container 1" :key="index">
            <div class="imgg">
              <img :src="n.imgurl">
            </div>
            <div class="getinfo">
              <p class="good_name">{{n.goods_name}}</p>
              <span class="zuo">{{n.p_price | monty}}</span>
              <span class="bo_pv">{{n.bo_pv | num}}</span>
              <span class="you">{{n.p_feed}}</span>
            </div>
          </a>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container3">
          <a class="gouitem" v-for="(n,index)  in xinpin" title="tab-container 1" :key="index">
            <div class="imgg">
              <img :src="n.imgurl">
            </div>
            <div class="getinfo">
              <p class="good_name">{{n.goods_name}}</p>
              <span class="zuo">{{n.p_price | monty}}</span>
              <span class="bo_pv">{{n.bo_pv | num}}</span>
              <span class="you">{{n.p_feed}}</span>
            </div>
          </a>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { fenlei } from '@/api'
import { clearTimeout, setTimeout } from 'timers'
import '@/components/classify/resource/icon.css'
export default {
  name: 'page-tab-container',
  data () {
    return {
      zonghe: [],
      xiaoliang: [],
      xinpin: [],
      data: null,
      active: 'tab-container1',
      isgun: false
    }
  },
  async mounted () {
    this.data = await fenlei()
    this.zonghe = this.data[2].zonghe
    this.xiaoliang = this.data[3].xiaoliang
    this.xinpin = this.data[4].xinpin
  },
  methods: {
    jieliu (fn, se) {
      var tirme = null
      return function () {
        var context = this
        var args = arguments
        clearTimeout(tirme)
        tirme = setTimeout(function () {
          fn.apply(context, args)
        }, se)
      }
    },
    guding (isfalg) {
      this.isgun = isfalg
    }
  },
  filters: {
    num (val) {
      return `已售${val}件`
    },
    monty (val) {
      return `￥${val}`
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  display: inline-block;
}
.gun {
  width: 100%;
  height: auto;
  .nav {
    width: 100%;
    display: flex;
    position: relative;
    top: 0px;
    .mint-button.mint-button--default.mint-button--small {
      width: 33.3%;
      height: 83px;
      font-size: 28px;
      background: #ffffff;
      border: 1px solid #ffffff;
    }
  }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
  .page-tab-container {
    width: 100%;
    height: auto;
    .mint-tab-container-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .gouitem {
        width: 50%;
        height: auto;
        padding: 5px 10px 0px 0px;
        box-sizing: border-box;
        margin-bottom: 20px;
        display: block;
        position: relative;
        .getinfo {
          width: 100%;
          height: auto;
          .good_name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #333;
            font-size: 24px;
            padding: 5px 0px;
          }
          .bo_pv {
            width: 120px;
            height: 40px;
            position: absolute;
            bottom: 110px;
            left: 0px;
            color: #ffffff;
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
            font-size: 20px;
            padding: 0px 15px;
          }
          .zuo {
            float: left;
            display: block;
            font-size: 30px;
            font-weight: bold;
            color: #ff5777;
          }
          .you {
            float: right;
            display: block;
            font-size: 24px;
            color: #999999;
            i {
              font-size: 24px;
            }
          }
        }
        .imgg {
          width: 100%;
          height: auto;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  .guding {
    position: fixed;
    top: 0px;
  }
}
</style>
