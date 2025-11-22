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
    <p class="fw-bold fs-22">¡Hola, Lucas!</p>
    <div class="alert alert-primary mb-4">
      <div class="row">
        <div class="col">
          <p class="fw-semibold fs-15 text-nowrap">Rutina de hoy</p>
          <div class="mb-4">[grafico]</div>
          <RouterLink to="/1">
            <button class="btn btn-lg btn-primary rounded-5 text-white">Comenzar Misión</button>
          </RouterLink>
        </div>
        <div class="col">
          <img src="@/assets/robot.png" class="w-100">
        </div>
      </div>
    </div>
    <div>
      <p class="text-center fw-bold fs-14">Tus logros</p>
      <div class="row">
        <div class="col">
          <img src="@/assets/sticker1.png" style="height:48px">
        </div>
        <div class="col">
          <img src="@/assets/sticker2.png" style="height:48px">
        </div>
        <div class="col">
          <img src="@/assets/sticker3.png" style="height:48px">
        </div>
        <div class="col">
          <img src="@/assets/sticker4.png" style="height:48px">
        </div>
        <div class="col">
          <img src="@/assets/sticker5.png" style="height:48px">
        </div>
      </div>
    </div>
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
