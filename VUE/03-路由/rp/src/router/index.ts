import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Article from '@/views/Article.vue';

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/detail',
    component: ArticleDetail
  },
  {
    path: '/article',
    component: Article
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;