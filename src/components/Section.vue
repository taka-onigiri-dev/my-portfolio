<template>
  <section class="py-5">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="card shadow-sm bg-white border-0 w-100">
        <div class="card-body">
          <h3 class="m-2">
            {{ title }}
          </h3>
          <div class="m-2">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ title: string }>()
const title = props.title
</script>

<style scoped></style>
