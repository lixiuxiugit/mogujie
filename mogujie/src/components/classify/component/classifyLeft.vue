<template>
  <div class="Cleft">
    <div class="wrapper">
      <ul class="content" ref="ul">
        <li
          v-for="(item,index) in leftlist"
          ref="li"
          :key="index"
          @click="addStyle(index)"
          style=" touch-action: none"
          :class="{active:currentId==index}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>
<script>
import { fenlei } from '@/api'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      brr: null,
      leftlist: [],
      currentId: ''
    }
  },
  async created () {},
  async mounted () {
    this.brr = await fenlei()
    this.leftlist = this.brr[0].Larr
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new BScroll('.wrapper', {
        scrollY: true,
        click: true
      })

      this.$refs.ul.style.height =
        this.$refs.li[0].offsetHeight * this.$refs.li.length + 'px'
    })
  },
  methods: {
    async addStyle (index) {
      this.currentId = index
      console.log(555)
    }
  }
}
</script>
<style scoped lang='less'>
.Cleft {
  width: 200px;
  height: 100%;
  background: #f6f6f6;
  .wrapper {
    width: 100%;
    height: 100%;
    .content {
      width: 100%;
      li {
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        color: #666666;
      }
      .active {
        border-left: solid #ff5577 4px;
        font-weight: bold;
        color: #ff5577;
        background: #ffffff;
      }
    }
  }
}
</style>
