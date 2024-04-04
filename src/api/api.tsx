import axios from "axios";

// 创建 Axios 实例
export const api = axios.create({
  baseURL: "http://localhost:4000/api", // 设置基本的 URL
  timeout: 10000, // 设置超时时间
  headers: {
    "Content-Type": "application/json", // 设置默认的 Content-Type
  },
});

// 请求拦截器，用于添加公共的请求头或其他处理
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const jwt = localStorage.getItem("jwt"); // 假设你的 JWT 存储在本地存储中
    if (jwt) {
      config.headers.Authorization = jwt; // 添加 JWT 到请求头
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
