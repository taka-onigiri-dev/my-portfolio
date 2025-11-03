// src/i18n.ts
import { createI18n } from 'vue-i18n'
import { Language } from './LanguageEnum'

import jaProfile from './locales/ja/profile.json'
import jaProjects from './locales/ja/projects.json'
import jaSkills from './locales/ja/skills.json'
import jaCommon from './locales/ja/common.json'
import jaLanguageApp from './locales/ja/languageApp.json'
import jaChineseTool from './locales/ja/chineseTool.json'
import jaReviewTool from './locales/ja/reviewTool.json'
import jaTestDataTool from './locales/ja/testDataTool.json'
import jaPortfolioSite from './locales/ja/portfolioSite.json'

import enProfile from './locales/en/profile.json'
import enProjects from './locales/en/projects.json'
import enSkills from './locales/en/skills.json'
import enCommon from './locales/en/common.json'
import enLanguageApp from './locales/en/languageApp.json'
import enChineseTool from './locales/en/chineseTool.json'
import enReviewTool from './locales/en/reviewTool.json'
import enTestDataTool from './locales/en/testDataTool.json'
import enPortfolioSite from './locales/en/portfolioSite.json'

import koProfile from './locales/ko/profile.json'
import koProjects from './locales/ko/projects.json'
import koSkills from './locales/ko/skills.json'
import koCommon from './locales/ko/common.json'
import koLanguageApp from './locales/ko/languageApp.json'
import koChineseTool from './locales/ko/chineseTool.json'
import koReviewTool from './locales/ko/reviewTool.json'
import koTestDataTool from './locales/ko/testDataTool.json'
import koPortfolioSite from './locales/ko/portfolioSite.json'

import zhHansProfile from './locales/zh-Hans/profile.json'
import zhHansProjects from './locales/zh-Hans/projects.json'
import zhHansSkills from './locales/zh-Hans/skills.json'
import zhHansCommon from './locales/zh-Hans/common.json'
import zhHansLanguageApp from './locales/zh-Hans/languageApp.json'
import zhHansChineseTool from './locales/zh-Hans/chineseTool.json'
import zhHansReviewTool from './locales/zh-Hans/reviewTool.json'
import zhHansTestDataTool from './locales/zh-Hans/testDataTool.json'
import zhHansPortfolioSite from './locales/zh-Hans/portfolioSite.json'

import zhHantProfile from './locales/zh-Hant/profile.json'
import zhHantProjects from './locales/zh-Hant/projects.json'
import zhHantSkills from './locales/zh-Hant/skills.json'
import zhHantCommon from './locales/zh-Hant/common.json'
import zhHantLanguageApp from './locales/zh-Hant/languageApp.json'
import zhHantChineseTool from './locales/zh-Hant/chineseTool.json'
import zhHantReviewTool from './locales/zh-Hant/reviewTool.json'
import zhHantTestDataTool from './locales/zh-Hant/testDataTool.json'
import zhHantPortfolioSite from './locales/zh-Hant/portfolioSite.json'

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
  portfolioSite: jaPortfolioSite,
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
  portfolioSite: enPortfolioSite,
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
  portfolioSite: koPortfolioSite,
}

// 簡体字中国語の統合データ
const zhHans = {
  profile: zhHansProfile,
  projects: zhHansProjects,
  skills: zhHansSkills,
  common: zhHansCommon,
  languageApp: zhHansLanguageApp,
  chineseTool: zhHansChineseTool,
  reviewTool: zhHansReviewTool,
  testDataTool: zhHansTestDataTool,
  portfolioSite: zhHansPortfolioSite,
}
// 繁体字中国語の統合データ
const zhHant = {
  profile: zhHantProfile,
  projects: zhHantProjects,
  skills: zhHantSkills,
  common: zhHantCommon,
  languageApp: zhHantLanguageApp,
  chineseTool: zhHantChineseTool,
  reviewTool: zhHantReviewTool,
  testDataTool: zhHantTestDataTool,
  portfolioSite: zhHantPortfolioSite,
}

const messages = {
  [Language.JAPANESE]: ja,
  [Language.ENGLISH]: en,
  [Language.KOREAN]: ko,
  [Language.CHINESE_SIMPLIFIED]: zhHans,
  [Language.CHINESE_TRADITIONAL]: zhHant,
}

const i18n = createI18n({
  legacy: false,
  locale: Language.JAPANESE, // 初期値（App.vueで上書きされる）
  fallbackLocale: Language.ENGLISH,
  messages,
})

export default i18n
