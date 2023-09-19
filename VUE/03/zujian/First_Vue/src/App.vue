<template>
  <!-- 主体区域 -->
  <section>
      <TodoHeader @add="handleAdd"></TodoHeader>
      <Todomain :list="list" @del="handleDel"></Todomain>
      <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import Todomain from "./components/Todomain.vue";
import TodoFooter from "./components/TodoFooter.vue";

// 渲染功能：
// 1. 提供数据 -> 提供在公共的父组件 App.vue
// 2. 通过父传子，将数据传递给 TodoMain
// 3. 利用 v-for 渲染
export default {
  data() {
    return {
      list: [
        { id: 1, name: "打篮球" },
        { id: 2, name: "看电影" },
        { id: 3, name: "逛街" },
      ],
    };
  },
  methods: {
    handleAdd(newTask) {
      this.list.unshift({
        id: +new Date(),
        name: newTask,
      });
    },
    handleDel(id){
      this.list = this.list.filter(item=>item.id!==id)
    }
  },
  components: {
    TodoHeader,
    Todomain,
    TodoFooter,
  },
};
</script>

<style>
#app {
  width: 400px;
  height: 600px;
  background-color: aliceblue;
}
</style>