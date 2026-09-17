const DEFAULT_LOCALE = 'en'
const LOCALE_COOKIE = 'i18n_redirected'

function matchSupportedLocale(locale) {
  const language = locale?.trim().toLowerCase().split('-')[0]

  if (language === 'zh') return 'zh-CN'
  if (language === 'en') return 'en'
}

export function selectRootLocale(savedLocale, browserLocales = []) {
  const savedMatch = matchSupportedLocale(savedLocale)
  if (savedMatch) return savedMatch

  for (const browserLocale of browserLocales) {
    const browserMatch = matchSupportedLocale(browserLocale)
    if (browserMatch) return browserMatch
  }

  return DEFAULT_LOCALE
}

export function getRootRedirectPath(cookieHeader, browserLocales = []) {
  const cookiePrefix = `${LOCALE_COOKIE}=`
  const savedLocale = cookieHeader
    .split(';')
    .map(cookie => cookie.trim())
    .find(cookie => cookie.startsWith(cookiePrefix))
    ?.slice(cookiePrefix.length)

  return `/${selectRootLocale(savedLocale, browserLocales)}`
}
