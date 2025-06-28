<template>
  <Section>
    <template #title>{{ t('section.projects') }}</template>
    <p class="card-text text-dark">{{ t('projects.ytgenai.catch') }}</p>
    <p class="mb-1 text-dark">
      <strong>{{ t('projects.ytgenai.summaryLabel') || '概要：' }}</strong
      ><br />
      {{ t('projects.ytgenai.desc') }}
    </p>
    <ul class="mb-2">
      <li>
        {{ t('projects.ytgenai.stack.0') }}<br />
        {{ t('projects.ytgenai.stackReason.backend') }}
      </li>
      <li>
        {{ t('projects.ytgenai.stack.1') }}<br />
        {{ t('projects.ytgenai.stackReason.frontend') }}
      </li>
      <li>{{ t('projects.ytgenai.stack.2') }}</li>
      <li>{{ t('projects.ytgenai.stack.3') }}</li>
    </ul>
    <div class="mb-3">
      <img
        src="/src/assets/demo.gif"
        alt="アプリデモGif"
        class="img-fluid rounded border w-100"
        style="height: auto"
      />
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
