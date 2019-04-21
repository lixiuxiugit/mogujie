<template>
    <div>
        <!-- 搜索栏 -->
        <hsearch></hsearch>
        <!-- banner轮播图 -->
        <carousels></carousels>
        <!-- 衣服导航 -->
        <clothesNav></clothesNav>
        <!-- 嵌套路由 -->
        <show></show>

    </div>
</template>

<script>
import show from '@/components/home/component/show'
import hsearch from '@/components/home/component/hsearch'
import carousels from '@/components/home/component/carousels'
import clothesNav from '@/components/home/component/clothesNav'
export default {
  components: {
    show,
    carousels,
    hsearch,
    clothesNav

  }
}
</script>
