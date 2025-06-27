<template>
  <section>
    <h2>README.md</h2>
    <pre>{{ readmeContent }}</pre>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const readmeContent = ref('')

onMounted(async () => {
  const res = await fetch('README.md')
  readmeContent.value = await res.text()
})
</script>
