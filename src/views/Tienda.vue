<script>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Tienda',
	components: {
		RouterLink, Header, Footer
	}
}
</script>

<template>
  <div class="container mt-3">
    <Header user="nino"></Header>

    <!---->
    <p class="fw-bold fs-20">Laboratorio creativo</p>
    <div class="row g-3 mb-3">
      <div class="col-4">
        <div class="card mb-3">
          <div class="card-body px-1 text-center py-2">
              <div class="border-danger mb-2" style="border: 5px solid; border-radius: 100px; height: 65px; width: 65px; padding-top: 8px; margin: 0 auto;">
                <i class="ph ph-coat-hanger fs-25 text-danger"></i>
              </div>
              <p class="fw-semibold mb-0 fs-09">Accesorios Únicos</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body px-1 text-center py-2">
              <div class="border-primary mb-2" style="border: 5px solid; border-radius: 100px; height: 65px; width: 65px; padding-top: 8px; margin: 0 auto;">
                <i class="ph ph-lightning fs-25 text-danger"></i>
              </div>
              <p class="fw-semibold mb-0 fs-09">Poderes Temporales</p>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="card">
          <div class="card-body">
              <div class="mb-3">
                <i class="ph ph-star text-warning"></i>
                <span class="fw-semibold ms-1">985 Puntos de Energía</span>
              </div>
              <img src="../assets/robot3.png" class="w-100">
          </div>
        </div>
      </div>
    </div>
    <div class="row g-3">
      <div class="col">
        <div class="card text-center">
          <div class="card-body px-1">
            <img src="../assets/accesorio-botas.png" class="w-50 mb-2">
            <p class="fw-semibold fs-09 mb-2">250 puntos</p>
            <button class="btn btn-danger btn-sm rounded-5 text-white">¡Comprar!</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-center">
          <div class="card-body px-1">
            <img src="../assets/accesorio-capa.png" class="w-50 mb-2">
            <p class="fw-semibold fs-09 mb-2">350 puntos</p>
            <button class="btn btn-danger btn-sm rounded-5 text-white">¡Comprar!</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-center">
          <div class="card-body px-1">
            <img src="../assets/accesorio-jetpack.png" class="w-50 mb-2">
            <p class="fw-semibold fs-09 mb-2">500 puntos</p>
            <button class="btn btn-danger btn-sm rounded-5 text-white">¡Comprar!</button>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
