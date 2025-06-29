<template>
  <Section :title="t('section.skills')">
    <div class="mb-4">
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark">
            <i class="bi bi-code-slash me-2"></i>{{ t('skills.languages') }}
          </h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languagesList.0.name') }}</span>
                <StarLevel :level="5" />
              </div>
              <small class="text-muted">{{ t('skills.languagesList.0.detail') }}</small>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languagesList.1.name') }}</span>
                <StarLevel :level="4" />
              </div>
              <small class="text-muted">{{ t('skills.languagesList.1.detail') }}</small>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languagesList.2.name') }}</span>
                <StarLevel :level="4" />
              </div>
              <small class="text-muted">{{ t('skills.languagesList.2.detail') }}</small>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languagesList.3.name') }}</span>
                <StarLevel :level="2" />
              </div>
              <small class="text-muted">{{ t('skills.languagesList.3.detail') }}</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark">
            <i class="bi bi-database me-2"></i>{{ t('skills.databases') }}
          </h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.databasesList.0.name') }}</span>
                <StarLevel :level="4" />
              </div>
              <small class="text-muted">{{ t('skills.databasesList.0.detail') }}</small>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.databasesList.1.name') }}</span>
                <StarLevel :level="1" />
              </div>
              <small class="text-muted">{{ t('skills.databasesList.1.detail') }}</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark">
            <i class="bi bi-hdd-network me-2"></i>{{ t('skills.infra') }}
          </h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.infraList.0.name') }}</span>
                <StarLevel :level="3" />
              </div>
              <small class="text-muted">{{ t('skills.infraList.0.detail') }}</small>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.infraList.1.name') }}</span>
                <StarLevel :level="2" />
              </div>
              <small class="text-muted">{{ t('skills.infraList.1.detail') }}</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark">
            <i class="bi bi-translate me-2"></i>{{ t('skills.languageskill') }}
          </h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0" v-if="locale !== 'ja'">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languageskillList.0.name') }}</span>
                <StarLevel :level="5" />
              </div>
              <div>{{ t('skills.languageskillList.0.summary') }}</div>
              <Accordion id="lang-detail-en">
                <small class="text-muted">{{ t('skills.languageskillList.0.detail') }}</small>
              </Accordion>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languageskillList.1.name') }}</span>
                <StarLevel :level="2" />
              </div>
              <div>{{ t('skills.languageskillList.1.summary') }}</div>
              <Accordion id="lang-detail-ko">
                <small class="text-muted">{{ t('skills.languageskillList.1.detail') }}</small>
              </Accordion>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languageskillList.2.name') }}</span>
                <StarLevel :level="2" />
              </div>
              <div>{{ t('skills.languageskillList.2.summary') }}</div>
              <Accordion id="lang-detail-zh">
                <small class="text-muted">{{ t('skills.languageskillList.2.detail') }}</small>
              </Accordion>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ t('skills.languageskillList.3.name') }}</span>
                <StarLevel :level="1" />
              </div>
              <div>{{ t('skills.languageskillList.3.summary') }}</div>
              <Accordion id="lang-detail-en">
                <small class="text-muted">{{ t('skills.languageskillList.3.detail') }}</small>
              </Accordion>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import StarLevel from './StarLevel.vue'
import Accordion from './Accordion.vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<style scoped>
/* ...existing code... */
</style>
