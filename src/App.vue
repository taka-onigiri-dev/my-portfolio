<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue'
import Skills from './components/Skills.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-white" style="padding: 1rem; font-weight: normal">
    <Header />
    <main
      class="flex-grow-1 d-flex flex-column align-items-center justify-content-center"
      style="padding-top: 80px; padding-bottom: 0; margin: 0"
    >
      <div class="m-0 p-0" style="padding: 0; margin: 0">
        <HeroSection />
        <AboutMe />
        <MyProjects />
        <Skills />
      </div>
    </main>
  </div>
  <Footer />
</template>

<style>
body {
  background-color: #f8f9fa;
}
</style>
