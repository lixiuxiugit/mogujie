<template>
<div class="tuijian">
    <div class="box">
        <div class="title">
            推荐单品
            <em></em>
            <div class="kind">
                <ul v-for="(item, index) in tuijianlist" :key="index">
                    <router-link tag="li" to="">
                        <span>{{item.price}}</span>
                        <img :src="item.img" alt="">
                    </router-link>
                    <p>{{item.title}}</p>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { remen } from '@/api/index'
export default {
  data () {
    return {
      tuijianlist: []
    }
  },
  created () {
    remen().then(data => {
      this.tuijianlist = data[1]
    //   console.log(this.tuijianlist)
    })
  }
}
</script>
<style scoped lang="less">
    .tuijian {
        width:100%;
        height:100%;
        .box{
            width:97%;
            height:100%;
            margin: 80px auto 0px auto;
            .kind{
                width:100%;
                background:#fff;
                ul{
                    width:100%/2;
                    height:550px;
                    margin-top:20px;
                    float: left;
                    padding:0px 5px;
                    box-sizing: border-box;
                    p{
                        width:100%;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        color:#333;
                        margin-top:15px;
                    }
                    li{
                        width:100%;
                        height:456px;
                        background:violet;
                        position:relative;
                        // top:30px;
                        span{
                            position:absolute;
                            bottom:0px;
                            right:0px;
                            display: inline-block;
                            width:100px;
                            height:40px;
                            background:rgba(0, 0, 0, 0.3);
                            color:#fff;
                            text-align: center;
                            line-height:40px;
                        }
                        img{
                            width:100%;
                            height:100%;
                            display:block;
                        }
                    }
                }
            }
        }
        .title{
            width:100%;
            height:30px;
            color:#666;
            position:relative;
            display: flex;
            flex-direction: column;
            em{
                position:absolute;
                top:0px; left:100px;
                border-top:12px solid #666;
                border-left:12px solid transparent;
                border-right:12px solid transparent;
                border-bottom:12px solid transparent;
                margin:10px 0px 0px 5px;
            }
        }
    }
</style>
