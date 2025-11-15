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
            <StarLevel :level="4" />
          </div>
          <small class="text-muted">{{
            t('skills.categories.programming.typescript.comment')
          }}</small>
        </li>
        <hr class="my-2" />
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.programming.rust.name') }}</span>
            <StarLevel :level="3" />
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
            <StarLevel :level="4" />
          </div>
          <small class="text-muted">{{ t('skills.categories.tools.docker.comment') }}</small>
        </li>
        <hr class="my-2" />
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ t('skills.categories.tools.aws.name') }}</span>
            <StarLevel :level="3" />
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
        <!-- 日本語 -->
        <li class="list-group-item bg-white text-dark border-0" v-if="locale !== 'ja'">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.japanese.name') }}</span>
              <!-- 条件を削除して常に表示 -->
              <button
                class="btn btn-link p-0 text-secondary ms-2"
                type="button"
                @click="openJa = true"
                aria-label="詳細"
              >
                <i class="bi bi-info-circle"></i>
              </button>
            </div>
            <StarLevel :level="5" />
          </div>

          <!-- comment をリスト内に表示（元の位置に戻す） -->
          <small v-if="t('skills.categories.languages.japanese.comment')" class="text-muted">
            {{ t('skills.categories.languages.japanese.comment') }}
          </small>

          <!-- Modal: detail と features を表示（comment は上で表示） -->
          <LanguageModal
            modal-id="modal-ja"
            :show="openJa"
            @update:show="openJa = $event"
            :title="t('skills.categories.languages.japanese.name')"
            base-key="skills.categories.languages.japanese"
          />

          <hr class="my-3" />
        </li>

        <!-- 韓国語 -->
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.korean.name') }}</span>
              <!-- 条件を削除して常に表示 -->
              <button
                class="btn btn-link p-0 text-secondary ms-2"
                type="button"
                @click="openKo = true"
                aria-label="詳細"
              >
                <i class="bi bi-info-circle"></i>
              </button>
            </div>
            <StarLevel :level="2" />
          </div>

          <!-- comment をリスト内に表示 -->
          <small v-if="t('skills.categories.languages.korean.comment')" class="text-muted">
            {{ t('skills.categories.languages.korean.comment') }}
          </small>

          <LanguageModal
            modal-id="modal-ko"
            :show="openKo"
            @update:show="openKo = $event"
            :title="t('skills.categories.languages.korean.name')"
            base-key="skills.categories.languages.korean"
          />

          <hr class="my-3" />
        </li>

        <!-- 中国語 -->
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.chinese.name') }}</span>
              <!-- 条件を削除して常に表示 -->
              <button
                class="btn btn-link p-0 text-secondary ms-2"
                type="button"
                @click="openZh = true"
                aria-label="詳細"
              >
                <i class="bi bi-info-circle"></i>
              </button>
            </div>
            <StarLevel :level="2" />
          </div>

          <!-- comment をリスト内に表示 -->
          <small v-if="t('skills.categories.languages.chinese.comment')" class="text-muted">
            {{ t('skills.categories.languages.chinese.comment') }}
          </small>

          <LanguageModal
            modal-id="modal-zh"
            :show="openZh"
            @update:show="openZh = $event"
            :title="t('skills.categories.languages.chinese.name')"
            base-key="skills.categories.languages.chinese"
          />

          <hr class="my-3" />
        </li>

        <!-- 英語（features がないなら表示されません） -->
        <li class="list-group-item bg-white text-dark border-0">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span>{{ t('skills.categories.languages.english.name') }}</span>
              <!-- 条件を削除して常に表示 -->
              <button
                class="btn btn-link p-0 text-secondary ms-2"
                type="button"
                @click="openEn = true"
                aria-label="詳細"
              >
                <i class="bi bi-info-circle"></i>
              </button>
            </div>
            <StarLevel :level="1" />
          </div>

          <!-- comment をリスト内に表示 -->
          <small v-if="t('skills.categories.languages.english.comment')" class="text-muted">
            {{ t('skills.categories.languages.english.comment') }}
          </small>

          <LanguageModal
            modal-id="modal-en"
            :show="openEn"
            @update:show="openEn = $event"
            :title="t('skills.categories.languages.english.name')"
            base-key="skills.categories.languages.english"
          />

          <hr class="my-3" />
        </li>
      </ul>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import StarLevel from '@/components/common/StarLevel.vue'
import LanguageModal from '@/components/common/LanguageModal.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale, t, tm } = useI18n()

const openJa = ref(false)
const openKo = ref(false)
const openZh = ref(false)
const openEn = ref(false)
</script>

<style scoped>
/* ...existing code... */
</style>
