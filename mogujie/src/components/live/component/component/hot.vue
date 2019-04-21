<template>
<!-- <transition name="component-fade" mode="out-in"> -->
  <div class="hot">
   <!-- <topnav></topnav> -->
     <div class="fill" ref="hot"></div>
      <ul>
        <li v-for="(item,index) in lives" :key="index" @click.prevent="jion(index)">
          <div class="photo"><span><img :src="item.userphoto" alt=""></span></div>
          <h3>{{item.username}}</h3>
          <img :src="item.banner" alt="" class="banner">
          <div class="imager">
            <div class="now" >
             <span><a href="#" class="left" ref="state"></a>{{item.state}}</span><a class="wire" href="#" ></a><span><a href="#" class="right"><img src="https://s10.mogucdn.com/mlcdn/c45406/180927_1g764cjegegb6ecbh1jaa89gbh13l_30x30.png" alt=""></a>{{item.moods}}</span>
            </div>
            <h1>{{item.title}}</h1>
           <span v-for="(img,index1) in item.imgs" :key="index1" class="img">
            <img :src="img" alt="">
           </span>
          </div>
        </li>
      </ul>
      <div class="fill" ref="hot"></div>
  </div>
<!-- </transition> -->
</template>
<script>
import topnav from '../topnav'
import {getHot} from '@/api/index'
// import { setTimeout } from 'timers'
// import { setTimeout } from 'timers'
export default {
  data () {
    return {
      lives: [],
      state: [],
      opacity: 1
    }
  },
  methods: {
    jion (index) {
      this.$router.push({name: 'zhibo', params: {id: index}})
    }
  },
  async mounted () {
    this.lives = await getHot()
    this.$nextTick(() => {
      this.state = this.$refs.state
      this.state.forEach((item) => {
        setInterval(() => {
          if (this.opacity < 0) {
            this.opacity = 1
          }
          this.opacity = this.opacity - 0.05
          item.style.opacity = this.opacity
          // console.log(this.opacity)
        }, 300)
      })
    })
  },
  components: {
    topnav
  }
}
</script>
<style scoped lang="less">
.hot{
  height:100%;
   .fill{
     width:100%;
     height: 90px;
   }
   ul{
     border-bottom:1px solid gray;

     li{
       width:100%;
      //  margin:80px 0px;
      margin-top:35px;
       position: relative;
       .photo{
         width:102px;
         height:102px;
         border-radius: 50%;
         overflow: hidden;
         background:floralwhite;
         position: absolute;
         left:40px;
         top:-20px;
         span{
            width:94px;
            height:94px;
            display: inline-block;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top:0px;
            left:0px;
            bottom:0px;
            right:0px;
            margin:auto;
           img{
           width:100%;
           height:100%;
           display: block;
         }
         }
       }
       h3{
          margin-left:170px;
          font-size: 30px;
          margin-bottom:16px;
       }
       .banner{
        width:100%;
       }
       .imager{
         .now{
           width:250px;
           height: auto;
           overflow: hidden;
           background:rgba(0,0,0,0.5);
           border-radius: 10px;
          span{
            width:113px;
            height:24px;
            margin-right:6px;
            line-height: 24px;
            a{
              width:18px;
              height:18px;
              display: inline-block;
              border-radius:50%;
              img{
                width:100%;
                height:100%;
              }
            }
            .left{
              background:red;
              margin:0px 10px;
              opacity:1;
            }
            .right{
              margin:0px 10px;
            }
          }
         }
         h1{
           margin:10px;
           font-size:40px;
         }
         color:#fff;
         position:absolute;
         bottom:30px;
         left:20px;
         .img{
           width:132px;
           height:132px;
           display: inline-block;
           margin:5px;
           img{
             width:100%;
             height:100%;
           }
         }
       }
     }
   }
}
</style>
