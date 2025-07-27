<template>
  <section class="py-2 mx-auto border-bottom border-2 border-light" style="max-width: 900px">
    <h3 class="m-3">{{ title }}</h3>
    <div class="m-3">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
const props = defineProps<{ title: string }>()
const title = computed(() => props.title)
</script>

<style scoped></style>
