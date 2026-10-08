import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import test from 'node:test'

const host = '127.0.0.1'
const port = 43000 + (process.pid % 10000)
const baseUrl = `http://${host}:${port}`

async function waitForServer(processOutput) {
  const deadline = Date.now() + 120_000

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl, { redirect: 'manual', signal: AbortSignal.timeout(5_000) })
      if (response.status < 500) return
    } catch {
      // The dev server is still starting.
    }

    await new Promise(resolve => setTimeout(resolve, 250))
  }

  throw new Error(`Nuxt dev server did not start.\n${processOutput.join('')}`)
}

test('the root route serves the homepage without language redirects', { timeout: 150_000 }, async (t) => {
  const processOutput = []
  const server = spawn(process.execPath, ['node_modules/nuxt/bin/nuxt.mjs', 'dev', '--host', host, '--port', String(port)], {
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'test' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  server.stdout.on('data', chunk => processOutput.push(chunk.toString()))
  server.stderr.on('data', chunk => processOutput.push(chunk.toString()))

  t.after(async () => {
    server.kill('SIGTERM')
    await Promise.race([
      once(server, 'exit'),
      new Promise(resolve => setTimeout(resolve, 5_000)),
    ])
  })

  await waitForServer(processOutput)

  await t.test('renders the homepage even with a saved Chinese locale', async () => {
    const response = await fetch(baseUrl, {
      redirect: 'manual',
      headers: { cookie: 'i18n_redirected=zh-CN', 'accept-language': 'zh-CN,zh;q=0.9' },
    })
    const body = await response.text()

    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type') ?? '', /^text\/html/)
    assert.equal(response.headers.get('location'), null)
    assert.match(body, /Downloads made simple/)
    assert.match(body, /Browse all client downloads/)
    assert.doesNotMatch(body, /Redirecting to your preferred language|root-locale\.js|http-equiv="refresh"/)
  })

  await t.test('keeps the English and Chinese homepages available', async () => {
    for (const [locale, heading] of [['en', 'Downloads made simple'], ['zh-CN', '让下载变得简单']]) {
      const response = await fetch(`${baseUrl}/${locale}`, { redirect: 'manual' })
      assert.equal(response.status, 200)
      assert.ok((await response.text()).includes(heading))
    }
  })
})
