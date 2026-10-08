import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('the generated root document contains the homepage instead of a redirect', async () => {
  const html = await readFile(new URL('../../.output/public/index.html', import.meta.url), 'utf8')

  assert.match(html, /Downloads made simple/)
  assert.match(html, /Browse all client downloads/)
  assert.doesNotMatch(html, /Redirecting to your preferred language|root-locale\.js|http-equiv="refresh"/)
})
