import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "unisave",
  description: "拥抱 web 开发，拯救 uniapp。基于Uniapp、Vue 3、pinia(且持久化保存)、Typescript、UnoCSS等主流技术开发的开箱即用模版，适配所有(app、mp、web)平台！！！",
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
      { text: '快速开始', link: '/getting-started/installation', activeMatch: '/getting-started' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: '快速开始',
          base: '/getting-started/',
          items: [
            {text: '介绍', link: 'introduction'},
            {text: '起步', link: 'installation'},
            {text: '视图', link: 'views'},
            {text: '样式', link: 'styling'},
            {text: '更换 UI 组件库', link: 'replace-ui'},
            {text: '图标指南', link: 'icons'},
            {text: '数据获取', link: 'data-fetching'},
            {text: '状态管理', link: 'state-management'},
            /*{text: '部署', link: 'deployment'},*/
          ],
        },
      ],
    },
    outline: {
      level: 'deep',
      label: '页面导航',
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '9SZQQ1APVE',
        apiKey: 'bd77eee02b420c66a6bdd65b20d9697b',
        indexName: 'unisave-netlify'
      }
    },
    lastUpdated: {
      text: '最后更新'
    },
    editLink: {
      pattern: 'https://github.com/sunpm/unisave-docs/edit/main/:path',
      text: '为此页提供修改建议',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunpm/unisave' }
    ]
  }
})
