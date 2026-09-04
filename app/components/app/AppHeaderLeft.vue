<script setup lang="ts">
const appConfig = useAppConfig()
const site = useSiteConfig()
const { localePath } = useDocusI18n()

const title = computed(() => appConfig.header?.title || site.name)
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    :aria-label="title"
    class="flex items-center gap-2"
  >
    <AppHeaderLogo class="h-6 w-auto shrink-0" />
    <span class="font-semibold text-highlighted">
      {{ title }}
    </span>
  </NuxtLink>
</template>
