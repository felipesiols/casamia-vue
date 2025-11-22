<script setup>
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body m-2">
        <div class="row">
          <div class="col">
            <h4 class="mb-3">Vista Familia - Casa mIA</h4>
          </div>
          <div class="col-auto">
            <RouterLink to="/">
              <button class="btn btn-danger rounded-5">Cerrar sesión</button>
            </RouterLink>
          </div>
        </div>
        <p class="mb-3 text-secondary">Aquí podrás ver el progreso de tu familiar y las recomendaciones del equipo clínico.</p>
        <p class="fs-12 mb-2">Progreso de la rehabilitación</p>
        <div class="alert alert-light">
          Aquí mostraremos gráficos de adherencia y logros funcionales (MVP conectado a IA).
        </div>
        <p class="fs-12 mb-2">Recomendaciones para el hogar</p>
        <div class="list-group">
          <div class="list-group-item list-group-item-light">Recordar realizar la rutina de hoy.</div>
          <div class="list-group-item list-group-item-light">Recordar revisar los ejercicios marcados como prioritarios.</div>
          <div class="list-group-item list-group-item-light">Recordar cualquier dolor o molestia después de la sesión.</div>
        </div>
      </div>
    </div>
  </div>
</template>
