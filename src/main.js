import './styles/custom.scss';
import './styles/main.css'
import * as bootstrap from 'bootstrap';
import VueConfetti from 'vue-confetti'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@phosphor-icons/web/regular/style.css';
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)

app.use(VueConfetti)
app.use(router)
app.use(VueApexCharts)

app.mount('#app')
