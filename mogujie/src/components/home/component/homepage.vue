<template>
    <div class="main">
        <div class="main2">
            <div class="main2_top">
                <img :src="home.userimg" alt="">
                <p class="main2_top_top">
                    <span>{{home.vermicelli}}</span>
                    <span>{{home.attention}}</span>
                </p>
                <p class="col">
                    <i>粉丝</i>
                    <i>关注</i>
                </p>
                <p class="main2_top_bottom"><button @click="sh" ref='changefont' ><em>+</em> 关注</button></p>
                <div class="pull-down icon icon-jiantou-up-down" style="touch-active:none" @click="shw"></div>

            </div>
            <div class='hidden' v-show="istrue" ref='showDown'>
                <div class="hidden2">
                    <p>推荐关注<span @click="shw"  class="icon icon-guanbi"></span></p>
                    <ul >
                        <li v-for="(item1,index1) in homes" :key="index1">
                            <div class="attention">
                                <img :src="item1.attentionimg" alt="">
                                <p class="attention_name">{{item1.attentionname}}</p>
                                <p class="attention_test">{{item1.attentionintro}}</p>
                                <i>关注</i>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            <div class="main2-title">
                <p class="main2-title-top">{{home.username}}</p>
                <p class="main2-title-main">
                    <span>{{home.height}}cm</span>
                    <span>{{home.weight}}kg</span>
                    <span><i>|</i>{{home.address}}</span>
                    <span><i>|</i>{{home.work}}</span>
                </p>
                <p class="main2-title-label" >
                    <span v-for="(item,index) in home.label" :key='index'>{{item}}<i>|</i></span>
                </p>
            </div>

        </div>
        <div class="hr"></div>

        <attention></attention>
    </div>

</template>
<script>
export default {

}
</script>

<script>
import attention from '@/components/home/component/attention/attention'
import {homes} from '@/api/index'
export default {
  data () {
    return {
      home: [],
      homes: [],
      istrue:false
    }
  },
  components: {
    attention

  },

  mounted () {
    homes().then((result) => {
      this.home = result[0].user[this.$route.params.id]
      //   this.home = result

    })
    homes().then((result) => {
      this.homes = result[0].attention
      //   this.home = result

    })
  },
  methods:{
      shw(){
         this.istrue = !this.istrue
        },
        sh(){
          this.istrue = !this.istrue

         let ft = this.$refs.changefont.innerHTML;
         if(ft == '已关注'){
             this.$refs.changefont.innerHTML='关注';
         }else{
             this.$refs.changefont.innerHTML='已关注';
         }
        },
        atin(){
            let ft1 = this.$refs.changefont1.innerHTML;
         if(ft1 == '已关注'){
             this.$refs.changefont1.innerHTML='关注';
         }else{
             this.$refs.changefont1.innerHTML='已关注';
         }
        }
  }
}
</script>
<style scoped lang="less">
    .main{
        .hr{
            width: 100%;
            height: 18px;
            background: rgb(239, 239, 239);
        }
        .main2{
            width: 100%;
            padding-bottom: 35px;
            margin: 0 auto;

            .hidden{
                width: 100%;
                height: 382px;
                margin-top: 30px;
                padding-top: 30px;
                background: #f4f4f4;
                .hidden2{
                    width: 702px;
                    margin: 0 auto;
                    overflow-x: auto;
                    ul{
                        display: flex;
                         flex-direction:row;

                        overflow-x: auto;
                        li{
                            width: 240px;
                            height: 220px;
                            margin-right: 15px;
                            float: left;
                            padding: 30px 10px;
                            background-color: #fff;
                            .attention{
                                width: 240px;
                                height: 162px;
                                text-align: center;
                                .attention_name{
                                    color: #333;
                                }
                                .attention_test{
                                    font-size: 10px;
                                }
                                i{
                                    display: inline-block;
                                    width: 116px;
                                    height: 52px;
                                    line-height: 52px;
                                    text-align: center;
                                    border-radius: 25px;
                                    border: 2px solid #999999;
                                    margin-top: 5px;
                                    color: #333;
                                    font-style: normal;
                                }

                                p{
                                    width: 100%;
                                    height: 39px;
                                    margin: 6px auto;
                                    overflow: hidden;
                                }
                                img{
                                display: block;
                                margin: 0 auto;

                                width: 76px;
                                height: 76px;
                                border-radius: 50%;
                                }
                            }

                        }
                    }
                    p{
                        width: 702px;
                        height: 42px;
                        line-height: 42px;
                        color: #999999;
                        font-size: 28px;
                        margin-bottom: 20px;
                        span{
                            float: right;
                            font-size: 50px;
                        }
                    }

                }
            }
            .main2-title{

                .main2-title-top{
                    width: 702px;
                    margin: 30px auto 10px auto;
                    font-size: 32px;
                    font-weight: 600;
                }
                .main2-title-main{
                    width: 702px;
                    height: 40px;
                    margin: 0 auto;
                    span{
                        i{
                            margin: auto 6px auto 0;
                            color: #ccc;
                            font-style: normal;
                        }
                    }

                }
                .main2-title-label{
                    width: 702px;
                    margin: 0 auto;
                    height: 86px;
                    color: #666;
                    line-height: 45px;
                    padding-top: 12px;
                    margin-top: 18px;
                    border-top: 1px solid #ccc;
                    span{

                        i{
                            font-style: normal;
                            margin: auto 8px;
                            color: #ccc;
                        }

                    }
                }

            }
            .main2_top{
                width: 702px;
                height: 156px;
                padding-top: 34px;
                margin: 0 auto 20px auto;
                .col{
                    color: #999999;
                    font-weight: 400;
                }
                .main2_top_bottom{
                    display: flex;
                    justify-content: space-around;
                }
                .pull-down{
                    width: 76px;
                    height: 58px;
                    font-size: 26px;
                    border: 1px solid #ccc;
                    float: right;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }

                .main2_top_top{
                    span{
                        color: #333;
                        font-size: 32px;
                    }
                }

                p{
                    display: flex;
                    justify-content: center;
                    float: left;
                    color: #333;
                    span{
                        display: block;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        font-weight: 700;
                        width: 250px;
                        height: 48px;
                    }
                    i{
                        display: block;
                        display: flex;
                        font-style: normal;
                        justify-content: center;
                        align-items: center;
                        text-align: center;

                        width: 250px;
                        height: 48px;
                    }
                    button{
                        width: 420px;
                        height: 58px;
                        background: #fff;
                        border: 1px solid #ccc;
                        font-weight: 700;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        em{
                            font-style: normal;
                            font-size: 50px;
                            margin-right: 8px;
                        }
                    }
                }
                img{
                    display: block;
                    width: 150px;
                    height: 150px;
                    float: left;
                    margin-right: .4rem;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
