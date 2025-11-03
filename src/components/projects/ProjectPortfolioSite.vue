<template>
  <div class="container py-5">
    <!-- 概要セクション -->
    <div class="mb-5">
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-info-circle me-2"></i>{{ $t('portfolioSite.overview.title') }}
      </h3>
      <div class="mx-2">
        <p class="mb-0">
          {{ $t('portfolioSite.overview.description') }}
        </p>
        <p class="mt-3 mb-0 text-muted small">
          {{ $t('portfolioSite.overview.disclaimer') }}
        </p>
      </div>
    </div>

    <hr class="my-5" />

    <!-- 技術スタックセクション -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-gear me-2"></i>{{ $t('portfolioSite.techStack.title') }}
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

    <!-- 主なポイントセクション -->
    <div class="mb-0">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-list-check me-2"></i>{{ $t('portfolioSite.features.title') }}
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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const techStackItems = computed(() => tm('portfolioSite.techStack.items') as any[])
const featureItems = computed(() => tm('portfolioSite.features.items') as any[])
</script>
