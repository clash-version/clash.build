export default defineAppConfig({
  seo: {
    title: 'Clash.Build',
    titleTemplate: '%s - Clash.Build',
    description: 'Clash-compatible client downloads, installation guides, configuration steps, and troubleshooting for desktop and mobile devices.',
    schema: {
      type: 'Organization',
      sameAs: ['https://github.com/clash-version/clash-download'],
      organization: {
        name: 'Clash.Build',
        url: 'https://clash.build',
        logo: '/logo.png',
        sameAs: ['https://github.com/clash-version/clash-download'],
      },
    },
  },
  header: {
    title: 'Clash.Build',
    logo: {
      light: '/logo.png',
      dark: '/logo.png',
      alt: 'Clash.Build',
      class: 'h-8 w-auto',
      favicon: '/logo.png',
    },
  },
  github: {
    url: 'https://github.com/clash-version/clash-download',
  },
  search: {
    fts: true,
  },
})
