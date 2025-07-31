<template>
  <div class="container py-5">
    <!-- 概要セクション -->
    <div class="mb-5">
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-info-circle me-2"></i>{{ $t('languageApp.overview.title') }}
      </h3>
      <div class="mx-2">
        <p class="mb-0">
          {{ $t('languageApp.overview.description') }}
        </p>
        <p class="mt-3 mb-0 text-muted small">
          {{ $t('languageApp.overview.disclaimer') }}
        </p>
      </div>
    </div>

    <hr class="my-5" />

    <div class="mb-5">
      <img src="@/assets/demo.gif" alt="demo" class="img-fluid" />
    </div>
    <hr class="my-5" />

    <!-- 技術スタックセクション -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-gear me-2"></i>{{ $t('languageApp.techStack.title') }}
      </h3>
      <div class="mx-2">
        <div class="row g-3">
          <div v-for="item in techStackItems" :key="item.title" class="col-12">
            <div class="mb-3">
              <h5 class="mb-2">{{ item.title }}</h5>
              <p v-if="item.description" class="mb-0 small">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-5" />

    <!-- 主な機能セクション -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-list-check me-2"></i>{{ $t('languageApp.features.title') }}
      </h3>
      <div class="mx-2">
        <ul class="mb-0">
          <li v-for="feature in featureItems" :key="feature.title" class="mb-3">
            <h5 class="mb-2 fw-bold">{{ feature.title }}</h5>
            <p class="mb-0 small">
              {{ feature.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <hr class="my-5" />

    <!-- 開発で意識したことセクション -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-lightbulb me-2"></i>{{ $t('languageApp.developmentFocus.title') }}
      </h3>
      <div class="mx-2">
        <ul class="mb-0">
          <li
            v-for="(item, index) in developmentFocusItems"
            :key="index"
            class="mb-2"
            :class="{ 'mb-0': index === developmentFocusItems.length - 1 }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <hr class="my-5" />

    <!-- 背景セクション -->
    <div>
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-book me-2"></i>{{ $t('languageApp.background.title') }}
      </h3>
      <div class="mx-2">
        <p
          v-for="(paragraphGroup, groupIndex) in backgroundParagraphs"
          :key="groupIndex"
          :style="'margin: 0;'"
        >
          {{ paragraphGroup.join('') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const techStackItems = computed(() => tm('languageApp.techStack.items') as any[])
const featureItems = computed(() => tm('languageApp.features.items') as any[])
const developmentFocusItems = computed(() => tm('languageApp.developmentFocus.items') as string[])
const backgroundParagraphs = computed(() => tm('languageApp.background.paragraphs') as string[][])
</script>
