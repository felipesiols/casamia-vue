<script>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Inicio',
	components: {
		RouterLink, Header, Footer
	}
}
</script>

<template>
  <div class="container mt-3 px-4">
    <Header></Header>

    <!---->
    <p class="fw-bold fs-20">¡Hola, Lucas!</p>
    <div class="alert alert-primary mb-4">
      <div class="row">
        <div class="col">
          <p class="fw-semibold fs-15 text-nowrap">Rutina de hoy</p>
          <div class="mb-4 text-center">
              <div class="border-primary" style="border: 5px solid; border-radius: 100px; height: 80px; width: 80px; padding-top: 15px; margin: 0 auto;">
                <p class="mb-0 fs-15">50%</p>
              </div>
          </div>
          <RouterLink to="/mision">
            <button class="btn btn-lg btn-primary rounded-5 text-white">Comenzar Misión</button>
          </RouterLink>
        </div>
        <div class="col">
          <img src="../assets/robot.png" class="w-100">
        </div>
      </div>
    </div>

    <!---->
    <div class="mt-3">
      <p class="fw-bold">Tus Logros</p>
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
