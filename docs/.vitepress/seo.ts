import { readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { HeadConfig, TransformContext } from 'vitepress'

export const SITE_URL = 'https://clash.guide'
export const SITE_NAME_ZH = 'Clash下载与教程'
export const SITE_NAME_EN = 'Clash Download & Guide'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`

const __dirname = dirname(fileURLToPath(import.meta.url))
const DOCS_ROOT = join(__dirname, '..')

/** Collect all .md files under docs/, return Set of routes like "guide", "en/guide", "index", "en/index". */
function collectMarkdownRoutes(dir: string, base = ''): string[] {
  const out: string[] = []
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'public' || name === 'node_modules') continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) {
      out.push(...collectMarkdownRoutes(full, base ? `${base}/${name}` : name))
    } else if (name.endsWith('.md')) {
      const route = (base ? `${base}/` : '') + name.slice(0, -3)
      out.push(route)
    }
  }
  return out
}

const ALL_ROUTES = new Set(collectMarkdownRoutes(DOCS_ROOT))

/** Convert a route ("guide", "en/index", "quickly/install") to a public URL path with .html (cleanUrls=false). */
function routeToUrlPath(route: string): string {
  if (route === 'index') return '/'
  if (route.endsWith('/index')) return '/' + route.slice(0, -'index'.length)
  return '/' + route + '.html'
}

/** Detect language for a route. */
function routeLang(route: string): 'en' | 'zh' {
  return route === 'en' || route.startsWith('en/') ? 'en' : 'zh'
}

/** Given a route, return its counterpart in the other language if it exists. */
function counterpartRoute(route: string): string | null {
  if (routeLang(route) === 'en') {
    const zh = route.replace(/^en\//, '').replace(/^en$/, 'index')
    return ALL_ROUTES.has(zh) ? zh : null
  } else {
    const en = route === 'index' ? 'en/index' : `en/${route}`
    return ALL_ROUTES.has(en) ? en : null
  }
}

/** Resolve the route key from a relativePath like "guide.md" or "en/quickly/install.md". */
function relPathToRoute(relativePath: string): string {
  return relativePath.replace(/\.md$/, '')
}

/** Build per-page head tags: canonical, og:*, twitter:*, hreflang, JSON-LD Article/Breadcrumb. */
export function buildPerPageHead(ctx: TransformContext): HeadConfig[] {
  const { pageData } = ctx
  const route = relPathToRoute(pageData.relativePath)
  const lang = routeLang(route)
  const urlPath = routeToUrlPath(route)
  const canonical = SITE_URL + urlPath

  const fm = (pageData.frontmatter || {}) as Record<string, any>
  const title: string =
    fm.title ||
    pageData.title ||
    (lang === 'en' ? SITE_NAME_EN : SITE_NAME_ZH)
  const description: string =
    fm.description ||
    pageData.description ||
    ''

  const tags: HeadConfig[] = []

  // Canonical
  tags.push(['link', { rel: 'canonical', href: canonical }])

  // hreflang
  const counterpart = counterpartRoute(route)
  if (counterpart) {
    const otherLang = routeLang(counterpart) === 'en' ? 'en' : 'zh-CN'
    const selfLang = lang === 'en' ? 'en' : 'zh-CN'
    const otherUrl = SITE_URL + routeToUrlPath(counterpart)
    tags.push(['link', { rel: 'alternate', hreflang: selfLang, href: canonical }])
    tags.push(['link', { rel: 'alternate', hreflang: otherLang, href: otherUrl }])
    // x-default points to zh root variant when available, otherwise self
    const defaultUrl = lang === 'zh' ? canonical : otherUrl
    tags.push(['link', { rel: 'alternate', hreflang: 'x-default', href: defaultUrl }])
  } else {
    tags.push(['link', { rel: 'alternate', hreflang: lang === 'en' ? 'en' : 'zh-CN', href: canonical }])
  }

  // Open Graph (per page)
  tags.push(['meta', { property: 'og:url', content: canonical }])
  tags.push(['meta', { property: 'og:title', content: title }])
  if (description) tags.push(['meta', { property: 'og:description', content: description }])
  tags.push(['meta', { property: 'og:locale', content: lang === 'en' ? 'en_US' : 'zh_CN' }])
  if (counterpart) {
    tags.push(['meta', {
      property: 'og:locale:alternate',
      content: lang === 'en' ? 'zh_CN' : 'en_US'
    }])
  }

  // Twitter (per page)
  tags.push(['meta', { name: 'twitter:url', content: canonical }])
  tags.push(['meta', { name: 'twitter:title', content: title }])
  if (description) tags.push(['meta', { name: 'twitter:description', content: description }])

  // JSON-LD: Article (skip homepage, skip 404)
  const isHome = route === 'index' || route === 'en/index'
  const is404 = route === '404' || route === 'en/404'
  if (!isHome && !is404) {
    const article: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: title,
      inLanguage: lang === 'en' ? 'en-US' : 'zh-CN',
      mainEntityOfPage: canonical,
      url: canonical,
      image: DEFAULT_OG_IMAGE,
      publisher: {
        '@type': 'Organization',
        name: 'Clash.Guide',
        logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE }
      }
    }
    if (description) article.description = description
    if (pageData.lastUpdated) {
      article.dateModified = new Date(pageData.lastUpdated).toISOString()
    }
    tags.push(['script', { type: 'application/ld+json' }, JSON.stringify(article)])

    // BreadcrumbList for nested pages
    const segments = route.split('/').filter(s => s && s !== 'index')
    if (segments.length > 1) {
      const crumbs = [
        {
          '@type': 'ListItem',
          position: 1,
          name: lang === 'en' ? 'Home' : '首页',
          item: SITE_URL + (lang === 'en' ? '/en/' : '/')
        }
      ]
      let acc = lang === 'en' ? 'en' : ''
      const startIdx = lang === 'en' ? 1 : 0
      for (let i = startIdx; i < segments.length; i++) {
        acc = acc ? `${acc}/${segments[i]}` : segments[i]
        crumbs.push({
          '@type': 'ListItem',
          position: crumbs.length + 1,
          name: segments[i],
          item: SITE_URL + routeToUrlPath(acc)
        })
      }
      tags.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs
        })
      ])
    }
  }

  return tags
}

/** For sitemap.transformItems: add hreflang alternates and lastmod. */
export function decorateSitemapItem(item: any): any {
  // item.url is like "guide.html" or "en/guide.html" or "" (for root) or "en/" depending on cleanUrls
  const urlPath = '/' + item.url
  // Derive route back from urlPath
  let route: string
  if (urlPath === '/') route = 'index'
  else if (urlPath === '/en/') route = 'en/index'
  else if (urlPath.endsWith('.html')) route = urlPath.slice(1, -'.html'.length)
  else route = urlPath.slice(1).replace(/\/$/, '')

  const counterpart = counterpartRoute(route)
  const lang = routeLang(route)

  const links: any[] = [
    { lang: lang === 'en' ? 'en' : 'zh-CN', url: SITE_URL + routeToUrlPath(route) }
  ]
  if (counterpart) {
    links.push({
      lang: routeLang(counterpart) === 'en' ? 'en' : 'zh-CN',
      url: SITE_URL + routeToUrlPath(counterpart)
    })
    links.push({
      lang: 'x-default',
      url: SITE_URL + routeToUrlPath(lang === 'zh' ? route : counterpart)
    })
  }

  // Priority heuristic
  let priority = 0.6
  if (route === 'index' || route === 'en/index') priority = 1.0
  else if (['guide', 'download', 'how-choose-service', 'en/guide', 'en/download'].includes(route)) priority = 0.9
  else if (route.split('/').length === 1) priority = 0.7

  return {
    ...item,
    links,
    priority,
    changefreq: 'weekly'
  }
}
