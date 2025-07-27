<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import MainLayout from '@/components/layout/MainLayout.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutMe from '@/components/sections/AboutMe.vue'
import MyProjects from '@/components/sections/MyProjects.vue'
import Skills from '@/components/sections/Skills.vue'
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
  background-color: #f8f9fa;
}
</style>
