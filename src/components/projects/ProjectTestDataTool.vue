<template>
  <div class="container py-5">
    <!-- 概要セクション -->
    <div class="mb-5">
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-info-circle me-2"></i>{{ $t('testDataTool.overview.title') }}
      </h3>
      <div class="mx-2">
        <p class="mb-0">
          {{ $t('testDataTool.overview.description') }}
        </p>
      </div>
    </div>

    <hr class="my-5" />

    <!-- 技術スタックセクション -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-gear me-2"></i>{{ $t('testDataTool.techStack.title') }}
      </h3>
      <div class="mx-2">
        <ul class="mb-0">
          <li v-for="tool in techStackTools" :key="tool">
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>

    <hr class="my-5" />

    <!-- 主な機能セクション -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-list-check me-2"></i>{{ $t('testDataTool.features.title') }}
      </h3>
      <div class="mx-2">
        <ul class="mb-0">
          <li v-for="feature in featureItems" :key="feature" class="mb-3">
            <h5 class="mb-2 fw-bold">{{ feature }}</h5>
          </li>
        </ul>
      </div>
    </div>

    <hr class="my-5" />

    <!-- 補足セクション -->
    <div>
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-lightbulb me-2"></i>{{ $t('testDataTool.supplement.title') }}
      </h3>
      <div class="mx-2">
        <ul class="mb-0">
          <li
            v-for="(item, index) in supplementItems"
            :key="index"
            class="mb-2"
            :class="{ 'mb-0': index === supplementItems.length - 1 }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const techStackTools = computed(() => tm('testDataTool.techStack.tools') as string[])
const featureItems = computed(() => tm('testDataTool.features.items') as string[])
const supplementItems = computed(() => tm('testDataTool.supplement.items') as string[])
</script>
