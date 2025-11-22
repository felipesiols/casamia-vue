<script>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Evolucion',
	components: {
		RouterLink, Header, Footer
	}
}
</script>

<template>
  <div class="container mt-3 px-4">
    <Header user="nino"></Header>

    <!---->
    <p class="fw-bold fs-20">¡Tu Evolución!</p>
    <div class="mb-3 mt-3 rounded-3 robotx">
      <div class="py-3 px-3">
        <i class="ph ph-star text-warning fs-20"></i>
        <p class="text-dark mb-0 fw-semibold fs-15 fw-bold">985</p>
        <p class="text-dark mb-0 fw-semibold fs-09">Puntos de Energía</p>
          <img src="" class="w-50">
      </div>
    </div>
    <p class="fs-12 fw-semibold text-center">Camino de Progreso Semanal</p>
    <div class="card">
      <div class="card-body p-2">
        <div class="row g-0">
          <div class="col-auto pe-2">
            <i class="ph ph-check-circle text-primary me-1"></i>
            <span class="fs-085">¡Empezaste tu aventura!</span>
          </div>
          <div class="col-auto pe-3">
            <i class="ph ph-circle text-secondary me-1"></i>
            <span class="fs-085">Semana 2</span>
          </div>
          <div class="col-auto">
            <i class="ph ph-circle text-secondary me-1"></i>
          </div>
          <div class="col-auto">
            <i class="ph ph-circle text-secondary me-1"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <p class="fw-bold">Logros Desbloqueados</p>
      <div class="row">
        <div class="col text-center">
          <img src="../assets/logro1.png" style="height:48px">
          <p class="mb-0 mt-1 fs-07">Experto en brazos</p>
        </div>
        <div class="col text-center">
          <img src="../assets/logro2.png" style="height:48px">
          <p class="mb-0 mt-1 fs-07">Energía sin límites</p>
        </div>
        <div class="col text-center">
          <img src="../assets/logro3.png" style="height:48px">
          <p class="mb-0 mt-1 fs-07">Corazón de diamante</p>
        </div>
        <div class="col text-center">
          <img src="../assets/logro4.png" style="height:48px">
          <p class="mb-0 mt-1 fs-07">Coordinación maestra</p>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

