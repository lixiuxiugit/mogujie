<template>
  <div class="scroll">
    <swiper v-if="home.length" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
        <swiper-slide v-for="item in home" :key="item" class="sw-sl">
            <img :src="item" alt="" >
        </swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
      <!-- <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {homes} from '@/api/index'
export default {
  name: 'HelloWorld',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      home: [],
      swiperOption: {
        direction: 'horizontal',
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },

        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  created () {
    homes().then((result) => {
    //   this.home = result
      this.home = result[0].banner
    //   console.log(this.home.user)
    })
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.scroll .sw-sl>img{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    width: 750px;
    height:300px;
}

</style>
