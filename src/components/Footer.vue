<script>
export default {
	name: 'Footer',
  props: {
    user: {
      type: String,
      default: 'nino'
    }
  }
}
</script>

<template>
  <div class="mt-5 sticky-bottom py-3 bg-white" v-if="user === 'nino'">
    <div class="row">
      <div class="col text-center">
        <RouterLink to="/inicio" class="link-underline link-underline-opacity-0">
          <i class="ph ph-house fs-20 text-secondary"></i>
        </RouterLink>
      </div>
      <div class="col text-center">
        <RouterLink to="/tienda" class="link-underline link-underline-opacity-0">
          <i class="ph ph-storefront fs-20 text-secondary"></i>
        </RouterLink>
      </div>
      <div class="col text-center">
        <RouterLink to="/evolucion" class="link-underline link-underline-opacity-0">
          <i class="ph ph-user fs-20 text-secondary"></i>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="mt-5 sticky-bottom py-3 bg-white" v-else-if="user === 'cuidadora'">
    <div class="row">
      <div class="col text-center">
        <RouterLink to="/cuidadora" class="link-underline link-underline-opacity-0">
          <i class="ph ph-list-bullets fs-20 text-danger d-block"></i>
          <span class="text-danger">Inicio</span>
        </RouterLink>
      </div>
      <div class="col text-center">
        <RouterLink to="/foro" class="link-underline link-underline-opacity-0">
          <i class="ph ph-caret-circle-down fs-20 text-danger d-block"></i>
          <span class="text-danger">Foro</span>
        </RouterLink>
      </div>
      <div class="col text-center">
        <i class="ph ph-user-circle fs-20 text-danger d-block"></i>
        <span class="text-danger">Guías</span>
      </div>
    </div>
  </div>
</template>
