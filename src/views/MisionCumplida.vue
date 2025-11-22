<script>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'MisionCumplida',
	components: {
    RouterLink, Header, Footer
	},
	created() {
    this.$confetti.start();
    setTimeout(() => { this.$confetti.stop(); }, 2000);
	}
}
</script>

<template>
  <div class="container mt-3 px-4">
    <Header user="nino"></Header>
    <p class="fw-bold fs-20 text-warning text-center">¡Misión Cumplida!</p>

    <!---->
    <div class="text-center mb-3">
      <img src="../assets/robot2.png" class="w-25">
    </div>
    <button class="btn btn-danger btn-lg rounded-5 w-100 text-white mb-3">
      <span>Ganaste +50 Puntos de Energía</span>
    </button>
    <div class="mb-4 alert alert-primary mx-5 py-2">
      <p class="text-center fw-bold fs-12">¡Nuevos Logros!</p>
      <div class="row">
        <div class="col"></div>
        <div class="col-auto">
          <img src="../assets/logro1.png" style="height:32px">
        </div>
        <div class="col-auto">
          <img src="../assets/logro2.png" style="height:32px">
        </div>
        <div class="col-auto">
          <img src="../assets/logro3.png" style="height:32px">
        </div>
        <div class="col"></div>
      </div>
    </div>
    <RouterLink to="/tienda">
      <button class="btn btn-danger btn-lg rounded-5 w-100 text-white mb-3">
        <span>Ir a Tienda</span>
      </button>
    </RouterLink>
    <RouterLink to="/evolucion">
      <button class="btn btn-primary btn-lg rounded-5 w-100 text-white">
        <span>Ver Progreso</span>
      </button>
    </RouterLink>

    <Footer></Footer>
  </div>
</template>


