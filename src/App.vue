<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import { Language } from '@/LanguageEnum'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import MainLayout from '@/components/layout/MainLayout.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutMe from '@/components/sections/AboutMe.vue'
import MyProjects from '@/components/sections/MyProjects.vue'
import Skills from '@/components/sections/Skills.vue'

const { locale } = useI18n()

// ローカルストレージから言語設定を読み取り
const loadLanguageFromStorage = () => {
  const savedLanguage = localStorage.getItem('preferred-language')
  if (savedLanguage && Object.values(Language).includes(savedLanguage as Language)) {
    locale.value = savedLanguage
  } else {
    // デフォルト言語を設定
    locale.value = Language.JAPANESE
  }
}

// 初期化時に言語を設定
onMounted(() => {
  loadLanguageFromStorage()
})
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-white" style="font-weight: normal">
    <Header />
    <MainLayout>
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <Skills />
    </MainLayout>
    <Footer />
  </div>
</template>

<style>
body {
  background-color: var(--color-background-light);
}
</style>
