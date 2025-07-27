<template>
  <header class="py-3 bg-dark text-white fixed-top shadow-sm w-100">
    <div class="container-fluid d-flex align-items-center px-3">
      <img
        src="@/assets/onigiri.PNG"
        alt="アイコン"
        class="rounded-circle me-3"
        style="width: 40px; height: 40px; object-fit: cover"
      />
      <h1 class="h3 mb-0 text-white">taka-onigiri-dev</h1>
      <div class="dropdown ms-auto">
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
            <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.JAPANESE)"
              >日本語</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.KOREAN)">한국어</a>
          </li>
          <li>
            <a class="dropdown-item" href="#" @click.prevent="setLocale(Language.ENGLISH)"
              >English</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="setLocale(Language.CHINESE_SIMPLIFIED)"
              >简体中文</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="setLocale(Language.CHINESE_TRADITIONAL)"
              >繁體中文</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

enum Language {
  JAPANESE = 'ja',
  KOREAN = 'ko',
  ENGLISH = 'en',
  CHINESE_SIMPLIFIED = 'zh-Hans',
  CHINESE_TRADITIONAL = 'zh-Hant',
}

const { locale } = useI18n()

const setLocale = (lang: Language) => {
  locale.value = lang
}

const languageLabel = (lang: string) => {
  switch (lang) {
    case Language.JAPANESE:
      return '日本語'
    case Language.KOREAN:
      return '한국어'
    case Language.ENGLISH:
      return 'English'
    case Language.CHINESE_SIMPLIFIED:
      return '简体中文'
    case Language.CHINESE_TRADITIONAL:
      return '繁體中文'
    default:
      return lang
  }
}
</script>

<style scoped>
/* ...existing code... */
</style>
