<script>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Foro',
	components: {
		RouterLink, Header, Footer
	}
}
</script>

<template>
  <div class="container mt-3 px-4">
    <Header user="cuidadora" :logout="false"></Header>

    <!---->
    <div class="input-group mt-2">
        <span class="input-group-text bg-white border-end-0 pe-0">
          <i class="ph ph-magnifying-glass"></i>
        </span>
      <input type="text" class="form-control border-start-0" placeholder="Buscar en el foro...">
    </div>

    <div class="row mt-3 g-2">
      <div class="col-auto">
        <button class="btn btn-outline-danger btn-sm rounded-5 fs-075">#MotricidadFina</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary btn-sm rounded-5 fs-075">#AyudasTécnicas</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-info btn-sm rounded-5 fs-075">#InclusiónEscolar</button>
      </div>
    </div>

    <div class="mt-3">
      <div class="card">
        <div class="card-body py-2 px-3">
          <div class="badge bg-danger rounded-5 fs-07 fw-semibold">#Experiencias</div>
          <div class="row mt-2">
            <div class="col-auto">
              <img src="../assets/ai-person1.jpg" class="w-100" style="border-radius:999px; max-height:60px; max-width:60px">
            </div>
            <div class="col">
              <p class="mb-2 fw-semibold fs-12 lh-1">¡Mi hija empezará a caminar con la terapia!</p>
                <div class="row fs-09">
                  <div class="col-auto">
                    <i class="ph ph-user me-1"></i>
                    <span class="text-secondary">Ana S.</span>
                  </div>
                  <div class="col-auto">
                    <i class="ph ph-chat me-1"></i>
                    <span class="text-secondary">13 comentarios</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <div class="card">
        <div class="card-body py-2 px-3">
          <div class="badge bg-primary rounded-5 fs-07 fw-semibold">#AyudasTécnicas</div>
          <div class="row mt-2">
            <div class="col-auto">
              <img src="../assets/ai-person2.jpg" class="w-100" style="border-radius:999px; max-height:60px; max-width:60px">
            </div>
            <div class="col">
              <p class="mb-2 fw-semibold fs-12 lh-1">Duda sobre silla de ruedas ligera</p>
                <div class="row fs-09">
                  <div class="col-auto">
                    <i class="ph ph-user me-1"></i>
                    <span class="text-secondary">María P.</span>
                  </div>
                  <div class="col-auto">
                    <i class="ph ph-chat me-1"></i>
                    <span class="text-secondary">48 comentarios</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <div class="card">
        <div class="card-body py-2 px-3">
          <div class="badge bg-warning rounded-5 fs-07 fw-semibold">#Eventos</div>
          <div class="row mt-2">
            <div class="col-auto">
              <img src="../assets/ai-person3.jpg" class="w-100" style="border-radius:999px; max-height:60px; max-width:60px">
            </div>
            <div class="col">
              <p class="mb-2 fw-semibold fs-12 lh-1">¡Mi hija empezará a caminar con la terapia!</p>
                <div class="row fs-09">
                  <div class="col-auto">
                    <i class="ph ph-user me-1"></i>
                    <span class="text-secondary">Juan C.</span>
                  </div>
                  <div class="col-auto">
                    <i class="ph ph-chat me-1"></i>
                    <span class="text-secondary">2 comentarios</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer user="cuidadora"></Footer>
  </div>
</template>
