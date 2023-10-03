<template>
  <el-footer>
    <nav class="tabber">
      <router-link to="/article">
        <el-link type="primary">article</el-link>
      </router-link>
      <router-link to="/collect">
        <el-link type="primary">collect</el-link>
      </router-link>
      <router-link to="/like">
        <el-link type="primary">like</el-link>
      </router-link>
      <router-link to="/user">
        <el-link type="primary">user</el-link>
      </router-link>
    </nav>
  </el-footer>
 
</template>

<script lang="ts">
export default {
  name: "LayoutPage",
  computed:{
  }
};
</script>

<style>
.el-link {
  margin-right: 8px;
}
</style>