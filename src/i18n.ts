// src/i18n.ts
import { createI18n } from 'vue-i18n'
import jaProfile from './locales/ja/profile.json'
import jaProjects from './locales/ja/projects.json'
import jaSkills from './locales/ja/skills.json'
import jaCommon from './locales/ja/common.json'

import enProfile from './locales/en/profile.json'
import enProjects from './locales/en/projects.json'
import enSkills from './locales/en/skills.json'
import enCommon from './locales/en/common.json'

import koProfile from './locales/ko/profile.json'
import koProjects from './locales/ko/projects.json'
import koSkills from './locales/ko/skills.json'
import koCommon from './locales/ko/common.json'

import zhProfile from './locales/zh/profile.json'
import zhProjects from './locales/zh/projects.json'
import zhSkills from './locales/zh/skills.json'
import zhCommon from './locales/zh/common.json'

// 日本語の統合データ
const ja = {
  profile: jaProfile,
  projects: jaProjects,
  skills: jaSkills,
  common: jaCommon,
}

// 英語の統合データ
const en = {
  profile: enProfile,
  projects: enProjects,
  skills: enSkills,
  common: enCommon,
}

// 韓国語の統合データ
const ko = {
  profile: koProfile,
  projects: koProjects,
  skills: koSkills,
  common: koCommon,
}

// 中国語の統合データ
const zh = {
  profile: zhProfile,
  projects: zhProjects,
  skills: zhSkills,
  common: zhCommon,
}

const messages = {
  ja,
  en,
  ko,
  zh,
}

const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'en',
  messages,
})

export default i18n
