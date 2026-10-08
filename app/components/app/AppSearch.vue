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

function localizeSearchResult<T extends { id: string }>(item: T): T {
  const prefix = `/${locale.value.toLowerCase()}/`
  if (!isEnabled.value || !item.id.toLowerCase().startsWith(prefix)) return item
  return { ...item, id: `/${locale.value}/${item.id.slice(prefix.length)}` }
}

const localizedFiles = computed(() => files.value?.map(localizeSearchResult))
const search = searchCollection
  ? async (...[query, options]: Parameters<typeof searchCollection>) => {
      const results = await searchCollection(query, options)
      return results.map(localizeSearchResult)
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
    :files="localizedFiles"
    :search="search"
    :search-status="searchStatus"
    :links="links"
    :navigation="navigation"
    :color-mode="!forcedColorMode"
  />
</template>
