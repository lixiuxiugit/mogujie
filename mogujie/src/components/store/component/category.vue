<template>
    <div class='category'>
        <ul>
            <li v-for='(item,index) in categorys' :key='index'><img :src="item.imgurl" alt=""><br><p>{{item.title}}</p></li>
        </ul>
    </div>
</template>
<script>
import { getstore } from '@/api/index'
export default {
  data () {
    return {
      categorys: ''
    }
  },
  created () {
    getstore().then(result => {
      this.categorys = result[1]
    //   console.log(result[1])
    })

    // console.log(this.lefttime)
  }
}
</script>
<style scoped lang='less'>
.category{
    width: 100%;
    height: 470px;
    // background: red;
    ul{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        li{
            width: 130px;
            height: 130px;
            // background: blue;
            margin-top: 28px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            img{
                display: block;
                width: 80%;
                height: 80%;
            }
            p{
                width: 100%;
                text-align: center;
                font-size: 26px;
                color:#666;
            }
        }
    }
}
</style>
