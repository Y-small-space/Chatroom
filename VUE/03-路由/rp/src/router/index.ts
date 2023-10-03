import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout/index.vue'
import ArticleDetail from '@/views/ArticleDetail/index.vue';
import Article from '@/views/Article/index.vue';
import Like from "@/views/Like/index.vue";
import User from "@/views/User/index.vue"
import Collect from "@/views/Collect/index.vue"

const routes = [
  {
    path: '/',
    component: Layout,
    // 通过children配置项，可以配置嵌套子路由
    // 1. 在chilren配置项中，配规则
    // 2. 准备二级路由出口
    children: [
      {
        path: '/article',
        name: 'article',
        component: Article,
        meta:{
          name:'article',
          routerViewKey:'Layoutpage'
        }
      },
      {
        path: '/collect',
        component: Collect,
        meta:{
          name:'article',
          routerViewKey:'Layoutpage'
        }
      },
      {
        path: '/user',
        component: User,
        meta:{
          name:'article',
          routerViewKey:'Layoutpage'
        }
      },
      {
        path: '/like',
        component: Like,
        meta:{
          name:'article',
          routerViewKey:'Layoutpage'
        }
      }
    ]
  },
  {
    path: '/detail',
    component: ArticleDetail
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;