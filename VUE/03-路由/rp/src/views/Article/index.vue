<template>
  <el-main>
    <router-view :key="$route.fullPath"></router-view>
  </el-main>
</template>

<script lang="ts">
export default {
    name:'AriticlePage'
}
</script>

<style>

</style>