/// <reference types="vite/client" />
// 消除代码中使用的 import.meta.env 报红
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly ENV: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  