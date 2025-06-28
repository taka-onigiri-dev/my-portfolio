// src/i18n.ts
import { createI18n } from 'vue-i18n'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import en from './locales/en.json'
import zh from './locales/zh.json'

const messages = {
  ja,
  ko,
  en,
  zh,
}

const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'en',
  messages,
})

export default i18n
