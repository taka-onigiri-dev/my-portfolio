// src/i18n.ts
import { createI18n } from 'vue-i18n'

const loadedLanguages: Record<string, any> = {}

async function loadLocale(lang: string) {
  if (loadedLanguages[lang]) return loadedLanguages[lang]
  const base = import.meta.env.BASE_URL || '/'
  const url = `${base}locales/${lang}.json`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to load locale: ${lang} (${res.status})`)
    const messages = await res.json()
    console.log('Loaded messages for', lang, messages)
    loadedLanguages[lang] = messages
    return messages
  } catch (e) {
    console.error('Locale fetch error:', url, e)
    return {}
  }
}

export async function createI18nAsync() {
  const defaultLocale = 'ja'
  const fallbackLocale = 'en'
  const supportedLocales = ['ja', 'en', 'ko', 'zh']
  const messages: Record<string, any> = {}
  for (const lang of supportedLocales) {
    messages[lang] = await loadLocale(lang)
  }
  console.log('All loaded messages:', messages)
  const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale,
    messages,
  })
  // 言語切替時の動的ロード
  async function setLocale(lang: string) {
    if (!(lang in i18n.global.messages)) {
      i18n.global.setLocaleMessage(lang, await loadLocale(lang))
    }
    i18n.global.locale.value = lang
  }
  // setLocaleをグローバルに追加
  ;(i18n as any).setLocale = setLocale
  console.log('i18n.global.messages:', i18n.global.messages)
  return i18n
}
