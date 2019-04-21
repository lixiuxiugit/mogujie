<template>
<div class="all">
    <div class="live" @click="blur">
       <div class="top">
          <h1 class="userphoto"><img :src="data.userphoto" alt=""></h1>
          <div class="msg">
             <span>{{data.username}}</span>
             <span>热度：{{data.moods}}</span>
          </div>
          <a href="#">关注</a>
        </div>
        <div class="imgs">
            <span v-for="(item,index) in data.imgs.slice(1)" :key="index">
                <img :src="item" alt="">
            </span>
        </div>
    </div>
    <div class="footer">
            <span class="first" @click="jion"></span>
            <span class="second"></span>
            <span class="third" @click="cart(id)"></span>
            <!-- <span><img src="https://s10.mogucdn.com/mlcdn/c45406/180831_1h7cg5696h06b34l3i1k24e4e6664_71x68.png" alt=""></span>
            <span><img src="https://s10.mogucdn.com/mlcdn/c45406/180831_46dejfii12hki90hig4h3e8lahaia_60x63.png" alt=""></span>
            <span class="right"><img src="https://s10.mogucdn.com/mlcdn/c45406/180831_472l2ie6be79ef7ih07d5d224ikee_60x60.png" alt=""></span> -->
        </div>
    <div class="ipt" v-show="isShow">
           <input type="text">
           <button>发送</button>
    </div>
    <div class="cart" v-show="openCart">
      <div class="product">
       <div class="left">
       <span class="picimg"><img :src="product.pic"></span>
       </div>
       <div class="right">
       <h1 class="id">{{product.id}}</h1>
       <span class="name">{{product.name}}</span>
       <span class="price">{{product.price}}</span>
       </div>
      </div>
      <div class="productMsg">
        <div class="color">
        <p>颜色</p>
        <span v-for="(item,index) in product.color" :key="index"  @click="clickcolor(index)">{{item}}</span>
        </div>
        <div class="size">
        <p>尺码</p>
        <span v-for="(item,index) in product.size" :key="index" @click="clicksize(index)">{{item}}</span>
        </div>
        <div class="number">
          <h1>数量</h1>
         <input type="number" class="number" min="1" ref="ipt" value=1>
        </div>
      </div>
      <div class="ffill"></div>
      <div class="btn">
        <button @click='add'>加入购物车</button>
        <div></div>
        <button>立即购买</button>
      </div>
      <div class="gwc" @click="jiongwc">
        <span class="icon icon-gouwuchekong"></span>
      </div>
    </div>
</div>
</template>
<script>
import {getHot, getCart} from '@/api/index'
// import {getCart} from '@/api/index'
export default {
  data () {
    return {
      data: '',
      isShow: false,
      openCart: false,
      product: '',
      choose: {
        product: '',
        color: '',
        size: '',
        num: 1,
        isClick: false
      }
    }
  },
  methods: {
    jion () {
      this.isShow = true
    //   alert('nihao')
    },
    blur () {
      this.isShow = false
      this.openCart = false
    },
    cart (myid) {
      this.openCart = true
    },
    add (state) {
      this.choose.num = this.$refs.ipt.value
      // this.$nextTick(() => {
      this.$store.dispatch('add', this.choose)
      console.log(this.choose)
      // })
    },
    jiongwc (myid) {
      this.$router.push({name: 'gwcart', params: {id: myid}})
    },
    clicksize (index) {
      this.choose.size = this.product.size[index]
    },
    clickcolor (index) {
      this.choose.color = this.product.color[index]
    }
  },
  created () {
    getHot().then(result => {
      console.log('84' + result)
      this.data = result[this.$route.params.id]
    })
    getCart().then(result => {
    //   console.log(result)
      // this.data = result[this.$route.params.id]
      console.log('dsafdsafdsf')
      this.product = result
      this.choose.product = result
    })
  }
}
</script>
<style scoped lang="less">
  .all{
      height:100%;
   .live{
       width:100%;
       height:100%;
       background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553255712978&di=5bc0ec3f4ee03cd1c96527feddfa5b8b&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh19%2Fh36%2Fimg_localize_df6cb51fc5b9df3282ecfc1ac3ab77bd_480x800.png');
       background-size:100% 100%;
     .top{
         box-sizing: border-box;
       width:100%;
       height:100px;
       padding:20px;
       display:flex;
       align-items: center;

      .userphoto{
          width:50px;
          height:50px;
          border-radius:50%;
          overflow: hidden;
          float: left;
          img{
             width:100%;
             height:100%;
          }
      }
      .msg{
          float: left;
          margin:0px 10px;
          span{
              display:block;
              font-size:24px;
              // font-weight:bolder;
               color:yellow;

          }
      }
      a{
          width:88px;
          height:50px;
          float: left;
          font-size: 28px;
          color:green;
          display:block;
          border:2px solid yellow;
          border-radius:30px;
          text-align:center;
          line-height:50px;
           color:yellow;
      }
     }
     .imgs{
         margin-left:20px;
         width:128px;
        //  background:chocolate;
        height:auto;
         border:2px solid rgba(0,0,0,0.5);
         border-radius: 10px;
         overflow: hidden;
         span{
             display:block;
             width:120px;
             height:120px;
             border:4px solid rgba(0,0,0,0.5);
            //  border-radius: 10px;
            img{
                width:100%;
                height:100%;
               display:block;
            }
         }
     }

   }
     .footer{
         width:100%;
         height:100px;
         position:fixed;
         bottom:0px;
         right:0px;
         z-index:111111;
         background:rgba(0,0,0,0.3);
          padding-bottom:50px;
          box-sizing: border-box;

        //  margin-left: 30px;
         span{
             margin-top:10px;
             width:80px;
             height:80px;
             display: inline-block;
             overflow: hidden;
             border-radius:50%;

         }
         .first{
           background:url("https://s10.mogucdn.com/mlcdn/c45406/180831_1h7cg5696h06b34l3i1k24e4e6664_71x68.png") no-repeat center center;
           background-size: 50% 50%;
           background-color: rgba(0,0,0,.3);
           margin-left: 20px;
         }
         .second{
           background:url("https://s10.mogucdn.com/mlcdn/c45406/180831_46dejfii12hki90hig4h3e8lahaia_60x63.png") no-repeat center center;
           background-color: rgba(0,0,0,.3);
          background-size: 50% 50%;
          margin-left: 10px;
         }
         .third{
           background:url("https://s10.mogucdn.com/mlcdn/c45406/180831_472l2ie6be79ef7ih07d5d224ikee_60x60.png") no-repeat center center;
           background-color: rgba(0,0,0,.3);
           background-size: 50% 50%;
           margin-right: 20px;
             float:right;
         }
     }
   .ipt{
         width:100%;
         height:100px;
         position:fixed;
         bottom:0px;
         z-index:111111111111111;
         background:gold;
         input{
             height:75px;
             width:73%;
             border-radius:10px;
             border:none;
             background:rgba(255, 87, 119, 0.8);
             font-size:32px;
             color:#fff;
             margin:10px 0px 10px 15px;
         }
         button{
             width:17%;
             height:70px;
             border-radius:10px;
             background:rgba(255, 87, 119, 0.8);
             color:#fff;
             margin-left: 30px;
         }
     }
   .cart{
     width:92%;
     height:auto;
     background:rgba(0,0,0,.8);
     position: fixed;
     bottom:100px;
     left:4%;
    //  overflow: hidden;
     border-radius: 15px;
      .gwc{
        width:80px;
        height:80px;
        position:absolute;
        top:-90px;
        right:20px;
        border-radius: 50%;
        overflow: hidden;
        span{
          width:80px;
          height:80px;
          display:block;
          text-align: center;
          line-height: 80px;
          font-size: 54px;
          color: #fff;
          background: rgba(1,1,1,0.5);
        }
      }
      .product{
         width:630px;
         height:180px;
         border-bottom:2px solid #333;
         margin:0px auto;
         margin-top:30px;
        //  .left{
        //  }
         .right{
           margin-left:20px;
         }
       .picimg{
         width:180px;
         height:156px;
         display:block;
         float:left;
         margin-right: 30px;
         img{
           width:100%;
           height:100%;
           display:block;
         }
       }
         h1{
           color:#fff;
           font-size:32px;
         }
         span{
           color:#fff;
           font-size:32px;
         }
        //  .name{

        //  }
         .price{
          display:block;
         }
      }
      .productMsg{
        height:auto;
        .number{
          width:100%;
          height:auto;
          padding:0px 10px;
          box-sizing: border-box;
          border:1px solid gray;
          border-radius:20px;
          h1{
             margin:10px 13px;
             margin-left:25px;
          }
           input{
             margin-left: 25px;
             width:90%;
             height:50px;
           }
        }
        width:100%;
         height:364px;
         color:#fff;
         .color{
           p{

             margin:10px 13px;
              margin-left:25px;
           }
            span{
              width:108px;
              height:52px;
              display:inline-block;
              text-align:center;
              line-height:52px;
              background:#413a3a;
              margin-left:25px;
              margin-top:10px;
              border-radius:10px;
            }
         }
         .size{
             height:auto;
             p{
               margin:10px 13px;
               margin-left:25px;
             }
              span{
                width:calc(100%/3);
                height:52px;
                display: inline-block;
                background:#413a3a;
                margin:10px 0px 10px 30px;
                text-align: center;
                line-height: 52px;
                border-radius: 10px;
              }
         }
      }
      .ffill{
        width:100%;
        height:250px;
      }
      .btn{
        width:100%;
        height:auto;
        display: flex;
        position:absolute;
        bottom: 10px;
        div{
          flex: 1;
        }
        button{
          width:250px;
          height:80px;
          background:#ff5777;
          border-radius: 15px;
          margin:10px 25px;
        }
      }
   }
  }
</style>
