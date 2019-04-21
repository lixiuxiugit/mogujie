<template>
    <div class="main" >
        <header  v-for="(item,index) in home" :key='index' @click="gerImgId(index)">
            <div class="main_top">
                <img :src="item.userimg" alt="">
                <p class="name" > <span>{{item.username}}</span><img :src="item.usernameimg" alt=""></p>
                <p class="test">
                    <span>{{item.height}}<i>cm</i></span>
                    <span>{{item.weight}}<i>kg</i></span>
                    <span class="col">|</span>
                    <span><i>{{item.address}}</i></span>
                    <span class="col">|</span>
                    <span><i>{{item.work}}</i></span>
                </p>
            </div>
            <div class="main2" >
                <!-- <router-link tag="img" to="/homepage" v-for='(item1,index1) in item.userimgs' :key='index1' :src="item1" alt=""></router-link> -->
                <img v-for='(item1,index1) in item.userimgs'  :key='index1' v-lazy="item1" alt="">
            </div>
            <div class="main_bottom">
                <div class="main_bottom2">
                    <ul>
                        <li v-for="(item2,index2) in item.brand" :key="index2">
                            <img v-lazy="item2.url" alt="">
                            <span>{{item2.title}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
import {homes} from '@/api/index'
import { Indicator } from 'mint-ui'
import { setTimeout } from 'timers'
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
      home: []
    }
  },
  created () {
    Indicator.open('加载中...')
    homes().then((result) => {
    //   this.home = result
      this.home = result[0].user
      setTimeout(() => {
        Indicator.close()
      }, 350)
    })
  },

  methods: {
    gerImgId (index1) {
      this.$router.push({name: 'homepage', params: {id: index1}})
    }
  }
}
</script>
<style scoped lang="less">
    .box{
        width: 100%;
        height: 200px;
    }
    .main{
        width: 100%;
        height: 656px;
    }
    .main>header>.main_top{
        width: 690px;
        height: 100px;
        padding: 40px 30px 0 30px;
    }
    .main>header>.main_top>img{
        float: left;
        margin-right: 18px;
        border-radius: 50%;
    }
    .main>header>.main_top>.name{
        display: flex;
        align-items: center;
        width: 400px;
        height: 48px;
        float: left;
    }
    .main>header>.main_top>.name>span{
        display: block;
        float: left;
        color: #333;
        font-size: 32px;
        font-weight: 700;
        white-space:nowrap;
    }
    .main>header>.main_top>.name>img{
        display: block;
        float: left;
        width: 122px;
    }
    .main>header>.main_top>.test{
        width: 400px;
        height: 36px;
        line-height: 36px;
        float: left;
    }
    .main>header>.main_top>.test>span{
        float: left;
        margin-right: 10px;
    }
    .main>header>.main_top>.test>span>i{
        color: #999;
        font-style: normal;
    }
    .main>header>.main_top>.test>.col{
        color: #ccc;
    }
    .main>header>.main_top>img{
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .main>header>.main2{
        width: 100%;
        height: 412px;
    }
    .main>header>.main2{
        display: flex;
        justify-content: space-between;
    }
    .main>header>.main2>img{
        display: inline-block;
        width: 247.6px;
        height: 410px;
    }
    .main>header>.main_bottom{
        width: 100%;
        height: 70px;
    }
    .main>header>.main_bottom>.main_bottom2{
        width: 710px;
        height: 52px;
        margin: 16px auto 0 auto;
        padding-bottom: 16px;
        border-bottom: 1px solid #ccc;
        overflow-x: auto;
        overflow-y: scroll;
    }
    .main>header>.main_bottom>.main_bottom2>ul{
        display: flex;
        justify-content: flex-start;
        overflow-x: auto;
        height: 52px;
    }
    .main>header>.main_bottom>.main_bottom2>ul>li{
        background: #F2F3F7;
        display: flex;
        height: 38px;
        padding: 8px;
        margin-right: 20px;
        align-items: center;
        white-space:nowrap;
    }
    .main>header>.main_bottom>.main_bottom2>ul>li>img{
        width: 32px;
        height: 32px;
        margin-right: 14px;
    }
    .main>header>.main_bottom>.main_bottom2>ul>li>span{
        height: 32px;
    }
</style>
