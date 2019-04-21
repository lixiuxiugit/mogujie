<template>
    <div>
        <!-- 搜索框 -->
        <hsearch></hsearch>
        <!-- 精选商品 -->
        <choiceness></choiceness>
        <!-- 商品展示 -->
        <category></category>
        <!-- banner图 -->
        <showlogo></showlogo>
        <!-- 轮播图 -->
        <showslider></showslider>
        <!-- 流行元素 -->
        <fashions></fashions>
        <!-- 猜你喜欢 -->
        <guessyoulike></guessyoulike>
    </div>
</template>
<script>
import choiceness from './component/choiceness'
import category from './component/category'
import fashions from './component/fashions'
import guessyoulike from './component/guessyoulike'
import hsearch from '@/components/home/component/hsearch'
import showlogo from './component/showlogo/showlogo.vue'
import showslider from './component/showlogo/showslider.vue'
import hot from './component/showlogo/hot.vue'

export default {
  data () {
    return {

    }
  },
  created () {

  },
  components: {
    choiceness,
    category,
    fashions,
    guessyoulike,
    hsearch,
    showlogo,
    showslider,
    hot
  }
}

</script>
<style scoped>

</style>
