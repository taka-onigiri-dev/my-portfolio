<template>
  <section class="py-5">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="card shadow-sm bg-white border-0 w-100">
        <div class="card-body">
          <h2 class="h5 mb-3 text-dark">
            <slot name="title" />
          </h2>
          <div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ...existing code...
</script>
