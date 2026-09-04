<template>
  <div v-if="show" class="bookmark-tip">
    <div class="content">
      <span class="icon">⭐️</span>
      <span class="text">
        {{ tipText }}
      </span>
    </div>
    <button class="close-btn" @click="close" aria-label="关闭提示">×</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)
const tipText = ref('按 Ctrl+D 收藏本站，获取最新 Clash 客户端与节点资源')

onMounted(() => {
  // Check if closed previously
  if (typeof localStorage !== 'undefined' && localStorage.getItem('bookmark-tip-closed')) {
    return
  }

  // Detect OS for better Text
  const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  if (isMac) {
    tipText.value = '按 ⌘+D 收藏本站，获取最新 Clash 客户端与节点资源'
  }

  show.value = true
})

const close = () => {
  show.value = false
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('bookmark-tip-closed', 'true')
  }
}
</script>

<style scoped>
.bookmark-tip {
  position: relative;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
  padding: 8px 16px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  z-index: 200; /* Ensure it's above other elements but below navbar if sticky */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.content {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  flex: 1;
}

.icon {
  font-size: 16px;
}

.text {
  font-weight: 500;
}

.close-btn {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
  line-height: 1;
  color: var(--vp-c-text-2);
  padding: 0 4px;
}

.close-btn:hover {
  color: var(--vp-c-text-1);
}

/* Dark mode adjustment if needed, using CSS vars handles most */
</style>
