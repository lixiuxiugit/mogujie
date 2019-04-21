<template>
  <div>
    <div class="search">
        <span>
            <router-link tag="a" to="/home" class="icon icon-huitui"></router-link>
        </span>
        <div class="isearch">
             <span class="icon icon-fangdajing"></span>
             <router-link tag='input' to='/clicksearch' type="text" value="" placeholder="裤子"></router-link>
        </div>
        <span>
            <router-link tag="a" to="" class="news icon icon-gouwuchekong"></router-link>
        </span>
    </div>
   <div class="nav" ref="nav">
      <mt-button size="small" @click.native.prevent="tab('tab-container1')" ref="tab-container1" >综合<span>|</span></mt-button>
      <mt-button size="small" @click.native.prevent="tab('tab-container2')" ref="tab-container2" >销量<span>|</span></mt-button>
      <mt-button size="small" @click.native.prevent="tab('tab-container3')" ref="tab-container3" >新品<span>|</span></mt-button>
      <mt-button >价格<a class="jiantou icon icon-arrow-up1"></a></mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <div v-for="(item,index1) in home" :key="index1" class="main" >
            <img alt="" v-lazy="item.img">
            <div class="main_test" >
                <p class="main_title">
                  <span><i v-if="item.hotSeller">{{item.hotSeller}}</i></span>
                  {{item.title}}
                </p>
                <p class="main_title2">
                  <span>{{item.price}}</span>
                  <i>
                    {{item.support}}
                    <a href="###" class="icon icon-shoucang"></a>
                  </i>
                </p>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div v-for="(item,index1) in home" :key="index1" class="main" title="tab-container 2">
            <img alt="" v-lazy="item.img">
            <div class="main_test" >
                <p class="main_title">
                  <span><i v-if="item.hotSeller">{{item.hotSeller}}</i></span>
                  {{item.title}}
                </p>
                <p class="main_title2">
                  <span>{{item.price}}</span>
                  <i>
                    {{item.support}}
                    <a href="###" class="icon icon-shoucang"></a>
                  </i>
                </p>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <div v-for="(item,index1) in home" :key="index1" class="main" title="tab-container 3">
           <img alt="" v-lazy="item.img">
            <div class="main_test" >
                <p class="main_title">
                  <span><i v-if="item.hotSeller">{{item.hotSeller}}</i></span>
                  {{item.title}}
                </p>
                <p class="main_title2">
                  <span>{{item.price}}</span>
                  <i>
                    {{item.support}}
                    <a href="###" class="icon icon-shoucang"></a>
                  </i>
                </p>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import {getClothesnav} from '@/api/index'
import { TabContainer, TabContainerItem, InfiniteScroll, Indicator } from 'mint-ui'
import Vue from 'vue'
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.use(InfiniteScroll)

export default {
  name: 'page-tab-container',
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
      home: [],
      active: 'tab-container1',
      loading: false
    }
  },
  created () {
    Indicator.open('加载中...')
    getClothesnav().then((result) => {
      this.home = result[0].clothing
      Indicator.close()
    })
  },
  mounted () {
    this.$refs[this.active].$el.className = this.$refs[this.active].$el.className + ' active'
  },
  watch: {
    active: function (newValue, oldValue) {
      console.log(oldValue)
      console.log(newValue)
      if (!this.style) {
        this.style = this.$refs[newValue].$el.className
      }
      this.$refs[oldValue].$el.className = this.style + 'actived'
      this.$refs[newValue].$el.className = this.$refs[newValue].$el.className + ' active'
      console.log('..........................')
      console.log(this.style)
      console.log(this.$refs[newValue].$el.className)
    }
  },
  methods: {
    tab (eid) {
      this.active = eid
      if (!this.style) {
        this.style = this.$refs[eid].$el.className
      }
      console.log(this.style)
      this.btns = Array.prototype.slice.call(this.$refs.nav.children)
      this.btns.forEach(item => {
        item.className = this.style + 'actived'
        console.log(item)
      })
      // js添加属性时会把原有的覆盖掉,因此添加属性时,若有属性需要把原有属性加上;
      this.$refs[this.active].$el.className = this.$refs[this.active].$el.className + ' active'
    },
    loadMore () {
      Indicator.open('加载中...')
      setTimeout(() => {
        let last = this.home[this.home.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.home.push(last + i)
        }
        Indicator.close()
      }, 2500)
    }
  }

}
</script>
<style scoped lang="less">
//tab切换部分样式
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
    .nav{
        display: flex;
        justify-content: space-between;
        .jiantou{
          margin-left: 10px;
          color: #ccc;
        }
        button{
            width:calc(100%/3);
            height:90px;
            line-height: 90px;
            font-size:28px;
            position: relative;
            box-sizing: border-box;
            background:#fff;
            span{
              float: right;
              color:#ccc;
            }
            &.active{
                color: #ef4562;
            }
            &.actived{
                color: #ef4562;
            }

        }

    }
    .mint-button{
              &.actived{
                background: red;
            }
        }
    .main{
      padding: 0;
      height: 620px;
      margin: 15px 0 0 15px;
      float: left;
      z-index: 2;
      background: #fff;
      .main_test{
        width: 325px;
        height: 129px;
        margin: 16px auto 0 auto;
        .main_title2{
          width: 316px;
          height: 40px;
          line-height: 40px;
          margin: 12px auto 0 auto;
          span{
            font-size: 30px;
            color: #333;
            font-weight: 700;
          }
          i{
            font-style: normal;
            float: right;
            color: #999;
            a{
              font-size: 30px;
            }
          }
        }
        .main_title{
            width: 100%;
            height: 73px;
            line-height: 36.5px;
            color: #000;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          span{
            background: #FF743C;
            color: #FFFFFF;
            i{
              font-style: normal;
              padding: 0 6px;
              margin: 0 6px;
            }
          }

        }
      }
      img{
          display: block;
          width: 352px;
          height: 470px;
      }
    }
    .page-tab-container{
          background: #efefef;
          z-index: 1;
      }
//搜索框部分样式
    .search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:16px 2px;
        border-bottom: 1px solid #c9c7c8;
    }
    .search>span>.news{
        color: #ccc;
        font-size: 68px;
    }
    .search>.isearch{
        width: 530px;
        height: 60px;
        position: relative;
    }
    .search>.isearch>span{
        font-size: 44px;
        position: absolute;
        bottom: 6px;
        left: 16px;
    }
    .search>span,.search>img{
        display: block;
        width: 104px;
        height: 88px;
    }
    .search>span{
        display: flex;
        justify-content: center;
        align-items: center;
        display: inline-block;
        width: 100px;
        height: 60px;
        line-height: 60px;
    }
    .search>span>a{
        display: block;
        text-align: center;
        font-size: 50px;
    }
    .isearch>span{
        color: #b5bec5;
    }
    .isearch>input{
        width: 470px;
        height: 60px;
        background: #e8ecf0;
        padding-left: 72px;
        font-size: 14px;
        color: #999;
        border: none;
        background: #eee;
    }
    .search>span>.news{
      font-size: 50px;
    }
</style>

<style scoped lang="less">

</style>
