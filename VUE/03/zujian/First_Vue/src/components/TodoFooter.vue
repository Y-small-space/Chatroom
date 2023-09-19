<template>
  <footer class="footer">
    <span class="todo-count">剩余任务数: {{ remainingCount }}</span>
    <!-- 可以添加一些过滤器按钮 -->
  </footer>
</template>ƒ
  
<script>
export default {
  props: {
    list: Array,
  },
  computed: {
    remainingCount() {
      return this.list.length;
    },
  },
};
</script>

  
<style>
.footer{
    height: 100px;
    background-color: silver;
}
</style>