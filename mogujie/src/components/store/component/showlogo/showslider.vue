<template>
       <swiper  :options="swiperOption" ref="mySwiper" class="swiper fa_swiper">
        <!-- slides -->
        <swiper-slide class="jia" v-for = "(item, index) in slideCont" :key="index">
            <li class="pic" v-for="(list, index) in item" :key="index">
                <div class="image">
                    <router-link tag="img" :to="{name: 'hot', params: {rid: index}}" :src="list.img" alt="" ></router-link>
                </div>
                <p class="title">{{list.title}}</p>
                <span class="jieshao">{{list.jieshao}}</span>
            </li>
        </swiper-slide>
        <!-- <swiper-slide>Slide 2</swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination">
          <!-- <ul class="" v-for = "item in slideCont" :key="item.id">
              <li v-for="list in item" :key="list.id"><img :src="list.img" alt=""></li>
          </ul> -->
        </div>
      </swiper>
    </template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data () {
    return {
      slideCont: [
        [
          {
            'img': 'https://s10.mogucdn.com/mlcdn/c45406/181212_80kdl01jgjf0282i420f96081d9b2_226x302.jpg',
            'title': '暖冬瘦腿裤',
            'jieshao': '穿上立减10KG'
          },
          {
            'img': 'https://s10.mogucdn.com/mlcdn/c45406/181022_48825ei6kl6c9jcgil3b4fdg9l48j_226x302.jpg',
            'title': '网红穿搭种草',
            'jieshao': '跟着穿吸睛max'
          },
          {
            'img': 'https://s10.mogucdn.com/mlcdn/c45406/181212_290gb6kijkaehl583d0351hi6b8h3_226x302.jpg',
            'title': '吸睛毛毛鞋',
            'jieshao': '让你时髦一整个冬季'
          }
        ],
        [
          {
            'img': 'https://s10.mogucdn.com/mlcdn/c45406/181213_45081k6516ded0i104ckef8lj5hdf_226x302.jpg',
            'title': '滋润护手霜',
            'jieshao': '好用到哭系列'
          },
          {
            'img': 'https://s10.mogucdn.com/mlcdn/c45406/181119_7l2e520cc15j9c6dhg0l26a2eakj7_226x302.png',
            'title': '冬日穿搭攻略',
            'jieshao': '拥抱温暖 拒绝臃肿'
          },
          {
            'img': 'https://s10.mogucdn.com/mlcdn/c45406/180920_6de9348e93bclh879279132g5b536_226x302.png',
            'title': ' ',
            'jieshao': ' '
          }
        ]
      ],
      swiperOption: {
        autoplay: 3000,
        effect: '',
        grabCursor: true,
        setWrapperSize: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange () {
            if (this.isBeginning) {
              this.navigation.$prevEl.css('display', 'none')
            } else {
              this.navigation.$prevEl.css('display', 'block')
            }
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // this.swiper.slideTo(2, 1000, false)
  }
}
</script>
<style scoped lang="less">
    .jia {
        width:100%;
        height:478px;
        .pic{
            width:100%/3;
            height:302px;
            float: left;
            text-align: center;
            padding:12px;
            box-sizing: border-box;
            .image{
            width:100%;
            height:302px;
            }
            img{
                width:100%;
                height:100%;
            }
            .title{
                width:100%;
                height:60px;
                display: inline-block;
                line-height:60px;
                font-size:22px;
                white-space: nowrap;
            }
            .jieshao{
                width:100%;
                display: block;
                color:#999;
                white-space: nowrap;
            }
        }
    }
</style>
