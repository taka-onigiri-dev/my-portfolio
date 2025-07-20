<template>
  <Section :title="t('profile.title')">
    <p class="mb-3 text-dark">
      <span v-for="(line, idx) in introLines" :key="idx">
        {{ line }}<br v-if="idx !== introLines.length - 1" />
      </span>
    </p>
    <p class="mb-2">
      <strong>{{ t('profile.interests.title') }}</strong>
      <span class="badge bg-light text-dark border me-1">
        <i class="bi bi-robot me-1"></i>{{ t('profile.interests.nlp') }}
      </span>
      <span class="badge bg-light text-dark border me-1">
        <i class="bi bi-lightbulb me-1"></i>{{ t('profile.interests.ai') }}
      </span>
      <span class="badge bg-light text-dark border me-1">
        <i class="bi bi-translate me-1"></i>{{ t('profile.interests.language') }}
      </span>
      <span class="badge bg-light text-dark border me-1">
        <i class="bi bi-brush me-1"></i>{{ t('profile.interests.illustration') }}
      </span>
      <span class="badge bg-light text-dark border me-1">
        <i class="bi bi-palette me-1"></i>{{ t('profile.interests.fanart') }}
      </span>
      <span class="badge bg-light text-dark border me-1">
        <i class="bi bi-person-video3 me-1"></i>{{ t('profile.interests.vtuber') }}
      </span>
    </p>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const introLines = computed(() => t('profile.introduction').split('\n'))
</script>

<style scoped>
/* ...existing code... */
</style>
