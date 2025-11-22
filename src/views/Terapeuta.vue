<script>
import { RouterLink } from 'vue-router'

export default {
	name: 'Terapeuta',
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
		RouterLink,
	}
}
</script>

<template>
  <div class="container mt-3 px-4">
    <div class="row">
      <div class="col">
        <img src="../assets/logo-casamia.png" style="height: 48px">
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
          <i class="ph ph-list me-1"></i>
          <span>MENU</span>
        </button>
      </div>
    </div>

    <div class="row mb-3 mt-3 text-secondary fs-09">
      <div class="col">
        <p class="mb-0">REHABILITACIÓN</p>
      </div>
      <div class="col text-end">
        <p class="mb-0">Terapeuta Ocupacional</p>
      </div>
    </div>
    <p class="fs-18 fw-semibold mb-2">Resumen Semanal</p>
    <div id="chart">
      <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
    </div>

    <p class="fs-16 fw-semibold lh-1">Mis pacientes</p>
    <div class="table-responsive mb-3">
      <table class="table table-hover border mb-0 fs-09">
        <thead class="table-light">
          <tr>
            <th class="py-3 px-3">Paciente</th>
            <th class="py-3 px-3">Estado</th>
            <th class="py-3 px-3">Alertas</th>
            <th class="py-3 px-3">Adherencia</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td class="py-3 px-3">Pedro Soto</td>
            <td class="py-2 px-3">
              <div class="dropdown mt-1">
                <button class="btn btn-light border btn-sm dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  En progreso
                </button>
                <ul class="dropdown-menu">
                  <li><p class="dropdown-header">Sin opciones configuradas</p></li>
                </ul>
              </div>
            </td>
            <td class="py-3 px-3">
              <i class="ph ph-circle text-success me-2"></i>
              <span>Excelente</span>
            </td>
            <td class="pt-3 px-3">
              <div class="progress mt-1" style="height: 16px">
                <div class="progress-bar bg-info" style="width: 25%">25%</div>
              </div>
            </td>
          </tr>

          <tr>
            <td class="py-3 px-3">Fernanda Díaz</td>
            <td class="py-2 px-3">
              <div class="dropdown mt-1">
                <button class="btn btn-light border btn-sm dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  En progreso
                </button>
                <ul class="dropdown-menu">
                  <li><p class="dropdown-header">Sin opciones configuradas</p></li>
                </ul>
              </div>
            </td>
            <td class="py-3 px-3">
              <i class="ph ph-circle text-success me-2"></i>
              <span>Excelente</span>
            </td>
            <td class="pt-3 px-3">
              <div class="progress mt-1" style="height: 16px">
                <div class="progress-bar bg-info" style="width: 55%">55%</div>
              </div>
            </td>
          </tr>

          <tr>
            <td class="py-3 px-3">Martín Bravo</td>
            <td class="py-2 px-3">
              <div class="dropdown mt-1">
                <button class="btn btn-light border btn-sm dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  En progreso
                </button>
                <ul class="dropdown-menu">
                  <li><p class="dropdown-header">Sin opciones configuradas</p></li>
                </ul>
              </div>
            </td>
            <td class="py-3 px-3">
              <i class="ph ph-circle text-warning me-2"></i>
              <span>Atención</span>
            </td>
            <td class="pt-3 px-3">
              <div class="progress mt-1" style="height: 16px">
                <div class="progress-bar bg-info" style="width: 84%">84%</div>
              </div>
            </td>
          </tr>

          <tr>
            <td class="py-3 px-3">Isabel Fuentes</td>
            <td class="py-2 px-3">
              <div class="dropdown mt-1">
                <button class="btn btn-light border btn-sm dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  En progreso
                </button>
                <ul class="dropdown-menu">
                  <li><p class="dropdown-header">Sin opciones configuradas</p></li>
                </ul>
              </div>
            </td>
            <td class="py-3 px-3">
              <i class="ph ph-circle text-warning me-2"></i>
              <span>Atención</span>
            </td>
            <td class="pt-3 px-3">
              <div class="progress mt-1" style="height: 16px">
                <div class="progress-bar bg-info" style="width: 23%">23%</div>
              </div>
            </td>
          </tr>

          <tr>
            <td class="py-3 px-3">Nicolás Reyes</td>
            <td class="py-2 px-3">
              <div class="dropdown mt-1">
                <button class="btn btn-light border btn-sm dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Completo
                </button>
                <ul class="dropdown-menu">
                  <li><p class="dropdown-header">Sin opciones configuradas</p></li>
                </ul>
              </div>
            </td>
            <td class="py-3 px-3">
              <i class="ph ph-circle me-2" style="color:#E25951"></i>
              <span>Dificultad</span>
            </td>
            <td class="pt-3 px-3">
              <div class="progress mt-1" style="height: 16px">
                <div class="progress-bar bg-info" style="width: 100%">100%</div>
              </div>
            </td>
          </tr>

          <tr>
            <td class="py-3 px-3">Gabriela Videla</td>
            <td class="py-2 px-3">
              <div class="dropdown mt-1">
                <button class="btn btn-light border btn-sm dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  En progreso
                </button>
                <ul class="dropdown-menu">
                  <li><p class="dropdown-header">Sin opciones configuradas</p></li>
                </ul>
              </div>
            </td>
            <td class="py-3 px-3">
              <i class="ph ph-circle me-2" style="color:#E25951"></i>
              <span>Dificultad</span>
            </td>
            <td class="pt-3 px-3">
              <div class="progress mt-1" style="height: 16px">
                <div class="progress-bar bg-info" style="width: 68%">68%</div>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <div class="btn-group mb-5" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-info">Anterior</button>
      <button type="button" class="btn btn-info">1</button>
      <button type="button" class="btn btn-outline-info">2</button>
      <button type="button" class="btn btn-outline-info">3</button>
      <button type="button" class="btn btn-outline-info">Siguiente</button>
    </div>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel"><img src="../assets/logo-casamia.png" style="height: 64px"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <button class="btn btn-light border w-100 mb-2 text-start">
          <i class="ph ph-chart-line me-2"></i>
          <span>Dashboard</span>
        </button>
        <button class="btn btn-light border w-100 mb-2 text-start">
          <i class="ph ph-users me-2"></i>
          <span>Pacientes</span>
          </button>
        <button class="btn btn-light border w-100 mb-2 text-start">
          <i class="ph ph-list-checks me-2"></i>
          <span>Rutinas</span>
          </button>
        <button class="btn btn-light border w-100 mb-2 text-start">
          <i class="ph ph-warning me-2"></i>
          <span>Alertas</span>
        </button>
        <button class="btn btn-light border w-100 mb-2 text-start">
          <i class="ph ph-chats me-2"></i>
          <span>Foro</span>
        </button>
        <RouterLink to="/" class="link-underline link-underline-opacity-0">
          <button class="btn btn-light border w-100 text-start">
            <i class="ph ph-sign-out me-2"></i>
            <span>Salir</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
