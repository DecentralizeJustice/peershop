import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// Replace -> app.mount('#app')
router.isReady().then(() => {
    app.mount('#app')
})
