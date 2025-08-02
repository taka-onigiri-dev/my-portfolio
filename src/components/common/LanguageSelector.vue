<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="langDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="bi bi-translate me-1"></i>{{ languageLabel(locale) }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="langDropdown">
      <li>
        <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.JAPANESE)">日本語</a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.KOREAN)">한국어</a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.ENGLISH)">English</a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.CHINESE_SIMPLIFIED)"
          >简体中文</a
        >
      </li>
      <li>
        <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.CHINESE_TRADITIONAL)"
          >繁體中文</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Language, languageLabel } from '@/LanguageEnum'

const { locale } = useI18n()

const setLocale = (lang: Language) => {
  locale.value = lang
}
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
