<template>
    <div class="fashion">
    <p>{{fashions[0].title}}</p>
    <ul>
        <li v-for='(item,index) in fashions[1]' :key='index'><img v-lazy="item.imgurl" alt=""><p class='p1'>{{item.title}}}</p></li>
    </ul>
    </div>
</template>
<style>

</style>
<script>
import { getstore } from '@/api/index'
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
      fashions: ''
    }
  },
  created () {
    getstore().then(result => {
      this.fashions = result[2]
      console.log(result[2])
    })

    // console.log(this.lefttime)
  }
}
</script>
<style scoped lang='less'>
 .fashion{
     width: 100%;
     height: 848px;
    //  background: red;
     margin-top: -39px;
     display:flex;
     justify-content: center;
     flex-wrap: wrap;
     p{
         width: 95%;
         height:110px;
        //  background: blue;
         font-size: 32px;
         color:#666;
         font-weight: bold;
         line-height: 110px;
         padding-left: 40px;
         box-sizing: border-box;
     }
     ul{
        width: 95%;
        height:738px;
        // background: orange;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li{
          width: 220px;
          height: 226px;
          background: #f3f3f3;
          position:relative;
          border-radius:5px;
          img{
              width: 66%;
              height: 46%;
              padding: 100px 44px;
          }
          p.p1{
              width: 100%;
              height: 42px;
              line-height: 42px;
            //   background: green;
              position: absolute;
              top:38px;
              color:#333;
              font-size: 28px;
              text-align: center;
              font-weight: bold;
          }
        }
     }
 }
</style>
