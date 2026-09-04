export type PlatformId = 'windows' | 'macos' | 'linux' | 'android' | 'ios'

export const platformNames: Record<PlatformId, string> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  android: 'Android',
  ios: 'iPhone / iPad',
}

export const platformNamesEn: Record<PlatformId, string> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  android: 'Android',
  ios: 'iPhone / iPad',
}

export function detectDevicePlatform(): PlatformId {
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string }
  }
  const source = `${nav.userAgentData?.platform || ''} ${nav.platform || ''} ${nav.userAgent || ''}`.toLowerCase()

  if (/iphone|ipad|ipod/.test(source) || (source.includes('mac') && navigator.maxTouchPoints > 1)) return 'ios'
  if (source.includes('android')) return 'android'
  if (source.includes('win')) return 'windows'
  if (source.includes('mac')) return 'macos'
  if (source.includes('linux') || source.includes('x11')) return 'linux'

  return 'windows'
}
