<script setup>
import { User, Lock, Right, Back } from '@element-plus/icons-vue'
import { watch } from 'vue'
import { ref } from 'vue'
import { userRegisterService, userLoginService } from '../../api/user'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../../stores'
import { useRouter } from 'vue-router'

const isRegister = ref(false)
const form = ref()
// 整个的需要提交的对象
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      min: 5,
      max: 10,
      message: '用户名必须5-10位字符',
      trigger: 'blur'
    }
  ]
}

const toggleRegistration = () => {
  isRegister.value = !isRegister.value
}

const register = async () => {
  console.log(formModel.value)
  await form.value.validate()
  await userRegisterService(formModel.value)
  ElMessage.success('注册成功')
  isRegister.value = false
}

const router = useRouter()
const userStore = useUserStore()
const login = async () => {
  console.log(formModel.value)
  await form.value.validate()
  const res = await userLoginService(formModel.value)
  console.log(res.token)
  userStore.setToken(res.token)
  ElMessage.success('登录成功')
  console.log('开始登录')
  router.push('/')
}

watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
})
</script>

<template>
  <!-- 
    1. 结构相关
        el-row 表示一行，一行分成24份
        el-col 表示列
        (1) :span="12" 代表在一行中，占12份（50%）
        (2) :span="12" 代表在一行中，占6份
        (3) :offset="3" 代表在一行中，左侧margin份数

        el-form 整个表单组件
        el-form-item 表单的一行（一个表单域）
        el-input 表单元素（输入框）
    
    2. 校验相关
        (1) el-form => :model="ruleForm"      绑定的整个form的数据对象 {xxx, xxx, xxx}
        (2) el-form => :rules="rules"         绑定的整个rules的规则对象 {xxx, xxx, xxx}
        (3) 表单元素 => v-model="ruleForm.xxx" 给表单元素，绑定form的子属性
        (4) el-form => prop配置生效的是哪个校验规则（和rule中的字段要对应）
     -->
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <!-- 注册相关表单 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model="formModel.repassword"
            :prefix-icon="Lock"
            type="password"
            placeholder="请确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            class="button"
            @click="register"
            >注册</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-link type="info" :underline="false" @click="toggleRegistration"
            ><el-icon><Back /></el-icon>返回</el-link
          >
        </el-form-item>
      </el-form>

      <!-- 登录相关表单 -->
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-else
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            v-model="formModel.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <el-checkbox class="flex-left">记住密码</el-checkbox>
          <el-link type="primary" :underline="false" class="flex-right"
            >忘记密码？</el-link
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" class="button" @click="login"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-link type="info" :underline="false" @click="toggleRegistration"
            >注册<el-icon><Right /></el-icon
          ></el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style>
.login-page {
  height: 100vh;
  background-color: #fff;
}
.bg {
  background: url('../../assets/image/art.png') no-repeat 60% center;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.flex-left {
  flex: 1;
}
.flex-right {
  text-align: right;
}
.button {
  width: 100%;
}
</style>
