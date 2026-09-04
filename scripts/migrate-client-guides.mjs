import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const guides = [
  {
    slug: 'clash-verge',
    label: { zh: 'Clash Verge Rev', en: 'Clash Verge Rev' },
    icon: 'i-lucide-panels-top-left',
    source: { zh: 'docs/clients/windows/clash-verge.md', en: 'docs/en/clash-verge.md' },
  },
  {
    slug: 'flclash',
    label: { zh: 'FlClash', en: 'FlClash' },
    icon: 'i-lucide-layers-3',
    source: { zh: 'docs/clients/windows/flclash.md', en: 'docs/en/flclash.md' },
  },
  {
    slug: 'hiddify',
    label: { zh: 'Hiddify', en: 'Hiddify' },
    icon: 'i-lucide-layers-3',
    source: { zh: 'docs/clients/windows/hiddify.md', en: 'docs/en/hiddify.md' },
  },
  {
    slug: 'clashmi',
    label: { zh: 'Clash Mi', en: 'Clash Mi' },
    icon: 'i-lucide-smartphone',
    source: { zh: 'docs/clients/windows/clashmi.md', en: 'docs/en/clashmi.md' },
  },
  {
    slug: 'clash-for-windows',
    label: { zh: 'Clash for Windows', en: 'Clash for Windows' },
    icon: 'i-simple-icons-windows11',
    source: { zh: 'docs/clients/windows/clash-for-windows.md', en: 'docs/en/clash-for-windows.md' },
  },
  {
    slug: 'clashx',
    label: { zh: 'ClashX', en: 'ClashX' },
    icon: 'i-simple-icons-apple',
    source: { zh: 'docs/clients/macos/clashx.md', en: 'docs/en/clashx.md' },
  },
  {
    slug: 'clash-meta-for-android',
    label: { zh: 'Clash Meta for Android', en: 'Clash Meta for Android' },
    icon: 'i-simple-icons-android',
    source: { zh: 'docs/clients/android/clash-meta.md', en: 'docs/en/clash-meta-for-android.md' },
  },
  {
    slug: 'clash-for-android',
    label: { zh: 'Clash for Android', en: 'Clash for Android' },
    icon: 'i-simple-icons-android',
    source: { zh: 'docs/clients/android/clash-for-android.md', en: 'docs/en/clash-for-android.md' },
  },
  {
    slug: 'hiddify-android',
    label: { zh: 'Hiddify Android', en: 'Hiddify Android' },
    icon: 'i-simple-icons-android',
    source: { zh: 'docs/clients/android/hiddify.md' },
    custom: {
      en: {
        title: 'Hiddify Android Download and Installation Guide',
        description: 'Download Hiddify for Android, import a subscription, start the VPN connection, and enable TUN mode.',
        body: `Hiddify is a cross-platform proxy client with an Android build that also works on compatible HarmonyOS devices.

[Open the official releases page ↗](https://github.com/hiddify/hiddify-next/releases)

## Download Hiddify for Android

| Platform | Version | Mirror | GitHub |
| --- | --- | --- | --- |
| **Android** | \`2.5.7\` | [Download](https://github.clash.guide/clash-clients/Hiddify-Android-universal.apk) | [Download](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Android-universal.apk) |

::note
Hiddify is a client, not a proxy service. You still need a valid subscription URL or configuration file.
::

## Install and configure

1. Download and install the APK. If Android blocks the installation, allow installation from the browser or file manager you used.
2. Open Hiddify and add the subscription URL supplied by your provider.
3. Select the imported profile and start the connection. Approve the Android VPN prompt when it appears.

::div{.grid.gap-4.sm:grid-cols-2}
![Import a subscription in Hiddify Android](/images/hiddify-android/install1.webp)

![Start Hiddify Android](/images/hiddify-android/install2.webp)
::

## Enable TUN mode

Open the network or advanced settings and enable TUN mode. Android may request VPN permission again.

::div{.grid.gap-4.sm:grid-cols-2}
![Hiddify Android TUN settings](/images/hiddify-android/install2-tun.webp)

![Hiddify Android TUN status](/images/hiddify-android/install3-tun.webp)
::

If the configuration cannot be downloaded or the connection does not work, follow the [troubleshooting guide](/en/installation-guide/troubleshooting).
`,
      },
    },
  },
  {
    slug: 'shadowrocket',
    label: { zh: 'Shadowrocket（小火箭）', en: 'Shadowrocket' },
    icon: 'i-simple-icons-apple',
    source: { zh: 'docs/clients/ios/shadowrocket.md', en: 'docs/en/shadowrocket.md' },
    title: { zh: 'Shadowrocket（小火箭）安装教程', en: 'Shadowrocket Installation Guide' },
  },
  {
    slug: 'potatso',
    label: { zh: 'Potatso', en: 'Potatso' },
    icon: 'i-simple-icons-apple',
    source: { zh: 'docs/clients/ios/potatso.md', en: 'docs/en/potatso.md' },
  },
  {
    slug: 'ios-clash',
    label: { zh: 'iOS 客户端总览', en: 'iOS Client Overview' },
    icon: 'i-simple-icons-apple',
    source: { zh: 'docs/clients/ios/ios-clash.md' },
    custom: {
      en: {
        title: 'Clash-Compatible Clients for iPhone and iPad',
        description: 'Choose and install a Clash-compatible iOS client, then import a subscription on iPhone or iPad.',
        body: `Clash does not provide an official iOS app. On iPhone and iPad, use a compatible client such as Shadowrocket, Stash, Potatso, or Clash Mi.

## Before downloading

Some clients are not available in every App Store region. You may need an Apple ID from a supported region. Only sign an unfamiliar account into the App Store; do not sign it into iCloud.

## Recommended clients

| Client | Price | Best for | Download |
| --- | --- | --- | --- |
| **Shadowrocket** | Paid | A straightforward subscription and rule workflow | [App Store](https://apps.apple.com/us/app/shadowrocket/id932747118) |
| **Stash** | Paid | More complete Clash-compatible rules and profiles | [App Store](https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349) |
| **Potatso** | Free / Paid | A simpler interface for first-time users | [App Store](https://apps.apple.com/us/app/potatso/id1239860606) |
| **Clash Mi** | Free | A similar experience across desktop and mobile | [View guide](/en/client-guides/clashmi) |

## Import a subscription

1. Copy the subscription URL supplied by your provider.
2. Open the client and choose the option to add a subscription or download a profile from a URL.
3. Paste the URL, save the profile, and select a node or policy group.
4. Start the connection and approve the iOS VPN configuration prompt.

For app-specific steps, see the [Shadowrocket guide](/en/client-guides/shadowrocket) or [Potatso guide](/en/client-guides/potatso).
`,
      },
    },
  },
  {
    slug: 'clash-box',
    label: { zh: 'Clash Box', en: 'Clash Box' },
    icon: 'i-lucide-box',
    source: { zh: 'docs/clients/router/clashbox.md', en: 'docs/en/clash-box.md' },
  },
  {
    slug: 'openclash',
    label: { zh: 'OpenClash', en: 'OpenClash' },
    icon: 'i-lucide-box',
    source: { zh: 'docs/clients/router/openclash.md', en: 'docs/en/openclash.md' },
  },
  {
    slug: 'clash-for-linux',
    label: { zh: 'Clash for Linux', en: 'Clash for Linux' },
    icon: 'i-simple-icons-linux',
    source: { zh: 'docs/clash-for-linux.md', en: 'docs/en/clash-for-linux.md' },
  },
  {
    slug: 'zyt-clash',
    label: { zh: '卓易通安装 Clash', en: 'Install Clash with ZhuoYiTong' },
    icon: 'i-lucide-smartphone',
    source: { zh: 'docs/zyt-clash.md', en: 'docs/en/zyt-clash.md' },
  },
]

const clientRoutes = new Map(guides.map(guide => [`/${guide.slug}`, guide.slug]))
clientRoutes.set('/showadrecket', 'shadowrocket')
clientRoutes.set('/clash-box', 'clash-box')

function unquote(value) {
  const trimmed = value.trim()
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

function readFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { attributes: {}, body: source }

  const attributes = {}
  for (const key of ['title', 'description']) {
    const value = match[1].match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))
    if (value) attributes[key] = unquote(value[1])
  }
  return { attributes, body: match[2] }
}

function galleryToMarkdown(block) {
  const images = []
  const imagePattern = /\{\s*src:\s*["']([^"']+)["'],\s*alt:\s*["']([^"']*)["']\s*\}/g
  let match
  while ((match = imagePattern.exec(block))) images.push(`![${match[2]}](${match[1]})`)
  if (!images.length) return ''
  return `::div{.grid.gap-4.sm:grid-cols-2}\n${images.join('\n\n')}\n::`
}

function localizedRoute(url, locale) {
  if (!url.startsWith('/') || url.startsWith('/images/')) return url

  const [rawPath, hash] = url.split('#', 2)
  let path = rawPath
  if (path.startsWith('/en/')) path = path.slice(3)
  else if (path === '/en') path = '/'

  const prefix = locale === 'zh' ? '/zh-CN' : '/en'
  const clientSlug = clientRoutes.get(path)
  if (clientSlug) return `${prefix}/client-guides/${clientSlug}`

  if (path === '/guide' && hash && /tun|ipv6|规则|rule|dns|透明代理/i.test(hash)) {
    return `${prefix}/installation-guide/advanced-settings`
  }

  const routes = {
    '/download': '/download',
    '/guide': '/installation-guide/quick-start',
    '/quickly/install': '/installation-guide/quick-start',
    '/quickly/import': '/installation-guide/import-configuration',
    '/quickly/select-node': '/installation-guide/select-node',
    '/quickly/start': '/installation-guide/enable-proxy',
    '/quickly/settings': '/installation-guide/advanced-settings',
    '/troubleshooting': '/installation-guide/troubleshooting',
    '/proxy-modes': '/installation-guide/advanced-settings',
    '/how-choose-service': '/installation-guide/quick-start',
  }

  if (routes[path]) return `${prefix}${routes[path]}`
  return hash ? `${url}` : url
}

function transformBody(body, locale) {
  let result = body
    .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '')
    .replace(/<Gallery\s+:images='([\s\S]*?)'\s*\/>/g, (_, block) => galleryToMarkdown(block))
    .replace(/<Badge\s+type="[^"]+"\s+text="([^"]+)"\s*\/>/g, '`$1`')
    .replace(/<img\s+src="([^"]+)"\s+alt="([^"]*)"[^>]*\/>/g, '![$2]($1)')
    .replace(/<div\s+style="[^"]*">/g, '::div{.grid.gap-4.sm:grid-cols-2}')
    .replace(/<\/div>/g, '::')
    .replace(/^:::\s*(tip|warning|info|danger|details)\s*(.*)$/gm, (_, type, title) => title ? `::${type}\n**${title}**` : `::${type}`)
    .replace(/^:::\s*$/gm, '::')
    .replace(/^\s*#\s+.+\n+/, '')
    .replace(/\/images\/clash-meta-for-android\/copy-install([1-6])\.webp/g, '/images/clash-meta-for-android/copy-install$1.png')
    .replace(/\/images\/clash-meta-for-android\/install-latest\.png/g, '/images/clash-meta-for-android/copy-latest.png')
    .replace(/\/images\/clash-box\/install3\.jpeg/g, '/images/clash-box/install3.webp')

  result = result.replace(/\]\((\/[^)\s]+)(\s+"[^"]*")?\)/g, (_, url, label = '') => {
    return `](${localizedRoute(url, locale)}${label})`
  })

  return result
    .replace(/^::\n(?=#+\s)/gm, '::\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function buildFrontmatter({ title, description }) {
  return `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
navigation: false
seo:
  title: ${JSON.stringify(title)}
  description: ${JSON.stringify(description)}
---`
}

function buildIndex(locale) {
  const isChinese = locale === 'zh'
  const prefix = isChinese ? '/zh-CN' : '/en'
  const rows = guides.map((guide) => {
    const label = guide.label[locale]
    return `| [${label}](${prefix}/client-guides/${guide.slug}) | ${isChinese ? '查看下载、安装、配置导入和代理开启步骤' : 'Download, install, import a configuration, and start the proxy'} |`
  })

  const title = isChinese ? '客户端安装指南' : 'Client Installation Guides'
  const description = isChinese
    ? '查看各平台 Clash 兼容客户端的下载、安装和配置教程。'
    : 'Download, install, and configure Clash-compatible clients on each supported platform.'

  return `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
navigation: false
seo:
  title: ${JSON.stringify(title)}
  description: ${JSON.stringify(description)}
---

${isChinese ? '这里汇总了旧站已有的客户端安装教程。跨平台客户端只保留一份指南，避免在不同系统分类下重复显示。' : 'These guides consolidate the client tutorials from the previous site. Cross-platform clients use one shared guide instead of repeated platform copies.'}

| ${isChinese ? '客户端' : 'Client'} | ${isChinese ? '内容' : 'Guide contents'} |
| --- | --- |
${rows.join('\n')}
`
}

async function writeGuides(locale) {
  const localeFolder = locale === 'zh' ? 'zh-CN' : 'en'
  const destination = join(projectRoot, 'content', localeFolder, '2.client-guides')
  await mkdir(destination, { recursive: true })

  const navigation = locale === 'zh'
    ? 'title: 客户端安装指南\nicon: i-lucide-book-open-check\nnavigation: false\n'
    : 'title: Client Installation Guides\nicon: i-lucide-book-open-check\nnavigation: false\n'
  await writeFile(join(destination, '.navigation.yml'), navigation)
  await writeFile(join(destination, '1.index.md'), buildIndex(locale))

  for (const [index, guide] of guides.entries()) {
    const custom = guide.custom?.[locale]
    let title
    let description
    let body

    if (custom) {
      title = custom.title
      description = custom.description
      body = custom.body.trim()
    } else {
      const sourcePath = join(projectRoot, guide.source[locale])
      const source = await readFile(sourcePath, 'utf8')
      const parsed = readFrontmatter(source)
      title = guide.title?.[locale] || parsed.attributes.title || guide.label[locale]
      description = parsed.attributes.description || (locale === 'zh'
        ? `${guide.label[locale]} 下载、安装和配置教程。`
        : `${guide.label[locale]} download, installation, and configuration guide.`)
      body = transformBody(parsed.body, locale)
    }

    const content = `${buildFrontmatter({
      title,
      description,
    })}\n\n${body}\n`

    await writeFile(join(destination, `${index + 2}.${guide.slug}.md`), content)
  }
}

async function copyImages(sourceDirectory, destinationDirectory) {
  await mkdir(destinationDirectory, { recursive: true })
  for (const entry of await readdir(sourceDirectory, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') continue
    const source = join(sourceDirectory, entry.name)
    const destination = join(destinationDirectory, entry.name)
    if (entry.isDirectory()) await copyImages(source, destination)
    else if (extname(entry.name)) await copyFile(source, destination)
  }
}

await Promise.all([writeGuides('zh'), writeGuides('en')])
await copyImages(join(projectRoot, 'docs/public/images'), join(projectRoot, 'public/images'))
