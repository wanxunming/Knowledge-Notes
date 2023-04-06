import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routers/router'
// 1. 引入你需要的组件
// 2. 引入组件样式
import 'vant/lib/index.css';
// 定义的公共请求服务
import {apiService} from './serves/ApiService';

const app = createApp(App);
// // 将请求服务实例挂载到全局
app.config.globalProperties.$request = apiService;
console.log(app.config.globalProperties);
// 3. 注册你需要的组件
app.use(router).mount('#app');





