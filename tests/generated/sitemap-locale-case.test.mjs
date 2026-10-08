import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const sitemapUrl = new URL('../../.output/public/sitemap.xml', import.meta.url)

test('sitemap preserves the configured casing of locale prefixes', async () => {
  const sitemap = await readFile(sitemapUrl, 'utf8')
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
  const chineseLocations = locations.filter(location => /\/zh-cn(?:\/|$)/i.test(location))

  assert.ok(chineseLocations.length > 0, 'expected the sitemap to contain Chinese URLs')
  assert.ok(
    chineseLocations.every(location => /\/zh-CN(?:\/|$)/.test(location)),
    `expected Chinese sitemap URLs to use /zh-CN, received:\n${chineseLocations.join('\n')}`,
  )
})
