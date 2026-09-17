import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import test from 'node:test'

const host = '127.0.0.1'
const port = 43000 + (process.pid % 10000)
const baseUrl = `http://${host}:${port}`

async function waitForServer(processOutput) {
  const deadline = Date.now() + 45_000

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl, { redirect: 'manual' })
      if (response.status < 500) return
    } catch {
      // The dev server is still starting.
    }

    await new Promise(resolve => setTimeout(resolve, 250))
  }

  throw new Error(`Nuxt dev server did not start.\n${processOutput.join('')}`)
}

test('the root route serves the browser language redirect entry point', { timeout: 60_000 }, async (t) => {
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

  await t.test('serves the root redirect document without a fixed server redirect', async () => {
    const response = await fetch(baseUrl, { redirect: 'manual' })
    const body = await response.text()

    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type') ?? '', /^text\/html/)
    assert.match(body, /Redirecting to your preferred language/)
  })

  await t.test('serves the locale selector as JavaScript', async () => {
    const response = await fetch(`${baseUrl}/root-locale.js`)

    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type') ?? '', /javascript/)
  })
})
