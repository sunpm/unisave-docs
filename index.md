---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "unisave"
  text: "拥抱 web 开发，拯救 uniapp。"
  tagline: "基于Uniapp、Vue 3、pinia(且持久化保存)、Typescript、UnoCSS等主流技术开发的开箱即用模版，适配所有(app、mp、web)平台！！！"
  image:
    src: /images/logo.png
    alt: unisave - 拥抱 web 开发，拯救 uniapp。
  actions:
    - theme: brand
      text: 快速开始
      link: /getting-started/installation
    - theme: alt
      text: 查看演示
      link: https://vitesse-uniapp-vue3.netlify.app/

features:
  - title: 就是快
    details: 现代开发工具 Vite, pnpm 提供强力支持
    icon: ⚡️
    link: "http://vite.dev"
    linkText: "查看 Vite"
  - title: 基于文件的路由
    details: 无需维护 pages.json，一切都是自动化
    icon: 🗂
    link: "https://github.com/uni-helper/vite-plugin-uni-pages"
    linkText: "查看 uni-pages 插件"
  - title: 组件自动化加载
    details: 只管写，组件全自动导入
    icon: 📦
    link: "https://github.com/unplugin/unplugin-vue-components"
    linkText: "查看 unplugin-vue-components 插件"
  - title: 布局系统
    details: 类 Nuxt Layout 为你所用
    icon: 📑
    link: "https://github.com/uni-helper/vite-plugin-uni-layouts"
    linkText: "查看 uni-layouts 插件"
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g stroke-width=".13"><path fill="#858585" d="M17.007 23.491a6.52 6.52 0 1 1 13.04 0a6.52 6.52 0 0 1-13.04 0"/><path fill="#ccc" d="M17.007 8.51a6.52 6.52 0 0 1 13.04 0v5.867c0 .36-.292.652-.652.652H17.659a.652.652 0 0 1-.652-.652z"/><path fill="#4d4d4d" d="M14.993 23.491a6.52 6.52 0 1 1-13.04 0v-5.868c0-.36.292-.652.652-.652h11.736c.36 0 .652.292.652.652z"/></g></svg>
    title: UnoCSS + UnoCSS Icons
    details: 高性能原子化 CSS 引擎 UnoCSS，还有 100000+ 图标为你所用，无需额外引入外链
    linkText: 进入 UnoCSS 官网
    link: https://unocss.dev/
  - icon: <img style="width:80%;" src="https://uview-plus.jiangruyi.com/common/logo.png" />
    title: uview-plus
    details: uview-plus3.0是基于uView2.x修改的vue3版本，全面兼容 uni-app 生态框架。
    linkText: 查看 uview-plus 文档
    link: https://uview-plus.jiangruyi.com/
  - title: API 自动加载
    details: 直接使用 Composition API 而无需引入
    icon: 📥
    link: "https://github.com/unplugin/unplugin-auto-import"
    linkText: "查看 auto-import 插件"
  - title: 精心配置的代码规范
    details: TypeScript + ESLint + Stylelint  配置规范
    icon: 🦾
---

