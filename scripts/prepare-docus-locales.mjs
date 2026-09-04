import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const patches = [
  {
    file: '../node_modules/docus/content.config.ts',
    replacements: [
      [
        "const code = (typeof locale === 'string' ? locale : locale.code).replace('-', '_')",
        "const localeCode = typeof locale === 'string' ? locale : locale.code\n    const code = localeCode.replaceAll('-', '_')",
      ],
      ['docsFolderExists(options.rootDir, code)', 'docsFolderExists(options.rootDir, localeCode)'],
      ['include: `${code}/index.md`', 'include: `${localeCode}/index.md`'],
      ["include: hasLocaleDocs ? `${code}/docs/**` : `${code}/**/*`", "include: hasLocaleDocs ? `${localeCode}/docs/**` : `${localeCode}/**/*`"],
      ["prefix: hasLocaleDocs ? `/${code}/docs` : `/${code}`", "prefix: hasLocaleDocs ? `/${localeCode}/docs` : `/${localeCode}`"],
      ['exclude: [`${code}/index.md`]', 'exclude: [`${localeCode}/index.md`]'],
    ],
  },
  {
    file: '../node_modules/docus/app/app.vue',
    replacements: [
      ['`docs_${locale.value}`', "`docs_${locale.value.replaceAll('-', '_')}`"],
      [
        "const nuxtUiLocale = computed(() => nuxtUiLocales[locale.value as keyof typeof nuxtUiLocales] || nuxtUiLocales.en)",
        "const nuxtUiLocale = computed(() => {\n  const localeKey = locale.value.toLowerCase().replaceAll('-', '_') as keyof typeof nuxtUiLocales\n  return nuxtUiLocales[localeKey] || nuxtUiLocales.en\n})",
      ],
      [
        "const { data: navigation } = await useAsyncData(() => `navigation_${collectionName.value}`, () => queryCollectionNavigation(collectionName.value as keyof PageCollections), {\n  transform: (data: ContentNavigationItem[]) => transformNavigation(data, isEnabled.value, locale.value),\n  watch: [locale],\n})",
        "const { data: rawNavigation } = await useAsyncData(() => `navigation_${collectionName.value}`, () => queryCollectionNavigation(collectionName.value as keyof PageCollections), {\n  watch: [locale],\n})\nconst navigation = computed(() =>\n  transformNavigation(rawNavigation.value || [], isEnabled.value, locale.value),\n)",
      ],
    ],
  },
  {
    file: '../node_modules/docus/app/pages/[[lang]]/[...slug].vue',
    replacements: [
      ['`docs_${locale.value}`', "`docs_${locale.value.replaceAll('-', '_')}`"],
      ['.path(route.path).first()', '.path(route.path.toLowerCase()).first()'],
      [
        'queryCollectionItemSurroundings(collectionName.value as keyof Collections, route.path, {',
        'queryCollectionItemSurroundings(collectionName.value as keyof Collections, route.path.toLowerCase(), {',
      ],
      [
        "if (!page.value) {\n  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })\n}",
        "if (!page.value) {\n  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })\n}\n\nconst contentLocalePrefix = `/${locale.value.toLowerCase()}`\nconst canonicalizeContentPath = (path: string) => {\n  const normalizedPath = path.toLowerCase()\n  if (normalizedPath !== contentLocalePrefix && !normalizedPath.startsWith(`${contentLocalePrefix}/`)) return path\n  return `/${locale.value}${path.slice(contentLocalePrefix.length)}`\n}\nconst localizedSurround = computed(() => surround.value?.map(item =>\n  item && typeof item.path === 'string'\n    ? { ...item, path: canonicalizeContentPath(item.path), locale: false }\n    : item,\n))",
      ],
      [
        'findPageHeadline(navigation?.value, page.value?.path)',
        'findPageHeadline(navigation?.value, route.path)',
      ],
      [
        "findPageBreadcrumbs(navigation?.value, page.value?.path || '')",
        'findPageBreadcrumbs(navigation?.value, route.path)',
      ],
      [':surround="surround"', ':surround="localizedSurround"'],
    ],
  },
  {
    file: '../node_modules/docus/app/error.vue',
    replacements: [['`docs_${locale.value}`', "`docs_${locale.value.replaceAll('-', '_')}`"]],
  },
  {
    file: '../node_modules/docus/app/components/app/AppSearch.vue',
    replacements: [['`docs_${locale.value}`', "`docs_${locale.value.replaceAll('-', '_')}`"]],
  },
  {
    file: '../node_modules/docus/app/templates/landing.vue',
    replacements: [
      ['`landing_${locale.value}`', "`landing_${locale.value.replaceAll('-', '_')}`"],
      ['.path(route.path).first()', '.path(route.path.toLowerCase()).first()'],
    ],
  },
  {
    file: '../node_modules/docus/app/utils/navigation.ts',
    replacements: [
      [
        "    const localeResult = data.find(item => item.path === `/${locale}`)?.children || data\n    return localeResult.find(item => item.path === `/${locale}/docs`)?.children || localeResult",
        "    const normalizedLocale = locale.toLowerCase()\n    const localePrefix = `/${normalizedLocale}`\n    const localeRoot = data.find(item => item.path.toLowerCase() === localePrefix)\n    const hasDifferentLocaleRoot = data.some(item =>\n      item.path.toLowerCase() !== localePrefix\n      && item.path.split('/').filter(Boolean).length === 1,\n    )\n\n    // Nuxt temporarily carries the previous async-data value into the new\n    // reactive key during a locale switch. Do not reinterpret that previous\n    // locale tree as the current locale's navigation.\n    if (!localeRoot && hasDifferentLocaleRoot) return []\n\n    const sourceLocalePrefix = localeRoot?.path.toLowerCase() || localePrefix\n    const localeResult = localeRoot ? (localeRoot.children || []) : data\n    const result = localeResult.find(item => item.path.toLowerCase() === `${sourceLocalePrefix}/docs`)?.children || localeResult\n    const canonicalizeLocalePaths = (items: ContentNavigationItem[]): ContentNavigationItem[] => items.map((item) => {\n      const normalizedPath = item.path.toLowerCase()\n      const path = normalizedPath === sourceLocalePrefix || normalizedPath.startsWith(`${sourceLocalePrefix}/`)\n        ? `/${locale}${item.path.slice(sourceLocalePrefix.length)}`\n        : item.path\n\n      return {\n        ...item,\n        path,\n        locale: false,\n        children: item.children ? canonicalizeLocalePaths(item.children) : undefined,\n      }\n    })\n\n    return canonicalizeLocalePaths(result)",
      ],
    ],
  },
  {
    file: '../node_modules/@nuxt/content/dist/features/llms/runtime/server/routes/raw/[...slug].md.get.js',
    replacements: [['.path(path).first()', '.path(path.toLowerCase()).first()']],
  },
  {
    file: '../node_modules/docus/server/utils/content.ts',
    replacements: [
      ['`docs_${locale}`', "`docs_${locale.replaceAll('-', '_')}`"],
      ['`docs_${l}`', "`docs_${l.replaceAll('-', '_')}`"],
      ['`docs_${firstSegment}`', "`docs_${firstSegment.replaceAll('-', '_')}`"],
    ],
  },
  {
    file: '../node_modules/docus/server/routes/sitemap.xml.ts',
    replacements: [
      ['`landing_${locale}`', "`landing_${locale.replaceAll('-', '_')}`"],
      ["const siteUrl = inferSiteURL() || ''", "const siteUrl = getSiteConfig(event).url || inferSiteURL() || ''"],
    ],
  },
]

for (const patch of patches) {
  const path = fileURLToPath(new URL(patch.file, import.meta.url))
  let source = await readFile(path, 'utf8')
  let changed = false

  for (const [before, after] of patch.replacements) {
    if (source.includes(after)) continue
    if (!source.includes(before)) {
      throw new Error(`Unable to apply Docus i18n compatibility patch to ${patch.file}`)
    }

    source = source.replaceAll(before, after)
    changed = true
  }

  if (changed) await writeFile(path, source)
}
