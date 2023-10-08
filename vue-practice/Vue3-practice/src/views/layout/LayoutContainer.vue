<template>
  <el-container class="layout-container">
    <el-aside class="side">
      <el-scrollbar max-height="100%">
        <div class="sideBarLogo"></div>
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :default-active="$route.path"
          router
        >
          <el-menu-item index="/article/channel">
            <el-icon><Management /></el-icon>
            文章分类
          </el-menu-item>
          <el-menu-item index="/article/manage">
            <el-icon><Management /></el-icon>
            文章管理
          </el-menu-item>
          <el-sub-menu>
            <template #title>
              <el-icon><Avatar /></el-icon>
              <span>个人中心</span>
            </template>
            <el-menu-item index="/user/profile">基本资料</el-menu-item>
            <el-menu-item index="/user/avatar">更换头像</el-menu-item>
            <el-menu-item index="/user/password">重置密码</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="username">
          User:<strong>{{ userStore.user.username }}</strong>
        </div>
        <div class="avatar">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar :size="45" :src="userStore.user.user_pic || avatar" />
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>

            <!-- 折叠的下拉部分 -->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile" :icon="User"
                  >基本资料</el-dropdown-item
                >
                <el-dropdown-item command="avatar" :icon="Crop"
                  >更换头像</el-dropdown-item
                >
                <el-dropdown-item command="password" :icon="EditPen"
                  >重置密码</el-dropdown-item
                >
                <el-dropdown-item command="logout" :icon="SwitchButton"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-footer class="footer"> BY JY </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import {
  Management,
  Avatar,
  ArrowDown,
  User,
  Crop,
  EditPen,
  SwitchButton
} from '@element-plus/icons-vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores'

const router = useRouter()
const avatar = '/src/assets/image/beauty.png'
const userStore = useUserStore()
onMounted(() => {
  userStore.getUser()
})

const handleCommand = async (key) => {
  if (key === 'logout') {
    // 退出操作
    await ElMessageBox.confirm('你确认要进行退出吗？', '温馨提示', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
    userStore.removeToken()
    userStore.setUser({})
    router.push('/login')
  } else {
    // 跳转操作
    router.push(`/user/${key}`)
  }
}
</script>

<style scoped>
.layout-container {
  height: 100%;
}

.side {
  height: 100%;
  width: 15%;
  border-right: solid 1px silver;
}
.el-menu-vertical-demo {
  box-sizing: border-box;
  height: 100%;
}
.sideBarLogo {
  height: 100px;
  width: 100px;
  margin-left: 70px;
  background: url('../../assets/image/logo.png') no-repeat 100% center/ 100px;
}
.header {
  display: flex;
  min-height: 70px;
  border-bottom: 1px solid silver;
  align-items: center;
  justify-content: space-between;
}
.username {
  line-height: 100%;
  font-size: 16px;
  float: left;
  color: rgb(38, 104, 170);
}
.avatar {
  float: right;
}
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.main {
  height: 100%;
}

.footer {
  display: flex;
  justify-content: center;
  color: silver;
  font-size: 16px;
}
</style>
