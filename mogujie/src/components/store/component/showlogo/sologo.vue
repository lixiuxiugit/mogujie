<template>
    <div class="showpic">
        <ul>
            <router-link tag="li" :to="{name: 'hot',params:{rid:index}}"  v-for="(item, index) in imgurl" :key="index">
                <img :src="item.img" alt="">
            </router-link>
        </ul>
    </div>
</template>
<script>
import {remen} from '@/api/index'
export default {
  data () {
    return {
      imgurl: []
    }
  },
  created () {
    remen().then(data => {
      this.imgurl = data[2]
    //   console.log(this.imgurl)
    })
  }
}
</script>
<style scoped lang="less">

    .showpic {
        width:100%;
        background:#f6f6f6;
        ul{
            width:100%;
            height:100%;
            padding-top:20px;
            li{
                width:100%;
                height:496.78px;
                margin-bottom:20px;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
</style>
