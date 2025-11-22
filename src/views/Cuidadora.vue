<script>
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Cuidadora',
  data() {
    return {
      series: [{
        name: 'Adherencia',
        data: [25,55,84,23,100,68,33]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },

        xaxis: {
          categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: false,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }

        },
      },
    }
  },
	components: {
		RouterLink, Header, Footer
	}
}
</script>

<template>
  <div class="container mt-3 px-4">
    <Header user="cuidadora"></Header>

    <!---->
    <p class="mb-1 fw-bold fs-16">Panel de Seguimiento</p>
    <p class="text-secondary fs-12 mb-3">¡Hola, Elvira!</p>
    <div class="alert alert-primary rounded-4 px-4 py-3">
      <p class="fs-13 mb-2 fw-bold text-dark">Progreso Semanal de Lucas</p>
      <p class="mb-2">Adherencia Semanal</p>
      <div id="chart">
        <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
      </div>
      <div class="row g-2">
        <div class="col-auto">
          <img src="../assets/smiling.png" style="height:24px">
        </div>
        <div class="col fs-09">
          <p class="mb-0"><strong>¡Buen trabajo!</strong> Mantén el horario de tarde, ayuda mucho.</p>
        </div>
      </div>
    </div>
    <div class="alert alert-warning mb-4 px-3 py-2 rounded-4">
      <div class="row g-2">
        <div class="col-auto fs-15 text-warning">
          <i class="ph ph-warning"></i>
        </div>
        <div class="col fs-09">
          <p class="mb-0"><strong>Alerta:</strong> Lucas ha mostrado dificultad en ejercicios de coordinación.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <RouterLink to="/foro">
          <button class="btn btn-danger w-100 rounded-5 text-white">Ir al Foro Comunitario</button>
        </RouterLink>
      </div>
      <div class="col">
        <button class="btn btn-primary w-100 rounded-5">Ver Guía de Ejercicios</button>
      </div>
    </div>

    <Footer user="cuidadora"></Footer>
  </div>
</template>
