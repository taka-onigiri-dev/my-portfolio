<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue'
import Skills from './components/Skills.vue'
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100 bg-white" style="padding: 0">
    <Header />
    <main class="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div class="m-0 p-0">
        <HeroSection />
        <AboutMe />
        <MyProjects />
        <Skills />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #f8f9fa;
}
#app {
  padding: 0 !important;
}
</style>
