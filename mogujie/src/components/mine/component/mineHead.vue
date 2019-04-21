<template>
  <div class="mineHead">
    <div class="profile-box">
      <div class="user-avatar-wrap">
        <img src="http://s11.mogucdn.com/new1/v1/bdefaultavatar/05.jpg_160x160.jpg" alt>
      </div>
      <div class="user-info">
        <p class="user-name">龙叔叔</p>
        <a href="#" class="link">个人中心</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
.mineHead {
  width: 100%;
  height: 390px;
  background: #fff
    url(https://s10.mogucdn.com/mlcdn/c45406/180927_1ai9125115h4hh7k5dc3cej6j782a_750x342.png)
    0 -100px no-repeat;
  background-size: 100% 100%;
  .profile-box {
    width: 680px;
    height: 240px;
    background: #fff;
    position: relative;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    box-shadow: 0 0.02rem 0.32rem rgba(0, 0, 0, 0.12);
    .user-avatar-wrap {
      position: absolute;
      width: 130px;
      height: 130px;
      left: 50%;
      transform: translateX(-50%);
      top: -60px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
    .user-info {
      width: 300px;
      margin: 0px auto;
      padding-top: 100px;
      text-align:center;
      .user-name {
        color:rgb(94, 94, 94);
        height: 42px;
        line-height: 42px;
        font-weight: 700;
        font-size: 30px;
      }
      .link {
        font-size: 24px;
        color: #5e5e5e;
        width: 130px;
        display: block;
        height: 42px;
        line-height: 42px;
        background: url(https://s10.mogucdn.com/mlcdn/c45406/180928_4d93gggd1hiidlf2l8bd2fgl7fhbd_21x26.png) 15px 8px no-repeat;
        background-size: 15% 60%;
        border: 1px solid #d2d2d2;;
        border-radius: 20px;
        text-align: right;
        margin: 10px auto;
        line-height:42px;
        padding:0px 15px;
      }
    }
  }
}
</style>
