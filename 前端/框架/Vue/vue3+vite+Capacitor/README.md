# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 项目常用指令：

运行：npm run dev

打包：npm run build

### 处理跨移动端指令：

参考：https://capacitorjs.com/docs/cli/commands/sync

#### 常见指令：（android  ios）

添加平台：npx cap add <platform>

构建应用包：npx cap build [options] <platform>

运行应用包：npx cap run [options] <platform>

同步代码到应用包：npx cap sync [options] [<platform>]    （需要先执行npm run build）