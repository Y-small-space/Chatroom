<script setup>
import { ref } from 'vue'

const articleList = ref([
  {
    id: 5961,
    title: '新的文章',
    pub_date: '2022-07-10 14:53:52.604',
    state: '已发布',
    cate_name: '体育'
  },
  {
    id: 5960,
    title: '新的文章',
    pub_date: '2022-07-10 14:53:51.604',
    state: '已发布',
    cate_name: '体育'
  }
])
</script>

<template>
  <page-container title="文章管理">
    <template #extra>
      <el-button>添加文章</el-button>
    </template>
  </page-container>
</template>

<style lang="scss" scoped></style>
