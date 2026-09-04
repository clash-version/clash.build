<script setup lang="ts">
const { locale, localePath } = useDocusI18n()
const year = new Date().getFullYear()

const copy = computed(() => locale.value === 'zh-CN'
  ? {
      navigationLabel: '法律与政策',
      legalNotice: '法律声明',
      privacyPolicy: '隐私政策',
      termsOfUse: '使用条款',
    }
  : {
      navigationLabel: 'Legal and policy links',
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
    })

const links = computed(() => [
  { label: copy.value.legalNotice, to: localePath('/legal/legal-notice') },
  { label: copy.value.privacyPolicy, to: localePath('/legal/privacy-policy') },
  { label: copy.value.termsOfUse, to: localePath('/legal/terms-of-use') },
])
</script>

<template>
  <UFooter>
    <template #left>
      <div class="text-sm text-muted">
        Copyright © {{ year }} Clash.Build
      </div>
    </template>

    <template #center>
      <nav
        :aria-label="copy.navigationLabel"
        class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-muted transition-colors hover:text-highlighted"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </template>

    <template #right>
      <AppFooterRight />
    </template>
  </UFooter>

  <SubscriptionPromo />
</template>
