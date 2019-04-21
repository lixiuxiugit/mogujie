<template>
  <div class="classify">
    <classifyLeft></classifyLeft>
    <classifyRight></classifyRight>
  </div>
</template>
<script>
import classifyLeft from './component/classifyLeft'
import classifyRight from './component/classifyRight'
import TabContainer from './component/TabContainer'
export default {
  mounted () {},
  components: {
    classifyLeft,
    classifyRight,
    TabContainer
  }
}
</script>
<style scoped lang='less'>
.classify {
  width: 100%;
  height: calc(100% - 100px);
  display: -webkit-box;
  // display: flex;
  overflow: hidden; //滚动加完之后,给滚动区域的父级添加 overflow:hidden
}
</style>
