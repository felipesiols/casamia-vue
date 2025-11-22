<script>
import { RouterLink } from 'vue-router'

export default {
	name: 'Header',
	components: {
    RouterLink
	},
  props: {
    user: {
      type: String,
      default: 'nino'
    },
    logout: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<template>
  <div class="mb-3" v-if="user === 'nino'">
    <div class="row">
      <div class="col">
        <img src="../assets/logo-casamia.png" style="height: 50px;">
      </div>
      <div class="col-auto">
        <RouterLink to="/">
          <button class="btn">
            <i class="ph ph-sign-out text-primary d-block"></i>
            <span class="text-primary">Salir</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="mb-3" v-else-if="user === 'cuidadora'">
    <div class="row g-3">
      <div class="col">
        <img src="../assets/logo-casamia.png" style="height: 50px;">
      </div>
      <div class="col-auto pt-2" v-if="logout === false">
        <button class="btn btn-danger btn-sm rounded-5 text-white">Crear Publicación</button>
      </div>
      <div class="col-auto pt-2" v-else>
        <RouterLink to="/">
          <button class="btn btn-outline-danger btn-sm rounded-5">
            <i class="ph ph-sign-out me-1"></i>
            <span>Salir</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
