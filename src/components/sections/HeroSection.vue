<template>
  <section class="hero-section py-5 bg-light">
    <div class="container d-flex justify-content-center">
      <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%">
        <div class="text-center">
          <img
            src="@/assets/onigiri.PNG"
            alt="アイコン"
            class="rounded-circle mb-3 d-block mx-auto"
            style="width: 120px; height: 120px; object-fit: cover"
          />
          <h1 class="h4 mb-2"><i class="bi bi-person-circle me-2"></i>taka-onigiri-dev</h1>
          <div class="mb-3">
            <a
              href="https://github.com/taka-onigiri-dev"
              class="btn btn-outline-dark btn-sm mx-1"
              target="_blank"
              rel="noopener"
            >
              <i class="bi bi-github me-1"></i>GitHub
            </a>
            <a href="mailto:taka.onigiri.dev@gmail.com" class="btn btn-outline-base btn-sm mx-1">
              <i class="bi bi-envelope me-1"></i>Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ...existing code...
</script>

<style scoped>
.btn-outline-base {
  color: var(--color-base);
  border-color: var(--color-base);
  background-color: transparent;
}

.btn-outline-base:hover {
  color: white;
  background-color: var(--color-base);
  border-color: var(--color-base);
}

.btn-outline-base:focus {
  box-shadow: 0 0 0 0.2rem rgba(32, 178, 170, 0.25);
}
</style>
