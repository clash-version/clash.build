<script setup lang="ts">
const PROMO_URL = 'https://iv.coolgo.me/aff.php?aff=35'

const { locale } = useDocusI18n()
const visible = ref(false)

const copy = computed(() => locale.value === 'zh-CN'
  ? {
      label: '跨境网络推荐',
      title: '高速IEPL专线订阅',
      description: '适用于AI、跨境电商、海外社媒和远程办公等场景，按需选择订阅方案。',
      action: '查看跨境订阅方案',
      close: '关闭跨境网络推荐',
      disclosure: '第三方推广链接，请自行核实套餐、服务条款及适用规则。',
    }
  : {
      label: 'Cross-border Network',
      title: 'High-Speed IEPL专线 Subscription',
      description: 'Suitable for AI, cross-border e-commerce, global social media, and remote work scenarios. Choose subscription plans as needed.',
      action: 'View Subscription Options',
      close: 'Close cross-border network recommendation',
      disclosure: 'Third-party promotional link. Review the plans, terms, and applicable rules before purchasing.',
    })

function showAfterScroll() {
  if (window.scrollY < 120) return

  visible.value = true
  window.removeEventListener('scroll', showAfterScroll)
}

function dismiss() {
  visible.value = false
  window.addEventListener('scroll', showAfterScroll, { passive: true })
}

onMounted(() => {
  if (window.scrollY >= 120) {
    visible.value = true
    return
  }

  window.addEventListener('scroll', showAfterScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', showAfterScroll)
})
</script>

<template>
  <ClientOnly>
    <Transition name="subscription-promo">
      <aside
        v-if="visible"
        class="fixed right-4 bottom-4 z-50 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-2xl border border-primary/25 bg-default/95 p-5 shadow-2xl backdrop-blur sm:right-6 sm:bottom-6"
        role="complementary"
        :aria-label="copy.title"
      >
        <button
          type="button"
          class="absolute top-3 right-3 grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-elevated hover:text-highlighted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          :aria-label="copy.close"
          @click="dismiss"
        >
          <UIcon name="i-lucide-x" class="size-4" />
        </button>

        <div class="pr-8">
          <UBadge color="primary" variant="soft" size="sm">
            {{ copy.label }}
          </UBadge>
          <h2 class="mt-3 text-lg font-semibold text-highlighted">
            {{ copy.title }}
          </h2>
          <p class="mt-1.5 text-sm leading-6 text-muted">
            {{ copy.description }}
          </p>
        </div>

        <UButton
          :to="PROMO_URL"
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          block
          class="mt-4"
          leading-icon="i-lucide-sparkles"
          trailing-icon="i-lucide-arrow-up-right"
        >
          {{ copy.action }}
        </UButton>

        <p class="mt-2 text-center text-xs text-dimmed">
          {{ copy.disclosure }}
        </p>
      </aside>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.subscription-promo-enter-active,
.subscription-promo-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.subscription-promo-enter-from,
.subscription-promo-leave-to {
  opacity: 0;
  transform: translateY(0.75rem) scale(0.98);
}
</style>
