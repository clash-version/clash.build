<script setup lang="ts">
import type { ContentNavigationItem, PageCollections } from '@nuxt/content'

const props = defineProps<{
  navigation?: ContentNavigationItem[]
}>()

const appConfig = useAppConfig()
const { forced: forcedColorMode } = useDocusColorMode()
const { locale, isEnabled } = useDocusI18n()

const collectionName = computed(() => (isEnabled.value ? `docs_${locale.value.replaceAll('-', '_')}` : 'docs') as keyof PageCollections)
const useFts = appConfig.search.fts

const { data: files } = useFts
  ? { data: ref(null) }
  : useLazyAsyncData(() => `search_${collectionName.value}`, () => queryCollectionSearchSections(collectionName.value), {
      server: false,
      watch: [locale],
    })

const { search: searchCollection, status: searchStatus, init } = useFts
  ? useSearchCollection(collectionName, { immediate: false, ignoredTags: ['style'] })
  : { search: undefined, status: ref(undefined), init: () => {} }

function isVisibleSearchResult(item: { id: string }) {
  const path = item.id.split('#')[0]!.replace(/\/$/, '').toLowerCase()
  if (/\/client-guides(?:\/|$)/.test(path)) return false
  return !/\/installation-guide(?:\/|$)/.test(path) || path.endsWith('/installation-guide/quick-start')
}

function localizeSearchResult<T extends { id: string }>(item: T): T {
  const prefix = `/${locale.value.toLowerCase()}/`
  if (!isEnabled.value || !item.id.toLowerCase().startsWith(prefix)) return item
  return { ...item, id: `/${locale.value}/${item.id.slice(prefix.length)}` }
}

const visibleFiles = computed(() => files.value?.filter(isVisibleSearchResult).map(localizeSearchResult))
const search = searchCollection
  ? async (...[query, options]: Parameters<typeof searchCollection>) => {
      // Filter before applying the result limit so hidden tutorials cannot crowd out visible pages.
      const results = await searchCollection(query, { ...options, limit: -1 })
      return results.filter(isVisibleSearchResult).slice(0, options?.limit ?? 20).map(localizeSearchResult)
    }
  : undefined

if (useFts) {
  const { open } = useContentSearch()
  watch(open, (value) => {
    if (value && searchStatus.value === 'idle') {
      init()
    }
  })
}

const links = computed(() => useFts
  ? props.navigation?.filter(item => item.children?.length).map(item => ({
      label: item.title,
      icon: item.icon,
      to: item.children![0]!.path,
    }))
  : undefined,
)
</script>

<template>
  <LazyUContentSearch
    :files="visibleFiles"
    :search="search"
    :search-status="searchStatus"
    :links="links"
    :navigation="navigation"
    :color-mode="!forcedColorMode"
  />
</template>
