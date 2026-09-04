<script setup lang="ts">
import { detectDevicePlatform, type PlatformId } from '../utils/platform'

interface PlatformOption {
  id: PlatformId
  name: string
  icon: string
  client: string
  description: string
  action: string
  href: string
}

const { locale, localePath } = useDocusI18n()
const isChinese = computed(() => locale.value === 'zh-CN')

const copy = computed(() => isChinese.value
  ? {
      detected: '已识别',
      detecting: '正在识别设备',
      title: '让下载变得简单',
      description: '自动识别当前系统，为你推荐合适的客户端，并指引你前往项目发布页面下载。',
      otherPlatforms: '选择其他平台',
      recommended: '已为你推荐',
      releasePage: '项目发布页',
      allDownloads: '查看全部客户端下载',
    }
  : {
      detected: 'Detected',
      detecting: 'Detecting your device',
      title: 'Downloads made simple',
      description: 'We detect your operating system, recommend a suitable client, and help you choose the correct download source.',
      otherPlatforms: 'Choose another platform',
      recommended: 'Recommended for you',
      releasePage: 'Project release page',
      allDownloads: 'Browse all client downloads',
    })

const platforms = computed<PlatformOption[]>(() => [
  {
    id: 'windows',
    name: 'Windows',
    icon: 'i-simple-icons-windows11',
    client: 'Clash Verge Rev',
    description: isChinese.value ? '适用于 Windows 10 / 11，通常选择 x64 安装包。' : 'For Windows 10 and 11. Most devices use the x64 installer.',
    action: isChinese.value ? '下载 Windows 版本' : 'Download for Windows',
    href: localePath('/download/windows') as string,
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: 'i-simple-icons-apple',
    client: 'Clash Verge Rev',
    description: isChinese.value ? '请根据 Apple 芯片或 Intel 芯片选择对应安装包。' : 'Choose the installer for either Apple Silicon or an Intel processor.',
    action: isChinese.value ? '下载 macOS 版本' : 'Download for macOS',
    href: localePath('/download/macos') as string,
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: 'i-simple-icons-linux',
    client: 'Clash Verge Rev',
    description: isChinese.value ? '可在发布页面选择 DEB、RPM 或 AppImage。' : 'Choose a DEB, RPM, or AppImage package on the release page.',
    action: isChinese.value ? '下载 Linux 版本' : 'Download for Linux',
    href: localePath('/download/linux') as string,
  },
  {
    id: 'android',
    name: 'Android',
    icon: 'i-simple-icons-android',
    client: 'FlClash',
    description: isChinese.value ? '适用于大多数 Android 手机和平板设备。' : 'For most Android phones and tablets.',
    action: isChinese.value ? '下载 Android 版本' : 'Download for Android',
    href: localePath('/download/android') as string,
  },
  {
    id: 'ios',
    name: 'iPhone / iPad',
    icon: 'i-simple-icons-apple',
    client: isChinese.value ? '兼容客户端' : 'Compatible clients',
    description: isChinese.value ? 'iOS 客户端通过 App Store 安装，可用情况与所在地区有关。' : 'iOS clients are installed through the App Store and availability varies by region.',
    action: isChinese.value ? '查看 iOS 客户端' : 'View iOS clients',
    href: localePath('/download/ios') as string,
  },
])

const selectedId = ref<PlatformId>('windows')
const isDetected = ref(false)
const showOptions = ref(false)

const selectedPlatform = computed(() => {
  return platforms.value.find(platform => platform.id === selectedId.value) || platforms.value[0]
})

function selectPlatform(id: PlatformId) {
  selectedId.value = id
}

function toggleOptions() {
  showOptions.value = !showOptions.value
}

function handlePrimaryAction() {
  if (!selectedPlatform.value?.href) showOptions.value = true
}

onMounted(() => {
  selectedId.value = detectDevicePlatform()
  isDetected.value = true
})
</script>

<template>
  <UPageHero
    :ui="{
      root: 'overflow-hidden',
      container: 'min-h-[calc(100svh-4rem)] place-content-center py-24 sm:py-32 lg:py-36',
      wrapper: 'mx-auto max-w-7xl',
      headline: 'mb-5',
      title: 'text-5xl sm:text-6xl lg:text-7xl',
      description: 'mx-auto max-w-3xl',
      footer: 'mt-10',
    }"
  >
    <template #top>
      <div class="hero-backdrop" aria-hidden="true" />
    </template>

    <template #headline>
      <UBadge
        color="primary"
        variant="outline"
        size="lg"
        :icon="selectedPlatform.icon"
        class="rounded-md"
      >
        <span v-if="isDetected">{{ copy.detected }} · {{ selectedPlatform.name }}</span>
        <span v-else>{{ copy.detecting }}</span>
      </UBadge>
    </template>

    <template #title>
      <span class="hero-title">
        <span class="hero-brand">Clash.Build</span>
        <span class="hero-title__suffix">{{ copy.title }}</span>
      </span>
    </template>

    <template #description>
      {{ copy.description }}
    </template>

    <template #footer>
      <div class="flex flex-col items-center">
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            :to="selectedPlatform.href"
            :target="selectedPlatform.href?.startsWith('http') ? '_blank' : undefined"
            :icon="selectedPlatform.icon"
            trailing-icon="i-lucide-arrow-up-right"
            size="xl"
            class="shadow-sm"
            @click="handlePrimaryAction"
          >
            {{ selectedPlatform.action }}
          </UButton>

          <UButton
            color="neutral"
            variant="outline"
            size="xl"
            :trailing-icon="showOptions ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            @click="toggleOptions"
          >
            {{ copy.otherPlatforms }}
          </UButton>
        </div>

        <div class="hero-recommendation">
          <span class="platform-stack" aria-hidden="true">
            <span
              v-for="platform in platforms.slice(0, 4)"
              :key="platform.id"
              class="platform-stack__item"
              :class="{ 'platform-stack__item--active': platform.id === selectedId }"
            >
              <UIcon :name="platform.icon" />
            </span>
          </span>
          <span>
            {{ copy.recommended }} <strong>{{ selectedPlatform.client }}</strong>
          </span>
          <span aria-hidden="true">·</span>
          <span>{{ copy.releasePage }}</span>
        </div>

        <Transition name="platform-options">
          <div
            v-if="showOptions"
            class="mx-auto mt-6 grid w-full max-w-3xl grid-cols-2 gap-2 rounded-xl border border-default bg-default p-2 shadow-lg sm:grid-cols-5"
          >
            <UButton
              v-for="platform in platforms"
              :key="platform.id"
              :color="platform.id === selectedId ? 'primary' : 'neutral'"
              :variant="platform.id === selectedId ? 'soft' : 'ghost'"
              :icon="platform.icon"
              size="lg"
              class="justify-center"
              @click="selectPlatform(platform.id)"
            >
              {{ platform.name }}
            </UButton>
          </div>
        </Transition>

        <p class="mt-4 text-center text-sm text-dimmed">
          {{ selectedPlatform.description }}
        </p>

        <UButton
          :to="localePath('/download')"
          color="neutral"
          variant="link"
          trailing-icon="i-lucide-arrow-right"
          class="mt-2"
        >
          {{ copy.allDownloads }}
        </UButton>
      </div>
    </template>
  </UPageHero>
</template>

<style scoped>
.hero-backdrop {
  position: absolute;
  z-index: -1;
  inset: 0;
  pointer-events: none;
}

.hero-backdrop::before {
  position: absolute;
  top: 15%;
  left: 50%;
  width: min(64rem, 90vw);
  height: 30rem;
  border-radius: 50%;
  background: radial-gradient(
    ellipse,
    color-mix(in srgb, var(--ui-primary) 10%, transparent),
    transparent 68%
  );
  content: '';
  filter: blur(10px);
  transform: translateX(-50%);
}

.hero-backdrop::after {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    color-mix(in srgb, var(--ui-primary) 25%, transparent) 1px,
    transparent 1px
  );
  background-size: 28px 28px;
  content: '';
  mask-image: radial-gradient(ellipse 45% 36% at 50% 38%, #000 5%, transparent 75%);
  opacity: .5;
}

.hero-title {
  text-wrap: balance;
}

.hero-title__suffix {
  margin-inline-start: .22em;
}

.hero-brand {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    135deg,
    var(--ui-primary),
    color-mix(in srgb, var(--ui-primary) 62%, var(--ui-text-highlighted))
  );
  background-clip: text;
  color: transparent;
  white-space: nowrap;
  -webkit-background-clip: text;
}

.hero-brand::after {
  position: absolute;
  right: 1%;
  bottom: -.08em;
  left: 2%;
  height: .075em;
  border-radius: 999px;
  background: color-mix(in srgb, var(--ui-primary) 58%, transparent);
  content: '';
  transform: rotate(-1deg);
}

.hero-recommendation {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  margin-top: 1.5rem;
  color: var(--ui-text-muted);
  font-size: .875rem;
}

.hero-recommendation strong {
  color: var(--ui-primary);
  font-weight: 700;
}

.platform-stack {
  display: flex;
  padding-right: .35rem;
}

.platform-stack__item {
  display: grid;
  width: 1.9rem;
  height: 1.9rem;
  place-items: center;
  margin-right: -.35rem;
  border: 1px solid var(--ui-border);
  border-radius: 50%;
  background: var(--ui-bg);
  color: var(--ui-text-muted);
  box-shadow: 0 2px 6px rgb(0 0 0 / 6%);
}

.platform-stack__item--active {
  z-index: 1;
  border-color: color-mix(in srgb, var(--ui-primary) 45%, var(--ui-border));
  background: color-mix(in srgb, var(--ui-primary) 10%, var(--ui-bg));
  color: var(--ui-primary);
}

.platform-stack__item :deep(svg) {
  width: .9rem;
  height: .9rem;
}

.platform-options-enter-active,
.platform-options-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.platform-options-enter-from,
.platform-options-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .platform-options-enter-active,
  .platform-options-leave-active {
    transition: none;
  }
}
</style>
