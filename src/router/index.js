import { createRouter, createWebHistory } from 'vue-router'
import Acceso from '../views/Acceso.vue'
import Inicio from '../views/Inicio.vue'
import Mision from '../views/Mision.vue'
import MisionCumplida from '../views/MisionCumplida.vue'
import Tienda from '../views/Tienda.vue'
import Evolucion from '../views/Evolucion.vue'
import Cuidadora from '../views/Cuidadora.vue'
import Foro from '../views/Foro.vue'
import Terapeuta from '../views/Terapeuta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceso',
      component: Acceso,
    },{
      path: '/inicio',
      name: 'inicio',
      component: Inicio,
    },{
      path: '/mision',
      name: 'mision',
      component: Mision,
    },{
      path: '/completado',
      name: 'completado',
      component: MisionCumplida,
    },{
      path: '/tienda',
      name: 'tienda',
      component: Tienda,
    },{
      path: '/evolucion',
      name: 'evolucion',
      component: Evolucion,
    },{
      path: '/cuidadora',
      name: 'cuidadora',
      component: Cuidadora,
    },{
      path: '/foro',
      name: 'foro',
      component: Foro,
    },{
      path: '/terapeuta',
      name: 'terapeuta',
      component: Terapeuta,
    },
  ],
})

export default router
