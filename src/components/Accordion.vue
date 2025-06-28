<template>
  <div>
    <button
      class="btn btn-link p-0 text-secondary"
      style="font-size: 0.85em; text-decoration: underline dotted"
      type="button"
      @click="open = !open"
    >
      <small>{{ open ? closeText : openText }}</small>
    </button>
    <div v-show="open">
      <small class="text-muted">
        <slot />
      </small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'
const props = defineProps({
  openText: { type: String, default: '詳細を見る' },
  closeText: { type: String, default: '詳細を閉じる' },
})
const open = ref(false)
</script>
