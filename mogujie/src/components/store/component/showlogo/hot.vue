<template>
  <div class="hot">
      <div class="headedata">
        <div class="common">
          <div class="nameheader">
            <img class="aimg" src="https://s10.mogucdn.com/p1/170221/idid_ifrdeodcgmydenztmuzdambqmeyde_32x32.png" alt="">
            <div class="headephoto">
              <img src="https://s10.mogucdn.com/mlcdn/c45406/181112_4gb63df03dg8abjllh0cj9ifjkei1_800x1072.jpg_80x80.jpg" alt="">
            </div>
            <div class="ziliao">
              <span class="name">青芒__</span>
              <span class="jieshao">蘑菇街资深编辑</span>
            </div>
          </div>
            <p class="content">想要在秋冬依然穿出纸片人的感觉，必须要学会用oversize上装+修身打底裤的💯搭配公式了！搭配宽松外套，松紧搭配巨显腿细，你就是腿精本人！搭配小白鞋或者各种长靴👢也都超方便的哟</p>
            <div class="right_botm"></div>
        </div>
      </div>

      <ul class="list" >
        <li v-for="(list, index) in hotdata" :key="index">
          <img :src="list.img" alt="">
          <div class="msg">
            <h3 class="title">{{list.title}}</h3>
            <p class="desc">{{list.desc}}</p>
            <div class="bottom_data">
              <div class="number">
                <span class="oprice">{{list.oprice}}</span>
                <span class="price">{{list.price}}</span>
              </div>
                <div class="btn">{{list.btn}}</div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 推荐 -->
      <tuijian></tuijian>
  </div>
</template>
<script>
import { remen } from '@/api/index'
import tuijian from './tuijian.vue' // 导入组件
export default {
  data () {
    return {
      hotdata: []
    }
  },
  created () {
    // var rid = this.$route.params.rid
    remen().then(data => {
      this.hotdata = data[0]
      // this.hotdata = data.slice(rid, rid + 1)
      console.log(this.hotdata)
    })
  },
  components: { // 注册组件
    tuijian
  }
}
</script>
<style scoped lang="less">
  .hot {
    width:100%;
    height:100%;
    position: sticky;
    z-index: 99999;
    background:#fff;
    .headedata{
      width:100%;
      height:407px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background-size:50px;
      .common {
        width:95%;
        height:364px;
        background:#f7f7f7 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEUAAADV///H7P/F6///0dH7x9L7xdHV1f/Ly//Ky/+66ee46ObF6/76xdHJyv+45+X///8AEgJKAAAADHRSTlMABojmC8f8BojmiOYtq5UoAAAAAWJLR0QQlbINLAAAAAd0SU1FB+ECFRMxOYvzBNkAAACOSURBVEjH7ZPJCoAwDES7ry7//7d2vARKEY31YPWdBuRBJjVC9EIqrZW8pKipoC4pGop+WmEMxqj/fqi0sc5Zg+RDjMHvX1POqV4JrdbOBYsUlkJASmshVQo9oIPikCKUiJSh5PsKYzBG/TGh0qeh1Z6GHvBJhTEYo/5IMH705jkd0zza7gpjsA/d+c8YbBirCVHubjEoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAyLTIxVDE5OjQ5OjU3KzA4OjAwD+XN+wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMi0yMVQxOTo0OTo1NyswODowMH64dUcAAAAASUVORK5CYII=") no-repeat 15px 115px;
        background-size:50px;
        border-radius:40px;
        position: relative;
        .right_botm{
          width:50px;
          height:50px;
          background:#f7f7f7 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEUAAADV///H7P/F6///0dH7x9L7xdHV1f/Ly//Ky/+66ee46ObF6/76xdHJyv+45+X///8AEgJKAAAADHRSTlMABojmC8f8BojmiOYtq5UoAAAAAWJLR0QQlbINLAAAAAd0SU1FB+ECFRMxOYvzBNkAAACOSURBVEjH7ZPJCoAwDES7ry7//7d2vARKEY31YPWdBuRBJjVC9EIqrZW8pKipoC4pGop+WmEMxqj/fqi0sc5Zg+RDjMHvX1POqV4JrdbOBYsUlkJASmshVQo9oIPikCKUiJSh5PsKYzBG/TGh0qeh1Z6GHvBJhTEYo/5IMH705jkd0zza7gpjsA/d+c8YbBirCVHubjEoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAyLTIxVDE5OjQ5OjU3KzA4OjAwD+XN+wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMi0yMVQxOTo0OTo1NyswODowMH64dUcAAAAASUVORK5CYII=") no-repeat;
          background-size:50px;
          transform: rotate(180deg);
          position:absolute;
          right:10px;
          bottom:10px;
        }
        p{
          width:85%;
          height:200px;
          font-size:30px;
          margin:50px auto;
        }
        .nameheader{
          width:95%;
          display: flex;
          position:relative;
          top:25px;
          left:20px;
          background:url("data:image/png;base64,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") no-repeat right center;
          background-size: 85px;
          .ziliao {
            display: flex;
            flex-direction: column;
            span{
              margin:0px 5px 5px 10px;
              font-size:28px;
            }
            .jieshao {
              color:#BE9A41;
              font-size:22px;
            }
          }
          .aimg{
            position:absolute;
            bottom:60px;
            width:32px;
            height:32px;
          }
          .headephoto{
            width:80px;
            height:80px;
            background:cadetblue;
            border-radius:50%;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }

    .list{
      width:97%;
      height:100%;
      margin: 0px 20px 0px 20px;
      background:#fff;
      li {
        width:100%;
        height:100%;
        display: flex;
        // z-index: 999;
        background: #fff;
        margin-top:30px;
        img{
          width:330px;
          height:440px;
        }
        .msg{
          width:100%;
          height:100%;
          padding-left:20px;
            h3{
            font-size:36px;
            font-weight: bold;
            display: inline-block;
            width:90%;
            height:100px;
            line-height: 100px;
            color:#525252;
            border-bottom:1px solid #e5e5e5;
            // float: right;
          }
          p{
            color:#525252;
            width:100%;
            height:102px;
            margin-top:10px;
            // float: right;
          }
          .bottom_data{
            width:100%;
            margin-top:90px;
              .number{
            display: flex;

            .oprice{
            display: block;
            width:90px;
            height:42px;
            border:1px solid #ff8181;
            color:#ff8181;
            text-align: center;
            line-height:42px;
          }
          .price{
            display: block;
            font-size: 36px;
            font-weight: bold;
            margin-left: 10px;
          }
          }
          }

          .btn{
            width:200px;
            height:60px;
            background:#ff8181;
            color:#fffefe;
            text-align: center;
            line-height:60px;
            margin-top:7px;
          }
        }
      }
    }
  }

</style>
