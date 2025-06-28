// src/i18n.ts
import { createI18n } from 'vue-i18n'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import en from './locales/en.json'
import zh from './locales/zh.json'

// ログ出力：読み込んだJSONの内容確認
console.log('✅ ロードされた言語ファイル:', {
  ja,
  ko,
  en,
  zh,
})

const messages = {
  ja,
  ko,
  en,
  zh,
}

// ログ出力：i18n設定内容確認
console.log('🌐 vue-i18n 初期化:', {
  locale: 'ja',
  fallbackLocale: 'en',
  messages,
})

const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
})

export default i18n
