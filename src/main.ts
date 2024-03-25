import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index.ts'
import store from './store/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/global.scss'

const app = createApp(App)
  .use(store)
  .use(router)  
  .use(ElementPlus)

  app.config.globalProperties.$axios = axios
  
  app.mount('#app');