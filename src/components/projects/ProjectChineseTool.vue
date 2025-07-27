<template>
  <div class="container py-5">
    <!-- 概要セクション -->
    <div class="mb-5">
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-info-circle me-2"></i>{{ $t('chineseTool.overview.title') }}
      </h3>
      <div class="mx-2">
        <p class="mb-0">
          {{ $t('chineseTool.overview.description') }}
        </p>
      </div>
    </div>

    <hr class="my-5" />

    <div class="mb-5">
      <img src="@/assets/chinese-tool.png" alt="chinese-tool" class="img-fluid" />
    </div>

    <hr class="my-5" />

    <!-- 技術スタックセクション -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-gear me-2"></i>{{ $t('chineseTool.techStack.title') }}
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
    <div>
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-list-check me-2"></i>{{ $t('chineseTool.features.title') }}
      </h3>
      <div class="mx-2">
        <ul class="mb-0">
          <li v-for="feature in featureItems" :key="feature" class="mb-3">
            <h5 class="mb-2 fw-bold">{{ feature }}</h5>
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

const techStackTools = computed(() => tm('chineseTool.techStack.tools') as string[])
const featureItems = computed(() => tm('chineseTool.features.items') as string[])
</script>
