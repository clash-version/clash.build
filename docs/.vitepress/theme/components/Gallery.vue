<template>
  <div class="gallery" :style="inlineStyle">
    <a v-for="(img, i) in images" :key="i" :href="img.href || img.src" target="_blank" rel="noopener" class="gallery__item">
      <img :src="img.src" :alt="img.alt || defaultAlt(i)" loading="lazy" />
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  min: { type: Number, default: 220 },
  gap: { type: Number, default: 12 },
  radius: { type: Number, default: 8 },
})

const min = computed(() => props.min)
const gap = computed(() => props.gap)
const radius = computed(() => props.radius)

const inlineStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${min.value}px, 1fr))`,
  gap: `${gap.value}px`,
  ['--gallery-radius']: `${radius.value}px`,
}))

const defaultAlt = (i) => `image-${i + 1}`
</script>

<style scoped>
.gallery__item {
  display: block;
}
.gallery__item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--gallery-radius, 8px);
  background: #f6f7f9;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}
</style>

<style>
.gallery {
  --gallery-radius: 8px;
}
</style>
