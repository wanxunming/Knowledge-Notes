<template>
  <div class="auth-container">
    <div class="form-container">
      <form v-if="userInfo.isLogin" @submit.prevent="login">
        <h2>登录</h2>
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="userInfo.username" />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="userInfo.password" />
        </div>
        <button type="submit">登录</button>
        <p>还没有账号？<a href="#" @click.prevent="toggleAuth">点击注册</a></p>
      </form>
      <form v-else @submit.prevent="register">
        <h2>注册</h2>
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="userInfo.username" />
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="userInfo.email" />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="userInfo.password" />
        </div>
        <div class="form-group">
          <label for="confirm-password">确认密码</label>
          <input type="password" id="confirm-password" v-model="userInfo.confirmPassword" />
        </div>
        <button type="submit">注册</button>
        <p>已有账号？<a href="#" @click.prevent="toggleAuth">点击登录</a></p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
// import RequestService from '../serves/RequestService';
// import { apiService } from '../serves/ApiService';
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';

const { appContext } = getCurrentInstance();
const router = useRouter();
const userInfo = reactive({
    isLogin: true, // 是否是登录状态
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
});

// 切换登录/注册状态
const toggleAuth = ()=> {
    userInfo.isLogin = !userInfo.isLogin;
};
// 登录
const login = async () => {
    // TODO: 发送登录请求
    const data = await appContext.config.globalProperties.$request.post('/api/login',{"user_name":userInfo.username,"user_pwd":userInfo.password});
    if(data=="Login success"){
      router.push({path:'/tablan'})
    }else{

    }
};
// 注册
const register = ()=> {
    // TODO: 发送注册请求
}

</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  width: 400px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group input:focus {
  outline: none;
  border-color: #0078d7;
}

button[type='submit'] {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #0078d7;
  color: #fff;
}
</style>