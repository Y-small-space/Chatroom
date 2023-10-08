<script setup>
// 在 Vue3 CompositionsApi 中
// 1. 获取路由对象 router useRouter
//    const router = useRouter()
// 2. 获取路由参数 route useRoute
//    cost route = useRoute
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
