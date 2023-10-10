<script setup>
import { ref } from 'vue'
import { artGetChannelsService } from '../../../api/article'

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data
}
getChannelList()
</script>
<template>
  <el-select
    :modelValue="modelValue"
    @updated:modelValue="emit('update:modelValue', $event)"
    :style="{ width }"
  >
    <el-option
      v-for="channel in channelList"
      :label="channel.cate_name"
      :value="channel.id"
      :key="channel.id"
    ></el-option>
  </el-select>
</template>
