<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs'
</script>

<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
