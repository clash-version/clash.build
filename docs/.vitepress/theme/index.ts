import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import { useRouter } from 'vitepress'
import Gallery from './components/Gallery.vue'
import BookmarkTip from './components/BookmarkTip.vue'
import './custom.css'

// 声明 gtag 全局类型
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(BookmarkTip)
    })
  },
  enhanceApp(ctx) {
    // 保留默认增强
    DefaultTheme.enhanceApp?.(ctx)
    // 全局注册 Gallery 组件
    ctx.app.component('Gallery', Gallery)

    // GA4 SPA 页面追踪：监听路由变化，发送 page_view 事件
    if (typeof window !== 'undefined') {
      ctx.router.onAfterRouteChanged = (to: string) => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_path: to,
            page_title: document.title,
            page_location: window.location.origin + to
          })
        }
      }
    }
  }
} satisfies Theme
