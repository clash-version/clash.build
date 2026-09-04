const canonicalLocales = ['en', 'zh-CN'] as const

export default defineNuxtRouteMiddleware((to) => {
  const pathSegments = to.path.split('/').filter(Boolean)
  const localeSegment = pathSegments[0]
  if (!localeSegment) return

  const canonicalLocale = canonicalLocales.find(
    locale => locale.toLowerCase() === localeSegment.toLowerCase(),
  )

  if (!canonicalLocale) return

  const remainingSegments = pathSegments.slice(1)
  if (remainingSegments[0]?.toLowerCase() === canonicalLocale.toLowerCase()) {
    remainingSegments.shift()
  }

  const canonicalPath = `/${[canonicalLocale, ...remainingSegments].join('/')}`
  if (canonicalPath === to.path) return

  return navigateTo(
    `${canonicalPath}${to.fullPath.slice(to.path.length)}`,
    { redirectCode: 301, replace: true },
  )
})
