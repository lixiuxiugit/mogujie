<template>
  <div class="choiceness">
    <ul>
      <li v-for="(item,index) in choiceness" :key="index">
        <img :src="item.imgurl1" alt>
        <img v-if="item.imgurl2 !== undefined" :src="item.imgurl2" alt=''>
        <p>{{item.title}}</p>
      </li>
    </ul>
    <span>
      <i>{{lefttime.hour}}</i>:<i>{{lefttime.minute}}</i>:<i>{{lefttime.seconds}}</i>
    </span>
  </div>
</template>
<script>
import { getstore } from '@/api/index'
import getHms from '@/utils/seckill'
export default {
  data () {
    return {
      choiceness: [],
      lefttime: ''
    }
  },
  created () {
    setInterval(() => {
      this.lefttime = getHms('2030-6-20 24:00:00')
    }, 1000)
    getstore().then(result => {
      this.choiceness = result[0]
      // console.log(result[0])
    })

    // console.log(this.lefttime)
  }
}
</script>
<style scoped lang='less'>
.choiceness {
  width: 100%;
  ul {
    height: 200px;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      width: 164px;
      height: 164px;
      // background: blue;
      border-radius: 5px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }
      img:nth-child(2) {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;

      }
      p {
        width: 100%;
        text-align: center;
        font-size: 28px;
        color: #fff;
        font-weight: bold;
        position: absolute;
        bottom: 5px;
      }
    }
  }
  span {
    display: block;
    width: 140px;
    height: 36px;
    // background: orange;
    position: absolute;
    top:110px;
    left:34px;
    display: flex;
    justify-content:space-evenly;
    i{
      display: block;
      width: 32px;
      height: 32px;
      background: #333;
      border-radius: 5px;
      color:#fff;
      font-style: normal;
      text-align: center;
    }
  }
}
</style>
