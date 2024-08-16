import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "unisave",
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
            /*{text: '数据获取', link: 'data-fetching'},
            {text: '状态管理', link: 'state-management'},
            {text: '部署', link: 'deployment'},*/
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunpm/vitesse-uniapp-vue3' }
    ]
  }
})
