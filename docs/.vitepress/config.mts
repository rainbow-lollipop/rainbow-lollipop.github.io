import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jstoolpack2",
  description: "this is jstoolpack2 api website",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/home1/home1-1' },
      { text: 'Reference', link: '/reference/api/api-1' }
    ],

    sidebar: {
      '/guide': [
        {
          text: 'Home1',
          collapsed: true,
          items: [
            { text: 'Home1-1', link: '/guide/home1/home1-1' },
            { text: 'Home1-2', link: '/guide/home1/home1-2' }
          ]
        },
        {
          text: 'Home2',
          collapsed: true,
          items: [
            { text: 'Home2-1', link: '/guide/home2/home2-1' },
            { text: 'Home2-2', link: '/guide/home2/home2-2' }
          ]
        },
        {
          text: 'Home3',
          collapsed: true,
          items: [
            { text: 'Home3-1', link: '/guide/home3/home3-1' },
            { text: 'Home3-2', link: '/guide/home3/home3-2' }
          ]
        }
      ],
      '/reference': [
        {
          text: 'API',
          collapsed: true,
          items: [
            { text: 'API-1', link: '/reference/api/api-1' },
            { text: 'API-2', link: '/reference/api/api-2' }
          ]
        },
        {
          text: 'Plugins',
          collapsed: true,
          items: [
            { text: 'Plugins-1', link: '/reference/plugins/plugins-1' },
            { text: 'Plugins-2', link: '/reference/plugins/plugins-2' }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
