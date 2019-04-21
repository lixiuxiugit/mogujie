<template>
  <div>
    <ul class="box">
      <li class="item" v-for="(item1,index) in home" :key="index">
        <router-link tag="img" to="/rclothesNav" :src="item1.img" alt></router-link>
        <span class="item-title">{{item1.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { homes } from '@/api/index'
// import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      home: []
    }
  },
  created () {
    // Indicator.open('加载中...')
    homes().then(result => {
      this.home = result[0].list
      // Indicator.close()
    })
  }
}
</script>
<style scoped lang="less">
    .box{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding-bottom: 8px;
        border-bottom: 8px solid #f6f6f6;

        .item{
          width: calc(100%/5);
          padding: 10px 0;
            img{
              width:100px;
              height:100px;
              display: block;
              margin: 0 auto;
        }
          .item-title{
          color: rgb(102, 102, 102);
          font-size: 26px;
          display: inline-block;
          font-weight: 500;
          text-align: center;
          width: 100%;
          margin: 7px auto 0 auto;
      }
      }
    }

</style>
