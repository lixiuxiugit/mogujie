<template>
    <div class="search">
        <span>
            <router-link tag='a' to='/fenlei' class="icon icon-fenlei-unSelect"></router-link>
        </span>
        <div class="isearch">
             <span class="icon icon-fangdajing"></span>
             <router-link to='/clicksearch' tag='input'  type="text" value="" placeholder="无袖连衣裙"></router-link>
        </div>
        <span>
            <a class="news icon icon-liaotian"></a>
        </span>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped lang="less">
    .search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:16px 2px;
    }
    .search>span>.news{
        color: #ccc;
        font-size: 68px;
    }
    .search>.isearch{
        width: 530px;
        height: 60px;
        position: relative;
    }
    .search>.isearch>span{
        font-size: 44px;
        position: absolute;
        bottom: 6px;
        left: 16px;
    }
    .search>span,.search>img{
        display: block;
        width: 104px;
        height: 88px;
    }
    .search>span{
        display: flex;
        justify-content: center;
        align-items: center;
        display: inline-block;
        width: 100px;
        height: 60px;
        line-height: 60px;
    }
    .search>span>a{
        display: block;
        text-align: center;
        font-size: 50px;
    }
    .isearch>span{
        color: #b5bec5;
    }
    .isearch>input{
        width: 470px;
        height: 60px;
        background: #e8ecf0;
        padding-left: 72px;
        font-size: 14px;
        color: #999;
        border: none;
        background: #eee;
    }

</style>
