<template>
    <div  class="show" >
            <ul class="show1" >
                <router-link tag="li" to="/home/attention" class='sh'>
                    <span>发现</span>
                </router-link>
                <router-link tag="li" to="/home/discover">
                    <span>关注</span>
                </router-link>
                <router-link tag="li" to="/home/fashion">
                    <span>流行</span>
                </router-link>
            </ul>

        <router-view></router-view>
    </div>
</template>
<script>
import attention from './attention/attention'
import discover from './discover/discover'
import fashion from './fashion/fashion'
export default {
  components: {
    attention,
    discover,
    fashion
  }
}
</script>
<style scoped lang="less">
    .show{
        width: 100%;
        height: 100px;
        position: sticky;
        top:0px;
    }
    // .show .show1{
    //     width: 100%;
    //     height: auto;

    // }
    .show>ul{
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
    }
    .show>ul>li{
        height: 100px;
        text-align: center;
        align-items: center;
        line-height: 100px;
        flex-grow: 1;
    }
    .show>ul>li>span{
        width: 32px;
        height: 17px;
        line-height: 17px;
        color: #000;
        font-size: 34px;
        font-weight: 700;
    }

    &.router-link-active span{
        padding-bottom: 6px;
        border-bottom: 4px solid #FF5777;
    }
</style>
