<script setup>
import { ref } from 'vue'
const visibleDrawer = ref(false)
import ChannelSelect from './ChannelSelect.vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { artAddService } from '../../../api/article'
import { ElMessage } from 'element-plus'

// 默认数据
const defaultForm = {
  title: '', // 标题
  cate_id: '', // 分类Id
  cover_img: '', // 封面图片 file 对象
  content: '', // string 内容
  state: '' // 状态
}

// 准备数据
const formModel = ref({ ...defaultForm })

const imgUrl = ref('')

const open = (row) => {
  visibleDrawer.value = true
  if (row.id) {
    console.log('编辑回显')
  } else {
    formModel.value = {
      ...defaultForm
    }
    console.log('添加')
  }
}

const onSelectFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
}

const onPublish = async (data) => {
  formModel.value.state = data
  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  if (formModel.value.id) {
    console.log('编辑操作')
  } else {
    await artAddService(fd)
    ElMessage.success('添加成功')
    visibleDrawer.value = false
  }
}
defineExpose({
  open
})
</script>
<template>
  <!-- 抽屉 -->
  <el-drawer v-model="visibleDrawer" title="大标题" direction="rtl" size="50%">
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <channel-select
          v-model="formModel.cate_id"
          width="100%"
        ></channel-select>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="onSelectFile"
        >
          <img
            v-if="imgUrl"
            :src="imgUrl"
            class="avatar"
            style="object-fit: cover; width: 178px; height: 178px"
          />
          <el-icon
            v-else
            class="avatar-uploader-icon"
            style="width: 178px; height: 178px; border: 1px dotted black"
            ><Plus
          /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <quill-editor
            v-model:content="formModel.content"
            content-type="html"
            theme="snow"
          ></quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="onPublish('已发布')" type="primary">发布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>
<style lang="scss">
.editor {
  width: 100%;
}
</style>
