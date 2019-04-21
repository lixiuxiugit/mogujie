<template>
  <div class="live">
    <ul class="topnav">
      <router-link to="/live/hot" tag="li">
        热门
        <span :class="{box:isShow}"></span>
      </router-link>
      <router-link to="/live/wear" tag="li">
        穿搭
        <span :class="{box:isShow}"></span>
      </router-link>
      <router-link to="/live/makup" tag="li">
        美妆
        <span :class="{box:isShow}"></span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.live {
  .topnav {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ececec;
    background: white;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1111;
    li {
      list-style-type: none;
      flex-direction: row;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
      height: 90px;
      font-size: 30px;
      position: relative;
      &.router-link-active {
        span {
          border-bottom-color: #ff5777;
        }
      }
      span {
        width: 75%;
        height: 1px;
        border-bottom: 3px solid transparent;
        position: absolute;
        bottom: 3px;
      }

      // .box {
      //   //
      // }
    }
  }
}
</style>
