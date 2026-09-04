import { defineConfig } from 'vitepress'
import { buildPerPageHead, decorateSitemapItem } from './seo'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Clash下载与教程",
  description: "提供全平台Clash客户端下载与详细教程，包括Clash for Windows、Clash Verge、ClashX、Clash Meta等版本，支持Windows、macOS、Android、iOS、鸿蒙、Linux等操作系统，助您快速上手网络加速代理工具",
  // 页面标题模板（首页会自动省略后缀）
  titleTemplate: ':title',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide' },
          { text: '客户端下载', link: '/download' },
          {
            text: '使用场景',
            items: [
              { text: '访问 ChatGPT/Claude', link: '/use-cases/chatgpt' },
              { text: '观看 Netflix 流媒体', link: '/use-cases/netflix' },
              { text: '游戏加速', link: '/use-cases/gaming' },
              { text: '应用分流', link: '/use-cases/app-routing' },
              { text: '路由器全屋代理', link: '/use-cases/whole-house' },
            ]
          },
          { text: '订阅推荐', link: '/how-choose-service' },
          
        ],
        notFound: {
          title: '页面未找到',
          quote: '您访问的页面不存在，将自动跳转到首页...',
          linkLabel: '返回首页',
          linkText: '返回首页'
        },
        sidebar: [
          {
            text: '快速入门',
            items: [
              { text: 'Clash是什么?', link: '/guide' }, 
              {
                text: '快速安装示例',
                collapsed: false,
                items: [
                  { text: '1.下载安装', link: '/quickly/install' },
                  { text: '2.导入配置', link: '/quickly/import' },
                  { text: '3.启动代理', link: '/quickly/start' },
                  { text: '4.系统设置', link: '/quickly/settings' },
                  { text: '5.故障排查', link: '/troubleshooting' },
                ]
              },
              
            ]
          },
          
          {
            text: '进阶教程',
            items: [
              { text: '配置文件', link: '/config-file' },
              { text: '策略组', link: '/proxy-groups' },
              { text: '规则分流', link: '/clash-rules-explained' },
              { text: '代理模式', link: '/proxy-modes' },
              { text: '虚拟网卡', link: '/virtual-network-card' },
              { text: '链式代理', link: '/proxy-links' },
            ]
          },
          {
            text: '快速下载',
            items: [
              {
                text: 'Windows系统',
                collapsed: true,
                items: [
                  { text: 'Clash for Windows', link: '/clash-for-windows' },
                  { text: 'Clash Verge', link: '/clash-verge' },
                  { text: 'Clash Mi', link: '/clashmi' },
                  { text: 'FlClash', link: '/flclash' },
                  { text: 'FlClashX', link: 'https://flclashx.com' },
                  { text: 'Hiddify', link: '/hiddify' },
                ]
              },
              {
                text: 'macOS系统',
                collapsed: true,
                items: [
                  { text: 'Clash for Windows', link: '/clash-for-windows' },
                  { text: 'Clash Verge', link: '/clash-verge' },
                  { text: 'Clash Mi', link: '/clashmi' },
                  { text: 'FlClash', link: '/flclash' },
                  { text: 'FlClashX', link: 'https://flclashx.com' },
                  { text: 'ClashX', link: '/clashx' },
                  { text: 'Hiddify', link: '/hiddify' },
                ]
              },
              {
                text: 'Android系统',
                collapsed: true,
                items: [
                  { text: 'Clash Meta for Android', link: '/clash-meta-for-android' },
                  { text: 'Clash for Android', link: '/clash-for-android' },
                  { text: 'Hiddify', link: '/hiddify-android' },
                  { text: 'Clash Mi', link: '/clashmi' },
                  { text: 'FlClash', link: '/flclash' },
                  { text: 'FlClashX', link: 'https://flclashx.com' },
                ]
              },
              {
                text: 'iOS系统',
                collapsed: true,
                items: [
                  { text: 'Showadrocket', link: '/showadrecket' },
                  { text: 'Potatso', link: '/potatso' },
                  { text: 'Clash Mi', link: '/clashmi' },
                ]
              },
              {
                text: 'HarmonyOS(鸿蒙)系统',
                collapsed: true,
                items: [
                  { text: 'ClashBox', link: '/clash-box' },
                ]
              },
              {
                text: 'OpenWRT系统',
                collapsed: true,
                items: [
                  { text: 'OpenClash', link: '/openclash' }
                ]
              },
              {
                text: 'Linux系统',
                collapsed: true,
                items: [
                  { text: 'Clash for Linux', link: '/clash-for-linux' },
                  { text: 'Clash Verge', link: '/clash-verge' },
                  { text: 'Clash Mi', link: '/clashmi' },
                  { text: 'FlClash', link: '/flclash' },
                  { text: 'FlClashX', link: 'https://flclashx.com' },
                  { text: 'Hiddify', link: '/hiddify' },
                ]
              },
            ]
          },
          {
            text: '订阅指南',
            items: [
              { text: '如何选择订阅', link: '/how-choose-service' },
              { text: '免费节点分享', link: '/free-nodes' },
              { text: '订阅测评', link: '/airport-evaluation' },
            ]
          },
          {
            text: '使用场景',
            items: [
              { text: '访问 ChatGPT/Claude', link: '/use-cases/chatgpt' },
              { text: '观看 Netflix 流媒体', link: '/use-cases/netflix' },
              { text: '游戏加速', link: '/use-cases/gaming' },
              { text: '应用分流', link: '/use-cases/app-routing' },
              { text: '路由器全屋代理', link: '/use-cases/whole-house' },
            ]
          },
          {
            text: '最新资讯',
            items: [
              { text: '更新日志', link: '/news/changelog' },
            ]
          },
          
          { text: '关于本站', link: '/about' },
          { text: '版权声明', link: '/disclaimer' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "Clash Download & Guide",
      description: "provide Clash client downloads and detailed tutorials for all platforms, including Clash for Windows, Clash Verge, ClashX, Clash Meta, etc., supporting Windows, macOS, Android, iOS, HarmonyOS, Linux and other operating systems to help you quickly get started with scientific internet proxy tools.",
      // 页面标题模板（首页会自动省略后缀）
      titleTemplate: ':title - Clash Download & Guide',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide' },
          { text: 'Clients', link: '/en/download' },
          {
            text: 'About',
            items: [
              { text: 'About Us', link: '/en/about' },
              { text: 'Disclaimer', link: '/en/disclaimer' }
            ]
          }
        ],
        notFound: {
          title: 'Page Not Found',
          quote: 'The page you are looking for does not exist. Redirecting to home page...',
          linkLabel: 'Go to Home',
          linkText: 'Go to Home'
        },
        outlineTitle: 'On this page',
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is Clash?', link: '/en/guide' },
              {
                text: 'Quick Start',
                collapsed: false,
                items: [
                  { text: 'Install', link: '/en/quickly/install' },
                  { text: 'Import Subscription', link: '/en/quickly/import' },
                  { text: 'Start Proxy', link: '/en/quickly/start' },
                  { text: 'Settings', link: '/en/quickly/settings' },
                ]
              },
              {
                text: 'FAQ',
                collapsed: false,
                items: [
                  { text:'Proxy Modes Explained', link: '/en/proxy-modes' },
                  { text:'Troubleshooting', link: '/en/troubleshooting' },
                  { text:'How to choose a provider?', link: '/en/how-choose-service' },
                ]
              },
            ]
          },
          {
            text: 'Quick Download',
            items: [
              {
                text: 'Windows',
                collapsed: true,
                items: [
                  { text: 'Clash for Windows', link: '/en/clash-for-windows' },
                  { text: 'Clash Verge', link: '/en/clash-verge' },
                  { text: 'FlClash', link: '/en/flclash' },
                  { text: 'Hiddify', link: '/en/hiddify' },
                ]
              },
              {
                text: 'macOS',
                collapsed: true,
                items: [
                  { text: 'Clash for Windows', link: '/en/clash-for-windows' },
                  { text: 'Clash Verge', link: '/en/clash-verge' },
                  { text: 'FlClash', link: '/en/flclash' },
                  { text: 'ClashX', link: '/en/clashx' },
                  { text: 'Hiddify', link: '/en/hiddify' },
                ]
              },
              {
                text: 'Android',
                collapsed: true,
                items: [
                  { text: 'Clash Meta for Android', link: '/en/clash-meta-for-android' },
                  { text: 'Clash for Android', link: '/en/clash-for-android' },
                  { text: 'Hiddify', link: '/en/hiddify-android' },
                  { text: 'FlClash', link: '/en/flclash' },
                ]
              },
              {
                text: 'iOS',
                collapsed: true,
                items: [
                  { text: 'Showadrocket', link: '/en/showadrecket' },
                  { text: 'Potatso', link: '/en/potatso' },
                ]
              },
              {
                text: 'HarmonyOS',
                collapsed: true,
                items: [
                  { text: 'ClashBox', link: '/en/clash-box' },
                ]
              },
              {
                text: 'OpenWRT',
                collapsed: true,
                items: [
                  { text: 'OpenClash', link: '/en/openclash' }
                ]
              },
              {
                text: 'Linux',
                collapsed: true,
                items: [
                  { text: 'Clash for Linux', link: '/en/clash-for-linux' },
                  { text: 'Clash Verge', link: '/en/clash-verge' },
                  { text: 'FlClash', link: '/en/flclash' },
                  { text: 'Hiddify', link: '/en/hiddify' },
                ]
              },
            ]
          },
        ]
      }
    }
  },
  lastUpdated: true,
  // 生成 sitemap（请根据实际部署域名修改）
  sitemap: {
    hostname: 'https://clash.guide',
    transformItems: (items) => {
      // 排除孤儿页面（未被导航引用的重复/冗余目录）
      return items
        .filter(item =>
          !item.url.startsWith('clients/') &&
          !item.url.startsWith('start/') &&
          !item.url.startsWith('help/') &&
          !item.url.startsWith('knowledge/') &&
          !item.url.startsWith('providers/') &&
          !item.url.startsWith('config/')
        )
        .map(decorateSitemapItem)
    }
  },
  // 每页注入 canonical / hreflang / OG / Twitter / JSON-LD
  transformHead(ctx) {
    return buildPerPageHead(ctx)
  },
  // 启用干净的 URL（可选，移除 .html 后缀）
  cleanUrls: false,
  themeConfig: {
    logo: '/logo.png',
    i18nRouting: true,
    // 启用内置本地搜索（未配置 Algolia 时）
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      { text: '客户端下载', link: '/download' },
      {
        text: '关于',
        items: [
          { text: '关于本站', link: '/about' },
          { text: '版权声明', link: '/disclaimer' }
        ]
      }
    ],
    aside: true,
    
    outlineTitle: '本页内容',
    
    sidebar: [
      {
        text: '简介',
        items: [
          { text: 'Clash是什么?', link: '/guide' },
          { 
            text: '快速开始', 
            collapsed: false,
            items: [
              { text: '下载与安装', link: '/quickly/install' },
              { text: '导入配置', link: '/quickly/import' },
              // { text: '选择服务器', link: '/quickly/select-node' },
              { text: '启动代理', link: '/quickly/start' },
              { text: '系统设置', link: '/quickly/settings' },
            ]
          
          },
          { 
            text: '进阶教程', 
            collapsed: false,
            items: [
              { text:'代理模式详解', link: '/proxy-modes' },
              { text:'分流规则入门', link: '/clash-rules-explained' },
              { text:'故障排查', link: '/troubleshooting' },
              { text:'如何选择订阅？', link: '/how-choose-service' },
              
            ]
          },
        ]
      },
      {
        text: '快速下载',
        items: [
          { 
            text: 'Windows系统', 
            collapsed: true,
            items: [
              { text: 'Clash for Windows', link: '/clash-for-windows' },
              { text: 'Clash Verge', link: '/clash-verge' },
              { text: 'Clash Mi', link: '/clashmi' },
              { text: 'FlClash', link: '/flclash' },
              { text: 'Hiddify', link: '/hiddify' },
            ]
          },
          { 
            text: 'macOS系统', 
            collapsed: true,
            items: [
              { text: 'Clash for Windows', link: '/clash-for-windows' },
              { text: 'Clash Verge', link: '/clash-verge' },
              { text: 'Clash Mi', link: '/clashmi' },
              { text: 'FlClash', link: '/flclash' },
              { text: 'ClashX', link: '/clashx' },
              { text: 'Hiddify', link: '/hiddify' },
            ]
          },
          { 
            text: 'Android系统', 
            collapsed: true,
            items: [
              { text: 'Clash Meta for Android', link: '/clash-meta-for-android' },
              { text: 'Clash for Android', link: '/clash-for-android' },
              { text: 'Hiddify', link: '/hiddify' },
              { text: 'Clash Mi', link: '/clashmi' },
              { text: 'FlClash', link: '/flclash' },
            ]
          },
          { 
            text: 'iOS系统', 
            collapsed: true,
            items: [
              { text: 'Showadrocket', link: '/showadrecket' },
              { text: 'Potatso', link: '/potatso' },
              { text: 'Clash Mi', link: '/clashmi' },
            ]
          },
          { 
            text: '鸿蒙系统', 
            collapsed: true,
            items: [
              { text: 'ClashBox', link: '/clash-box' },
            ]
          },
          { 
            text: 'OpenWRT系统', 
            collapsed: true,
            items: [
              { text: 'OpenClash', link: '/openclash' }
            ]
          },
          { 
            text: 'Linux系统', 
            collapsed: true,
            items: [
              { text: 'Clash for Linux', link: '/clash-for-linux' },
              { text: 'Clash Verge', link: '/clash-verge' },
              { text: 'Clash Mi', link: '/clashmi' },
              { text: 'FlClash', link: '/flclash' },
              { text: 'Hiddify', link: '/hiddify' },
            ]
          },
        ]
      },
    ],
 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clash-version/clash-download' }
    ],

    footer: {
      message: '© 2024-2025 Clash.Guide. All Rights Reserved.',
      copyright: '本站内容仅供学习交流使用，请遵守当地法律法规'
    },

  },
  head: [
    // SEO Meta 标签
    ['meta', { name: 'keywords', content: 'Clash,Clash下载与教程,Clash教程,Clash for Windows,Clash Verge,ClashX,Clash安卓,网络加速,代理工具,网络连接,服务商配置' }],
    ['meta', { name: 'author', content: 'Clash.Guide' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],

    // Open Graph / Facebook（站点级，每页 url/title/description/locale 由 transformHead 注入）
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://clash.guide/logo.png' }],
    ['meta', { property: 'og:site_name', content: 'Clash下载与教程' }],

    // Twitter Card（站点级，每页 url/title/description 由 transformHead 注入）
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://clash.guide/logo.png' }],

    // Favicon 和 App Icons
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    // 主题颜色
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

    // 站点级结构化数据 (JSON-LD WebSite) — 每页的 Article/Breadcrumb 在 transformHead 中注入
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Clash下载与教程',
        url: 'https://clash.guide',
        description: '提供Windows、安卓、苹果、鸿蒙、Linux等操作系统的Clash版本下载与使用教程',
        publisher: {
          '@type': 'Organization',
          name: 'Clash.Guide',
          logo: {
            '@type': 'ImageObject',
            url: 'https://clash.guide/logo.png'
          }
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://clash.guide/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    ],
    
    // Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-5BBEYPPV4F' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5BBEYPPV4F');`
    ],
    
    // 性能优化 - Preconnect
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
})
