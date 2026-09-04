<script setup lang="ts">
import { downloadCatalog, type DownloadClient } from '../../data/downloads'
import { detectDevicePlatform, platformNames, platformNamesEn, type PlatformId } from '../../utils/platform'

const props = defineProps<{
  platform: PlatformId
}>()

const { locale, localePath } = useDocusI18n()
const detectedPlatform = ref<PlatformId>()
const isChinese = computed(() => locale.value === 'zh-CN')
const category = computed(() => downloadCatalog[props.platform])
const recommendedClient = computed(() => category.value.clients[0])
const otherClients = computed(() => category.value.clients.slice(1))
const hasMismatch = computed(() => detectedPlatform.value && detectedPlatform.value !== props.platform)
const localizedPlatformNames = computed(() => isChinese.value ? platformNames : platformNamesEn)

const copy = computed(() => isChinese.value
  ? {
      detected: '当前检测到你正在使用',
      mismatch: `这里展示的是 ${category.value.name} 客户端。为避免下载错误，建议切换到与你当前设备对应的页面。`,
      goTo: '前往',
      download: '下载',
      priority: '优先推荐',
      startHere: '不知道怎么选，就从这个开始',
      recommended: '推荐',
      source: '来源',
      localMirror: '本地镜像',
      alternatives: '其他可选客户端',
      alternativesDescription: '它们侧重点不同，可根据界面习惯和跨平台需求选择。',
      appStoreDownload: 'App Store 下载',
      githubDownload: 'GitHub 下载',
      localDownload: '本地下载',
      installationGuide: '安装教程',
      nextSteps: '下载完成后',
      allGuides: '安装指南',
      quickStart: '快速开始',
      importConfiguration: '导入配置',
      troubleshooting: '故障排查',
    }
  : {
      detected: 'We detected that you are using',
      mismatch: `This page contains ${category.value.name} clients. Switch to the page for your current device to avoid downloading the wrong installer.`,
      goTo: 'Go to',
      download: 'downloads',
      priority: 'Top recommendation',
      startHere: 'Not sure what to choose? Start here',
      recommended: 'Recommended',
      source: 'Source',
      localMirror: 'Local mirror',
      alternatives: 'Other clients',
      alternativesDescription: 'Choose an alternative based on interface preference and cross-platform requirements.',
      appStoreDownload: 'App Store Download',
      githubDownload: 'GitHub Download',
      localDownload: 'Local Download',
      installationGuide: 'Installation Guide',
      nextSteps: 'After downloading',
      allGuides: 'Browse all client installation guides',
      quickStart: 'Quick Start',
      importConfiguration: 'Import a Configuration',
      troubleshooting: 'Troubleshooting',
    })

function getDescription(client: DownloadClient) {
  return isChinese.value ? client.description : client.descriptionEn
}

function getSuitableFor(client: DownloadClient) {
  return isChinese.value ? client.suitableFor : client.suitableForEn
}

function getTags(client: DownloadClient) {
  return isChinese.value ? client.tags : client.tagsEn
}

function getOfficialDownloadLabel(client: DownloadClient) {
  if (client.source === 'clash.md') return isChinese.value ? '前往官网' : 'Visit Website'
  return client.source === 'App Store' ? copy.value.appStoreDownload : copy.value.githubDownload
}

function getOfficialDownloadIcon(client: DownloadClient) {
  if (client.source === 'clash.md') return 'i-lucide-link'
  return client.source === 'App Store' ? 'i-simple-icons-apple' : 'i-simple-icons-github'
}

onMounted(() => {
  detectedPlatform.value = detectDevicePlatform()
})
</script>

<template>
  <div class="not-prose space-y-10">
    <UAlert
      v-if="hasMismatch && detectedPlatform"
      color="warning"
      variant="soft"
      icon="i-lucide-monitor-smartphone"
      :title="`${copy.detected} ${localizedPlatformNames[detectedPlatform]}`"
      :description="copy.mismatch"
    >
      <template #actions>
        <UButton
          :to="localePath(`/download/${detectedPlatform}`)"
          color="warning"
          variant="solid"
          size="sm"
          trailing-icon="i-lucide-arrow-right"
        >
          {{ copy.goTo }} {{ localizedPlatformNames[detectedPlatform] }} {{ copy.download }}
        </UButton>
      </template>
    </UAlert>

    <section aria-labelledby="recommended-client">
      <div class="mb-4 flex items-center justify-between gap-4">
        <div>
          <div class="mb-1 flex items-center gap-2 text-sm font-semibold text-primary">
            <UIcon name="i-lucide-sparkles" class="size-4" />
            {{ copy.priority }}
          </div>
          <h2 id="recommended-client" class="text-xl font-semibold text-highlighted">
            {{ copy.startHere }}
          </h2>
        </div>
        <UBadge color="neutral" variant="subtle" size="lg">
          {{ category.name }}
        </UBadge>
      </div>

      <div class="relative overflow-hidden rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
        <div class="download-card-glow" aria-hidden="true" />

        <div class="relative flex flex-col gap-7">
          <div class="flex min-w-0 items-start gap-4 sm:gap-5">
            <div class="grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-default text-primary shadow-sm sm:size-16">
              <UIcon :name="recommendedClient.icon" class="size-7 sm:size-8" />
            </div>

            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-2xl font-bold text-highlighted sm:text-3xl">
                  {{ recommendedClient.name }}
                </h3>
                <UBadge color="primary" variant="solid">
                  {{ copy.recommended }}
                </UBadge>
              </div>
              <p class="mt-2 max-w-2xl text-base leading-7 text-muted">
                {{ getDescription(recommendedClient) }}
              </p>
              <p class="mt-2 flex items-center gap-1.5 text-sm font-medium text-toned">
                <UIcon name="i-lucide-user-check" class="size-4 text-primary" />
                {{ getSuitableFor(recommendedClient) }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in getTags(recommendedClient)"
                  :key="tag"
                  color="neutral"
                  variant="outline"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 border-t border-primary/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span class="text-center text-xs text-dimmed sm:text-left">
              {{ copy.source }}: {{ recommendedClient.source }}<template v-if="recommendedClient.localDownloadUrl && recommendedClient.downloadUrl"> · {{ copy.localMirror }}</template>
            </span>
            <div class="grid gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-end">
              <UButton
                v-if="recommendedClient.guideSlug"
                :to="localePath(`/client-guides/${recommendedClient.guideSlug}`)"
                size="lg"
                color="primary"
                variant="soft"
                leading-icon="i-lucide-book-open-check"
                trailing-icon="i-lucide-arrow-right"
                class="justify-center"
              >
                {{ copy.installationGuide }}
              </UButton>
              <UButton
                v-if="recommendedClient.downloadUrl"
                :to="recommendedClient.downloadUrl"
                target="_blank"
                size="lg"
                color="neutral"
                variant="outline"
                :leading-icon="getOfficialDownloadIcon(recommendedClient)"
                trailing-icon="i-lucide-arrow-up-right"
                class="justify-center"
              >
                {{ getOfficialDownloadLabel(recommendedClient) }}
              </UButton>
              <UButton
                v-if="recommendedClient.localDownloadUrl"
                :to="recommendedClient.localDownloadUrl"
                target="_blank"
                size="lg"
                leading-icon="i-lucide-download"
                class="justify-center"
              >
                {{ copy.localDownload }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="otherClients.length" aria-labelledby="other-clients">
      <div class="mb-4">
        <h2 id="other-clients" class="text-xl font-semibold text-highlighted">
          {{ copy.alternatives }}
        </h2>
        <p class="mt-1 text-sm text-muted">
          {{ copy.alternativesDescription }}
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-2">
        <UCard
          v-for="client in otherClients"
          :key="client.id"
          class="group h-full transition-colors hover:border-primary/35"
        >
          <div class="flex h-full flex-col">
            <div class="flex items-start gap-4">
              <div class="grid size-11 shrink-0 place-items-center rounded-xl border border-default bg-elevated text-muted transition-colors group-hover:text-primary">
                <UIcon :name="client.icon" class="size-5" />
              </div>
              <div class="min-w-0">
                <h3 class="text-lg font-semibold text-highlighted">
                  {{ client.name }}
                </h3>
                <p class="mt-1 text-sm leading-6 text-muted">
                  {{ getDescription(client) }}
                </p>
              </div>
            </div>

            <div class="mt-4 flex flex-wrap gap-1.5">
              <UBadge
                v-for="tag in getTags(client)"
                :key="tag"
                color="neutral"
                variant="subtle"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>

            <div class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-default pt-4">
              <span class="text-xs text-dimmed">
                {{ client.source }}<template v-if="client.localDownloadUrl && client.downloadUrl"> · {{ copy.localMirror }}</template>
              </span>
              <div class="flex flex-wrap items-center justify-end gap-2">
                <UButton
                  v-if="client.guideSlug"
                  :to="localePath(`/client-guides/${client.guideSlug}`)"
                  color="primary"
                  variant="soft"
                  size="sm"
                  leading-icon="i-lucide-book-open-check"
                  trailing-icon="i-lucide-arrow-right"
                >
                  {{ copy.installationGuide }}
                </UButton>
                <UButton
                  v-if="client.downloadUrl"
                  :to="client.downloadUrl"
                  target="_blank"
                  color="neutral"
                  variant="outline"
                  size="sm"
                  :leading-icon="getOfficialDownloadIcon(client)"
                  trailing-icon="i-lucide-arrow-up-right"
                >
                  {{ getOfficialDownloadLabel(client) }}
                </UButton>
                <UButton
                  v-if="client.localDownloadUrl"
                  :to="client.localDownloadUrl"
                  target="_blank"
                  size="sm"
                  leading-icon="i-lucide-download"
                >
                  {{ copy.localDownload }}
                </UButton>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <section aria-labelledby="download-next-steps">
      <h2 id="download-next-steps" class="mb-4 text-xl font-semibold text-highlighted">
        {{ copy.nextSteps }}
      </h2>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <UButton
          :to="localePath('/client-guides')"
          color="neutral"
          variant="outline"
          size="lg"
          leading-icon="i-lucide-book-open-check"
          trailing-icon="i-lucide-arrow-right"
          class="justify-between"
        >
          {{ copy.allGuides }}
        </UButton>
        <UButton
          :to="localePath('/installation-guide/quick-start')"
          color="neutral"
          variant="outline"
          size="lg"
          leading-icon="i-lucide-rocket"
          trailing-icon="i-lucide-arrow-right"
          class="justify-between"
        >
          {{ copy.quickStart }}
        </UButton>
        <UButton
          :to="localePath('/installation-guide/import-configuration')"
          color="neutral"
          variant="outline"
          size="lg"
          leading-icon="i-lucide-link"
          trailing-icon="i-lucide-arrow-right"
          class="justify-between"
        >
          {{ copy.importConfiguration }}
        </UButton>
        <UButton
          :to="localePath('/installation-guide/troubleshooting')"
          color="neutral"
          variant="outline"
          size="lg"
          leading-icon="i-lucide-circle-alert"
          trailing-icon="i-lucide-arrow-right"
          class="justify-between"
        >
          {{ copy.troubleshooting }}
        </UButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.download-card-glow {
  position: absolute;
  top: -8rem;
  right: -6rem;
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--ui-primary) 15%, transparent), transparent 68%);
  pointer-events: none;
}
</style>
