// src/i18n.ts
import { createI18n } from 'vue-i18n'
import jaProfile from './locales/ja/profile.json'
import jaProjects from './locales/ja/projects.json'
import jaSkills from './locales/ja/skills.json'
import jaCommon from './locales/ja/common.json'
import jaLanguageApp from './locales/ja/languageApp.json'
import jaChineseTool from './locales/ja/chineseTool.json'
import jaReviewTool from './locales/ja/reviewTool.json'
import jaTestDataTool from './locales/ja/testDataTool.json'

import enProfile from './locales/en/profile.json'
import enProjects from './locales/en/projects.json'
import enSkills from './locales/en/skills.json'
import enCommon from './locales/en/common.json'
import enLanguageApp from './locales/en/languageApp.json'
import enChineseTool from './locales/en/chineseTool.json'
import enReviewTool from './locales/en/reviewTool.json'
import enTestDataTool from './locales/en/testDataTool.json'

import koProfile from './locales/ko/profile.json'
import koProjects from './locales/ko/projects.json'
import koSkills from './locales/ko/skills.json'
import koCommon from './locales/ko/common.json'
import koLanguageApp from './locales/ko/languageApp.json'
import koChineseTool from './locales/ko/chineseTool.json'
import koReviewTool from './locales/ko/reviewTool.json'
import koTestDataTool from './locales/ko/testDataTool.json'

import zhProfile from './locales/zh/profile.json'
import zhProjects from './locales/zh/projects.json'
import zhSkills from './locales/zh/skills.json'
import zhCommon from './locales/zh/common.json'
import zhLanguageApp from './locales/zh/languageApp.json'
import zhChineseTool from './locales/zh/chineseTool.json'
import zhReviewTool from './locales/zh/reviewTool.json'
import zhTestDataTool from './locales/zh/testDataTool.json'

// 日本語の統合データ
const ja = {
  profile: jaProfile,
  projects: jaProjects,
  skills: jaSkills,
  common: jaCommon,
  languageApp: jaLanguageApp,
  chineseTool: jaChineseTool,
  reviewTool: jaReviewTool,
  testDataTool: jaTestDataTool,
}

// 英語の統合データ
const en = {
  profile: enProfile,
  projects: enProjects,
  skills: enSkills,
  common: enCommon,
  languageApp: enLanguageApp,
  chineseTool: enChineseTool,
  reviewTool: enReviewTool,
  testDataTool: enTestDataTool,
}

// 韓国語の統合データ
const ko = {
  profile: koProfile,
  projects: koProjects,
  skills: koSkills,
  common: koCommon,
  languageApp: koLanguageApp,
  chineseTool: koChineseTool,
  reviewTool: koReviewTool,
  testDataTool: koTestDataTool,
}

// 中国語の統合データ
const zh = {
  profile: zhProfile,
  projects: zhProjects,
  skills: zhSkills,
  common: zhCommon,
  languageApp: zhLanguageApp,
  chineseTool: zhChineseTool,
  reviewTool: zhReviewTool,
  testDataTool: zhTestDataTool,
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
