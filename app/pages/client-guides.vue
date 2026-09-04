<script setup lang="ts">
definePageMeta({
  layout: 'docs',
})

interface ClientGuide {
  slug: string
  name: string
  nameZh: string
  description: string
  descriptionZh: string
  platform: string
  icon: string
}

const { locale, localePath } = useDocusI18n()
const isChinese = computed(() => locale.value === 'zh-CN')

const copy = computed(() => isChinese.value
  ? {
      title: '客户端安装指南',
      description: '集中查看 Windows、macOS、Linux、Android、iOS 和 HarmonyOS 客户端的下载、安装与配置教程。',
      openGuide: '查看教程',
      nextTitle: '第一次使用 Clash？',
      nextDescription: '建议先完成客户端安装，再按照快速开始指南导入配置、选择节点并开启系统代理。',
      quickStart: '查看快速开始',
      troubleshooting: '故障排查',
    }
  : {
      title: 'Client Installation Guides',
      description: 'Browse download, installation, and configuration guides for Windows, macOS, Linux, Android, iOS, and HarmonyOS clients.',
      openGuide: 'View guide',
      nextTitle: 'New to Clash?',
      nextDescription: 'Install a client first, then follow the quick start guide to import a configuration, select a node, and enable the system proxy.',
      quickStart: 'View Quick Start',
      troubleshooting: 'Troubleshooting',
    })

const guides: ClientGuide[] = [
  {
    slug: 'clash-verge',
    name: 'Clash Verge Rev',
    nameZh: 'Clash Verge Rev',
    description: 'Cross-platform desktop client for Windows, macOS, and Linux.',
    descriptionZh: '适用于 Windows、macOS 和 Linux 的跨平台桌面客户端。',
    platform: 'Windows / macOS / Linux',
    icon: 'i-lucide-panels-top-left',
  },
  {
    slug: 'flclash',
    name: 'FlClash',
    nameZh: 'FlClash',
    description: 'Flutter-based client with a consistent desktop and mobile experience.',
    descriptionZh: '基于 Flutter 的跨平台客户端，覆盖桌面端和移动端。',
    platform: 'Windows / macOS / Linux / Android',
    icon: 'i-lucide-layers-3',
  },
  {
    slug: 'hiddify',
    name: 'Hiddify',
    nameZh: 'Hiddify',
    description: 'Multi-platform client with subscription and TUN mode support.',
    descriptionZh: '支持订阅导入与 TUN 模式的多平台客户端。',
    platform: 'Windows / macOS / Linux / iOS / Android',
    icon: 'i-lucide-gauge',
  },
  {
    slug: 'clashmi',
    name: 'Clash Mi',
    nameZh: 'Clash Mi',
    description: 'Lightweight Mihomo client for desktop and mobile devices.',
    descriptionZh: '适用于桌面和移动设备的轻量级 Mihomo 客户端。',
    platform: 'Windows / macOS / iOS / Android',
    icon: 'i-lucide-cat',
  },
  {
    slug: 'clash-for-windows',
    name: 'Clash for Windows',
    nameZh: 'Clash for Windows',
    description: 'Installation and configuration guide for the classic desktop client.',
    descriptionZh: '经典桌面客户端的安装、配置和常见问题指南。',
    platform: 'Windows',
    icon: 'i-simple-icons-windows11',
  },
  {
    slug: 'clashx',
    name: 'ClashX',
    nameZh: 'ClashX',
    description: 'Native macOS client guide for Apple Silicon and Intel Macs.',
    descriptionZh: '适用于 Apple Silicon 和 Intel Mac 的原生客户端教程。',
    platform: 'macOS',
    icon: 'i-simple-icons-apple',
  },
  {
    slug: 'clash-meta-for-android',
    name: 'Clash Meta for Android',
    nameZh: 'Clash Meta for Android',
    description: 'Mihomo-compatible Android client with modern protocol support.',
    descriptionZh: '支持现代代理协议的 Mihomo Android 客户端。',
    platform: 'Android',
    icon: 'i-lucide-smartphone',
  },
  {
    slug: 'clash-for-android',
    name: 'Clash for Android',
    nameZh: 'Clash for Android',
    description: 'Guide for the discontinued classic Android client.',
    descriptionZh: '已停止维护的经典 Android 客户端安装指南。',
    platform: 'Android',
    icon: 'i-simple-icons-android',
  },
  {
    slug: 'hiddify-android',
    name: 'Hiddify Android',
    nameZh: 'Hiddify Android',
    description: 'Android installation, subscription import, and TUN mode guide.',
    descriptionZh: 'Android 安装、订阅导入和 TUN 模式使用教程。',
    platform: 'Android',
    icon: 'i-lucide-gauge',
  },
  {
    slug: 'shadowrocket',
    name: 'Shadowrocket',
    nameZh: 'Shadowrocket（小火箭）',
    description: 'Purchase, installation, and subscription import guide for iOS.',
    descriptionZh: 'iPhone 和 iPad 购买、安装与订阅导入教程。',
    platform: 'iPhone / iPad',
    icon: 'i-lucide-rocket',
  },
  {
    slug: 'potatso',
    name: 'Potatso Lite',
    nameZh: 'Potatso Lite',
    description: 'Installation and configuration guide for the iOS client.',
    descriptionZh: 'Potatso Lite iOS 客户端安装与配置教程。',
    platform: 'iPhone / iPad',
    icon: 'i-simple-icons-apple',
  },
  {
    slug: 'ios-clash',
    name: 'Clash-Compatible iOS Clients',
    nameZh: 'iOS Clash 兼容客户端',
    description: 'Compare compatible clients for iPhone and iPad.',
    descriptionZh: '对比适用于 iPhone 和 iPad 的 Clash 兼容客户端。',
    platform: 'iPhone / iPad',
    icon: 'i-simple-icons-apple',
  },
  {
    slug: 'clash-box',
    name: 'Clash Box',
    nameZh: 'Clash Box',
    description: 'Native HarmonyOS NEXT client installation guide.',
    descriptionZh: 'HarmonyOS NEXT 原生客户端安装教程。',
    platform: 'HarmonyOS NEXT',
    icon: 'i-lucide-box',
  },
  {
    slug: 'openclash',
    name: 'OpenClash',
    nameZh: 'OpenClash',
    description: 'Install and configure the OpenClash plugin on OpenWRT routers.',
    descriptionZh: 'OpenWRT 路由器 OpenClash 插件安装与配置教程。',
    platform: 'OpenWRT',
    icon: 'i-lucide-sliders-horizontal',
  },
  {
    slug: 'clash-for-linux',
    name: 'Clash for Linux',
    nameZh: 'Clash for Linux',
    description: 'Install Mihomo on Linux with a script and web dashboard.',
    descriptionZh: '通过脚本和 Web 面板在 Linux 上安装与管理 Mihomo。',
    platform: 'Linux',
    icon: 'i-simple-icons-linux',
  },
  {
    slug: 'zyt-clash',
    name: 'Clash with ZhuoYiTong',
    nameZh: '卓易通安装 Clash',
    description: 'Install an Android Clash client on HarmonyOS through ZhuoYiTong.',
    descriptionZh: '通过卓易通在 HarmonyOS 中安装 Android Clash 客户端。',
    platform: 'HarmonyOS',
    icon: 'i-lucide-smartphone',
  },
]

useSeo({
  title: computed(() => copy.value.title),
  description: computed(() => copy.value.description),
  type: 'website',
})

defineOgImage('Docs', {
  title: copy.value.title,
  description: copy.value.description,
})

function getName(guide: ClientGuide) {
  return isChinese.value ? guide.nameZh : guide.name
}

function getDescription(guide: ClientGuide) {
  return isChinese.value ? guide.descriptionZh : guide.description
}
</script>

<template>
  <UPage>
    <UPageHeader
      :title="copy.title"
      :description="copy.description"
    />

    <UPageBody>
      <div class="grid gap-4 md:grid-cols-2">
        <NuxtLink
          v-for="guide in guides"
          :key="guide.slug"
          :to="localePath(`/client-guides/${guide.slug}`)"
          class="group block h-full"
        >
          <UCard class="h-full transition-colors group-hover:border-primary/40">
            <div class="flex h-full items-start gap-4">
              <div class="grid size-11 shrink-0 place-items-center rounded-xl border border-default bg-elevated text-muted transition-colors group-hover:text-primary">
                <UIcon :name="guide.icon" class="size-5" />
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <h2 class="text-lg font-semibold text-highlighted">
                    {{ getName(guide) }}
                  </h2>
                  <UBadge color="neutral" variant="subtle">
                    {{ guide.platform }}
                  </UBadge>
                </div>
                <p class="mt-2 text-sm leading-6 text-muted">
                  {{ getDescription(guide) }}
                </p>
                <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {{ copy.openGuide }}
                  <UIcon name="i-lucide-arrow-right" class="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>

      <UAlert
        class="mt-8"
        color="primary"
        variant="soft"
        icon="i-lucide-book-open-check"
        :title="copy.nextTitle"
        :description="copy.nextDescription"
      >
        <template #actions>
          <UButton
            :to="localePath('/installation-guide/quick-start')"
            size="sm"
            trailing-icon="i-lucide-arrow-right"
          >
            {{ copy.quickStart }}
          </UButton>
          <UButton
            :to="localePath('/installation-guide/troubleshooting')"
            size="sm"
            color="neutral"
            variant="outline"
          >
            {{ copy.troubleshooting }}
          </UButton>
        </template>
      </UAlert>
    </UPageBody>
  </UPage>
</template>
