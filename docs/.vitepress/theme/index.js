import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Gallery from './components/Gallery.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    const { app } = ctx
    app.component('Gallery', Gallery)
  }
}