<template>
<div class="mynav">
    <ul class="navbar">
        <router-link to='/home' tag="li">首页</router-link>
        <router-link to='/store' tag="li">商城</router-link>
        <router-link to='/live' tag="li">直播</router-link>
        <router-link to='/mine' tag="li">我</router-link>
    </ul>
</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.mynav{
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 999;
    background: #fff;
    border-top:1px solid #ccc;
}
.mynav .navbar{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.mynav .navbar li{
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 34px;
}
.router-link-active{
    color: rgb(255, 63, 120)
}
</style>
