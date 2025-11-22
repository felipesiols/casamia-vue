import './assets/custom.scss';
import './assets/main.css'
import * as bootstrap from 'bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@phosphor-icons/web/thin/style.css';
import '@phosphor-icons/web/light/style.css';
import '@phosphor-icons/web/regular/style.css';
import '@phosphor-icons/web/bold/style.css';
import '@phosphor-icons/web/fill/style.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
