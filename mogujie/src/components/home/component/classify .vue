<template>
 <div>

    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="(n,index) in 10" :key="index" title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="(n,index) in 10" :key="index" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="(n,index) in 10" :key="index" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>

import { TabContainer, TabContainerItem } from 'mint-ui'
import Vue from 'vue'
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
export default {
  name: 'page-tab-container',
  data () {
    return {
      active: 'tab-container1'
    }
  }
}
</script>
<style lang="less" scoped>
  .item {
    display: inline-block;
  }
  .nav {
    padding: 10px;
  }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }

  .mint-tab-container-item{
      width: 80%;
      position: relative;
      top: 0;
      right: 0;
  }
</style>
