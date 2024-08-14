import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "unisave 官方文档",
  description: "基于Uniapp、Vue 3、pinia(且持久化保存)、Typescript、UnoCSS等主流技术开发的开箱即用模版，适配所有(app、mp、web)平台！！！",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.png',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
