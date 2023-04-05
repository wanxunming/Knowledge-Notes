import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()
  ],
  // ...其他配置项
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  server:{
    host:'0.0.0.0',
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
  }
})
