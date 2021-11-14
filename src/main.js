import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(AOS.init())
app.use(router)
app.component('Loading', Loading)

app.mount('#app')
