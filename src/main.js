import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import './index.css'
import './assets/fontawesome/css/all.css'

createApp(App).use(router).mount('#app')
