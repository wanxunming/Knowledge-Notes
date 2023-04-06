import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // ...其他配置项
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  server:{
    open: true,
    // host:'localhost',
    host:'0.0.0.0',
    port: 5173,
    // https: false,
    cors: true,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
        '/apiTest': {
            target: 'http://localhost:8080',//这里后台的地址模拟的;应该填写你们真实的后台接口
            changeOrigin: true,//允许跨域
            rewrite: (path) => path.replace(/^\/apiTest/, ''),
        }
    }
  },
  parallel: false,
  base:'./',
  build:{
    outDir:'dist',
  },
  resolve: {
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
