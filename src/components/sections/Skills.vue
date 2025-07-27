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
            <StarLevel :level="5" />
          </div>
          <small class="text-muted">{{ t('skills.categories.programming.java.comment') }}</small>
        </li>
        <hr class="my-2" />
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.programming.python.name') }}</span>
            <StarLevel :level="4" />
          </div>
          <small class="text-muted">{{ t('skills.categories.programming.python.comment') }}</small>
        </li>
        <hr class="my-2" />
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.programming.typescript.name') }}</span>
            <StarLevel :level="3" />
          </div>
          <small class="text-muted">{{
            t('skills.categories.programming.typescript.comment')
          }}</small>
        </li>
        <hr class="my-2" />
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
            <StarLevel :level="4" />
          </div>
          <small class="text-muted">{{
            t('skills.categories.databases.postgresql.comment')
          }}</small>
        </li>
        <hr class="my-2" />
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
            <StarLevel :level="3" />
          </div>
          <small class="text-muted">{{ t('skills.categories.tools.docker.comment') }}</small>
        </li>
        <hr class="my-2" />
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
        <li class="list-group-item bg-white text-dark border-0" v-if="locale !== 'ja'">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.japanese.name') }}</span>
              <i
                v-if="t('skills.categories.languages.japanese.detail')"
                class="bi bi-info-circle ms-2 text-secondary"
                style="cursor: pointer"
                :title="t('skills.categories.languages.japanese.detail')"
              ></i>
            </div>
            <StarLevel :level="5" />
          </div>
          <small v-if="t('skills.categories.languages.japanese.comment')" class="text-muted">{{
            t('skills.categories.languages.japanese.comment')
          }}</small>
          <hr class="my-3" />
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.korean.name') }}</span>
              <i
                v-if="t('skills.categories.languages.korean.detail')"
                class="bi bi-info-circle ms-2 text-secondary"
                style="cursor: pointer"
                :title="t('skills.categories.languages.korean.detail')"
              ></i>
            </div>
            <StarLevel :level="2" />
          </div>
          <small v-if="t('skills.categories.languages.korean.comment')" class="text-muted">{{
            t('skills.categories.languages.korean.comment')
          }}</small>
          <div v-if="tm('skills.categories.languages.korean.features')" class="mt-2">
            <small class="text-muted mb-1 d-block">
              {{ t('skills.categories.languages.featuresTitle') }}
            </small>
            <ul class="list-unstyled ps-2 mb-0">
              <li
                v-for="(feature, index) in tm('skills.categories.languages.korean.features')"
                :key="index"
                class="mb-2"
              >
                <small class="text-muted" v-html="`• ${feature.replace(/\n/g, '<br>')}`"></small>
              </li>
            </ul>
          </div>
          <hr class="my-3" />
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.chinese.name') }}</span>
              <i
                v-if="t('skills.categories.languages.chinese.detail')"
                class="bi bi-info-circle ms-2 text-secondary"
                style="cursor: pointer"
                :title="t('skills.categories.languages.chinese.detail')"
              ></i>
            </div>
            <StarLevel :level="2" />
          </div>
          <small v-if="t('skills.categories.languages.chinese.comment')" class="text-muted">{{
            t('skills.categories.languages.chinese.comment')
          }}</small>
          <div v-if="tm('skills.categories.languages.chinese.features')" class="mt-2">
            <small class="text-muted mb-1 d-block">
              {{ t('skills.categories.languages.featuresTitle') }}
            </small>
            <ul class="list-unstyled ps-2 mb-0">
              <li
                v-for="(feature, index) in tm('skills.categories.languages.chinese.features')"
                :key="index"
                class="mb-2"
              >
                <small class="text-muted" v-html="`• ${feature.replace(/\n/g, '<br>')}`"></small>
              </li>
            </ul>
          </div>
          <hr class="my-3" />
        </li>
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.english.name') }}</span>
              <i
                v-if="t('skills.categories.languages.english.detail')"
                class="bi bi-info-circle ms-2 text-secondary"
                style="cursor: pointer"
                :title="t('skills.categories.languages.english.detail')"
              ></i>
            </div>
            <StarLevel :level="1" />
          </div>
          <small v-if="t('skills.categories.languages.english.comment')" class="text-muted">{{
            t('skills.categories.languages.english.comment')
          }}</small>
          <div v-if="tm('skills.categories.languages.english.features')" class="mt-2">
            <small class="text-muted mb-1 d-block">
              {{ t('skills.categories.languages.featuresTitle') }}
            </small>
            <ul class="list-unstyled ps-2 mb-0">
              <li
                v-for="(feature, index) in tm('skills.categories.languages.english.features')"
                :key="index"
                class="mb-2"
              >
                <small class="text-muted" v-html="`• ${feature.replace(/\n/g, '<br>')}`"></small>
              </li>
            </ul>
          </div>
          <hr class="my-3" />
        </li>
      </ul>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import StarLevel from '@/components/common/StarLevel.vue'
import { useI18n } from 'vue-i18n'

const { locale, t, tm } = useI18n()
</script>

<style scoped>
/* ...existing code... */
</style>
