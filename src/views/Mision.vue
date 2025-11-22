<script>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Mision',
	components: {
		RouterLink, Header, Footer
	}
}
</script>

<template>
  <div class="container mt-3 px-4">
    <Header user="nino"></Header>

    <!---->
    <p class="fw-bold fs-20">¡Misión Activa!</p>
    <RouterLink to="/completado" class="link-underline link-underline-opacity-0">
      <div class="mb-5 mt-3 rounded-3 nino1">
        <div class="py-5 text-end">
            <img src="" class="w-100">
            <img src="../assets/robot.png" class="w-25">
        </div>
        <div class="text-bg-dark rounded-bottom-3 py-3">
          <div class="row">
            <div class="col text-center">
              <p class="mb-2">Repeticiones</p>
              <div style="border: 5px solid #3AF66C; border-radius: 100px; height: 80px; width: 80px; padding-top: 15px; margin: 0 auto;">
                <p class="mb-0 fs-15">5/10</p>
              </div>
            </div>
            <div class="col text-center">
              <p class="mb-2">Precisión ROM</p>
              <div style="border: 5px solid #3AF66C; border-radius: 100px; height: 80px; width: 80px; padding-top: 15px; margin: 0 auto;">
                <i class="ph ph-check fs-20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>

    <Footer></Footer>
  </div>
</template>


