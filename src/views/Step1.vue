<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container mt-3">
    <div class="mb-4">
      <RouterLink to="/">
        <button class="btn">
          <i class="ph ph-house text-primary d-block"></i>
          <span class="text-primary">Casa mIA</span>
        </button>
      </RouterLink>
    </div>
    <p class="fw-bold fs-22">¡Misión Activa!</p>
    <div class="mt-5 sticky-bottom py-3 bg-white">
      <div class="row">
        <div class="col text-center">
          <RouterLink to="/" class="link-underline link-underline-opacity-0">
            <i class="ph ph-house fs-20 text-secondary"></i>
          </RouterLink>
        </div>
        <div class="col text-center">
          <RouterLink to="/2" class="link-underline link-underline-opacity-0">
            <i class="ph ph-storefront fs-20 text-secondary"></i>
          </RouterLink>
        </div>
        <div class="col text-center">
          <RouterLink to="/3" class="link-underline link-underline-opacity-0">
            <i class="ph ph-user fs-20 text-secondary"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

