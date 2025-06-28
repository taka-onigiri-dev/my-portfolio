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
          {{ languageLabel(locale) }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="langDropdown">
          <li>
            <a class="dropdown-item" href="#" @click.prevent="setLocale('ja')">日本語</a>
          </li>
          <li>
            <a class="dropdown-item" href="#" @click.prevent="setLocale('ko')">한국어</a>
          </li>
          <li>
            <a class="dropdown-item" href="#" @click.prevent="setLocale('en')">English</a>
          </li>
          <li>
            <a class="dropdown-item" href="#" @click.prevent="setLocale('zh')">中文</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, messages, locale } = useI18n()

console.log('🗣 現在のロケール:', locale.value)
console.log('🗂 読み込まれた messages オブジェクト:', messages.value)
console.log('🧪 現在のロケールの中身:', messages.value[locale.value])
// messages.value[locale.value] を一旦 any や Record<string, any> として扱う例
const currentMessages = messages.value[locale.value] as Record<string, any>
console.log('🔍 "message.hello" に対応する値:', currentMessages?.message?.hello)
const setLocale = (lang: string) => {
  locale.value = lang
}

const languageLabel = (lang: string) => {
  switch (lang) {
    case 'ja':
      return '日本語'
    case 'ko':
      return '한국어'
    case 'en':
      return 'English'
    case 'zh':
      return '中文'
    default:
      return lang
  }
}
</script>

<style scoped>
/* ...existing code... */
</style>
