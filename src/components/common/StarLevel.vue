<template>
  <span class="text-dark fs-5">
    <span v-for="n in max" :key="n"> <span v-if="n <= level">★</span><span v-else>☆</span> </span>
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  level: { type: Number, required: true },
  max: { type: Number, default: 5 },
})
</script>
