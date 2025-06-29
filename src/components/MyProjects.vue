<template>
  <Section :title="t('section.projects')">
    <div class="card mb-3 bg-white border-0">
      <div class="card-body">
        <h3 class="h5 text-dark mb-3">{{ t('projects.ytgenai.catch') }}</h3>
        <h3 class="h5 text-dark mb-3">{{ t('projects.ytgenai.summaryLabel') }}</h3>
        <p class="mb-3">{{ t('projects.ytgenai.desc') }}</p>
        <h3 class="h5 text-dark mb-3">{{ t('projects.ytgenai.stack.0.title') }}</h3>
        <ul class="list-group mb-3">
          <li class="list-group-item bg-white text-dark border-0">
            <div>
              <div>
                <strong>{{ t('projects.ytgenai.stack.1.name') }}</strong>
              </div>
              <small class="text-muted">{{ t('projects.ytgenai.stack.1.reason') }}</small>
            </div>
          </li>
          <li class="list-group-item bg-white text-dark border-0">
            <div>
              <div>
                <strong>{{ t('projects.ytgenai.stack.2.name') }}</strong>
              </div>
              <small class="text-muted">{{ t('projects.ytgenai.stack.2.reason') }}</small>
            </div>
          </li>
          <li class="list-group-item bg-white text-dark border-0">
            <div>
              <strong>{{ t('projects.ytgenai.stack.3.name') }}</strong>
            </div>
          </li>
          <li class="list-group-item bg-white text-dark border-0">
            <div>
              <strong>{{ t('projects.ytgenai.stack.4.name') }}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
