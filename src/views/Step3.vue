<script setup>
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body m-2">
        <div class="row">
          <div class="col">
            <h4 class="mb-3">Hola, esta es tu Casa mIA</h4>
          </div>
          <div class="col-auto">
            <RouterLink to="/">
              <button class="btn btn-danger rounded-5">Cerrar sesión</button>
            </RouterLink>
          </div>
        </div>
        <p class="mb-3 text-secondary">Aquí verás tus ejercicios diarios y tus logros en la rehabilitación.</p>
        <p class="fs-12 mb-2">Rutina de hoy</p>
        <div class="alert alert-light">
          Aquí listaremos los ejercicios con video y feedback automático de IA.
        </div>
        <p class="fs-12 mb-2">Tus logros</p>
        <div class="alert alert-primary">Aquí verás medallas por adherencia, progresos en autonomía y metas cumplidas.</div>
      </div>
    </div>
  </div>
</template>
