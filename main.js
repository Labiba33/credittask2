import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from './components/Home.vue'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tops },
    { path: '/products', component: Pants },
    { path: '/cart', component: skirts },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')