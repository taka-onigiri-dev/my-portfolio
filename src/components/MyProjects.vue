<template>
  <Section :title="t('section.projects')">
    <div class="mb-3">
      <h3 class="h5 text-dark mb-2">
        {{ t('projects.ytgenai.catch') }}
      </h3>
      <h4 class="h6 text-dark mb-2">{{ t('projects.ytgenai.summaryLabel') }}</h4>
      <p class="mb-3">{{ t('projects.ytgenai.desc') }}</p>
      <h5 class="h6 text-dark mb-2">{{ t('projects.ytgenai.stack.0.title') }}</h5>
      <ul class="list-group mb-3">
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex flex-column">
            <strong>{{ t('projects.ytgenai.stack.1.name') }}</strong>
            <small class="text-muted">{{ t('projects.ytgenai.stack.1.reason') }}</small>
          </div>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex flex-column">
            <strong>{{ t('projects.ytgenai.stack.2.name') }}</strong>
            <small class="text-muted">{{ t('projects.ytgenai.stack.2.reason') }}</small>
          </div>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <strong>{{ t('projects.ytgenai.stack.3.name') }}</strong>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <strong>{{ t('projects.ytgenai.stack.4.name') }}</strong>
        </li>
      </ul>
      <!-- <img
        src="/src/assets/demo.gif"
        alt="アプリデモGif"
        class="img-fluid rounded border w-100"
        style="height: auto"
      /> -->
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
/* ...existing code... */
</style>
