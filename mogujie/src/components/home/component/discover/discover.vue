<template>
    <div class="discover_main">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/180522_7hi685l4939dk3h7cfbcgi178ga5e_514x320.png" alt="">
        <p>你还没有关注任何人</p>
        <router-link tag="a" to="/home/attention">
            去精选看看
        </router-link>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped lang="less">
    .discover_main{
        height: 1200px;
        padding-top: 140px;
        background:#f4f4f4;
    }
    .discover_main>a{
        display: block;
        width: 220px;
        height: 80px;
        line-height: 80px;
        color: #fff;
        margin: 0 auto;
        text-align: center;
        background: #FF5777;

    }
    .discover_main>img{
        display: block;
        margin: 0 auto;
        width: 500px;
    }
    .discover_main>p{
        width: 100%;
        height: 66px;
        line-height: 66px;
        padding-bottom: 20px;
        text-align: center;
    }
</style>
