<script>
/*
Eniwer UNO
Created by Felipe Solís Albanese <felipe@eniwer.cl>
Copyright (C) 2025 ENIWER SpA
*/
import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue'

export default {
	name: 'App',
	components: {
		RouterView,
	},
	setup () {
	},
	created() {
	},
	mounted() {
	},
	unmounted() {
	},
	computed: {
    route_name() {
      return this.$route.name
    }
  }
}
</script>


<template>
  <!--
  <div class="bg-dark py-2">
    <div class="container">
      <div class="row g-2">
        <div class="col-auto">
          <RouterLink to="/">
            <button class="btn w-100 btn-sm px-2" :class="{'btn-primary':route_name=='home','btn-outline-light':route_name!='home'}">Inicio</button>
          </RouterLink>
        </div>
        <div class="col-auto">
          <RouterLink to="/1">
            <button class="btn w-100 btn-sm px-2" :class="{'btn-primary':route_name=='step1','btn-outline-light':route_name!='step1'}">Terapeuta</button>
          </RouterLink>
        </div>
        <div class="col-auto">
          <RouterLink to="/2">
            <button class="btn w-100 btn-sm px-2" :class="{'btn-primary':route_name=='step2','btn-outline-light':route_name!='step2'}">Familia</button>
          </RouterLink>
        </div>
        <div class="col-auto">
          <RouterLink to="/3">
            <button class="btn w-100 btn-sm px-2" :class="{'btn-primary':route_name=='step3','btn-outline-light':route_name!='step3'}">Niño</button>
          </RouterLink>
        </div>
        <div class="col-auto">
          <RouterLink to="/4">
            <button class="btn w-100 btn-sm px-2" :class="{'btn-primary':route_name=='step4','btn-outline-light':route_name!='step4'}">Foros</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  -->
  <RouterView />
</template>

<style scoped>
</style>
