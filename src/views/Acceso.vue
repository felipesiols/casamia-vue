<script>
import { RouterLink } from 'vue-router'

export default {
	name: 'Acceso',
	components: {
		RouterLink
	}
}
</script>

<template>
  <div class="container mt-3 px-4">

    <div class="row">
      <div class="col">
        <img src="../assets/logo-casamia.png" style="height: 50px;" class="mb-5">
      </div>
      <div class="col text-end">
        <img src="../assets/logo-teleton.svg" style="height: 25px;" class="mt-2">
      </div>
    </div>

    <RouterLink to="/inicio">
      <button class="btn btn-lg btn-warning w-100 mb-5 py-4 rounded-4 px-2">
        <i class="ph ph-lego-smiley d-block fs-30"></i>
        <span class="fs-15">¡Jugar ahora!</span>
      </button>
    </RouterLink>

    <RouterLink to="/cuidadora">
      <button class="btn btn-danger text-white w-100 mb-4 py-3 rounded-4 px-2">
        <i class="ph ph-hand-heart d-block fs-25"></i>
        <span class="fs-15">Personas cuidadoras</span>
      </button>
    </RouterLink>

    <RouterLink to="/terapeuta">
      <button class="btn btn-info text-white w-100 mb-4 py-3 rounded-4 px-2">
        <i class="ph ph-stethoscope d-block fs-25"></i>
        <span class="fs-15">Terapeutas y docentes</span>
      </button>
    </RouterLink>

  </div>
</template>
