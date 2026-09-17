import assert from 'node:assert/strict'
import test from 'node:test'

import { getRootRedirectPath, selectRootLocale } from '../public/root-locale.js'

test('selectRootLocale uses a supported saved language first', () => {
  assert.equal(selectRootLocale('zh-CN', ['en-US']), 'zh-CN')
  assert.equal(selectRootLocale('en', ['zh-CN']), 'en')
})

test('selectRootLocale selects the first supported browser language', () => {
  assert.equal(selectRootLocale('', ['ja-JP', 'zh-Hans', 'en-US']), 'zh-CN')
  assert.equal(selectRootLocale('', ['en-GB', 'zh-CN']), 'en')
})

test('selectRootLocale falls back to English', () => {
  assert.equal(selectRootLocale('invalid', ['ja-JP']), 'en')
  assert.equal(selectRootLocale('', []), 'en')
})

test('getRootRedirectPath reads the saved locale cookie', () => {
  assert.equal(
    getRootRedirectPath('theme=dark; i18n_redirected=zh-CN; consent=yes', ['en-US']),
    '/zh-CN',
  )
  assert.equal(getRootRedirectPath('', ['en-GB']), '/en')
})
