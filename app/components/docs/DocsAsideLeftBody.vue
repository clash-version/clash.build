<script setup lang="ts">
const route = useRoute()
const { sidebarNavigation } = useSubNavigation()

const contentNavVariants = useUIConfig('contentNavigation')

const navigation = computed(() => {
  const items = sidebarNavigation.value || []
  const locale = route.path.split('/').filter(Boolean)[0]
  if (!locale) return items

  const localePrefix = `/${locale.toLowerCase()}`

  const localeRoot = items.find(item =>
    item.path?.toLowerCase() === localePrefix,
  )

  const localeItems = localeRoot?.children || items

  const canonicalizePaths = (navigationItems: typeof localeItems): typeof localeItems =>
    navigationItems.map((item) => {
      const normalizedPath = item.path?.toLowerCase()
      const path = normalizedPath === localePrefix || normalizedPath?.startsWith(`${localePrefix}/`)
        ? `/${locale}${item.path.slice(localePrefix.length)}`
        : item.path

      return {
        ...item,
        path,
        locale: false,
        children: item.children ? canonicalizePaths(item.children) : undefined,
      }
    })

  return canonicalizePaths(localeItems)
})
</script>

<template>
  <UContentNavigation
    :collapsible="false"
    :highlight="contentNavVariants.highlight ?? true"
    :highlight-color="contentNavVariants.highlightColor"
    :variant="contentNavVariants.variant ?? 'link'"
    :color="contentNavVariants.color"
    :navigation="navigation"
  />
</template>
