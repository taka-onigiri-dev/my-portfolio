<template>
  <Section :title="t('projects.title')">
    <div class="mb-3">
      <h3 class="h5 text-dark mb-2">
        {{ t('projects.project1.catch') }}
      </h3>
      <h4 class="h6 text-dark mb-2">{{ t('projects.project1.summaryLabel') }}</h4>
      <p class="mb-3">{{ t('projects.project1.desc') }}</p>
      <h5 class="h6 text-dark mb-2">{{ t('projects.project1.techStack.title') }}</h5>
      <ul class="list-group mb-3">
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex flex-column">
            <strong>{{ t('projects.project1.techStack.backend.category') }}</strong>
            <div>
              <span class="text-muted">{{
                t('projects.project1.techStack.backend.python_django.name')
              }}</span>
              <small
                v-if="t('projects.project1.techStack.backend.python_django.note')"
                class="text-muted d-block"
                >{{ t('projects.project1.techStack.backend.python_django.note') }}</small
              >
            </div>
          </div>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex flex-column">
            <strong>{{ t('projects.project1.techStack.frontend.category') }}</strong>
            <div>
              <span class="text-muted">{{
                t('projects.project1.techStack.frontend.typescript_vue.name')
              }}</span>
              <small
                v-if="t('projects.project1.techStack.frontend.typescript_vue.note')"
                class="text-muted d-block"
                >{{ t('projects.project1.techStack.frontend.typescript_vue.note') }}</small
              >
            </div>
          </div>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex flex-column">
            <strong>{{ t('projects.project1.techStack.database.category') }}</strong>
            <div>
              <span class="text-muted">{{
                t('projects.project1.techStack.database.postgresql.name')
              }}</span>
            </div>
          </div>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex flex-column">
            <strong>{{ t('projects.project1.techStack.other.category') }}</strong>
            <div>
              <span class="text-muted">{{
                t('projects.project1.techStack.other.docker_nginx.name')
              }}</span>
            </div>
          </div>
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
