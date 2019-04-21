<template>
  <div>
    <div class="cart">
      <div class="top">
        <span class="topleft" @click="fast">返回</span>
        购物车({{sum}})
        <span>消息</span>
      </div>
      <div class="fill">

      </div>
      <div v-for="(item,index) in cartList" :key="index">
        <div class="product">
          <input type="checkbox" v-model="item.isClick">
          <div class="picimg">
            <img :src="item.product.pic">
          </div>
          <div class="productMsg">
              <h1 class="name">{{item.product.name}}</h1>

              <div class="choose">
                <span>{{item.color}}</span>
                <span>{{item.size}}</span>
              </div>
              <span class="price">{{item.product.price}}</span>
              <span class="num">X{{item.num}}</span>
          </div>
        </div>

      </div>
      <div class="sum">
           <input type="checkbox" @change="add" v-model="check"><span class="allClick">全选({{len}})</span><span class="result">￥{{this.addSum}}</span><button class="goto" @click="sub">去结算</button>
         </div>
      <div class="footerfile">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cartList: [],
      addSum: 0,
      check: false,
      len: 0
    }
  },
  methods: {
    add () {
      this.cartList.forEach((item) => {
        item.isClick = this.check
        if (this.check) {
          this.len = this.cartList.length
          this.addSum = item.product.price * item.num
        } else {
          this.len = 0
          this.addSum = 0
        }
      })
    },
    sub () {
      alert('money！！')
    },
    fast () {
      this.$router.go(-1)
    }
  },
  created () {
    this.cartList = this.$store.state.cartlist
    console.log(this.$store.state.cartlist)
  },
  computed: {
    sum () {
      return this.$store.state.cartlist.length
    }
  }
}
</script>
<style scoped lang="less">
.cart{
  .fill{
    width:100%;
    height:88px;
  }
  .footerfile{
    width:100%;
    height:100px;
  }
  .sum{
    width:100%;
    height:100px;
    position: fixed;
    bottom:0px;
    z-index:111111;
    background:gold;
   display:flex;
   align-items: center;
   font-size: 30px;
   input{
     margin:0px 30px;
     width:40px;
     height:40px;
     border-radius:50%;
     overflow: hidden;
   }
   .allClick{
     width:130px;
     display:inline-block;
   }
   .result{
     margin: 0px 30px;

   }
   .goto{
     width:200px;
     height:68px;
     position:absolute;
     right:50px;
     top:50%;
     transform: translateY(-50%);
   }
  }
  .top{
   width:100%;
   height:88px;
   font-size:40px;
   line-height: 88px;
   text-align: center;
   position:fixed;
   top:0px;
   background:gold;
   display: flex;
   justify-content: space-between;
   align-items: center;
   span{
     font-size:30px;
     width: 90px;
     height:60px;
     display: inline-block;
     background:gold;
     line-height: 60px;
     margin:0px 15px;
     border-radius: 15px;
   }
  }
  width:100%;
  .product{
    width:100%;
    height:280px;
    padding:25px;
    box-sizing:border-box;
    input{
      float: left;
      position:relative;
      top:50%;
      transform: translateY(-50%);
    }
    .picimg{
      width:192px;
      height:192px;
      float: left;
      padding:20px;
      img{
        width:100%;
        height:100%;
      }
    }
    .productMsg{
      padding:20px 0px;
      .name{
        font-size: 24px;
        font-weight: bolder;
        height:72px;

      }
      .choose{
        font-size: 24px;
        color:#999;
        line-height: 32px;
        height:72px;
      }
      .price{
        font-size: 36px;
        position: relative;
      }
    }
  }
}
</style>
