import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'temporal-polyfill/global'
import './styles/site.css'

createApp(App).use(router).mount('#app')
