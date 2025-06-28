// src/i18n.ts
import { createI18n } from 'vue-i18n'

const loadedLanguages: Record<string, any> = {}

async function loadLocale(lang: string) {
  if (loadedLanguages[lang]) return loadedLanguages[lang]
  const base = import.meta.env.BASE_URL || '/'
  const res = await fetch(`${base}src/locales/${lang}.json`)
  if (!res.ok) throw new Error(`Failed to load locale: ${lang}`)
  const messages = await res.json()
  loadedLanguages[lang] = messages
  return messages
}

export async function createI18nAsync() {
  const defaultLocale = 'ja'
  const fallbackLocale = 'en'
  const supportedLocales = ['ja', 'en', 'ko', 'zh']
  const messages: Record<string, any> = {}
  for (const lang of supportedLocales) {
    messages[lang] = await loadLocale(lang)
  }
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
  return i18n
}
