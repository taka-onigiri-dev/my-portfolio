<template>
  <Section>
    <template #title> {{ $t('section.about') }} </template>
    <p class="mb-2 text-dark">
      <span v-for="(line, idx) in introLines" :key="idx">
        {{ line }}<br v-if="idx !== introLines.length - 1" />
      </span>
    </p>
    <p class="mb-2">
      <strong>{{ $t('about.interest.title') }}</strong>
      <span class="badge bg-light text-dark border me-1">{{ $t('about.interest.nlp') }}</span>
      <span class="badge bg-light text-dark border me-1">{{ $t('about.interest.genai') }}</span>
      <span class="badge bg-light text-dark border me-1">{{ $t('about.interest.lang') }}</span>
      <span class="badge bg-light text-dark border me-1">{{ $t('about.interest.illust') }}</span>
      <span class="badge bg-light text-dark border">{{ $t('about.interest.vtuber') }}</span>
    </p>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const introLines = computed(() => t('about.intro').split('\n'))
</script>

<style scoped>
/* ...existing code... */
</style>
