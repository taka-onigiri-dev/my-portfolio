<template>
  <div>
    <button
      class="btn btn-link p-0 text-secondary"
      style="font-size: 0.85em; text-decoration: underline dotted"
      type="button"
      @click="open = !open"
    >
      <small>{{ open ? closeTextComputed : openTextComputed }}</small>
    </button>
    <div v-show="open">
      <small class="text-muted">
        <slot />
      </small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

const { t } = useI18n()
const props = defineProps({
  openText: { type: String, default: '' },
  closeText: { type: String, default: '' },
})

const open = ref(false)
const openTextComputed = computed(() => props.openText || t('common.detail.open'))
const closeTextComputed = computed(() => props.closeText || t('common.detail.close'))
</script>
