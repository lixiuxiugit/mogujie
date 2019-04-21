<template>
    <div class="box">
        <div class="logo">
            <router-link tag="p" to="sologo">热门精选 | 解锁时髦精冬日穿搭LOOK→</router-link>
            <em></em>
            <router-link tag="img" to="sologo" src='https://s10.mogucdn.com/mlcdn/c45406/181112_04h64bddba7932720jh8j025g9kk5_750x200.jpg'></router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
    .box{
        width:100%;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        .logo{
            width:100%;
            height:200px;
            position:relative;
            em{
                position: absolute;     bottom:0px; left:40px;
                border-top:14px solid transparent;
                border-right:14px solid transparent;
                border-left:14px solid transparent;
                border-bottom:14px solid #fff;
            }
            p{
                position:absolute;  bottom:70px;  left:40px;
                color:#fff;
                font-size:32px;
            }
            img{
                width:100%;
                height:100%;
                display:block;
            }
        }
    }

</style>
