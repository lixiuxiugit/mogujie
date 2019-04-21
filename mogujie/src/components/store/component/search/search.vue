<template>
    <div class="search">
        <div class="headerserch">
            <div class="left_menu"><img src="https://s10.mogucdn.com/mlcdn/c45406/180926_3lac93lkglfd5gd4fiahedg5aad79_40x37.png" alt=""></div>
            <div class="ipt">
                <span class="sousuo"><img src="../photo/soushuo.png" alt=""></span>
                <router-link tag="input" placeholder="春季" to="clicksearch"></router-link>
            </div>
            <router-link to="clicksearch" class="right_bar"><img src="../photo/xin.png" alt=""></router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">

.search {
  width: 100%;
  height: 92px;
  display: flex;
}
.search .headerserch {
  width: 100%;
  display: flex;
  align-items: center;
}
.headerserch .left_menu {
  width: 100px;
  height: 60px;
}
.headerserch .left_menu img {
  width: 40px;
  height:40px;
  padding: 10px 0px 0px 30px;
}
.headerserch .ipt{
  height:60px;
  background:rgb(241, 236, 236);
  flex: 1;
  display: flex;

}
.ipt .sousuo{
  width:60px;
  height:60px;
  display: flex;
}
.ipt .sousuo img{
  width:60%;
  height:60%;
  align-self: center;
  padding-left:8px;
}
.ipt input{
  flex: 1;
  background:rgb(241, 236, 236);
  border: none;
}
.headerserch .right_bar{
  width:100px;
  height:60px;
  padding: 0px 0px 16px 7px;
}
.headerserch .right_bar img{
  width:80px;
  height:80px;
}
</style>
