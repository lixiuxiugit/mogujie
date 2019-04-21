<template>
<div>
    <div class="nav" ref="nav">
      <mt-button size="small" @click.native.prevent="tab('tab-container1')" ref="tab-container1" >热门
        <div></div>
      </mt-button>
      <mt-button size="small" @click.native.prevent="tab('tab-container2')" ref="tab-container2">穿搭
        <div></div>
      </mt-button>
      <mt-button size="small" @click.native.prevent="tab('tab-container3')" ref="tab-container3">美妆
        <div></div>
      </mt-button>
      </div>

    <div class="page-tab-container">
      <!-- <router-view></router-view> -->
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">

            <hot></hot>

            <!-- 1111111 -->
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
            <wear></wear>
            <!-- 2222222 -->
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <makup></makup>
            <!-- 3333333 -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import makup from './component/component/makup'
import hot from './component/component/hot'
import wear from './component/component/wear'
import topnav from './component/topnav'

import { TabContainer, TabContainerItem } from 'mint-ui'
import Vue from 'vue'
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
export default {
  name: 'page-tab-container',
  data () {
    return {
      active: 'tab-container1',
      index: 0,
      btns: [],
      style: ''
    }
  },
  mounted () {
    this.$refs[this.active].$el.className = this.$refs[this.active].$el.className + ' active'
  },
  watch: {
    active: function (newValue, oldValue) {
      console.log(oldValue)
      console.log(newValue)
      if (!this.style) {
        this.style = this.$refs[newValue].$el.className
      }
      this.$refs[oldValue].$el.className = this.style + 'actived'

      this.$refs[newValue].$el.className = this.$refs[newValue].$el.className + ' active'
      console.log('..........................')
      console.log(this.style)
      console.log(this.$refs[newValue].$el.className)
    }
  },
  methods: {
    tab (eid) {
      this.active = eid
      if (!this.style) {
        this.style = this.$refs[eid].$el.className
      }
      console.log(this.style)
      this.btns = Array.prototype.slice.call(this.$refs.nav.children)
      this.btns.forEach(item => {
        item.className = this.style + 'actived'
        console.log(item)
      })
      // js添加属性时会把原有的覆盖掉,因此添加属性时,若有属性需要把原有属性加上;
      this.$refs[this.active].$el.className = this.$refs[this.active].$el.className + ' active'
    }
  },
  components: {
    hot,
    wear,
    makup,
    topnav
  }
}

</script>
<style scoped lang="less">
 .item {
    display: inline-block;
  }
  .nav {
    width:100%;
    position:fixed;
    display: flex;
    // flex:1;
    height:90px;
    z-index:11111;

   button{
    //  transition: 2s;
     width:calc(100%/3);
     height:90px;
    font-size: 30px;
     line-height: 90px;
     position: relative;
      box-sizing: border-box;
      //  border-bottom:3px solid #fff ;
    //  border:none;
     &.active{
        border-bottom:3px solid red ;
            color: #ff5777;
     }
     &.actived{
        border-bottom:3px solid #fff ;
     }
       div{
       width:80%;
       display:block;
      //  border-bottom:4px solid transparent;
       position:absolute;
       left :  0 ;
       right : 0 ;
       top :  0;
       bottom:4px;
       margin:0px auto;
       display: none;
    }
   }
  }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }

</style>
