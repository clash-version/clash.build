export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', '@vercel/analytics'],
  site: {
    url: 'https://clash.build',
    name: 'Clash.Build',
  },
  llms: {
    domain: 'https://clash.build',
    title: 'Clash.Build',
    description: 'Clash-compatible client downloads, installation guides, and troubleshooting.',
    full: {
      title: 'Clash.Build',
      description: 'Complete Clash-compatible client downloads, installation guides, configuration steps, and troubleshooting.',
    },
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'zh-CN', language: 'zh-CN', name: '简体中文' },
    ],
  },
  icon: {
    clientBundle: {
      icons: [
        'simple-icons:windows11',
        'simple-icons:apple',
        'simple-icons:linux',
        'simple-icons:android',
        'simple-icons:github',
        'lucide:panels-top-left',
        'lucide:layers-3',
        'lucide:cat',
        'lucide:smartphone',
        'lucide:box',
        'lucide:rocket',
        'lucide:book-open-check',
        'lucide:link',
        'lucide:gauge',
        'lucide:power',
        'lucide:sliders-horizontal',
        'lucide:circle-alert',
        'lucide:download',
      ],
    },
  },
})
