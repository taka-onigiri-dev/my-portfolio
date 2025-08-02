export enum Language {
  JAPANESE = 'ja',
  KOREAN = 'ko',
  ENGLISH = 'en',
  CHINESE_SIMPLIFIED = 'zh-Hans',
  CHINESE_TRADITIONAL = 'zh-Hant',
}

const LANGUAGE_LABELS: Record<Language, string> = {
  [Language.JAPANESE]: '日本語',
  [Language.KOREAN]: '한국어',
  [Language.ENGLISH]: 'English',
  [Language.CHINESE_SIMPLIFIED]: '简体中文',
  [Language.CHINESE_TRADITIONAL]: '繁體中文',
}

export const languageLabel = (lang: string): string => {
  return LANGUAGE_LABELS[lang as Language] || lang
}
