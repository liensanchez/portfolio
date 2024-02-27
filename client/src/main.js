import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getFirestoreApp } from './firebase/config'

getFirestoreApp()

createApp(App).use(store).use(router).mount('#app')
