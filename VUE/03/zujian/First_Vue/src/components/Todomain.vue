
<!-- Todomain.vue -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="(item, index) in list" :key="item.id" class="todo">
        <div class="view">
          <span class="index">{{ index + 1 }}</span
          >.<label>{{ item.name }}</label>
          <button class="destroy" @click="handleDel(item.id)">删除</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    deleteTask(taskId) {
      // 触发删除任务的事件，将任务 ID 发送给父组件
      this.$emit("delete", taskId);
    },
    handleDel(id) {
      this.$emit('del',id)
    },
  },
};
</script>

<style scoped>
.main {
  width: 350px;
  height: 400px;
  background-color: aquamarine;
  color: #000;
  text-decoration: none;
}
button {
  float: right;
  margin: 0 10px 0 0;
}
</style>