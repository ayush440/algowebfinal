<template>
  <div class="w-full bg-[#FFFBE9] min-h-screen">
    <!-- Navigation Bar -->
    <nav 
      class="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 xl:px-16 transition-all duration-300"
      :class="{'bg-transparent': !isScrolled, 'bg-white/70 backdrop-blur-md': isScrolled}"
    >
      <div class="max-w-[1800px] mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <button @click="scrollToSection('why-us')" class="focus:outline-none">
            <img 
              src="../assets/images/Algo.png" 
              alt="Algorithm Logo" 
              class="w-28 h-auto sm:w-28 md:w-32 lg:w-56 transition-all duration-300"
            />
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center">
          <div class="bg-white rounded-[50px] px-6 py-2 lg:px-8 lg:py-3 flex items-center">
            <div class="flex items-center gap-6 lg:gap-8 mr-4 lg:mr-6">
              <button 
                v-for="link in navLinks" 
                :key="link.name" 
                @click="scrollToSection(link.path.substring(1))"
                class="text-[#4A4A4A] hover:text-[#2F5741] text-sm lg:text-base font-medium transition-colors duration-200 focus:outline-none"
              >
                {{ link.name }}
              </button>
            </div>
            <button class="bg-[#2F5741] text-white px-4 py-2 rounded-full text-sm lg:text-base font-medium hover:bg-opacity-90 transition-all duration-200 focus:outline-none">
              Login / Signup
            </button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span 
            class="w-8 h-0.5 bg-[#2F5741] transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
          ></span>
          <span 
            class="w-8 h-0.5 bg-[#2F5741] transition-all duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span 
            class="w-8 h-0.5 bg-[#2F5741] transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
          ></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? 'max-h-96' : 'max-h-0'"
      >
        <div class="bg-white mt-4 rounded-3xl px-6 py-8 space-y-6">
          <button 
            v-for="link in navLinks" 
            :key="link.name" 
            @click="scrollToSection(link.path.substring(1)); isMenuOpen = false;"
            class="block w-full text-left text-[#4A4A4A] hover:text-[#2F5741] text-lg font-medium transition-colors duration-200 focus:outline-none"
          >
            {{ link.name }}
          </button>
          <button class="bg-[#2F5741] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-opacity-90 transition-all duration-200 w-full focus:outline-none">
            Login / Signup
          </button>
        </div>
      </div>
    </nav>
  
    <!-- Hero Content -->
    <div class="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 pt-20">
      <div class="relative min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
        <!-- Text Content -->
        <div class="relative z-20 w-full lg:w-[75%] pt-8 lg:pt-16 mb-[300px] sm:mb-[400px] lg:mb-0">
          <h1 class="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold mb-6">
            <span class="text-[#2D2D2D] block lg:inline">Super </span>
            <span class="text-[#2F5741] block lg:inline"> Algo Trading Platform</span>
            <span class="text-[#2D2D2D] block lg:inline"> for super </span> 
            <span class="text-[#2D2D2D] block lg:inline "> traders</span>
          </h1>
          
          <p class="text-[#666666] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-[560px]">
            Our algorithmic trading software automates complex strategies, delivering speed and precision in every trade. Maximize profits, reduce risks, and stay ahead of the market with seamless, data-driven execution.
          </p>

          <button 
            @click="scrollToSection('how-to-start')"
            class="bg-[#2F5741] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
          >
            Get Started
          </button>
        </div>

        <!-- Image Container -->
        <div class="absolute bottom-0 -right-14 w-full lg:w-[65%] z-10">
          <div class="relative w-full" style="padding-bottom: 75%;">
            <img 
              src="../assets/images/image2.png"
              alt="Trading Platform Interface" 
              class="absolute bottom-0 right-0 w-[120%] lg:w-[130%] xl:w-[140%] h-auto object-contain origin-bottom-right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { scrollToSection } from '../utils/scrollUtils';

const navLinks = [
  { name: 'How to start', path: '#how-to-start' },
  { name: 'Features', path: '#features' },
  { name: 'Why us', path: '#why-us' },
  { name: 'Pricing', path: '#pricing' }
];

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > window.innerHeight * 0.7;
};

onMounted(() => {
  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('scroll', handleScroll);
  handleHashChange(); // Handle initial hash on page load
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange);
  window.removeEventListener('scroll', handleScroll);
});

const handleHashChange = () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    scrollToSection(hash);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Adjust this value based on your header height */
}

/* Ensure backdrop-filter is supported */
@supports not (backdrop-filter: blur(8px)) {
  nav.bg-white\/70 {
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>