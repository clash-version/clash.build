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
    detectBrowserLanguage: false,
    experimental: {
      // Let the router resolve the root homepage alias before any locale redirect.
      nitroContextDetection: false,
    },
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'zh-CN', language: 'zh-CN', name: '简体中文' },
    ],
  },
  hooks: {
    'nitro:init'(nitro) {
      nitro.hooks.hook('prerender:routes', (routes) => {
        // The prefixed i18n strategy normally skips the root, which now serves the homepage.
        nitro.options.prerender.ignore = nitro.options.prerender.ignore.filter(
          pattern => !(pattern instanceof RegExp && pattern.source === /^\/$/.source),
        )
        routes.add('/')
      })
    },
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
