import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routers/router'
// 1. 引入你需要的组件
// 2. 引入组件样式
import 'vant/lib/index.css';
// 定义的公共请求服务
// import RequestService from './services/RequestService';

const app = createApp(App);
console.log(app.config.globalProperties);
// app.config.globalProperties = false;
// 创建全局请求服务实例
// const requestService = new RequestService();
// // 将请求服务实例挂载到全局
// app.config.globalProperties.$request = requestService;
// 3. 注册你需要的组件
app.use(router).mount('#app');





