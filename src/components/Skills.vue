<template>
  <Section :title="t('skills.title')">
    <!-- プログラミング言語 -->
    <div class="mb-3">
      <h3 class="h5 text-dark mb-3">
        <i class="bi bi-code-slash me-2"></i>{{ t('skills.categories.programming.title') }}
      </h3>
      <ul class="list-group mb-3">
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.programming.java.name') }}</span>
            <StarLevel :level="4" />
          </div>
          <small class="text-muted">{{ t('skills.categories.programming.java.comment') }}</small>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.programming.typescript.name') }}</span>
            <StarLevel :level="3" />
          </div>
          <small class="text-muted">{{
            t('skills.categories.programming.typescript.comment')
          }}</small>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.programming.python.name') }}</span>
            <StarLevel :level="3" />
          </div>
          <small class="text-muted">{{ t('skills.categories.programming.python.comment') }}</small>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.programming.rust.name') }}</span>
            <StarLevel :level="2" />
          </div>
          <small class="text-muted">{{ t('skills.categories.programming.rust.comment') }}</small>
        </li>
      </ul>
    </div>

    <!-- データベース -->
    <div class="mb-3">
      <h3 class="h5 text-dark mb-3">
        <i class="bi bi-database me-2"></i>{{ t('skills.categories.databases.title') }}
      </h3>
      <ul class="list-group mb-3">
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.databases.postgresql.name') }}</span>
            <StarLevel :level="3" />
          </div>
          <small class="text-muted">{{
            t('skills.categories.databases.postgresql.comment')
          }}</small>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.databases.oracle_mysql.name') }}</span>
            <StarLevel :level="2" />
          </div>
          <small class="text-muted">{{
            t('skills.categories.databases.oracle_mysql.comment')
          }}</small>
        </li>
      </ul>
    </div>

    <!-- インフラ・ツール -->
    <div class="mb-3">
      <h3 class="h5 text-dark mb-3">
        <i class="bi bi-gear me-2"></i>{{ t('skills.categories.tools.title') }}
      </h3>
      <ul class="list-group mb-3">
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.tools.docker.name') }}</span>
            <StarLevel :level="2" />
          </div>
          <small class="text-muted">{{ t('skills.categories.tools.docker.comment') }}</small>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.tools.aws.name') }}</span>
            <StarLevel :level="2" />
          </div>
          <small class="text-muted">{{ t('skills.categories.tools.aws.comment') }}</small>
        </li>
      </ul>
    </div>

    <!-- 言語能力 -->
    <div class="mb-3">
      <h3 class="h5 text-dark mb-3">
        <i class="bi bi-translate me-2"></i>{{ t('skills.categories.languages.title') }}
      </h3>
      <ul class="list-group mb-3">
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.languages.korean.name') }}</span>
            <StarLevel :level="2" />
          </div>
          <small v-if="t('skills.categories.languages.korean.comment')" class="text-muted">{{
            t('skills.categories.languages.korean.comment')
          }}</small>
          <Accordion id="lang-detail-korean" v-if="t('skills.categories.languages.korean.detail')">
            <small class="text-muted">{{ t('skills.categories.languages.korean.detail') }}</small>
          </Accordion>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.languages.chinese.name') }}</span>
            <StarLevel :level="1" />
          </div>
          <small v-if="t('skills.categories.languages.chinese.comment')" class="text-muted">{{
            t('skills.categories.languages.chinese.comment')
          }}</small>
          <Accordion
            id="lang-detail-chinese"
            v-if="t('skills.categories.languages.chinese.detail')"
          >
            <small class="text-muted">{{ t('skills.categories.languages.chinese.detail') }}</small>
          </Accordion>
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.languages.english.name') }}</span>
            <StarLevel :level="1" />
          </div>
          <small v-if="t('skills.categories.languages.english.comment')" class="text-muted">{{
            t('skills.categories.languages.english.comment')
          }}</small>
          <Accordion
            id="lang-detail-english"
            v-if="t('skills.categories.languages.english.detail')"
          >
            <small class="text-muted">{{ t('skills.categories.languages.english.detail') }}</small>
          </Accordion>
        </li>
      </ul>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import StarLevel from './StarLevel.vue'
import Accordion from './Accordion.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* ...existing code... */
</style>
