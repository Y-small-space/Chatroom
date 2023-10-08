import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useCountStore = defineStore('big-count', () => {
  const count = ref(100)
  const add = (n) => {
    count.value += n
  }

  return {
    count,
    add
  }
})
