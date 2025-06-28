<template>
  <Section>
    <div class="text-center">
      <img
        src="@/assets/onigiri.PNG"
        alt="アイコン"
        class="rounded-circle mb-3 d-block mx-auto"
        style="width: 120px; height: 120px; object-fit: cover"
      />
      <h1 class="h4 mb-2"><i class="bi bi-person-circle me-2"></i>taka-onigiri-dev</h1>
      <div class="mb-3">
        <a
          href="https://github.com/taka-onigiri-dev"
          class="btn btn-outline-dark btn-sm mx-1"
          target="_blank"
          rel="noopener"
        >
          <i class="bi bi-github me-1"></i>GitHub
        </a>
        <a href="mailto:taka.onigiri.dev@gmail.com" class="btn btn-outline-primary btn-sm mx-1">
          <i class="bi bi-envelope me-1"></i>Email
        </a>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
</script>

<style scoped>
/* ...existing code... */
</style>
