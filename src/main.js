import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HeroSection from './components/HeroSection.vue'
import GettingStartedSection from './components/GettingStartedSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PricingSection from './components/PricingSection.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HeroSection },
    { path: '/how-to-start', component: GettingStartedSection },
    { path: '/features', component: FeaturesSection },
    { path: '/why-us', component: HeroSection },
    { path: '/pricing', component: PricingSection },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

createApp(App).use(router).mount('#app')