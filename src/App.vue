<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MainLayout from './components/MainLayout.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue'
import Skills from './components/Skills.vue'
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
