<template>
  <header class="header">
    <h1>Todo List</h1>
    <input
      class="new-todo"
      placeholder="添加新任务"
      v-model="newTask"
      @keyup.enter="addTask"
    />
  </header>
</template>
  
  <script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;
      this.$emit("add", this.newTask.trim());
      this.newTask = "";
    },
  },
};
</script>

<style>
.header{
    height: 100px;
    background-color: slategray;
    text-align: center;
}
input{
    height: 40px;
}
</style>