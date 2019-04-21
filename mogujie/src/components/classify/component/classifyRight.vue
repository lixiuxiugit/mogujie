<template>
  <div class="Cright">
    <div class="wrapper1">
      <ul class="content" ref="ull">
        <li v-for="(item,index) in rightlist" ref="lii" :key="index">
          <a href>
            <img :src="item.imgurl" alt>
            <p>{{item.title}}</p>
          </a>
        </li>
        <TabContainer ref="tabnav"></TabContainer>
      </ul>
    </div>
  </div>
</template>
<script>
import { fenlei } from '@/api'
import BScroll from 'better-scroll'
import TabContainer from './TabContainer'
import { clearTimeout, setTimeout } from 'timers'

export default {
  data () {
    return {
      rightlist: [],
      brr: [],
      rscroll: null
    }
  },
  async mounted () {
    // dom元素加载完毕
    this.brr = await fenlei()
    this.rightlist = this.brr[1].Rarr
    this.$nextTick(() => {
      /* eslint-disable no-new */
      this.rscroll = new BScroll('.wrapper1', {
        scrollY: true,
        click: true,
        probeType: 1
      })

      this.rscroll.on(
        'scroll',
        this.jieliu(e => {
          if (parseInt(Math.abs(e.y)) >= this.$refs.tabnav.$el.offsetTop) {
            this.$refs.tabnav.guding(true) // 调用其他组件的方法。
          } else {
            this.$refs.tabnav.guding(false) // 调用其他组件的方法。
          }
        }, 0)
      )
    })
  },
  components: {
    TabContainer
  },
  methods: {
    jieliu (fn, delay) {
      var timer = null // 保存一个i定时器标记
      return function () {
        let content = this // 保存当前的this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
          fn.apply(content, args) // 只执行最后一次
        }, delay)
      }
    }
  }
}
</script>
<style scoped lang='less'>
.Cright {
  flex: 1;
  height: 100%;
  padding: 0.3rem 0.2rem 0 0.2rem;
  box-sizing: content-box;
  .wrapper1 {
    width: 100%;
    height: 100%;
    .content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      li {
        width: 33.3%;
        height: 180px;
        margin: 20px 0;
        overflow: hidden;
        img {
          width: 140px;
          height: auto;
        }
        a {
          display: block;
          text-align: center;
          p {
            font-size: 24px;
            color: #666666;
            text-align: center;
            line-height: 38px;
            margin-top: 2px;
          }
        }
      }
    }
  }
}
</style>
