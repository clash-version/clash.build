import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: routes => routes.map(route => route.name === 'lang-index___en'
    ? { ...route, alias: '/' }
    : route),
} satisfies RouterConfig
